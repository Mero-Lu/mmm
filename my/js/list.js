

$(function(){
    // 获取品牌标题id
    var brandtitleid = getSearch('id');
    var title = getSearch('dian');
    // var productId = null;  //商品id;
    var str = null;   //用来储存商品图片
    var tit = null;   //用来储存商品标题
    $('.hot .z3 h4').text(title + '哪个牌子好?');
    $('.hot2 .z3 h4').text(title + '产品销量排行');
    $('.hot3 .z3 h4').text(title + '最新评论');

    console.log(brandtitleid);
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getbrand',
        type: 'get',
        data:{
            brandtitleid: brandtitleid,
        },
        dataType: 'json',
        success:function(info){
            console.log(info);
            var html = template('categoryTpl',info);
            $('.mm_box').html(html);
        }
    })

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getbrandproductlist',
        type: 'get',
        data:{
            brandtitleid: brandtitleid,
            pagesize: 4,
        },
        dataType: 'json',
        success:function(info){
            
            if(info.result.length == 0){
                $('.com').html($('<p style="margin:50px; text-align: center;">没有更多数据了</p>'));
                return
            }
            // console.log(info);
            var html = template('lis',info);
            $('.com').html(html);
            str = info.result[0].productImg;
            // console.log(str);
            tit = info.result[0].productName;
        }
    })
    var idd = 0;
    // console.log(idd);
    render(brandtitleid);
    function render(brandtitleid){
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getproductcom',
            type: 'get',
            data: {
                productid: brandtitleid,
            },
            dataType: 'json',
            success: function(info){
                if(info.result.length == 0){
                    $('.com').html($('<p style="margin:50px; text-align: center;">没有更多数据了</p>'));
                    return
                }
                console.log(info);
                var html = template('lunTpl',info);
                $('.mm_product').html(html);
    
                $('.product_title .img').html(str);
                $('.product_title .w1').html(tit);
                $('.com').on('click','a',function(){
                    idd = $(this).data('idd');
                    // render(idd);
                    var img = $(this).data('img');
                    var tet = $(this).data('tet');
                    $('.product_title .img').html(img);
                    $('.product_title .w1').html(tet);
                })
            }
        });

    }


})