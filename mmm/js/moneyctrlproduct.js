
$(function(){
    var productid = getSearch('productId');
    console.log(productid);
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getmoneyctrlproduct',
        type: 'get',
        data: {
            productid: productid,
        },
        dataType: 'json',
        success:function(info){
            console.log(info);
            var html = template('moneyTpl',info);
            $('.mm_info').html(html);
        }


    })




})