$(document).ready(function(){  
    $("#searchBtn").click(function(){
        window.event.returnValue=false;
        if($("#searchValue").val() ==null || $("#searchValue").val() ==""){
            return;
        }
        else{
            window.location.href="search.html?index="+$("#searchValue").val();
        }
      });
});