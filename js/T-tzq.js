// JavaScript Document
$(document).ready(function(){
	
	
	//switch
	var _switchbox = $(".switchbox a");
	_switchbox.on("click",function(){
		$(this).toggleClass("on");
	});
	
	//菜单弹出
	var _opmenuFocus = $(".headmenu a");
	var _opmenuMain = $(".openmenu");
	var _opmenuClose = $(".openmenu-close");
	_opmenuFocus.on("click",function(){
		_opmenuMain.fadeIn(200);
	});
	_opmenuClose.on("click",function(){
		_opmenuMain.fadeOut(200);
	});
	
	//筛选
	var _opfilter = $(".opfilter");
	var _openfilter = $(".openfilter");
	var _openfilterclose = $(".openfilter-close");
	_opfilter.on("click",function(){
		_openfilter.fadeIn(200);
	});
	_openfilterclose.on("click",function(){
		_openfilter.fadeOut(200);
	});
	
	//分享弹出
	var _opshare = $(".opshare");
	var _openshare = $(".openshare");
	_opshare.on("click",function(){
		_openshare.fadeIn(200);
	});
	_openshare.on("click",function(){
		$(this).fadeOut(200);
	});
	
	//收藏点赞订阅
	var _opcollection = $(".opcollection");
	var _oplike = $(".oplike");
	var _subscription = $(".subscription");
	
	_opcollection.on("click",function(){
		$(this).toggleClass("on");
	});
	_oplike.on("click",function(){
		$(this).toggleClass("on");
	});
	_subscription.on("click",function(){
		$(this).toggleClass("on");
	});
	
	//关注
	var _opattention = $(".opattention");
	_opattention.on("click",function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).find("span b").html("关注");
		}else{
			$(this).addClass("on");
			$(this).find("span b").html("已关注");
		}
	});
	//播放语音
	var _opmusic = $(".opmusic");
	_opmusic.on("click",function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).find("span.state").html("点击播放");
		}else{
			$(this).addClass("on");
			$(this).find("span.state").html("正在播放");
		}
	});
	
	//礼物选择
	var _ckgiftlist = $(".giftlist ul li a");
	_ckgiftlist.on("click",function(){
		_ckgiftlist.removeClass("on");
		$(this).addClass("on");
	});
	//送出的礼物
	var _opgift = $(".opgift");
	var _opengift = $(".opengift");
	var _opengiftclose = $(".opengift-close");
	var _openwrap = $(".openwrap");
	_opgift.on("click",function(){
		_opengift.fadeIn(200);
		_openwrap.fadeIn(200);
	});
	_opengiftclose.on("click",function(){
		_opengift.fadeOut(200);
		_openwrap.fadeOut(200);
	});
	
	
	//vip课程列表订阅
	var _opvipsub = $(".opvipsub");
	_opvipsub.on("click",function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(this).html("已订阅");
		}else{
			$(this).removeClass("on");
			$(this).html("订阅<span>59元</span>");
		}
	});
	
	//私人定制提交
	var _opmakedown = $(".opmakedown");
	var _openmakedown = $(".openmakedown");
	var _openmakedownclose = $(".openmakedown-close");
	_opmakedown.on("click",function(){
		_openmakedown.fadeIn(200);
		_openwrap.fadeIn(200);
	});
	_openmakedownclose.on("click",function(){
		_openmakedown.fadeOut(200);
		_openwrap.fadeOut(200);
	});
	
	
	//线下预约课预约
	var _oppvcustom = $(".oppvcustom");
	var _openpvcustom = $(".openpvcustom");
	var _openpvcustomclose = $(".openpvcustom-close");
	_oppvcustom.on("click",function(){
		_openpvcustom.fadeIn(200);
		_openwrap.fadeIn(200);
	});
	_openpvcustomclose.on("click",function(){
		_openpvcustom.fadeOut(200);
		_openwrap.fadeOut(200);
	});
	
	//注册展开会员介绍
	var _opregshowmore = $(".registerlist .item .head .con");
	var _opregshowlist = $(".registerlist .item .cent");
	_opregshowmore.on("click",function(){
		if(!$(this).find(".tr .td .more a").hasClass("on")){
			_opregshowlist.slideUp(200);
			_opregshowmore.find(".tr .td .more a").removeClass("on");
			_opregshowmore.find(".tr .td .more a").html("点击查看详细");
			$(this).find(".tr .td .more a").addClass("on");
			$(this).find(".tr .td .more a").html("点击收回");
			$(this).parents(".item").find(".cent").slideDown();
		}else{
			$(this).find(".tr .td .more a").removeClass("on");
			$(this).find(".tr .td .more a").html("点击查看详细");
			$(this).parents(".item").find(".cent").slideUp();
		}
	});
	
	
	//问答详细三点
	var _opother = $(".opother .other .icon a");
	var _opotherbtns = $(".opother .btns");
	_opother.on("click",function(){
		$(this).parents(".other").find(".btns").toggle();
	});
	$(window).scroll(function(){
		_opotherbtns.hide();
	});
	
	
	
	//排序
	var _opsort = $(".opsort ul li a");
	_opsort.on("click",function(){
		if($(this).hasClass("on")){
			if($(this).find("i").hasClass("up")){
				$(this).find("i").removeClass("up");
				$(this).find("i").addClass("down");
			}else{
				$(this).find("i").removeClass("down");
				$(this).find("i").addClass("up");
			}
		}else{
			_opsort.removeClass("on");
			$(this).addClass("on");
		}
	});
	
	
	
	
	
	function opHeiauto(){
		var _openprice = $(".openprice");
		var _openpricehei = $(".openprice").height();
		_openprice.css({"margin-top":"-"+_openpricehei/2+"px"});
	}
	opHeiauto();
	
	
});