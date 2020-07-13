<?php

namespace App\Http\Controllers;

use http\Env\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Demo;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function index()
    {
        $orders = Demo::orderBy('order_id','asc')->paginate(10);
        return view('demo', compact('orders'));
    }

    public function update(Request $request, $id)
    {
            if (!isset($_POST['order_note'])){
                $order = Demo::where('order_id', $id)->update([
                    'order_status' => $_POST['order_status'],
                    'order_user_id_confirm' => $_POST['order_user_id_confirm'],
                    'order_user_name_confirm' => $_POST['order_user_name_confirm'],
                ]);
            }else{
                $order = Demo::where('order_id', $id)->update([
                    'order_note' => $_POST['order_note'],
                    'order_user_id_confirm' => $_POST['order_user_id_confirm'],
                    'order_user_name_confirm' => $_POST['order_user_name_confirm'],
                ]);
            }
    }
}
