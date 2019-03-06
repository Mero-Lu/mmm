

$(function(){
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getinlanddiscount',
        type: 'get',
        success: function(info){
            console.log(info);
            var html = template('inlandTpl',info);
            $('.mm_info ul').html(html);
        }

    })

})