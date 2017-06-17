$(function(){
	//开场动画
	var body = document.getElementsByTagName('body')[0];
	var loadImg =$('.come');
	loadImg.animate({opacity:'1'},3000,function(){
		$(".come").css({'opacity':'0','display':'none'});
	});
	
	
	//导航悬浮
	$('.nav li a').hover(function(){
		$(this).css({'color':'#FAD12C','background':'#505050'});//选中
	},function(){
		$(this).css({'color':'#505050','background':'#FAD12C'});//清除
	});
	//关于
	$(".btn-about").hover(function(){
		$(this).css({"background-color":"#fad12b","color":"#fff"});
	},function(){
		$(this).css("background-color","");
	})
	//导航点击
		$('a[href*=#]').click(function() {  
//              console.log(this.hash)  
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {  
                    var $target = $(this.hash);  
                    $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');  
                    if ($target.length) {  
                        var targetOffset = $target.offset().top;  
                        $('html,body').animate({  
                                    scrollTop: targetOffset  
                                },1000);  
                        return false;  
                    }  
                }  
            });  
	//轮播图
	var ul = $('.g2 ul');
	ul.innerHTML += ul.innerHTML;
	var list = $('.g2 ul');
	var lis = list.children;
	var timer = null;
	var num = 0;
	var num1 = -900;
	timer = setInterval(function(){
		num=num-2;
		if(num<=-900){
			num=0;
		}
		$('.g2 ul').css("left",num+"px");
		num1=num1+2;
		if(num1>=0){
			num1=-900;
		}
		$('.g3 ul').css("left",num1+"px");
	},30)
	
	
	
	//视频图片
	$('#featuret .casediv').mouseover(function(){
//		console.log($(this).index()+1);
		$(this).css("background","url(img/"+($(this).index()+1)+"-1.jpg)");
		$(this).find(".newBtn").addClass("hoverBtn");
		$(this).find(".newBtn").removeClass("newBtn");
	});
	$('#featuret .casediv').mouseleave(function(){
		$(this).css("background","url(img/"+($(this).index()+1)+".jpg)");
		$(this).find(".hoverBtn").addClass("newBtn");
		$(this).find(".hoverBtn").removeClass("hoverBtn");
	});
	//鼠标滚动事件 （触发动画效果）
	document.onscroll = function(){
		//返回顶部
		if(body.scrollTop>=window.innerHeight){
			$(".scrollToTop").css("display","block");
			$(".scrollToTops").css("display","block");
		}else{
			$(".scrollToTop").css("display","none");
			$(".scrollToTops").css("display","none");
		}
//		console.log(body.scrollTop);
		//导航li样式
		if(body.scrollTop>=0&&body.scrollTop<300){
			$('.nav li a').css({'color':'#505050','background':'#FAD12C'});
			$('.nav li a').eq(0).css({'color':'#FAD12C','background':'#505050'});
		}
		if(body.scrollTop>=400&&body.scrollTop<2100){
			$('.nav li a').css({'color':'#505050','background':'#FAD12C'});
			$('.nav li a').eq(1).css({'color':'#FAD12C','background':'#505050'});
		}
		if(body.scrollTop>=2200&&body.scrollTop<4000){
			$('.nav li a').css({'color':'#505050','background':'#FAD12C'});
			$('.nav li a').eq(2).css({'color':'#FAD12C','background':'#505050'});
		}
		if(body.scrollTop>=4100&&body.scrollTop<5200){
			$('.nav li a').css({'color':'#505050','background':'#FAD12C'});
			$('.nav li a').eq(3).css({'color':'#FAD12C','background':'#505050'});
		}
		if(body.scrollTop>=5200){
			$('.nav li a').css({'color':'#505050','background':'#FAD12C'});
			$('.nav li a').eq(4).css({'color':'#FAD12C','background':'#505050'});
		}
		
		//左右动画
		if(body.scrollTop>=310&&body.scrollTop<=1300){
			$("#intro .leftmove").addClass("fadeInRight");
			$("#intro .rightmove").addClass("fadeInLeft");
		}
		if(body.scrollTop>=1000&&body.scrollTop<=2000){
			$("#feature .leftmove").addClass("fadeInRight");
			$("#feature .rightmove").addClass("fadeInLeft");
		}
		if(body.scrollTop>=1500&&body.scrollTop<=2400){
			$("#intro .left1").addClass("fadeInRight");
			$("#intro .right1").addClass("fadeInLeft");
		}
		if(body.scrollTop>=2000&&body.scrollTop<=4000){
			$("#featuret .wow").addClass("fadeInUp");
		}
		if(body.scrollTop>=4100&&body.scrollTop<=5000){
			$("#features .zxd").addClass("fadeInLeft");
		}
		if(body.scrollTop>=4400&&body.scrollTop<=5200){
			$("#features .xmd").addClass("fadeInRight");
		}
		if(body.scrollTop>=6000){
			$("#package .animated").addClass("fadeInRight");
		}
	}
	
})
	

