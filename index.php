<?php
header("Access-Control-Allow-Origin: *");
include_once('https://masud1995.github.io/emilystorefiles/simple_html.php');

$html = file_get_html("http://stores.ebay.co.uk/Teesquare1st/_i.html?rt=nc&_sid=1044867082&_trksid=p4634.c0.m14&_sop=10&_sc=1");

if($html->find('div[class=pview rs-pview]',0)) {
	$product = $html->find('div[class=pview rs-pview]',0);	
	?>
<div class="product_featured">
 <ul class="bxslider">
    <?php
	$s=0;
	if($product->find('div[class=image]'))
	{
		if($product->find('div[class=ttl g-std]'))		
		{	
			if($product->find('span[class=g-b]'))
			{
			if($product->find('div[class=image] a'))
			{						
				$product_image = $product->find('div[class=image] a');
				$product_name = $product->find('div[class=ttl g-std]'); 
				$product_price = $product->find('span[class=g-b]');				
				//print_r($product_price);
					foreach($product_image as $product_img)
					{
						//$s++;
						?>
						<li class="product">
						 <?php echo $product_img; ?> 
						 <?php echo $product_name[$s]; ?> 
						 <?php echo $product_price[$s]; ?> 
						</li>
						<?php
						$s++;
					}
				}
			}
		}	
	}	
	?>
  </ul>
</div>
<?php	
}

?>
