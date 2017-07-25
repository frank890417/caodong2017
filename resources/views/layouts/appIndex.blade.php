<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    
     <meta property="og:title" content="草東沒有派對 No Party For Cao Dong" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="http://caodong2017.monoame.com/img/og.jpg" />
    <meta property="og:description" content="破舊揚聲器裡那類比聲響 呢喃哼唱伴隨熟識的節奏 而語句及旨意皆模糊不清 這裡沒有派對" />
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>草東沒有派對 No Party For Cao Dong</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <!-- @if (Auth::guest())
            <li><a href="{{ route('login') }}">Login</a></li>
            <li><a href="{{ route('register') }}">Register</a></li>
        @else
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    {{ Auth::user()->name }} <span class="caret"></span>
                </a>

                <ul class="dropdown-menu" role="menu">
                    <li>
                        <a href="{{ route('logout') }}"
                            onclick="event.preventDefault();
                                        document.getElementById('logout-form').submit();">
                            Logout
                        </a>

                       
                    </li>
                </ul>
            </li>
        @endif -->
        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            {{ csrf_field() }}
        </form>
        <!-- <App/>  -->
        <router-view/> 
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    <script>
        document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +':35729/livereload.js?snipver=1"></' + 'script>');
        @if (!Auth::guest())
            window.user = {!!  json_encode(Auth::user()) !!};
        @else
            window.user = null;
        @endif
    </script>
</body>
</html>
