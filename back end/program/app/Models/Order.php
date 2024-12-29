<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $table = 'orders';

    protected $fillable  = [
        'user_id',
        'firstname',
        'lastname',
        'phone',
        'email',
        'email',
        'adress',
        'payment_mode',
        'status'
    ];


    public function orderLine()
    {
        return $this->hasMany(order_line::class, 'order_id' , 'id');
    }

}
