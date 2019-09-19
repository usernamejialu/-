var index = decodeURI(window.location.href).split("=")[1];
$(document).ready(function(){ 
$.ajax({
    url: "http://106.15.186.140/mysite/php/searchCount.php",
    type: "get",
    data:{searchval:index.toUpperCase()},
    success:function(data){
        $("#pagination0").jqPaginator({
            totalPages: Math.ceil(parseInt(data)/10),
            visiblePages: 10,
            currentPage: 1,
            first: '<li class="first" class="page-item"><a class="page-link" href="#top">首页<\/a><\/li>',
            prev: '<li class="prev" class="page-item"><a class="page-link" href="#top">上一页<\/a><\/li>',
            next: '<li class="next" class="page-item"><a class="page-link" href="#top">下一页<\/a><\/li>',
            last: '<li class="last" class="page-item"><a class="page-link" href="#top">末页<\/a><\/li>',
            page: '<li class="page" class="page-item"><a class="page-link" href="#top">{{page}}<\/a><\/li>',
            onPageChange: function (n) {
                $.ajax({
                    url: "http://106.15.186.140/mysite/php/searchlist.php",
                    type: "get",
                    data:{
                        searchval:index.toUpperCase(),
                        currentPage:n
                    },
                    dataType:'json',
                    success: function (data) {
                        var results={list:[]};
                        results.list=data;
                        if (results.list.length==0) {
                            $('.list')[0].innerHTML = "没有找到与"+index+"相关的结果";
                            $('.list')[0].classList.add("notfind");
                        }
                        else {
                            var html = template('filmslist', results);
                            $('.list')[0].innerHTML = html;
                            $('.list')[0].classList.remove("notfind");
                        }
                    }
                })
            }
        })
    }
})
});

