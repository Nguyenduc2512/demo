<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Demo extends Model
{
//    em dùng tạm tiếng việt chỗ này cho anh dễ hiểu
    const xulygap = 1;
    const baohanh = 2;
    const danggiao = 3;
    const giaokhongthanhcong = 4;
    const giaothanhcong = 5;
    const chuyenhoan = 6;
    const donhuy = 7;
    const thatlac_huhong = 8;

    protected $table = 'order';

    protected $fillable = [
        'order_user_id_created',
        'order_user_name_created',
        'order_user_id_confirm',
        'order_user_name_confirm',
        'order_title',
        'order_price_post',
        'order_time_send',
        'order_email',
        'order_phone',
        'order_address',
        'order_note',
    ];
}
