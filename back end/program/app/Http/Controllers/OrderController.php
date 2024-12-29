<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    // create order
    public function CreateOrder(Request $request)
    {

        $validatedData = $request->validate([
            'user_id' => 'required',
            'firstname' => 'required',
            'lastname' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'adress' => 'required',
            'payment_mode' => 'required',
        ]);


        $order = new Order();
        $order->user_id = $validatedData['user_id'];
        $order->firstname = $validatedData['firstname'];
        $order->lastname = $validatedData['lastname'];
        $order->phone = $validatedData['phone'];
        $order->email = $validatedData['email'];
        $order->adress = $validatedData['adress'];
        $order->payment_mode = $validatedData['payment_mode'];

        $order->save();

        $Cart = Cart::where('client_id', $request->user_id)->with('product')->get();

        $OrderItem = [];

        foreach ($Cart as $item) {
            $OrderItem[] = [
                'product_id' => $item->product_id,
                'price' => $item->product->price * $item->product_Qnt,
                'Qnt' => $item->product_Qnt,
            ];

            // update Qnt of products

            // $item->product->update([
            //     'Qnt'=> $item->product->Qnt - $item->product_Qnt
            // ]);

        };


        $order->orderLine()->createMany($OrderItem);

        Cart::destroy($Cart);


        return response()->json(['message' => 'order has been added', 'data' => $order,]);
    }

    // All Order 
    public function AllOrdersClient(Request $request, $id)
    {
        $orders = Order::where('user_id', $id)->with('orderLine')->get();

        return response()->json(['message' => 'all orders', 'data' => $orders]);

    }
}
