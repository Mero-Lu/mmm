
$(function(){

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getcoupon',
        type: 'get',
        dataType: 'json',
        success: function(info){
            console.log(info);
            var html = template('headTpl',info);
            $('.content').html(html);

        }

    })
})