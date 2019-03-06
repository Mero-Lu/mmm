
// $(function () {
//     var shopid = 0;  //商铺id
//     var areaid = 0;   //区域id
//     function shop() {
//         $.ajax({
//             url: 'http://127.0.0.1:9090/api/getgsshop',
//             type: 'get',
//             dataType: 'json',
//             success: function (info) {
//                 console.log(info);
//                 var html = template('headTpl', info);
//                 $('.two').html(html);

//             }
//         })
//     }
//     shop();
//     // 渲染地区
//     render()
//     function render() {
//         $.ajax({
//             url: 'http://127.0.0.1:9090/api/getgsshoparea',
//             type: 'get',
//             dataType: 'json',
//             success: function (info) {
//                 console.log(info);
//                 var html = template('quTpl', info);
//                 $('.content').html(html);
//             }
//         })
//     }
//     // 获取到标题
//     var $as = $('.wrapp a');
//     var headtxt = $('.wrapp a span');

//     $as.eq(0).on('click', function () {
//         var that = this;
//         // $(that).siblings().find('i').removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
//         // $(that).siblings().find('i').addClass('fa fa-chevron-down');
//         console.log($(that).siblings().find('i'))
//         if ($(that).find('i').hasClass('fa fa-chevron-down')) {
//             $('.two').stop().slideDown(700).siblings().slideUp();
//             $(that).find('i').removeClass('fa fa-chevron-down').addClass('fa fa-chevron-up');
//         } else {
//             $('.two').stop().slideUp(700);
//             $(that).find('i').removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
//             // $(that).siblings().find('i').removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
//         }
//         $('.two').on('click', 'a', function () {
//             var tet = $(this).find('.first').text();
//             shopid = $(this).data('id');
//             // console.log(shopid)
//             $(headtxt).eq(0).text(tet);
//             $(this).addClass('on').parent().siblings().find('a').removeClass('on');
//             $('.two').stop().slideUp();
//             $(that).find('i').removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');

//             shang(shopid,areaid);
//         })
//     })

//     $as.eq(1).on('click', function () {
//         var that = this;
//         // $(that).siblings().find('i').removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
//         // $(that).siblings().find('i').addClass('fa fa-chevron-down');
//         if ($(that).find('i').hasClass('fa fa-chevron-down')) {
//             $('.content').stop().slideDown(700).siblings().slideUp();
//             $(that).find('i').removeClass('fa fa-chevron-down').addClass('fa fa-chevron-up');
//         } else {
//             $('.content').stop().slideUp(700);
//             $(that).find('i').removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
//         }
//         $('.content').on('click', 'a', function () {
//             var tet = $(this).find('.first').text();
//             areaid = $(this).data('id');
//             var arr = tet.substr(0,2);
//             $(headtxt).eq(1).text(arr);
//             $(this).addClass('on').parent().siblings().find('a').removeClass('on');
//             $('.content').stop().slideUp();
//             $(that).find('i').removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
//             shang(shopid,areaid);
//         })
//     })

//     shang(shopid,areaid);
//     function shang(shopid,areaid){
//         $.ajax({
//             url: 'http://127.0.0.1:9090/api/getgsproduct',
//             type: 'get',
//             data: {
//                 shopid: shopid,
//                 areaid: areaid
//             },
//             dataType: 'json',
//             success: function( info ){
//                 console.log(info);
//                 var html = template('contentTpl',info);
//                 $('.bottom ul').html(html);
//             }

//         })
//     }





// })



// ====================================

$(function () {
    var shopid = 0;  //商铺id
    var areaid = 0;   //区域id
    function shop() {
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getgsshop',
            type: 'get',
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var html = template('headTpl', info);
                $('.two').html(html);

            }
        })
    }
    shop();
    // 渲染地区
    render()
    function render() {
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getgsshoparea',
            type: 'get',
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var html = template('quTpl', info);
                $('.content').html(html);
            }
        })
    }
    // 获取到标题
    var $as = $('.wrapp a');
    var headtxt = $('.wrapp a span');

    $as.eq(0).on('click', function () {
        $('.two').stop().slideToggle();
        $(this).find('i').toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
        $('.content').css('display', 'none');
        $as.eq(1).find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    })

    $as.eq(1).on('click', function () {
        $('.content').stop().slideToggle();
        $(this).find('i').toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
        $('.two').css('display', 'none');
        $as.eq(0).find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    })
    $('.content').on('click', 'a', function () {
        // shopid = $(this).data('id');
        areaid = $(this).data('id');
        var tet = $(this).find('.first').text();
        var arr = tet.substr(0, 2);
        $(headtxt).eq(1).text(arr);
        $(this).addClass('on').parent().siblings().find('a').removeClass('on');
        $('.content').css('display',"none");
        $(this).find('i').removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
        shang(shopid, areaid);
    })
    $('.two').on('click', 'a', function () {
        shopid = $(this).data('id');
        // areaid = $(this).data('id');
        var tet = $(this).find('.first').text();
        var arr = tet.substr(0, 2);
        $(headtxt).eq(0).text(arr);
        $(this).addClass('on').parent().siblings().find('a').removeClass('on');
        $('.two').css('display',"none");
        $(this).find('i').removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
        shang(shopid, areaid);
    })

    shang(shopid, areaid);
    function shang(shopid, areaid) {
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getgsproduct',
            type: 'get',
            data: {
                shopid: shopid,
                areaid: areaid
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var html = template('contentTpl', info);
                $('.bottom ul').html(html);
            }

        })
    }





})