var $s = jQuery.noConflict();
	$s(window).load(function(){
		$s('.product_featured ul>li').eq(10).nextAll().remove();
	});	
	$s(window).load(function(){
		$s(".product_featured ul>li").each(function(){
			$s(this).children("a").attr('target', '_blank'); 
	 		$s(this).find('.ttl.g-std').children("a").attr('target', '_blank');	
			var v = $s(this).children("a").attr("href");
			$s(this).find('.image').find("a").attr('target', '_blank');
			
			$s(this).append('<div class="view-product"><a href="'+v+'" target="_blank">Buy Now</a></div>')
		});		
});
		$s(window).load(function(){
			$s('.product_featured .bxslider').bxSlider({
		  minSlides: 1,
		  maxSlides: 5,
		  slideWidth: 220,
		  slideMargin: 6,
		});
	});	