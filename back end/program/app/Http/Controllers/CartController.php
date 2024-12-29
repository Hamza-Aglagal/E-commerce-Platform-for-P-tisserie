<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    // Add To Cart
    public function addToCart(Request $request)
    {
        // Validation
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'client_id' => 'required|exists:clients,id',
        ]);

        // Create a new cart item
        Cart::create([
            'product_id' => $request->product_id,
            'client_id' => $request->client_id,
            'product_Qnt' => 1
        ]);

        // Get the authenticated user's cart items
        $NumcartItems = Cart::where('client_id', $request->client_id)->with('product')->get()->count();

        return response()->json(['message' => 'Product added to cart.', 'NumofcartItems' => $NumcartItems]);
    }


    // Add Qnt To Cart
    public function updateQntCart(Request $request, $cart_id )
    {

        $Cart = Cart::findOrFail($cart_id);

        if ($request->scope == 'dec') {
            $Cart->product_Qnt -= 1;
        } else if ($request->scope == 'inc') {
            $Cart->product_Qnt += 1;
        }

        $Cart->save();
        return response()->json(['message' => 'Qnt Product added to cart.', 'data' => $Cart]);




        // $validation = $request->validate([
        //     'product_id' => 'nullable',
        //     'client_id' => 'nullable',
        //     'Qnt' => 'required'
        // ]);

        // if ($validation['Qnt']) {
        //     $Cart->Qnt = $validation['Qnt'];
        // }


    }



    // Show Cart 
    public function showCart(Request $request)
    {
        // Get the authenticated user's cart items
        $cartItems = Cart::where('client_id', $request->client_id)
            ->with('product')
            ->get();

        return response()->json(['cart' => $cartItems]);
    }


    // Remove From Cart
    public function removeFromCart(Request $request)
    {
        // Find the cart item
        $cart = Cart::findOrFail($request->cart_id);

        // Check if the authenticated user owns the cart item
        if ($cart->client_id !== $request->Client_id) {
            return response()->json(['message' => 'Unauthorized.'], 401);
        }

        // Delete the cart item 
        $cart->delete();

        // Get the authenticated user's cart items
        $NumcartItems = Cart::where('client_id', $request->Client_id)->with('product')->get()->count();

        return response()->json(['message' => 'Product removed from cart.', 'NumofcartItems' => $NumcartItems]);
    }
}
