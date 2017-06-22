window.onload = function(){//可视窗口大小发生改变
				var h = window.innerHeight;
				var w = window.innerWidth; 
				
				var num = window.devicePixelRatio;
				var meta = document.createElement('meta');
				var head = document.getElementsByTagName('head')[0];
				
				
				num = window.devicePixelRatio>1?1/window.devicePixelRatio:1;
				meta.name = "viewport";
				meta.content = "width=device-width,user-scalable=no,initial-scale="+num+",minimum-scale="+num+",maximum-scale="+num;
				head.appendChild(meta);
				
				var i = w/18;
				document.getElementsByTagName('html')[0].style.fontSize = i+'px';
			}
			
			var pic = document.getElementsByClassName("shuffl")[0];
			var list = pic.getElementsByTagName("ul")[0];
			var lis = list.getElementsByTagName("li");
			var timer = null;
			var As = pic.getElementsByTagName('span');
			var num = 0;
			var w = window.innerWidth;
			var now = 0;
			var startx = 0;
			var x = 0;
			
			auto() //轮播图定时器
			function auto(){
				timer = setInterval(function(){
					num++;
					num = num%lis.length;
					tab()
				},2000)
			}
			bind(list,'touchstart',start);
			bind(list,'touchmove',move);
			bind(list,'touchend',end);
			function start(ev){
				clearInterval(timer);
				ev = ev.changedTouches[0];
				list.style.transition = 'none'
				startx = ev.pageX;
				x = now;
			}
			function move(ev){
				ev = ev.changedTouches[0];
				var disx = ev.pageX - startx;
				now = x + disx;
				list.style.transform = list.style.webkitTransform ="translateX("+now+"px)"; 
			}
			function end(){
				num = -Math.round(now/w);
				now = -num*w;
				list.style.transition = '0.5s';
				list.style.transform = list.style.webkitTransform ="translateX("+now+"px)"; 
				if(num>=lis.length){
					num =0;
				}
				if(num<0){
					num=lis.length-1;
				}
				tab();
				auto()
			}
			function tab(){
				now = -num*w;
				list.style.transition = '0.5s';
				list.style.transform = list.style.webkitTransform ="translateX("+now+"px)";
				for(var i=0;i<As.length;i++){
					removeClass(As[i],"active");
				}
				addClass(As[num],'active');
			}
			
			