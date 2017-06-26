function hunt(data){
	var ipt = $('#txt');
	var list = $('#list');
	var str = '';

	for(var i = 0; i < data.count; i++) {
		str += '<li class="cleafix">'+
			'<a href="javascript:;" id="'+data.musics[i].id+'">'+
				'<div class="list-img">'+
					'<img src="'+data.musics[i].image+'"/>'+
				'</div>'+
				'<div class="music-detail">'+
					'<p><span class="music-name">'+data.musics[i].title+'</span><span class="attribution">(音乐人)</span></p>'+
					'<p><span class="attribution">表演者：</span><span class="attribution">'+data.musics[i].attrs.singer+'</span></p>'+
				'</div>'+
			'</a>'+
		'</li>'
		list.html(str);
	}

$('.musicSearch').remove();
	var clickA = $('#list').find('a');
	var ipt = $('#txt');

	clickA.on('click', function() {
		var nav = $('.content')
		var title = $(this).find('.music-name').html();
		var id = $(this).attr('id');
		nav.remove();
		$.ajax({
			type: "get",
			dataType : "jsonp",
			url: "https://api.douban.com/v2/music/search?q="+title,
			jsonp: "callback",
			success: function(data) {
				for(var i=0;i<data.musics.length;i++){
					if(data.musics[i].id == id){
						var val = createNew(data.musics[i]);
						$('#cont').html(val)
					}
				}
			}
		})
		
	})
	
}
	
		//https://music.douban.com/j/subject_suggest?q=%E5%B9%B3%E5%87%A1%E4%B9%8Bl


