<!DOCTYPE html>
<html ng-app="devManagerApp">
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Demo dev.quanly.org</title>
    <script src="{{asset('js/jquery-2.1.3.min.js')}}"></script>
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="{{asset('js/bootstrap.min.js')}}"></script>
    <script src="{{asset('js/google-chart/loader.js')}}"></script>
    <script src="{{asset('js/moment.min.js')}}"></script>
    <script src="{{asset('js/moment.vi.min.js')}}"></script>
    <script src="{{asset('js/date-picker/daterangepicker.min.js')}}"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('css/bootstrap.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/daterangepicker.css')}}">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="{{asset('js/jquery-ui.min.js')}}"></script>
    <script src="{{asset('js/jquery-ui.js')}}"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('libs/fontawesome-free-5.12.1-web/css/all.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/styles.min.css')}}">

</head>

<body class="overflow-hidden">
<table class="table table-bordered table-striped table-hover table-row-center-col-left table-height-sm">
    <thead>
    <tr class="info">
        <th width="3%">
            <label class="checkbox-horizontal">
                <input type="checkbox"> STT
            </label>
        </th>
        <th width="4%">Ngày</th>
        <th width="12%">Họ Tên</th>
        <th width="10%">Số điện thoại</th>
        <th width="15%">Địa chỉ</th>
        <th width="8%">Mã vận đơn</th>
        <th width="10%">COD</th>
        <th width="10%">Trạng thái</th>
        <th width="20%">Lý do</th>
        <th width="10%">Hành động</th>
    </tr>
    </thead>
    <tbody>
    @foreach($orders as $key => $order )
            <tr id="{{route('update', ['id' => $order->order_id])}}">
                <td class="text-center">
                    <label class="checkbox-horizontal">
                    </label>
                </td>
                <td class="text-center" ng-bind="ls.order_created*1000 | date: vm.dateFormat')}}"></td>
                <td>{{$order->order_user_name_created}}</td>
                <td>{{$order->order_phone}}</td>
                <td> {{$order->order_address}}</td>
                <td> {{$order->order_title}}</td>`
                <td>{{$order->order_price_post}}</td>
                <td>
                    <select id="x{{$key}}" class="status" name="order_status">
                        <option selected value="{{$order->order_status}}"></option>
                        <option value="{{\App\Demo::xulygap}}">Đơn xử lý gấp</option>
                        <option value="{{\App\Demo::baohanh}}">Đơn bảo hành</option>
                        <option value="{{\App\Demo::danggiao}}">Đang giao hàng</option>
                        <option value="{{\App\Demo::giaokhongthanhcong}}">Giao không thành công</option>
                        <option value="{{\App\Demo::giaothanhcong}}">Giao thành công</option>
                        <option value="{{\App\Demo::chuyenhoan}}">Chuyển hoàn</option>
                        <option value="{{\App\Demo::donhuy}}">Đơn hủy</option>
                        <option value="{{\App\Demo::thatlac_huhong}}">Đơn thất lạc- hư hỏng</option>
                    </select>
                </td>
                <td>
                    <input class="reason form-control" rows="1" cols="2" placeholder="Nhập lý do" value="{{$order->order_note}}">
                </td>
                <td class="text-center">
                    <div class="btn-group-custom">
                        <button type="button" class="btn btn-sm btn-icon" title="Tra cứu')}}"><i class="fas fa-search')}}"></i></button>
                        <button type="button" class="btn btn-sm btn-icon" title="Xem chi tiết">
                            <i class="fas fa-eye')}}"></i>
                        </button>
                        <button type="button" class="btn btn-sm btn-icon" title="Báo cáo')}}"><i class="far fa-chart-bar')}}"></i></button>
                    </div>
                </td>
                <input type="hidden" name="order_user_id_confirm" value="100">
                <input type="hidden" name="order_user_name_confirm" value="duncm">
            </tr>
    @endforeach
    </tbody>
</table>
{{ $orders->links() }}
</body>
</html>


<script type="text/javascript">
    $(".status").change(function() {
        var url = $(this).closest('tr').attr('id');
        var data_id = $(this).closest('tr').find('input[name="order_user_id_confirm"]');
        var data_name = $(this).closest('tr').find('input[name="order_user_name_confirm"]');
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'post',
            url : url,
            data : {
            order_user_id_confirm: data_id.val(),
            order_user_name_confirm: data_name.val(),
            order_status : $(this).val()
            },
            success: function(response) {
                console.log(response);
            },
            error: function(response) {
                // console.log(response);
            }
        });

    })
</script>

<script>
    $(".reason").change(function() {
        var url = $(this).closest('tr').attr('id');
        var data_id = $(this).closest('tr').find('input[name="order_user_id_confirm"]');
        var data_name = $(this).closest('tr').find('input[name="order_user_name_confirm"]');
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'post',
            url : url,
            data : {
                order_user_id_confirm: data_id.val(),
                order_user_name_confirm: data_name.val(),
                order_note : $(this).val()
            },
            success: function(response) {
                console.log(response);
            },
            error: function(response) {
                // console.log(response);
            }
        });
    })
</script>

