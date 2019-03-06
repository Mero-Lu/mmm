
$(function(){

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getsitenav',
        type: 'get',
        dataType: 'json',
        success: function(info){
            console.log(info);
            var html = template('contentTpl',info);
            $('.mm_info ul').html(html);
        }
    })


})