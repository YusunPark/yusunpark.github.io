$(document).ready(function(){

	$(".wy-nav-content").css("max-width","none");

	$('header .links__icon').on('click', function (){
		$("header .header__searchbar").hide();
		$("header .header__links").slideToggle();
	});

	$('header .search__icon').on('click', function (){
		$("header .header__links").hide();
		$("header .header__searchbar").slideToggle(400, function() {
			if($(this).is(':visible')) {
				$(this).find("input[type=text]").focus();
			}
		});
	});

	if($('.wy-menu-vertical li.current>a').length){
		var sidebarScrollPosition = $('.wy-menu-vertical li.current>a').offset().top;
		$('.wy-side-scroll').scrollTop(sidebarScrollPosition-120);
	}
	
});

$(document).ready(function(){
	$(".wy-nav-content").css("max-width","none");
	$(".wy-nav-content-wrap").css("background","#fcfcfc");
	$(".wy-nav-content-wrap-shift").css("left","300px");
	$(".wy-nav-side").css("background","#5D81BB");
	$(".wy-nav-side").css("width","300px");
})
