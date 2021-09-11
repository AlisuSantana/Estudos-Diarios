<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserModel;

class UserController extends Controller
{
    private $objUser;

    public function __construct() 
    {
        $this->objUser = new UserModel();
    }

    public function store(Request $request) 
    {
        dd($request);
    }

    public function list(int $limit) 
    {
        $result = $this->objUser->all();
        dd($result);
        //return redirect('user.create');
    }

}
