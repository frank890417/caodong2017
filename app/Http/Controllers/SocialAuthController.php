<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SocialAccountService;
use App\Http\Requests;
use Socialite;

class SocialAuthController extends Controller
{
    //
    public function redirect()
    {

        return Socialite::driver('facebook')->redirect();   

    }   

    public function callback(SocialAccountService $service)
    {
      //getId(), getNickname(), getName(), getEmail(), getAvatar().
        // when facebook call us a with token
        // $providerUser = \Socialite::driver('facebook')->user();    
        $user = $service->createOrGetUser(Socialite::driver('facebook')->user());

        // dd($user);

        auth()->login($user);

        return redirect()->to('/');
    }
}
