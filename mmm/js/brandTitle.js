
$(function(){
    // 一进页面就渲染一级标题
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getbrandtitle',
        type: 'get',
        dataType: 'json',
        success: function( info ) {
            console.log(info);
            var htmlStr = template('categoryTpl',info);
            $('.mm_main').html(htmlStr);
        }
    })
    // $.ajax({
    //     url: 'http://127.0.0.1:9090/api/getcategorytitle',
    //     type: 'get',
    //     dataType: 'json',
    //     success: function( info ) {
    //         console.log(info);
    //         var htmlStr = template('categoryTpl',info);
    //         $('.mm_main').html(htmlStr);
    //     }
    // })

    // 点击渲染二级标题
    // $('.mm_main').on('click','.a',function(e){
    //     var that = $(this).parent();
    //     var id = $(that).data('id');
    //     $.ajax({
    //         url:'http://127.0.0.1:9090/api/getcategory',
    //         type: 'get',
    //         data: {
    //             titleid: id,
    //         },
    //         dataType: 'json',
    //         success: function(info){
    //             console.log(info)
    //             console.log($(that).length);
    //             if($(that).find('#ul').length == 0){
    //                 var htmlStr = template('lis',info);
    //                 $(that).append(htmlStr);
    //                 $(that).find('#ul').stop().slideDown(500);
    //             }
    //             if($(that).find('i').hasClass('fa-chevron-down')){
    //                 $(that).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    //                 $(that).find('#ul').stop().slideDown(500);

    //             }else {
    //                 $(that).find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    //                 $(that).find('#ul').stop().slideUp(500);
    //             }
    //         }
    //     })

    // })

    
    

})