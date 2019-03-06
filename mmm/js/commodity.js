

$(function(){
    var categoryid = getSearch('categoryId');
    var currentPage = 1;  //页数
    var totalCount = null;  //总条数
    var pagesize = null; //每页大小
    var page=null;   //获取页数
    var category = null;  //
    // console.log(categoryid)
    
    // 一进页面就渲染 路径导航
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getcategorybyid',
        type: 'get',
        data: {
            categoryid: categoryid,
        },
        dataType: 'json',
        success: function( info ){
            console.log(info);
            category = info.result[0].category;
            sessionStorage.setItem('category',category);
            // console.log(category);
            var htmlStr = template('commTpl',info);
            $('.w1_left').html(htmlStr);
        }
    })

    // 渲染下面的数据
    render(currentPage);
    $('#sel').val(currentPage);

   function render(currentPage){
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getproductlist',
        type: 'get',
        data :{
            categoryid:categoryid,
            pageid: currentPage,
        },
        dataType: 'json',
        success: function( info) {
            console.log(info);
            var htmlstr = template('ulTpl',info);
            $('#ul').html(htmlstr);
            totalCount = info.totalCount;
            pagesize = info.pagesize;
            page =  totalCount / pagesize;
            var htmlStr = '';
            for(var i = 0;i < page;i++){
                htmlStr += '<option value="'+(i + 1)+'">'+(i + 1)+'</option>';
            }
            $('#sel').html(htmlStr);
            $('#sel').val(currentPage);

        }

    })
   }
    //下一页    
    $('.w2').on('click',function(){
        currentPage++;
        if(currentPage > page){
            $(this).prop('disable',true);
            currentPage = page;
            return;
        }
        render(currentPage);
    })
    // 上一页
    $('.w1').on('click',function(){
        currentPage--;
        if(currentPage < 1) {
            $(this).prop('disable',true);
            currentPage = 1;
            return;
        }
        render(currentPage);
    })

    // 点击select 换页
    $('#sel').on('change',function(){
        var val = $(this).val();
        console.log(val);
        currentPage = val;
        render(currentPage);
    })


})