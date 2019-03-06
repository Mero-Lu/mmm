
$(function () {
    var couponid = getSearch('couponid');
    // console.log(couponid);
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getcouponproduct',
        type: 'get',
        data: {
            couponid: couponid,
        },
        success: function (info) {
            console.log(info);
            var html = template('contentTpl', info);
            $('.content').html(html);

            var htmlStr = template('modalTpl', info);
            $('.img_w1').html(htmlStr);


            // 模态框的显示
            $('.content').on('click', 'li', function (e) {
                // e.stopPropagation()
                // e.preventDefault();
                // 点击按钮模态框显示
                $('.modal').stop().fadeIn();
            })
            // 设置点击事件 
            var $lis = $('.img_w1 img');
            var index = 0;  //用来记录第一张展示的图片的下标
            // console.log($lis);
            // 设置右边的点击事件
            $('.right').on('click', function (e) {
                e.stopPropagation()
                e.preventDefault();
                index++;
                // 对index 做临界点判断
                if (index >= $lis.length) {
                    index = 0; // 回到第一张
                }
                $lis.eq(index).stop().fadeIn().siblings().stop().fadeOut();
            })
            // 设置左边的点击事件
            $('.left').on('click',function(e){
                e.stopPropagation()
                e.preventDefault();
                index--;

                if (index < 0) {
                    index = $lis.length - 1;
                    // 回到最后一张
                }
                $lis.eq(index).stop().fadeIn().siblings().stop().fadeOut();
            })

            $('.modal').on('click',function(e){
                e.stopPropagation()
                // 点击按钮模态框隐藏
                $('.modal').stop().fadeOut();
            })
        }

    })

})