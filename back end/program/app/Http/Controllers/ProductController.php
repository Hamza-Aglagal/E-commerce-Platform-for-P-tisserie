<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // all products
    public function AllProduct()
    {
        return response()->json(['data' => Product::all()]);
    }

    // add product
    public function AddProduct(Request $req)
    {
        $validatedData = $req->validate([
            'name' => 'required',
            'desc' => 'required',
            'price' => 'required|numeric',
            'img' => 'required|image',
            'category' => 'required',
        ]);

        $product = new Product();
        $product->name = $validatedData['name'];
        $product->desc = $validatedData['desc'];
        $product->price = $validatedData['price'];
        $product->category = $validatedData['category'];

        $imageName = time() . '.' . $req->file('img')->getClientOriginalExtension();
        $req->file('img')->move(public_path('products/'), $imageName);
        $product->img = $imageName;

        $product->save();
        // event
        // event(new \App\Events\AjouterProduct());
        return response()->json(['message' => 'has been added', 'data' => $product,]);
    }

    // delete Product
    public function DeleteProduct($id)
    {
        $result = Product::where('id', $id)->delete();
        if ($result) {
            return response()->json(['message' => 'has been deleted']);
        }
    }

    // edit Product 
    public function EditProduct($id)
    {
        $product = Product::findOrFail($id);
        return response()->json(['data' => $product]);
    }


    // update Products 
    public function UpdateProduct(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required',
            'desc' => 'required',
            'price' => 'required|numeric',
            'img' => 'required|image',
            'category' => 'required',
        ]);

        $product->name = $validatedData['name'];
        $product->desc = $validatedData['desc'];
        $product->price = $validatedData['price'];
        $product->category = $validatedData['category'];

        $imageName = time() . '.' . $request->file('img')->getClientOriginalExtension();
        $request->file('img')->move(public_path('products/'), $imageName);
        $product->img = $imageName;

        $product->save();

        return response()->json(['message' => 'has been updated']);
        
    }
}
