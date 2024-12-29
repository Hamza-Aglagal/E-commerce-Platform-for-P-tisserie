<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\LigneCmdController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderLineController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });



// routes category crud
Route::get('allCategory',[CategoryController::class, 'AllCategory']);
Route::post('addCategory',[CategoryController::class, 'AddCategory']);
Route::delete('deleteCategory/{id}',[CategoryController::class, 'DeleteCategory']);


// routes products crud
Route::get('allProduct',[ProductController::class, 'AllProduct']);
Route::post('addProduct',[ProductController::class, 'AddProduct']); 
        // http://127.0.0.1:8000/products/1684160658.jpg
Route::delete('deleteProduct/{id}',[ProductController::class, 'DeleteProduct']);
Route::get('editProduct/{id}',[ProductController::class, 'EditProduct']);
Route::post('updateProduct/{id}',[ProductController::class, 'UpdateProduct']);


// routes Client Auth
Route::post('register',[ClientController::class, 'Register']);
Route::post('login',[ClientController::class, 'Login']);
Route::post('forgetPassword',[ClientController::class, 'ForgetPassword']);
Route::post('verifyCode',[ClientController::class, 'VerifyCode']);
Route::post('resetPassword',[ClientController::class, 'ResetPassword']);
Route::post('updateClient/{id}',[ClientController::class, 'updateInfoClient']);


// routes Cart 
Route::post('addToCart',[CartController::class, 'addToCart']);
Route::post('updateQntCart/{cart_id}',[CartController::class, 'updateQntCart']);
Route::post('showCart',[CartController::class, 'showCart']);
Route::post('removeFromCart',[CartController::class, 'removeFromCart']);


// Order
Route::post('newOrder',[OrderController::class, 'CreateOrder']);
Route::get('allOrder/{id}',[OrderController::class, 'AllOrdersClient']);


// // routes Ligne_Cmd
Route::get('allOrderLine/{order_id}',[OrderLineController::class, 'AllOrederLineByOrderClient']);
// Route::post('showLigneOrder',[LigneCmdController::class, 'showLigneOrder']);