function createNew(data){
	var title = $('title');
	var val = data.title+'(豆瓣)';
	title.html(val);
	
	console.log(data);
	
	var str = '<div class="sear_con cleafix">'+
			'<div class="title"><h1>'+data.title+'</h1></div>'+
			'<div class="sear_left">'+
				'<div class="sear_left_cont1">'+
					'<div class="sear_left_cont1_l">'+
						'<div class="sear_left_cont1_l_1">'+
							'<img src="'+data.image+'"/>'+
							'<div class="similar">'+
								'<a href="javascript:;">'+
									'<span></span>'+
									'听相似歌曲'+
								'</a>'+
							'</div>'+
						'</div>'+
						'<div class="sear_left_cont1_l_2">'+
							'又名：'+data.alt_title+''+
							'<br />'+
							'<span class="sp"><span>表演者：</span><a href="javascript:;">'+data.attrs.singer[0]+'</a></span>'+
							'<br />'+
							'<span>专辑类型：</span>'+data.attrs.version+'<br />'+
							'<span>介质：</span>'+data.attrs.media[0]+'<br />'+
							'<span>发行时间：</span>'+data.attrs.pubdate[0]+'<br />'+
							'<span class="sp"><span>出版者：</span><a href="javascript:;">'+data.attrs.publisher[0]+'</a></span>'+
						'</div>'+
					'</div>'+
					'<div class="sear_left_cont1_r">'+
						'<h3>豆瓣评分</h3>'+
						'<div class="score cleafix">'+data.rating.average+'</div>'+
						'<div class="score_cont">'+
							'<a class="stars" href="javascript:;" ></a>'+
							'<a class="num" href="javascript:;"><span>'+data.rating.numRaters+'</span>人评价</a>'+
						'</div>'+
						'<ul>'+
							'<li>5星<span></span><a href="javascript:;">64.6%</a></li>'+
							'<li>4星<span></span><a href="javascript:;">26.4%</a></li>'+
							'<li>3星<span></span><a href="javascript:;">7.1%</a></li>'+
							'<li>2星<span></span><a href="javascript:;">1.2%</a></li>'+
							'<li>1星<span></span><a href="javascript:;">0.7%</a></li>'+
						'</ul>'+
					'</div>'+
				'</div>'+
				'<div class="fond">'+
					'<div class="fond_l">'+
						'<p>'+
							'<a href="javascript:;">想听</a>'+
							'<a href="javascript:;">在听</a>'+
							'<a href="javascript:;">听过</a>'+
							'<span>评价:</span>'+
							'<span class="stars"></span>'+
						'</p>'+
						'<ul>'+
							'<li><img src="search_img/ul_1.gif"/><span>写短评</span></li>'+
							'<li><img src="search_img/ul_2.gif"/><span>写乐评</span></li>'+
							'<li><img src="search_img/ul_3.gif"/><span>加入豆列</span></li>'+
							'<li><span>分享到</span> <img src="search_img/sj_1.jpg"/></li>'+
						'</ul>'+
					'</div>'+
					'<span class="recom">推荐</span>'+
				'</div>'+
				'<h2>简介······</h2>'+
				'<div class="intro">'+
					'<span>十年平凡之路 朴树后会有期<br />我曾经跨过山和大海<br />也穿过人山人海<br />我曾经拥有着一切<br />转眼都飘散如烟<br />我们在跌宕不凡的人生路上<br />寻找静谧平凡」<br />从2003年《生如夏花》专辑盛誉之后，朴树鲜有新作，做为华语乐坛为数不多值得期待的音乐人，2014年7月，他以韩寒电影《后会无期》主题歌的方式送出《平凡之路》。<br />《平凡之路》缘自朴树正在准备的全新专辑，也缘自韩寒的诚意相邀。一首尚未完成的Demo，一个轻茶浅谈的下午，一份惺惺相惜的如水之交，加上工作室里反复调整、录音棚中数次较劲，终于在最后的交歌时间，呈上这首不平凡的《平凡之路》。<br />在朴树的音乐面前，文字描述已无足轻重，前奏响起， 歌声唱起，，“徘徊着的，在路上的，你要走吗，易碎的，骄傲着，那也曾是我我的模样”，声声入耳，字字入心，恍若隔世之后深深庆幸，是的没错，这是朴树，这是不会让人失望的他，这是期待已久的《平凡之路》，他始终游离于视线之外，但寸步未离你的心间。韩寒电影《后会无期》备受瞩目，而朴树在主题歌《平凡之路》后，新专辑的制作工作也进入紧锣密鼓的阶段。朴树归来，后会有期。'+ 
					'</span>'+
					'<a href="javascript:;">(展开全部)</a>'+
				'</div>'+
				'<h2>曲目······</h2>'+
				'<div class="track">'+data.attrs.tracks+'</div>'+
				'<h2>喜欢听"平凡之路"的人也喜欢的音乐人······</h2>'+
				'<div class="other">'+
					'<div class="other_1"><img src="search_img/other1.jpg"/><a href="javascript:;">GALA</a><img class="other_2" src="search_img/other_1.png"/></div>'+
					'<div class="other_1"><img src="search_img/other2.jpg"/><a href="javascript:;">麦斯米兰</a></div>'+
					'<div class="other_1"><img src="search_img/other3.jpg"/><a href="javascript:;">蔡健雅</a></div>'+
					'<div class="other_1"><img src="search_img/other4.jpg"/><a href="javascript:;">Adele</a></div>'+
					'<div class="other_1"><img src="search_img/other5.jpg"/><a href="javascript:;">刺猬★Hedgehog</a><img class="other_2" src="search_img/other_1.png"/></div>'+
				'</div>'+
				'<h2>喜欢听"平凡之路"的人也喜欢的唱片······</h2>'+
				'<div class="record">'+
					'<div class="record_1"><img src="search_img/record1.jpg"/><a href="javascript:;">后会无期</a></div>'+
					'<div class="record_1"><img src="search_img/record2.jpg"/><a href="javascript:;">夜空中最亮的星</a></div>'+
					'<div class="record_1"><img src="search_img/record3.jpg"/><a href="javascript:;">东极岛岛歌</a></div>'+
					'<div class="record_1"><img src="search_img/record4.jpg"/><a href="javascript:;">安河桥北</a></div>'+
					'<div class="record_1"><img src="search_img/record5.jpg"/><a href="javascript:;">生如夏花</a></div>'+
					'<div class="record_1"><img src="search_img/record6.jpg"/><a href="javascript:;">山丘</a></div>'+
					'<div class="record_1"><img src="search_img/record7.jpg"/><a href="javascript:;">南山南</a></div>'+
					'<div class="record_1"><img src="search_img/record8.jpg"/><a href="javascript:;">世界</a></div>'+
					'<div class="record_1"><img src="search_img/record9.jpg"/><a href="javascript:;">送别</a></div>'+
					'<div class="record_1"><img src="search_img/record10.jpg"/><a href="javascript:;">我去2000年</a></div>'+
				'</div>'+
				'<div class="essay">'+
					'<h2>短评······(<a href="javascript:;">全部7789条</a>)</h2>'+
					'<span>我来说两句</span>'+
				'</div>'+
				'<div class="essay_nav"><a href="javascript:;">热门</a>/<a class="nav_sty" href="javascript:;">最新</a>/<a class="nav_sty" href="javascript:;">好友</a></div>'+
				'<div class="discuss">'+
					'<ul >'+
						'<li>'+
							'<h3><a class="name" href="javascript:;">Luffyjun</a><span class="sp1 sp_1"></span><span class="sp2">2014-07-26</span><span class="sp3">212</span><a class="with" href="javascript:;">有用</a></h3>'+
							'<p>朴树可真是转型了啊，有许巍的空旷有汪峰的大气，可，忽然来段周杰伦的Rap是怎么回事啊。。。歌词不错。。。错过的和过错的都放下吧</p>'+
						'</li>'+
						'<li>'+
							'<h3><a class="name" href="javascript:;">不约！直叔不约</a><span class="sp1 sp_2"></span><span class="sp2">2014-08-01</span><span class="sp3">13</span><a class="with" href="javascript:;">有用</a></h3>'+
							'<p>下张专辑真的是后会无期了吧？</p>'+
						'</li>'+
						'<li>'+
							'<h3><a class="name" href="javascript:;">JulyChan</a><span class="sp1 sp_3"></span><span class="sp2">2014-07-17</span><span class="sp3">19</span><a class="with" href="javascript:;">有用</a></h3>'+
							'<p>屠龙的人心里还挂着一把屠龙刀，可是龙已经不见了。于是他们叫他，先烈。</p>'+
						'</li>'+
						'<li>'+
							'<h3><a class="name" href="javascript:;">白色的蓝💎</a><span class="sp1 sp_4"></span><span class="sp2">2014-07-17</span><span class="sp3">5</span><a class="with" href="javascript:;">有用</a></h3>'+
							'<p>为什么有早期周杰伦的感觉？</p>'+
						'</li>'+
						'<li>'+
							'<h3><a class="name" href="javascript:;">Topfun</a><span class="sp1 sp_5"></span><span class="sp2">2014-07-18</span><span class="sp3">510</span><a class="with" href="javascript:;">有用</a></h3>'+
							'<p>十年前你说生如夏花般绚烂，十年后你说平凡才是唯一答案 http://www.xiami.com/song/1773346501</p>'+
						'</li>'+
					'</ul>'+
					'<p class="more">> <a href="javascript:;">更多短评 7790条</a></p>'+
				'</div>'+
				'<div class="essay">'+
					'<h2>平凡之路的乐评······(<a href="javascript:;">全部204条</a>)</h2>'+
					'<span>我要写乐评</span>'+
				'</div>'+
				'<div class="record">'+
					'<ul>'+
						'<li>'+
							'<h3><a href="javascript:;">朴树，欢迎回来。</a><span><img src="search_img/sj_1.jpg"/></span></h3>'+
							'<div class="datum"><img src="search_img/tx1.jpg"/><span class="sp2_1">DuesExMachina</span><span class="sp2_2 sps1"></span><span class="sp2_3">2014-07-16 10:47:30</span></div>'+
							'<div class="datum_cont1">多天不上网页版豆瓣，一登陆吓尿了。 随便五分钟打了不到一千字抒发了一下小感想居然被顶到了豆瓣音乐热评首页= =真是一个意想不到的结局…… 于是……我觉定好好地修改一下这篇评论……不然这么敷衍的文章实在是太对不起大伙儿的“有用”了…… ——————————————... '+
								'<a href="javascript:;">(120回应)</a>'+
							'</div>'+
							'<div class="datum_cont2"><span>864有用/47没用</span></div>'+
						'</li>'+
						'<li>'+
							'<h3><a href="javascript:;">红白蓝三部曲之后会无期</a><span><img src="search_img/sj_1.jpg"/></span></h3>'+
							'<div class="datum"><img src="search_img/tx2.jpg"/><span class="sp2_1">已注销</span><span class="sp2_2 sps2"></span><span class="sp2_3">2014-07-16 16:21:01</span></div>'+
							'<div class="datum_cont1">《我去2000年》、《纯真年代》还有难产缺席的《每个人的一生 都是一次远行》，号称是当年的红白蓝三部曲。 那时候朴树还在卡带里唱歌 当年打口还盛行，MP3还不知道是什么东西，乔布斯都还没有癌 当年房价不过2000，你也有机会成为下一个王校长 当年腾讯淘宝都是... '+
								'<a href="javascript:;">(40回应)</a>'+
							'</div>'+
							'<div class="datum_cont2"><span>234有用/24没用</span></div>'+
						'</li>'+
						'<li>'+
							'<h3><a href="javascript:;">十年平凡之路不平凡</a><span><img src="search_img/sj_1.jpg"/></span></h3>'+
							'<div class="datum"><img src="search_img/tx3.jpg"/><span class="sp2_1">喲嚯嚯嚯~~</span><span class="sp2_2 sps3"></span><span class="sp2_3">2014-07-16 14:34:20/span></div>'+
							'<div class="datum_cont1">'+
								'十多年前，我上初中，爱朴树。那时候别的同学都在听周杰伦，我就爱朴树。那时候我们用的不是MP3，是放磁带的收音机，那时候我一个星期的零花钱是2块钱（农村，请理解），要好几个星期赞下不能吃零食，不能买文具，然后再要周末的时候早点干完农活，然后带上木匠表哥送我 '+
								'<a href="javascript:;">(38回应)</a>'+
							'</div>'+
							'<div class="datum_cont2"><span>190有用/12没用</span></div>'+
						'</li>'+
						'<li>'+
							'<h3><a href="javascript:;">朴树：十五年以来</a><span><img src="search_img/sj_1.jpg"/></span></h3>'+
							'<div class="datum"><img src="search_img/tx4.jpg"/><span class="sp2_1">cloud.p</span><span class="sp2_2 sps4"></span><span class="sp2_3">2014-07-23 12:58:15</span></div>'+
							'<div class="datum_cont1">2012年10月份的时候，朴树在上海大舞台和张悬合作了一场名叫“树与花”的演唱会。虽然两人都是民谣歌手，但是表现出来的气质却大相径庭。张悬举止自然，亲切动人，有着台湾流行女歌手应该具有的一切素养，而朴树在唱歌之外的时间里，甚至很难流畅的说完一个长句，他对着台下观... '+
								'<a href="javascript:;">(29回应)</a>'+
							'</div>'+
							'<div class="datum_cont2"><span>159有用/2没用</span></div>'+
						'</li>'+
						'<li>'+
							'<h3><a href="javascript:;">我是来贴歌词的，泪目</a><span><img src="search_img/sj_1.jpg"/></span></h3>'+
							'<div class="datum"><img src="search_img/tx5.jpg"/><span class="sp2_1">隐</span><span class="sp2_2 sps5"></span><span class="sp2_3">2014-07-16 11:12:38</span></div>'+
							'<div class="datum_cont1">朴树、韩寒 徘徊着的 在路上的 你要走吗 via via 易碎的 骄傲着 那也曾是我的模样 沸腾着的 不安着的 你要去哪 via via 谜一样的 沉默着的 故事你真的 在听吗 我曾经跨过山和大海 也穿过人山人海 我曾经拥有着一切 转眼都飘散如烟 我曾经失落 失望 失掉 所有方向 ...'+
								'<a href="javascript:;">(34回应)</a>'+
							'</div>'+
							'<div class="datum_cont2"><span>81有用/11没用</span></div>'+
						'</li>'+
					'</ul>'+
					'<p><span>></span><a href="javascript:;">更多乐评204篇</a></p>'+
				'</div>'+
				'<h2>"平凡之路"的论坛······</h2>'+
				'<table border="" cellspacing="" cellpadding="" class="tab">'+
					'<tbody>'+
						'<tr>'+
							'<td></td>'+
							'<td></td>'+
							'<td></td>'+
							'<td></td>'+
						'</tr>'+
						'<tr>'+
							'<td><a href="javascript:;" title="十年前，你说生如夏花一样绚烂；十年后，你说平凡才是唯一的答案">十年前，你说生如夏花一样绚烂；十年后，你说平凡...</a></td>'+
							'<td>来自<a href="javascript:;">Aurora.神</a></td>'+
							'<td>17回应</td>'+
							'<td>2015-06-10</td>'+
						'</tr>'+
						'<tr>'+
							'<td><a href="javascript:;" title="歌词">歌词</a></td>'+
							'<td>来自<a href="javascript:;">深夜声咽</a></td>'+
							'<td>11回应</td>'+
							'<td>2014-08-12</td>'+
						'</tr>'+
						'<tr>'+
							'<td><a href="javascript:;" title="必须说，韩寒拍这部电影最大的功劳，该就是让朴树又开口唱歌了吧。">必须说，韩寒拍这部电影最大的功劳，该就是让朴树...</a></td>'+
							'<td>来自<a href="javascript:;">司南</a></td>'+
							'<td>22回应</td>'+
							'<td>2015-12-29</td>'+
						'</tr>'+
						'<tr>'+
							'<td><a href="javascript:;" title="旅途+那些花儿的歌词既视感">旅途+那些花儿的歌词既视感</a></td>'+
							'<td>来自<a href="javascript:;">苏凉</a></td>'+
							'<td>15回应</td>'+
							'<td>2015-06-10</td>'+
						'</tr>'+
						'<tr>'+
							'<td><a href="javascript:;" title="viva la vida">viva la vida</a></td>'+
							'<td>来自<a href="javascript:;">boson/猫箱子被迫</a></td>'+
							'<td>12回应</td>'+
							'<td>2015-06-10</td>'+
						'</tr>'+
					'</tbody>'+
				'</table>'+
				'<p class="browse"><span>></span><a href="javascript:;">浏览更多话题</a></p>'+
			'</div><!--sear_left结束-->'+
			'<div class="sear_right">'+
				'<div class="imgge"><a href="jaxascript:;"><img src="search_img/inset.jpg"/></a><p>广告</p></div>'+
				'<h2>豆瓣成员常用的标签(共581)             &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·     </h2>'+
				'<div class="tags-right">'+
		            '<a class="music-tags" href="/tag/'+data.tags[0].name+'">'+data.tags[0].name+'</a>'+
		            '<a class="music-tags" href="/tag/'+data.tags[1].name+'">'+data.tags[1].name+'</a>'+
		            '<a class="music-tags" href="/tag/'+data.tags[2].name+'">'+data.tags[2].name+'</a>'+
		            '<a class="music-tags" href="/tag/'+data.tags[3].name+'">'+data.tags[3].name+'</a>'+
		            '<a class="music-tags" href="/tag/'+data.tags[4].name+'">'+data.tags[4].name+'</a>'+
		            '<a class="music-tags" href="/tag/'+data.tags[5].name+'">'+data.tags[5].name+'</a>'+
		            '<a class="music-tags" href="/tag/'+data.tags[6].name+'">'+data.tags[6].name+'</a>'+
		            '<a class="music-tags" href="/tag/'+data.tags[7].name+'">'+data.tags[7].name+'</a>'+
   				 '</div>'+
   				 '<h2>以下豆列推荐 · · · · · ·<span class="pl">(<a href="javascript:;">全部</a>)</span></h2>'+
   				 '<ul class="bs">'+
			       '<li>'+
			            '<a href="javascript:;" target="_blank">《天下足球》和《冠军欧洲》顾名思义是CCTV两档非常优秀的音乐节目（二）</a>'+
			                '<span class="pl">(NigelCrane)</span>'+
			        '</li>'+
			        '<li>'+
			            '<a href="javascript:;" target="_blank">电视节目，广告，网络视频的背景配乐</a>'+
			                '<span class="pl">(IVAN)</span>'+
			        '</li>'+
			        '<li>'+
			            '<a href="javascript:;" target="_blank">说说那些打动你的歌词吧！</a>'+
			                '<span class="pl">(郑小刷)</span>'+
			        '</li>'+
			        '<li>'+
			            '<a href="javascript:;" target="_blank">有哪些在KTV里一唱全场必嗨的歌？</a>'+
			                '<span class="pl">(王喝冰)</span>'+
			        '</li>'+
			        '<li>'+
			            '<a href="javascript:;" target="_blank">钟爱的一些音乐</a>'+
			                '<span class="pl">(Mix安冬)</span>'+
			        '</li>'+
   				 '</ul>'+
   				 '<h2>谁听这张唱片?</h2>'+
   				 '<div class="uls">'+
   				 	'<ul>'+
   				 		'<li>'+
   				 			'<div class="lis1"><a href="javascript:;"><img src="search_img/list1_1.jpg"/></a></div>'+
   				 			'<div class="lis2">'+
   				 				'<a href="javascript:;">不爱读书的坏小</a><br />'+
   				 				'<span class="spa1">2小时前听过</span><span class="spa2 spa_i1"></span>'+
   				 				'<p></p>'+
   				 			'</div>'+
   				 		'</li>'+
   				 		'<li>'+
   				 			'<div class="lis1"><a href="javascript:;"><img src="search_img/list1_2.jpg"/></a></div>'+
   				 			'<div class="lis2">'+
   				 				'<a href="javascript:;">米高</a><br />'+
   				 				'<span class="spa1">今天上午听过</span><span class="spa2 spa_i2"></span>'+
   				 				'<p>这才是音乐</p>'+
   				 			'</div>'+
   				 		'</li>'+
   				 		'<li>'+
   				 			'<div class="lis1"><a href="javascript:;"><img src="search_img/list1_3.jpg"/></a></div>'+
   				 			'<div class="lis2">'+
   				 				'<a href="javascript:;">陈街老友</a><br />'+
   				 				'<span class="spa1">今天上午听过</span><span class="spa2 spa_i3"></span>'+
   				 				'<p>tags:朴树</p>'+
   				 			'</div>'+
   				 		'</li>'+
   				 		'<li>'+
   				 			'<div class="lis1"><a href="javascript:;"><img src="search_img/list1_4.jpg"/></a></div>'+
   				 			'<div class="lis2">'+
   				 				'<a href="javascript:;">余生</a><br />'+
   				 				'<span class="spa1">今天凌晨听过</span><span class="spa2 spa_i4"></span>'+
   				 				'<p>tags:韩寒 朴树 后会无期</p>'+
   				 			'</div>'+
   				 		'</li>'+
   				 	'</ul>'+
   				 	'<p class="pa">><a href="javascrip:;">1241人在听</a></p>'+
   				 	'<p class="pa">><a href="javascrip:;">28247人听过</a></p>'+
   				 	'<p class="pa">><a href="javascrip:;">2842人想听</a></p>'+
   				'</div>'+
				'<div class="imgge imgge_b"><a href="jaxascript:;"><img src="search_img/insets.jpg"/></a><p>广告</p></div>'+
   				'<div class="indent">'+
				    '<ul class="bs">'+
				        '<li>'+
				            '<a href="https://music.douban.com/subject/25927970/offers">2张二手唱片欲转让</a>(0.10至 6.00元)'+
				        '</li>'+
				        '<li>有2842人想听,手里有一张闲着?'+
				            '<a class="rr j a_show_login" href="javascript:;">'+
				                '<span>&gt; 点这儿转让</span>'+
				            '</a>'+
				        '</li>'+
				    '</ul>'+
				'</div>'+
				'<p class="pl">订阅关于平凡之路的评论: <br><span class="feed">'+
    			'<a href="javascript:;" class="wifi"> feed: rss 2.0</a></span></p>'+
    			'<div class="mobile">'+
					'<a href="javascript:;">'+
						'<p>豆瓣FM客户端</p>'+
						'<span>让好音乐继续</span>'+
					'</a>'+
				'</div>'+
			'</div>'+
		'</div>'
	
	
	
	return str;
}

function returname(obj){
	if(!obj){
		
		obj ='无'
	}
	return obj;
	console.log(obj)
}