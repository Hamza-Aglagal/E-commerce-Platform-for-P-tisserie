<?php

namespace App\Http\Controllers;

use App\Models\order_line;
use Illuminate\Http\Request;

class OrderLineController extends Controller
{
    // get All Order line by order_id of Client
    public function AllOrederLineByOrderClient(Request $request, $order_id){

        $order_Line = order_line::where('order_id', $order_id)->with('product')->get();

        return response()->json(['message' => 'all orders_line', 'data' => $order_Line]);
        
    }
}
