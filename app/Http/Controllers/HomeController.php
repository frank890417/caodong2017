<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use Ecpay;
use App\Album;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    public function index(){
        $album = Album::all()->first();
        // dd($album->songs);
        return view('layouts.appIndex');
    }

    public function buy(){
        // $album = Album::all()->first();
        // dd($album->songs);
        return view('layouts.app');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function paytest()
    {
        $album = Album::all()->first();
        
        $songs = $album->songs;
        $totalPrice = 0;

        foreach ($songs->toArray() as $key => $value) {
            $item=[ 
                    'Name' => $value['title'], 
                    'Price' => $value['price'],
                    'Currency' => "元",
                    'Quantity' => (int) "1", 
                    'URL' => "dedwed"
            ];
            $totalPrice += $value['price'];

            //訂單的商品資料
            array_push(Ecpay::i()->Send['Items'], $item);
        }

        //基本參數(請依系統規劃自行調整)
        Ecpay::i()->Send['ReturnURL']         = "http://www.ecpay.com.tw/receive.php" ;
        Ecpay::i()->Send['MerchantTradeNo']   = "Test".time() ;           //訂單編號
        Ecpay::i()->Send['MerchantTradeDate'] = date('Y/m/d H:i:s');      //交易時間
        Ecpay::i()->Send['TotalAmount']       = $totalPrice;                     //交易金額
        Ecpay::i()->Send['TradeDesc']         = "草東沒有派對-官網數位專輯與商品" ;         //交易描述
        Ecpay::i()->Send['ChoosePayment']     = \ECPay_PaymentMethod::ALL ;     //付款方式

  
      //array('Name' => "《醜奴兒》數位專輯", 'Price' => (int)"900",
                //    'Currency' => "元", 'Quantity' => (int) "1", 'URL' => "dedwed")

        

        //Go to ECPay
        echo "緑界頁面導向中...";
        echo Ecpay::i()->CheckOutString();
        // return view('home');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function checkOut()
    {
        // $album = Album::all()->first();
        
        $songs = Input::get('cart');
        $totalPrice = 0;

        foreach ($songs as $key => $value) {
            $item=[ 
                    'Name' => $value['title'], 
                    'Price' => $value['price'],
                    'Currency' => "元",
                    'Quantity' => (int) "1", 
                    'URL' => "dedwed"
            ];
            $totalPrice += $value['price'];

            //訂單的商品資料
            array_push(Ecpay::i()->Send['Items'], $item);
        }

        //基本參數(請依系統規劃自行調整)
        Ecpay::i()->Send['ReturnURL']         = "http://caodong2017.dev/" ;
        Ecpay::i()->Send['MerchantTradeNo']   = "Test".time() ;           //訂單編號
        Ecpay::i()->Send['MerchantTradeDate'] = date('Y/m/d H:i:s');      //交易時間
        Ecpay::i()->Send['TotalAmount']       = $totalPrice;                     //交易金額
        Ecpay::i()->Send['TradeDesc']         = "草東沒有派對-官網數位專輯與商品" ;         //交易描述
        Ecpay::i()->Send['ChoosePayment']     = \ECPay_PaymentMethod::ALL ;     //付款方式

  
      //array('Name' => "《醜奴兒》數位專輯", 'Price' => (int)"900",
                //    'Currency' => "元", 'Quantity' => (int) "1", 'URL' => "dedwed")

        

        //Go to ECPay
        echo "緑界頁面導向中...";
        echo Ecpay::i()->CheckOutString();
        // return view('home');
    }
}
