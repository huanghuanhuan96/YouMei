$(function(){
//向服务端接口localhost:3000/login发送ajax请求，获得返回的数组对象
    var $btn=$('#myLogin');
     $btn.click(function(){
      $.ajax({
        url:"http://localhost:3000/login",
        type:"get",
        data:{username:"dingding",upwd:"123456"},//"uname=dingding&upwd=123456
        dataType:"json",//让ajax自动将json字符串转为对象，可直接使用
        success:function(result){          
            if(result.length>0){
              window.location.href='index.html';
              
              
            } 
         }
       }).then(function(){
           $('#hadLogined').html('已登陆');
        
       })  
     })
 
    })

      


  	                     