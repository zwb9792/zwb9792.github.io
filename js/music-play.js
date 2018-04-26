$(document).ready(function() {
	
	//	播放开关
	var loadImg =$('.loading-animation');
	loadImg.animate({opacity:'1'},2000,function(){
		loadImg.css({'opacity':'0','display':'none'});
	})
	var musicA=$('.music');
	var musicImg =$('.music img');
	var musicBox = $('.music-img');
    var mask =$('.mask');
    var musicName =$('.music-name');
	musicA.mouseover(function(){
		    musicName.eq($(this).index()).css('color','#6ed56c');
		    mask.eq($(this).index()).css('display','block');
			musicImg.eq($(this).index()).css('display','block');
			musicImg.eq($(this).index()).addClass('filter');
			
	}).mouseout(function(){
			 mask.eq($(this).index()).css('display','none');
			musicImg.eq($(this).index()).removeClass('filter');
			musicImg.eq($(this).index()).css('display','none');
			musicName.eq($(this).index()).css('color','#666');
	});
	
	
	
	
	var play = $('.music-type a');
	var wholeIndex = $('body');
	var mouse = $('.display-mouse');
	var musicBar = $('.music-bar');
	var name = ['龙卷风-周杰伦', '告白气球-周杰伦', '甜甜的-周杰伦', '简单爱-周杰伦', '孤独患者-陈奕迅'];
	var id = ['muse/龙卷风.mp3','muse/告白气球.mp3','muse/甜甜的.mp3','muse/简单爱.mp3','muse/孤独患者.mp3'];
//	var ids =['http://14.119.124.62/m10.music.126.net/20170620143810/a1a622ad816711dd137a8f1ec426b9ba/ymusic/913b/a797/44f9/7946d7ff555364272fcd7fe8bd24ef9d.mp3?wshc_tag=1&wsts_tag=5948bcf8&wsid_tag=716f09bc&wsiphost=ipdbm','http://183.58.18.33/m10.music.126.net/20170620143841/b6edfe4364a96d861fad61fca6f68a6b/ymusic/6e01/a4d4/bbef/2dda07904eb54d44abb278165e1c6ead.mp3?wshc_tag=1&wsts_tag=5948bd17&wsid_tag=716f09bc&wsiphost=ipdbm','http://180.97.217.36/m10.music.126.net/20170620143907/ebae73302bc7e627329a88ade43c0f2e/ymusic/a120/66a6/09c4/4a0124f064ff25f06e5b4b3ea465295e.mp3?wshc_tag=1&wsts_tag=5948bd31&wsid_tag=716f09bc&wsiphost=ipdbm','http://14.215.93.17/m10.music.126.net/20170620143931/4c91729fa14d713f433d1dc3e6087513/ymusic/8718/ca02/b443/fa866a2a86292037ef028e7a5a752984.mp3?wshc_tag=1&wsts_tag=5948bd48&wsid_tag=716f09bc&wsiphost=ipdbm','http://14.215.93.17/m10.music.126.net/20170620143931/4c91729fa14d713f433d1dc3e6087513/ymusic/8718/ca02/b443/fa866a2a86292037ef028e7a5a752984.mp3?wshc_tag=1&wsts_tag=5948bd48&wsid_tag=716f09bc&wsiphost=ipdbm']
	var index = null;
	var musicTime = $('.music-time');
	var nowTimeBox = $('.current-time');
	var musciName = $('.musicN');
	var time = null;
	var timer = null;
	var audio = null;
	var audioCurrent = null;
	var audioDuration = null;
	play.on('click', function() {
		index = $(this).index();
		if($('.audio')) {
			$('.audio').remove();

		}
		getTime()
		initAudio();
		console.log(index)
	})
	drap(mouse); //控制进度条
  	
 
    
	function drap(obj) { //拖拽进度条
		obj.on('mousedown', function(ev) {
			var parent = obj.parent().innerWidth();
			var x = ev.pageX - obj.position().left;
			ev.preventDefault() //阻止浏览器默认行为
			clearInterval(time);
			var mouseX = null;
			if(audio != null) {
				audioCurrent = audio.currentTime;
				$(document).on('mousemove', function(ev) {
					mouseX = ev.pageX - x;
					if(mouseX < 0) {
						mouseX = 0;
					}
					if(mouseX >= parent) {
						mouseX = parent;
					}

					obj.css({
						'left': mouseX + 'px',

					});
					musicTime.html()
					musicBar.css('width', mouseX + 'px');
					musicBar.css('transition', 'none');

					nowTimeBox.html(getSpeedTime(mouseX, parent)); //获取拖拽时的音乐时间

					ev.preventDefault() //阻止浏览器默认行为

				});
				$(document).on('mouseup', function() {
					$(document).unbind('mousemove');
					$(document).unbind('mouseup');
					var time = (mouseX / parent) * audio.duration;
					audio.currentTime = time;
					getTime()
				})
			}

		})
	}

	function getSpeedTime(mouseX, parent) { //快进的时间获取
		var time = (mouseX / parent) * audio.duration;
		time = Math.floor(parseInt(time))
		var ss = time % 60;
		var m = Math.floor(time / 60);//向下取整
		var str = '';
		if(ss < 10) {
			str = m + ":" + "0" + ss;
		}
		if(ss >= 10) {

			str = m + ":" + ss;
		}
		return str
	}
	var autoPlay = $('.play'); //音乐状态
	autoPlay.on('click', function() {
		
		
		if(audio != null) {
			if(autoPlay.hasClass('icon-play')) {

				audio.play();
				autoPlay.removeClass('icon-play').addClass('icon-pause');

			} else {
				audio.pause();
				autoPlay.removeClass('icon-pause').addClass('icon-play');

			}
		}
	})



	function getTime() { //获取媒体的时间以设置进度条长度；
		time = setInterval(function() {
			speedMusic()

			if(audio != null) { 
				if(audioCurrent == audioDuration) {
					$('.audio').remove();
					index++;
					if(index > 4) {
						index = 0
					}
					initAudio();
				}
			}
		}, 1000);
	}
	
		var initAudio = function() { //创建一个mp3媒体；
		clearInterval(time); //清楚定时器
		musciName.html();
		audio = new Audio();
		audio.className = 'audio';
		audio.src = id[index];
		wholeIndex.append(audio);

		getTime(audio);
		totalTime(audio)
		audio.play();
		autoPlay.removeClass('icon-play').addClass('icon-pause');
		musciName.html(name[index]);

			}

	function speedMusic() { //控制进度条
		audioCurrent = audio.currentTime;
		var time = Math.floor(parseInt(audioCurrent))

		var ss = time % 60; //转为秒
		var m = Math.floor(time / 60);
		var str = '';
		if(ss < 10) {
			str = m + ":" + "0" + ss;
		}
		if(ss >= 10) {

			str = m + ":" + ss;
		}
		musicBar.css('width', (audioCurrent / audio.duration) * 100 + '%');
		musicBar.css('transition', 'width .6s ease;');
		mouse.css('left', (audioCurrent / audio.duration) * 100 + '%');
		nowTimeBox.html(str);
	}

	function totalTime() { //获取音乐总时长
		clearInterval(timer);
		timer = setInterval(function() {
			audioDuration = audio.duration;
			var second = audio.duration / 60;
			second = second.toFixed(2);
			var str = second.toString();
			var strTotal = '';
			str.split('.');
			arr = str[2] + str[3]
			if(audio.duration != NaN) {

				if(parseInt(arr) < 10) {
					strTotal = str[0] + ':' + "0" + str[3];
				}
				if(parseInt(arr) >= 10) {
					strTotal = str[0] + ':' + str[2] + str[3];
				}
				if(parseInt(arr) > 60) {
					strTotal = (parseInt(str[0]) + 1) + ':' + (parseInt(arr) - 60);
				}
				musicTime.html(strTotal);
			}

		}, 30)
	}
	//控制音乐声音
	var vCBtn = $('.volume-control');
	var icon = $('.volume-content p');
	var musicCir = $('.volume-cir')
	var mute = $('.volume')
	
 	volumeControl()//音量控制
	function volumeControl() {
		vCBtn.on('mousedown', function(ev) {
			var x = ev.pageX - icon.width();
			ev.preventDefault() //阻止浏览器默认行为
			$(document).on('mousemove', function(ev) {
				var length = ev.pageX - x
				if(length >= 90) {
					length = 90
				}
				if(length <= 0) {
					length = 0;
					mute.removeClass('icon-volume-down').addClass('icon-volume-off')
				}
				if(length > 0) {
					mute.removeClass('icon-volume-off').addClass('icon-volume-down')
				}
				if(audio != null) {
					audio.volume = length / icon.parent().width()
				}
				//				console.log(length/icon.parent().width())

				icon.css('width', length + 'px');
				ev.preventDefault() //阻止浏览器默认行为
			})
			$(document).on('mouseup', function() {
				$(document).unbind('mousemove');
				$(document).unbind('mouseup');
			})

		})
	}
	//切换歌曲
	var next = $('.forward'); //下一首
	var prev = $('.backward'); //上一首
	next.on('click', function() {
		if(audio != null) {
			$('.audio').remove();
			index++;
			if(index > 4) {
				index = 0
			}
			initAudio()
			getTime()
		}

	})
	prev.on('click', function() { //上一首
		if(audio != null) {
			$('.audio').remove();
			index--;
			if(index < 0) {
				index = 4
			}
			initAudio()
			getTime()
		}
	});
	
	
	//点击like
	$('.icon-heart-empty').on('click',function(){
		$(this).hide();
		$(this).next().show();
	})
	
	$('.icon-heart').on('click',function(){
		$(this).hide();
		$(this).prev().show();
	})

})