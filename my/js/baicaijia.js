
$(function () {
    var titleId = 0;
    // 获取数据,渲染头部
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
        type: 'get',
        dataType: 'json',
        success: function (info) {
            // console.log(info);
            var html = template('headTpl', info);
            $('.uu').html(html);
            var lis = $('.uu li');
            // console.log(lis)
            // 动态获取li的宽度
            var str = 0;
            lis.each(function (i, v) {
                str += $(v).innerWidth();
                $(v).on('click', function () {
                    $(this).addClass('current').siblings().removeClass('current');
                    titleId = $(this).data('id');
                    // console.log(titleId);
                    render(titleId);
                })
            })
            $('.uu').width(str + 1);
            // 头部iscroll 初始化
            myScroll = new IScroll('#wrapper', {
                scrollX: true,
                scrollY: false,
            });
        }

    })
    render(titleId);
    // 获取数据,渲染内容
    function render(titleId) {
        // console.log(titleId)
        if(titleId === ''){
            var p = $('<p>没有更多数据了</p>');
            $('.content').html(p);
            return;
        }
        $.ajax({
            url : 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
            type: 'get',
            data: {
                titleid : titleId,
            },
            dataType: 'json',
            success: function( info ){
                console.log(info);
                var html = template('baicaiTpl',info);
                $('.content').html(html);
            }
        })
    }

})