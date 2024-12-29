<?php

namespace App\Http\Controllers;

use App\Mail\ForgetPassword;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ClientController extends Controller
{
    // Register Client
    public function Register(Request $request)
    {

        //Client::truncate();

        $validatedData = $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'role' => 'nullable|string|max:255',
            'forgetPassNum' => 'nullable|max:255',
            'phone' => 'nullable|numeric|max:255',
            'street' => 'nullable|string|max:255',
            'BuildingNum' => 'nullable|numeric|max:255',
            'city' => 'nullable|string|max:255',
            'zipcode' => 'nullable|numeric|max:255',
            'img' => 'nullable|image',
            'email' => 'required|email|unique:clients,email|max:255',
            'password' => 'required|string|min:8|max:255',
        ]);


        $client = new Client();
        $client->firstname = $validatedData['firstname'];
        $client->lastname = $validatedData['lastname'];
        $client->email = $validatedData['email'];
        $client->password = Hash::make($validatedData['password']);
        $client->role = 'user';

        if (isset($validatedData['forgetPassNum'])) {
            $client->forgetPassNum = $validatedData['forgetPassNum'];
        }
        if (isset($validatedData['street'])) {
            $client->street = $validatedData['street'];
        }
        if (isset($validatedData['BuildingNum'])) {
            $client->BuildingNum = $validatedData['BuildingNum'];
        }
        if (isset($validatedData['city'])) {
            $client->city = $validatedData['city'];
        }
        if (isset($validatedData['zipcode'])) {
            $client->zipcode = $validatedData['zipcode'];
        }
        if (isset($validatedData['phone'])) {
            $client->phone = $validatedData['phone'];
        }
        if (isset($validatedData['img'])) {
            $imageName = time() . '.' . $request->file('img')->getClientOriginalExtension();
            $request->file('img')->move(public_path('client/'), $imageName);
            $client->img = $imageName;
        }

        // generate token 
        $token = str::random(40);

        // $client->token = $token;
        $client->save();

        // sent Mail Welcome
        // if($client->email === 'ftyuiobaba@gmail.com'){
        // Mail::to($client->email)->send(new MailWelcome($client)) ;
        // }

        return response()->json(['message' => 'successfully registered', 'data' => $client, 'token' => $token]);
    }



    // Update Client Info 
    public function updateInfoClient(Request $request, $id)
    {
        $client = Client::findOrFail($id);

        $validatedData = $request->validate([
            'img' => 'nullable',
        ]);

        if ($request->filled('firstname')) {
            $client->firstname = $request->input('firstname');
        }
        if ($request->filled('lastname')) {
            $client->lastname = $request->input('lastname');
        }
        if ($request->filled('email')) {
            $client->email = $request->input('email');
        }
        $client->role = 'user';
        // if ($request->filled('forgetPassNum')) {
        //     $client->forgetPassNum = $request->input('forgetPassNum');
        // }
        if ($request->filled('phone')) {
            $client->phone = $request->input('phone');
        }
        if ($request->filled('street')) {
            $client->street = $request->input('street');
        }
        if ($request->filled('BuildingNum')) {
            $client->BuildingNum = $request->input('BuildingNum');
        }
        if ($request->filled('city')) {
            $client->city = $request->input('city');
        }
        if ($request->filled('zipcode')) {
            $client->zipcode = $request->input('zipcode');
        }
        // if ($request->hasFile('img')) {
        //     $imageName = time() . '.' . $request->file('img')->getClientOriginalExtension();
        //     $request->file('img')->move(public_path('client/'), $imageName);
        //     $client->img = $imageName;
        // }

        if (isset($validatedData['img'])) {
            $imageName = time() . '.' . $request->file('img')->getClientOriginalExtension();
            $request->file('img')->move(public_path('client/'), $imageName);
            $client->img = $imageName;
        }

        $client->save();

        return response()->json(['message' => 'successfully updated', "data" => $client]);
    }





    // Login Client
    public function Login(Request $req)
    {
        $validatedData = $req->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8|max:255'
        ]);

        // generate token 
        $token = str::random(40);

        $CLient = Client::where('email', $validatedData['email'])->first();
        if ($CLient && Hash::check($validatedData['password'], $CLient->password)) {
            return response()->json(['message' => 'successfully login', 'data' => $CLient, 'token' => $token]);
        } else {
            return ['error' => " Email or Password is not matched"];
        }
    }

    // forget password 
    public function ForgetPassword(Request $request)
    {
        $Validation = $request->validate([
            'email' => 'required|email'
        ]);

        // $NumForgetPassword = Str::random(4, 'numeric');
        $code = mt_rand(100000, 999999);

        $Client = Client::where('email', $Validation['email'])->first();

        if (!$Client) {
            return response()->json(["error" => "this email has not exist"]);
        }

        $Client->forgetPassNum = $code;
        $Client->save();

        // sent Mail forget password 
        Mail::to($Validation['email'])->send(new ForgetPassword($code));


        return response()->json(["message" => "Success"]);
    }


    // Verify Code
    public  function VerifyCode(Request $request)
    {
        $validatedData = $request->validate([
            'code' => 'required|min:6|max:6',
        ]);

        $client = Client::where('forgetPassNum', $validatedData['code'])->first();
        if ($client) {
            return ['message' => "Success", "id" => $client->id];
        } else {
            return ['error' => "invalid code !"];
        }
    }


    // Reset Password 
    public  function ResetPassword(Request $request)
    {
        $validatedData = $request->validate([
            'id' => 'required',
            'password' => 'required|string|min:8',
            'passConfirm' => 'required|string|min:8',
        ]);

        if ($validatedData['passConfirm'] != $validatedData['password']) {
            return response()->json(['error' => " your password is not identical "]);
        }

        $Client = Client::where('id', $validatedData['id'])->first();
        $Client->password = Hash::make($validatedData['password']);
        $Client->forgetPassNum = null;
        $Client->save();

        if ($Client) {
            return response()->json(["message" => "Success"]);
        } else {
            return response()->json(["error" => "undefined user"]);
        }
    }
}
