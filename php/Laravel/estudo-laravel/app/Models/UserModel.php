<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
Request

class UserModel extends Model
{
    use HasFactory;
    protected $table = "user";
    protected $primaryKey = "id";
    protected $fillable = ["name", "email", "password"];   
}
