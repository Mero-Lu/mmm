
$(function(){
    var pageid = 1; //页数
    var totalCount = null;  //总条数
    var pagesize = null; //每页大小
    var page=null;   //获取页数
    $('#sel').val(pageid);
    render();

    function render(pageid){
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getmoneyctrl',
            type: 'get',
            data:{
                pageid: pageid
            },
            dataType: 'json',
            success:function(info){
                var html = template('moneyTpl',info);
                $('.info_bottom ul').html(html);
                console.log(info);
                totalCount = info.totalCount;
                pagesize = info.pagesize;
                page = info.totalCount / info.pagesize;
                var htmlStr = '';
                for(var i = 0;i < page;i++){
                    htmlStr += '<option value="'+(i + 1)+'">'+(i + 1)+'</option>';
                }
                $('#sel').html(htmlStr);
                 $('#sel').val(pageid);

            }
        })
    }
     //下一页    
     $('.w2').on('click',function(){
         
        pageid++;
        if(pageid > page){
            $(this).prop('disable',true);
            pageid = page;
            return;
        }
        render(pageid);
    })
    // 上一页
    $('.w1').on('click',function(){
        pageid--;
        if(pageid < 1) {
            $(this).prop('disable',true);
            pageid = 1;
            return;
        }
        render(pageid);
    })

    // 点击select 换页
    $('#sel').on('change',function(){
        var val = $(this).val();
        console.log(val);
        pageid = val;
        render(pageid);
    })


})