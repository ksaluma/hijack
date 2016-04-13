$( document ).ready(function() {
   $("input").focus();
  
  $(".btn").on("click",function(){
    if( $("input").val()=="1234"){
      $("span").addClass("active");
      window.location.replace('WELCOME.html');
    }else{
      $("span").removeClass("active");
      window.location.replace('index.html');
    }
  })
});