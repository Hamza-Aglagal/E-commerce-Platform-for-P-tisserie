<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order_line extends Model
{
    use HasFactory;

    protected $table = 'order_lines' ;

    protected $fillable  = [
        'order_id',
        'product_id',
        'Qnt',
        'price',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
