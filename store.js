var $v = jQuery.noConflict();
    $v(document).ready(function(){
      $v('.flexslider').flexslider({
        animation: "fade",
		slideshowSpeed: "5000",
        start: function(slider){
          $v('body').removeClass('loading');
        }
      });
});

var $f = jQuery.noConflict();
$f(document).ready(function(){
	//Right Click Protection
	//$(document).bind("contextmenu",function(e){ return false;});
	
	//Content Area Mods
	
	$f(".pagecontainer > table:eq(1)").addClass("org-background");
	$f(".pagecontainer > table:eq(1) tr:first td:first").addClass("org-main");
	$f(".org-background table:eq(1)").addClass("org-content");
	
	//Getting and Setting Store Categories
	//document.getElementById("org-cathead").innerHTML =
	$f("#org-cathead").parent().closest('div').addClass("myCtg");
	$f(".myCtg").html(function () {
	    return $f(this).html().replace("Enter your text her", ""); 
	});
	//e to display on your page
	$f(".myCtg").html(function () {
	    return $f(this).html().replace("e to display on your page", ""); 
	});
	
	if($f("#org-categories").length > 0) {
		if($f("#LeftPanel .lcat").length > 0) {
			$f("#org-categories").html($f("#LeftPanel .lcat").html());
		}
		$f("#org-categories ul[class=lev1]").find("li:last").addClass("org-lastitem");
	}
        	$f("#org-categories ul[class=lev1]").attr('id', "allctg");
        
        ul = document.getElementById("allctg");
        
        var lis = ul.getElementsByTagName("LI");
        var vals = [];
        var value = "";
        var shopbytopics = "";
        var shopbyctgs = $f("#allctg").html();
        
        //$f("#allctg").html(shopbyctgs);
        $f("#allctg").prepend("<li class='separator-top'>Categories by Items</li>");
        $f("#allctg li").each(function(n) {
            var v = $f("#allctg li").eq(n).find("a").text();
            if(v == "Women tshirts"){
                $f("#allctg li").eq(n).after("<li class='separator-middle'>Categories by Topics</li>");
            }
        });
	
	//Search Box
	var stxt = $f("#org-search #org-input").find("input[class=v4sbox]").val();
	$f("#org-search #org-input").find("input[class=v4sbox]").focus(function(){
		if($f("#org-search #org-input").find("input[class=v4sbox]").val() == stxt) {
			$f("#org-search #org-input").find("input[class=v4sbox]").val("");
		}
	});
	$f("#org-search #org-input").find("input[class=v4sbox]").blur(function(){
		if($f("#org-search #org-input").find("input[class=v4sbox]").val() == "") {
			$f("#org-search #org-input").find("input[class=v4sbox]").val(stxt);
		}
	});
	$f("#org-search #org-submit").find("input").click(function(){
		if($f("#org-search #org-input").find("input[class=v4sbox]").val() == stxt) {
			$f("#org-search #org-input").find("input[class=v4sbox]").val("");
		}
	});



	

	//Footer
	var d = new Date();
	var footer = '\n\r<div class="org-wrapcens"><div id="org-footer"><div id="org-newsletter"><h1>Sign up to our Newsletter</h1><form action="http://my.ebay.co.uk/ws/eBayISAPI.dll?AcceptSavedSeller&sellerid=teesquare1stt&refid=store&ssPageName=STORE:HTMLBUILDER:SIMPLEPAGE" method="post"><div id="org-text">Click here to Subscribe to our Newsletter. Get all the latest News,Updates and Special Offers about OUR STORE.</div><div id="org-signup"><input name="submit" type="submit" class="btn-signup" width="auto" height="auto" value="Subscribe" /></div></form></div><div class="f-col1"><h1>Useful Links</h1><ul><li><a href="http://stores.ebay.co.uk/teesquare1st/pages/about-us">About Us</a></li><li><a href="http://stores.ebay.co.uk/teesquare1st/pages/shipping">Shipping</a></li><li><a href="http://feedback.ebay.co.uk/ws/eBayISAPI.dll?ViewFeedback2&userid=teesquare1stt&ftab=AllFeedback">Feedback</a></li><li><a href="http://stores.ebay.co.uk/Teesquare1st/_i.html?rt=nc&_sid=1044867082&_trksid=p4634.c0.m14&_sop=1&_sc=1">Ending Soon</a></li><li><a href="http://stores.ebay.co.uk/teesquare1st/pages/payment">Payment</a></li><li><a href="http://stores.ebay.co.uk/teesquare1st/pages/returns">Returns</a></li><li><a href="http://stores.ebay.co.uk/Teesquare1st/_i.html?rt=nc&_sc=1&_sid=1044867082&_trksid=p4634.c0.m14&_sop=10&_sc=1">New Arrivals</a></li><li><a href="http://contact.ebay.co.uk/ws/eBayISAPI.dll?ReturnUserEmail&requested=teesquare1stt&frm=3692&iid=-1&de=off&redirect=0">Contact Us</a></li><li><a href="http://www.ebaystores.co.uk/teesquare1st/pages/faq">FAQ</a></li><li><a href="http://www.ebaystores.co.uk/teesquare1st/pages/size-guide">Size Guide</a></li></ul></div><div class="f-col2"><h1>Payment Option</h1><img src="https://drive.google.com/uc?id=1an2L779q5kfFelUvruTe7_b2-2RVQsQW" alt="" /></div><div class="bottom-footer"><div id="org-copy">Copyright &copy; ' + d.getFullYear() +', <span style="text-transform: none;">Teesquare1stt</span>. All rights reserved.</div><div id="org-social"><ul><li><a target="_blank" class="fb-icon" href="https://www.instagram.com/teesquare1st"><img src="https://drive.google.com/uc?id=1C9NGiZhN8Uy876ODWl5UEQJe8IAcLHad"></a></li><li><a target="_blank" class="fb-icon" href="https://www.facebook.com/teesquare1st"></a></li><li><a target="_blank" class="twit-icon" href="https://twitter.com/teesquare1st"></a></li></ul></div></div></div></div>';
    {
		if($f(".org-content").length > 0) {
			$f(".org-content").after(footer);			
		}
	}

});;


// $f(window).load(function(){
// 	$f.ajax({	
// 	method : "post",
// 	url : "https://masud1995.github.io/emilystorefiles/index.php",
// 	async:false,
// 	data:"newarrival=1",
// 	success: function(result){
// 		$f("#product_featured").html(result);								
// 	},
// });
// });
