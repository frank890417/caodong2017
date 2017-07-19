<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthApiController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function user()
    {
        dd(Auth::user()->name);    
    }
}
