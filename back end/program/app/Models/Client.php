<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Laravel\Sanctum\PersonalAccessTokenFactory;

class Client extends Model
{
    use HasFactory;

    // function createToken($model)
    // {
    //     return app(PersonalAccessTokenFactory::class)
    //         ->make($model)
    //         ->accessToken;
    // }
}
