var index = window.location.href.split("=")[1];
$(document).ready(function(){ 
$.ajax({
    url: "http://106.15.186.140/mysite/php/filminfo.php",
    type: "get",
    data:{id:index},
    dataType:'json',
    success: function (data) {
        var html = template('filminfo', data);
        $('.content')[0].innerHTML = html;
    }
})
});
