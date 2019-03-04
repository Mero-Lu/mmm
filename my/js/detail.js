
$(function(){
    var productid = getSearch('productid');
    var category = sessionStorage.getItem('category');
    console.log(category);
    console.log(productid)
    $.ajax({
        url : 'http://127.0.0.1:9090/api/getproduct',
        type: 'get',
        data:{
            productid: productid,
        },
        dataType: 'json',
        success: function( info ) {
            console.log(info);
            var res = info.result[0].productName.split(' ')[0];
            var htmlStr = template('luTpl',{category:category,res:res})
            $('.w1_left').html(htmlStr);

            var html = template('headTpl',info);
            $('.ww').html(html);
            // 设置css样式
            $('.common table tr td span').css({
                width: '1.52rem',
                height: '0.613rem',
                display: 'block',
                marginBottom: '0.066rem',
                fontSize: '0.24rem',
                textAlign: 'center',
                lineHeight: '0.613rem'
            });
        }


    })

    // 获取评论
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getproductcom',
        type: 'get',
        data: {
            productid: productid
        },
        dataType: 'json',
        success: function(info){
            console.log(info);
            var html = template('mmTpl',info)
            $('.mm_text').html(html);
        }


    })

})