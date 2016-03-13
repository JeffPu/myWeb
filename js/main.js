jQuery(document).ready(function($) {
    /* =======头部滚动样式变化 ======= */
            $(window).on('scroll', function(){
                
                if ( $(window).width() > 991 ){
            
                    if($(document).scrollTop() > 0)
                        {
                            if(!$('#header').hasClass('navbar-fixed-top'))
                            {
                                $('#header').addClass('navbar-fixed-top');
                                $('#header').stop().animate({
                                    paddingTop:'15px'
                                    
                                },600);
                            }
                        }
                        else
                        {
                            if($('#header').hasClass('navbar-fixed-top'))
                            {
                                $('#header').removeClass('navbar-fixed-top');
                                $('#header').stop().animate({
                                    paddingTop:'30px'
                                    
                                },600);
                            }
                        }
                    
                  }
            });	
});              
	        
   /* ======= 图片轮播 ======= */
    $(function(){
    
    var i=0;
    var clone=$(".banner .img li").first().clone();
    $(".banner .img").append(clone);    
    var size=$(".banner .img li").size();   
    for(var j=0;j<size-1;j++){
        $(".banner .num").append("<li></li>");
    }
    $(".banner .num li").first().addClass("on");
    
    
    /*鼠标划入圆点*/
    $(".banner .num li").hover(function(){
        var index=$(this).index();
        i=index;
        $(".banner .img").stop().animate({left:-index*1366},1000) 
        $(this).addClass("on")
            .siblings().removeClass("on")     
    })
    
    
    /*自动轮播*/
    var t=setInterval(function(){
        i++;
        move()
    },3000)
    
    
    /*对banner定时器的操作*/
    $(".banner").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(function(){
            i++;
            move()
        },3000)
    })
    
    
    
    /*向左的按钮*/
    $(".banner .btn_l").click(function(){
        i--;
        move(); 
    })
    
    
    
    /*向右的按钮*/
    $(".banner .btn_r").click(function(){
        i++;
        move()              
    })
    
    

    function move(){
        
        if(i==size){
            $(".banner  .img").css({left:0})            
            i=1;
        }
        
        
        if(i==-1){
            $(".banner .img").css({left:-(size-1)*1366});
            i=size-2;
        }
        
        $(".banner .img").stop().animate({left:-i*1366},1000);
        
        if(i==size-1){
            $(".banner .num li").eq(0).addClass("on")
                .siblings().removeClass("on")  
        }else{      
            $(".banner .num li").eq(i).addClass("on")
                .siblings().removeClass("on")  
        } 
        
    }
    
});
    
   /* ======= 二维码 ======= */
    $(document).ready(function(){
    $(".icon_ma").hide();
    $(".webo").hover(
        function(){
            $(".webo_ma").slideDown();
        });
    $(".wechat").hover(
        function(){
            $(".wechat_ma").slideDown();
        });
    $(".dress").hover(
        function(){
            $(".dress_ma").slideDown();
        });

    $(".webo").mouseleave(
        function(){
            $(".webo_ma").slideUp();
        });
    $(".wechat").mouseleave(
        function(){
            $(".wechat_ma").slideUp();
        });
    $(".dress").mouseleave(
        function(){
            $(".dress_ma").slideUp();
        });


    });

    
    



   
    