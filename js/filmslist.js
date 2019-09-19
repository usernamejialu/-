$(document).ready(function(){
    $("#pagination0").jqPaginator({
        totalPages: 1000,
        visiblePages: 10,
        currentPage: 1,
        first: '<li class="first" class="page-item"><a class="page-link" href="#top">首页<\/a><\/li>',
        prev: '<li class="prev" class="page-item"><a class="page-link" href="#top">上一页<\/a><\/li>',
        next: '<li class="next" class="page-item"><a class="page-link" href="#top">下一页<\/a><\/li>',
        last: '<li class="last" class="page-item"><a class="page-link" href="#top">末页<\/a><\/li>',
        page: '<li class="page" class="page-item"><a class="page-link" href="#top">{{page}}<\/a><\/li>',
        onPageChange: function (n) {
            $.ajax({
                url: "http://106.15.186.140/mysite/php/filmslist.php",
                type: "get",
                data:{currentPage:n},
                dataType:'json',
                success: function (data) {
                    var films={list:[]};
                    films.list=data;
                    var html = template('filmslist', films);
                    $('.list')[0].innerHTML = html;
                }
            })
        }
    })
});
