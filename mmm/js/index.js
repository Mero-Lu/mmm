$(function(){


    $.ajax({
        url: 'http://127.0.0.1:9090/api/getindexmenu',
        type: 'get',
        dataType: 'json',
        success: function(info){
            // console.log(info);
            var htmlStr = template('meanTpl',info);
            $('#uu').html( htmlStr );
        }
    })

    $('#uu').on('click','li',function(){
        var index = $(this).data('id');
        // console.log(index);

        if(index == 7) {
            console.log($('.mm_mean #uu li:nth-last-child(-n + 4)'));
            var $lis = $('.mm_mean #uu li:nth-last-child(-n + 4)');
            $lis.stop().slideToggle(500);
        }
    })


    // 渲染折扣页
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getmoneyctrl',
        type: 'get',
        dataType: 'json',
        success: function( info ){
            console.log(info);
            var htmlStr = template('zheTpl',info);
            $('.info_bottom ul').html(htmlStr);
        }
    })

})