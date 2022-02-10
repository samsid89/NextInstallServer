<?php
require_once("includes/config.php");
require_once("includes/connection.php");
require_once("classes/app.cls.php");
require_once("includes/functions.php");
$app= new App();
if(!isset($_SESSION['assecc']))
{
  header("Location:website_access");  
}

if(isset($_SESSION["frontuser"]))
{
  $username=$_SESSION["frontuser"];
  $user_id=$_SESSION["frontuser_id"];
  
}
else{
  $username="";
}

// currency changer api
$req_url = 'https://prime.exchangerate-api.com/v5/06bb1216684e6d05c706b46b/latest/USD';
/*$response_json = file_get_contents($req_url);
$vari = 0;
if(false !== $response_json) {
    try {
		$response = json_decode($response_json);
		if('success' === $response->result) {

		$vari = "1";
			// YOUR APPLICATION CODE HERE, e.g.
		}

    }
    catch(Exception $e) {
    }
}*/

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://prime.exchangerate-api.com/v5/06bb1216684e6d05c706b46b/latest/USD",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "postman-token: 9ac3290a-3c6a-a97b-0023-358169f3b6b8"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  //echo $response;
  $response = json_decode($response);
		if('success' === $response->result) {

		$vari = "1";
			// YOUR APPLICATION CODE HERE, e.g.
		}
}
// end currency chenger api
?>
<?php
     $cartTotal=array();
     if(isset($_SESSION["shopping_cart"])){
      foreach($_SESSION["shopping_cart"] as $product=>$val){
		  $newamt =$val["price"];
			$asdas = str_replace(',', '', $newamt); 
        $amt=$asdas;
        $cartTotal[]=$amt;
      }
     }
	 
	 if(isset($_SESSION["shopping_ringcart"])){
 foreach($_SESSION["shopping_ringcart"] as $product=>$val){
   $amt=$val["price"]*$val["qty"];
   $cartTotal[]=$amt;
 }
}	 
	 if(isset($_SESSION["weddingringselect"])){
 foreach($_SESSION["weddingringselect"] as $product=>$val){
   $amt=$val["Amt"]*$val["qty"];
   $cartTotal[]=$amt;
 }
}

     $wishCount=array();
	 if(isset($_SESSION["frontuser"])){
		  $user_id=$_SESSION["frontuser_id"];
		 $data=array(    
					"user_id"=>$user_id
				  );
		$checkwish=$app->check("tbl_user_wishlist",$data);
		if($checkwish==true){
		$wishtCount = mysqli_num_rows($checkwish);
		}
		else{
			$wishtCount = 0;
		}
		 
	 }
	 else{
		  if(isset($_SESSION["wishlist"])){
      foreach($_SESSION["wishlist"] as $product=>$val){
        $amt=$val["id"];
        $wishCount[]=$amt;
      }
      $wishtCount=count($wishCount);
     }
     else {
      $wishtCount=0;
     }
		 
	 }
	 
     function charLimit($string)
     { 
      $string = strip_tags($string);
      if (strlen($string) > 25) {
      
          // truncate string
          $stringCut = substr($string, 0, 25);
          $endPoint = strrpos($stringCut, ' ');
      
          //if the string doesn't contain any space then it will cut without word basis.
          $string = $endPoint? substr($stringCut, 0, $endPoint) : substr($stringCut, 0);
          $string .= '...';
      }
      echo $string;
     }
?> 
<!DOCTYPE html>
<html class="wide wow-animation" lang="en">
<head>
<!-- Site Title-->
<title>Welcome to Big Diamond</title>
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta charset="utf-8">
<link rel="icon" href="images/favicon.png" type="image/x-icon">
<!-- Stylesheets-->
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Playfair+Display:400,700,900,400italic,700italic%7CRoboto:400,300,100,700,300italic,400italic,700italic%7CMontserrat:400,700">
<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="css/fonts.css">
<link rel="stylesheet" href="css/flipper.css">
<link rel="stylesheet" href="css/slick.css">
<link rel="stylesheet" href="css/slick-theme.css">
<link rel="stylesheet" href="css/style.css">
<!-- Prefetch DNS for external assets -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//www.google-analytics.com"> 
<link rel="dns-prefetch" href="//cdn.domain.com">
<style>
.error
{
  color:#f27c7d;
}
</style>
<style>

		#hdTuto_search{

			display: none;

		}
.list-gpfrm{
	z-index:999999;
    position: absolute;
    background: #f2f2f2;
    padding: 5px;
    top: 50px;
}
		.list-gpfrm-list a{

			text-decoration: none !important;

		}

		.list-gpfrm li{

			cursor: pointer;

			padding: 4px 0px;

		}

		.list-gpfrm{

			list-style-type: none;

    		background: #d4e8d7;

		}

		.list-gpfrm li:hover{

			

		}

 
		.rd-navbar-static .rd-navbar-cross-form-submit, .rd-navbar-fullwidth .rd-navbar-cross-form-submit {
    position: relative;
    background-color: transparent;
    width: auto;
    height: auto;
    line-height: inherit;
    font-size: 16px;
    border: none;
}
.rd-navbar-cross-form-submit {
    display: inline-block;
    position: relative;
    width: 48px;
    height: 48px;
    line-height: 48px;
    cursor: pointer;
    color: #141414;
    text-align: center;
    font-size: 24px;
}
.rd-navbar-cross-form-submit:before {
    content: "\f00d";
    font-weight: 400;
    font-family: fontawesome;
}
.rd-navbar-cross-form-submit:before {
    content: "\f00d";
    font-weight: 400;
    font-family: fontawesome;
}
</style>
<style>
.loader_main {
border: 3px solid #ecdede;
    border-radius: 50%;
    border-top: 3px solid #f27c7d;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    position: absolute;
    top: 75px;
    left: 60px;
}

.bodyloader_main {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    position: fixed;
   top: 40%;
    left: 46%;
    z-index: 9999999;
}

.enquiryloader {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    position: fixed;
   top: 40%;
    left: 46%;
    z-index: 9999999;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.nofound{
font-size: 18px !important;
    font-weight: 600;
    color: #bab7b7;
	}
.sorrynofound{
	font-size: 16px;
    margin-top: 35px;
    font-weight: 500;
text-transform: initial;}
.nofoundp{
		margin-top: 4px !important;
	    margin-bottom: 4px !important;
}
.abcd{
	margin-top: 35px !important;
}
.nofoundheight{
    height: 270px !important;
	}
	.foundheight{
    height: 493px !important;
	}
.list-gpfrm-list .abcd .nofoundp a {
    text-decoration: underline !important;
		color: #595959;
    font-size: 15px;
    font-weight: normal;
}
.cssload-speeding-wheel {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    border: none !important;
    border-radius: 50%;
    border-left-color: transparent;
    border-bottom-color: transparent;
    animation: cssload-spin .88s infinite linear;
}
.wshhidden{
	display:none !important;
}
.crthidden{
	display:none;
}

.wish-mob-count
{
  display:block;
}
</style>

</head>
<body>
<!--<div class="preloader">
  <div class="preloader-body">
    <div class="cssload-container">
      <div class="cssload-speeding-wheel"></div>
    </div>
    <p><img src="images/2020-10-17.gif"></p>
  </div>
</div>-->
<!-- Page-->


  <div class="bodyloader_main" id="bodyloader_main" style="display:none"><img src="images/2020-10-17.gif"></div>

<div class="page" style="opacity:1">
  <!-- Page Header-->
  
  <!-- RD Navbar-->
  <header class="page-header">
    <div class="rd-navbar-wrap">
      <nav class="rd-navbar rd-navbar-fullwidth-variant-1" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-stick-up-offset="51">
        <div class="rd-navbar-toppanel">
          <div class="rd-navbar-toppanel-inner">
            <?php
              // if(isset($_SESSION["frontuser"]))
              // {
            ?>
            <!--<div class="rd-navbar-toppanel-submenu"> <a class="rd-navbar-toppanel-submenu-toggle" href="#" data-rd-navbar-toggle=".rd-navbar-toppanel-submenu" style="width:100%;"><img src="images/login.png" alt=""> <span style="text-transform: uppercase;"><?php echo $username; ?></span></a>
              <ul class="">
			  
                <li><a href="my-account.php">My Account</a></li>
              <li><a href="my-orders.php">My Orders</a></li>
                <li><a href="wishlist.php">My Wishlist</a></li>
                <li><a href="logout.php">Logout</a></li>
              </ul>
            </div>-->
            <?php //}else{ ?>
              <div class="rd-navbar-toppanel-submenu"> 
              <!-- <a class="rd-navbar-toppanel-submenu-toggle btn btn-info" data-toggle="modal" data-target="#loginPopup">
                <img src="images/login.png" alt=""> <span>Login</span></a>-->
              </div>
            <?php // } ?>
            <div class="rd-navbar-toppanel-wrapper">
              <div class="rd-navbar-contact-info">
                <div class="call_section">
               <a href="tel:1800355903"><img src="images/telephone.png" width="14" alt=""> 1800-355-903</a>
                <span><!--<img src="images/text_sms.png" width="14" alt="">--> Text Our Diamond Expert Desk: +61 415 088 275</span>
              </div>


               <!--  <p class="text-black text-medium"><a href="tel:+1-412-314-9060">1800-355-903</a>
<span> Call or Text 24/7</span> | <a href="mailto:info@bigdiamondsale.com.au"><i class="fa fa-envelope"></i></a></p> -->
              </div>
              
              <div class="rd-navbar-toppanel-search">
                <!-- RD Navbar Search-->
           
              </div>
              <div class="rd-navbar-search-wrap">
                  <div class="rd-navbar-search">
                   
          <form autocomplete="off" class="rd-navbar-search-form" action="search_product" method="GET">
  <div class="autocomplete rd-navbar-search-form-input">
  <input class="rd-navbar-search-form-input form-input" id="querystr" type="text" name="s" autocomplete="off" placeholder="Search...">
  </div>
  <button class="rd-navbar-search-form-submit" id="searchbtn" type="submit"></button>
    <button class="rd-navbar-cross-form-submit"  id="crossbtn" type="button" style="display:none"></button>
                      <ul class="list-gpfrm" id="hdTuto_search">
						<h3>PRODUCTS</h3>
					  </ul>
</form>
                    <span class="rd-navbar-live-search-results"></span> </div>
                </div>
<!-- 			     <div class="rd-navbar-lang">  <?php
              if(isset($_SESSION["frontuser"]))
              {
            ?>
            <a class="rd-navbar-toppanel-submenu-toggle" href="#" data-rd-navbar-toggle=".rd-navbar-toppanel-submenu" style="width:151px !important; display: block;"> <span><img src="images/login.png" alt="">Welcome <?php echo $username; ?></span></a>
              <ul class="dropnow" style="display: none;">
              <li><a href="my-account.php">My Account</a></li>
              <li><a href="my-orders.php">My Orders</a></li>
                <li><a href="wishlist.php">My Wishlist</a></li>
                <li><a href="logout.php">Logout</a></li>
              </ul>
            
            <?php }else{ ?>
             
               <a class="rd-navbar-toppanel-submenu-toggle btn btn-info" data-toggle="modal" data-target="#loginPopup">
                <img src="images/login.png" alt=""> <span>LOGIN</span></a>
             
            <?php } ?></div> -->



                <div class="rd-navbar-toppanel-submenu">
<?php
              if(isset($_SESSION["frontuser"]))
              {
            ?>
          <!--  <a class="rd-navbar-toppanel-submenu-toggle" href="#" data-rd-navbar-toggle=".rd-navbar-toppanel-submenu" style="width:140px !important;"><span>Welcome <?php echo $username; ?></span></a>
               
              <ul class="" style="z-index: 999;">
        
                <li><a href="my-account.php">My Account</a></li>
              <li><a href="my-orders.php">My Orders</a></li>
                <li><a href="wishlist.php">My Wishlist</a></li>
                <li><a href="logout.php">Logout</a></li>
              </ul> -->
            <div class="dropdown">
 <a class="rd-navbar-toppanel-submenu-toggle desk_name" href="#" data-rd-navbar-toggle=".rd-navbar-toppanel-submenu" style="width:150px !important;"><span>Welcome <?php echo $username; ?></span></a>
  <div class="dropdown-contentss">
   
                <ul>
                <li><a href="my-account">My Account</a></li>
                <li><a href="account_detail">My Billing Detail</a></li>
              <li><a href="my-orders">My Orders</a></li>
                <li><a href="wishlist">My Wishlist</a></li>
                <li><a href="logout.php">Logout</a></li>
                </ul>
  </div>
</div>
            
               <?php }else{ ?>
             
               <!--<a class="rd-navbar-toppanel-submenu-toggle btn btn-info" data-toggle="modal" data-target="#loginPopup">
                <img src="images/login.png" alt=""> <span>LOGIN</span></a>-->
                <a class="rd-navbar-toppanel-submenu-toggle btn btn-info" href="login">
                <img src="images/login.png" alt=""> <span>LOGIN</span></a>
             
            <?php } ?>
            </div>
  				<div class="rd-navbar-lang"> <a class="insta insta-facebook" href="https://www.facebook.com/bigdiamondsale/" target="_blank"><i class="icon icon-xs text-base fa-facebook"></i></a> </div>
                  <div class="rd-navbar-lang"> <a class="insta" href="https://www.instagram.com/big_diamond_australia/?igshid=1sc8d6ktqnbfx" target="_blank"><img src="images/insta.png" alt=""></a> </div>

          <!--   <div class="rd-navbar-lang">
            <a href="#" class="rd-navbar-toppanel-submenu-toggle btn btn-info wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i>
<span>Wishlist</span></a>
            </div> -->
          <!--   <div class="rd-navbar-lang">
            <a href="#" class="rd-navbar-toppanel-submenu-toggle btn btn-info mycard"><img src="images/bag.png"><span>MY CART</span></a>
            </div> -->
              <div class="rd-navbar-currency_" style="display: none;">
                <!-- <select class="form-input select" name="find-job-location" data-minimum-results-for-search="Infinity">
                  <option value="1">$</option>
                  <option value="2">€</option>
                </select> --> 

                <div class="dropdown-currency">
                  <button class="dropbtn"><img src="images/usd-icon.png" width="80" height="30"></button>
                  <div class="dropdown-content">
                    <a href="#"><span><img src="images/aud-icon.png"></span><span>AUD</span></a>
                    <a href="#"><span><img src="images/cad-icon.png"></span><span>CAD</span></a>
                    <a href="#"><span><img src="images/eur-icon.png"></span><span>EUR</span></a>
                    <a href="#"><span><img src="images/gbp-icon.png"></span><span>GBP</span></a>
                  </div>
                </div>
              </div>
             
		           
            </div>
          </div>
        </div>
        <div class="rd-navbar-inner">
          <!-- RD Navbar Panel-->
          <div class="rd-navbar-panel">
            <!-- RD Navbar Toggle-->
            <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
            <!-- RD Navbar Brand-->
            <div class="rd-navbar-brand"><a class="brand-name" href="index"><img alt="" src="images/logo.jpg"></a></div>
            <div class="rd-navbar-elements-wrap text-right">
              <div class="rd-navbar-shop text-middle text-left" id="topcart"> 
                <a href="tel:+61 432 413 202"><div class="phone-mob-icon">
              	
              </div></a>
              <a href="wishlist"><div class="wish-mob-icon "  ><span class="text-middle badge label-circle label-primary label wish-mob-count_span <?php if($wishtCount=="0"){ echo "wshhidden"; }?>" id="wishCountMob" ><?php echo $wishtCount; ?></span></div></a>
                <div class="rd-navbar-shop-toggle wishlist_tog"><a title="Wishlist" class="text-middle icon icon-primary fl-line-icon-set-shopping63 fl-line-icon-set-shopping6-cust" href="wishlist"></a>
				<span class="text-middle badge label-circle label-primary label <?php if($wishtCount=="0"){ echo "wshhidden"; }?>" id="wishCount"><?php echo $wishtCount; ?></span></div>
                
                <div class="rd-navbar-shop-toggle cart_tog">
                  <!--<a title="Cart" class="text-middle icon icon-primary fl-line-icon-set-shopping63" href="#" data-rd-navbar-toggle=".rd-navbar-shop"></a>-->
                  <a title="Cart" class="text-middle icon icon-primary fl-line-icon-set-shopping63" href="cart" ></a><span class="text-middle badge label-circle label-primary label <?php if(count($cartTotal)=="0"){ echo "crthidden"; }?>" id="cartCount"><?php echo count($cartTotal); ?></span></div>
                <div class="rd-navbar-shop-panel" id="cartDesc"> 
				<div class="loader_main" id="loader_main" style="display:none;"></div>
                  <h4>My Cart (<?php echo count($cartTotal); ?>)</h4>
				  <div id="newrtr">
                  <?php
				  $k=1;
                  if(isset($_SESSION["shopping_cart"])){
                   foreach($_SESSION["shopping_cart"] as $product=>$val){
					    $newamt =$val["price"];
						$asdas = str_replace(',', '', $newamt); 
					    $amt=$asdas;
                     if($k<=3){
                  ?>
				  <input type="hidden" id="prdtctyp<?php echo $product; ?>" value="diamond">
                  <div class="unit unit-spacing-15 flex-row rd-navbar-shop-product">
                    <div class="unit-left"><a class="text-dark" href="cart"><img alt="" src="<?php echo $val['product_img']; ?>" style="width:88px;"></a>
					</div>
                    <div class="unit-body"><a class="text-dark" href="cart"><?php charLimit($val['product_name']); ?></a>
                      <p class="offset-top-0"><span class="big text-regular text-primary text-spacing-40">A$ <?php $base_price = str_replace(",", "", $val['amount']); // Your price in USD
		$EUR_price = round(($base_price * $response->conversion_rates->AUD), 2);
		echo $EUR_price;  ?></span> <span class="gst_cls">INC GST</span></p>
                     <span class="rd-navbar-shop-product-delete icon mdi mdi-close" style="cursor:pointer" onClick="removeheadItem(<?php echo $product; ?>)"></span>
					</div>
                  </div>
                  <?php }
						$ddd = str_replace(',', '', $EUR_price);
						$subtotal[]=$ddd;
						$k++;
				  } 
				  }
				  if(isset($_SESSION["shopping_ringcart"])){
                   foreach($_SESSION["shopping_ringcart"] as $product=>$val){
					   $newamt =$val["price"];
					   $asdas = str_replace(',', '', $newamt); 
					   $base_price = str_replace(",", "", $asdas); // Your price in USD
					   $EUR_price = round(($base_price * $response->conversion_rates->AUD), 2);
						
					   $amt=$EUR_price+$val["ring_Amt"];
                     if($k<=3){
						    $srcring="uploads/products/".$val['ring_prod_code']."/".$val['ring_prod_img']  ;
							
                  ?>
				  <input type="hidden" id="prdtctyp<?php echo $product; ?>" value="egagering">
                  <div class="unit unit-spacing-15 flex-row rd-navbar-shop-product">
                    <div class="unit-left"><a class="text-dark" href="cart"><img alt="" src="<?php echo $srcring; ?>" style="width:88px;"></a></div>
                    <div class="unit-body"><a class="text-dark" href="cart"><?php charLimit($val['prod_name']); ?></a>
                      <p class="offset-top-0"><span class="big text-regular text-primary text-spacing-40">A$ <?php echo $sgsg = $amt; ?>
					  </span></p>
                      <span class="rd-navbar-shop-product-delete icon mdi mdi-close" style="cursor:pointer" onClick="removeheadItem(<?php echo $product; ?>)"></span> </div>
                  </div>
                  <?php $i++;}
				   
				   $k++;
				$subtotal[]=$amt;
				  } ?>
                  <?php 
				  
				  }
				  if(isset($_SESSION["weddingringselect"])){
                  
                   foreach($_SESSION["weddingringselect"] as $product=>$val){
					   $newamt =$val["Amt"];
						$asdas = str_replace(',', '', $newamt); 
					   $amt=$asdas;
                     if($k<=3){
						    $srcring="uploads/products/wedding_rings/".$val['stoneNo']."/".$val['daylight']  ;
							
                  ?>
				  <input type="hidden" id="prdtctyp<?php echo $product; ?>" value="weddingring">
                  <div class="unit unit-spacing-15 flex-row rd-navbar-shop-product">
                    <div class="unit-left"><a class="text-dark" href="cart"><img alt="" src="<?php echo $srcring; ?>" style="width:88px;"></a></div>
                    <div class="unit-body"><a class="text-dark" href="cart"><?php charLimit($val['pro_name']); ?></a>
                      <p class="offset-top-0"><span class="big text-regular text-primary text-spacing-40">A$<?php echo $sgsg = $val['Amt']; ?>
					  </span> <span class="gst_cls">INC GST</span></p>
                      <span class="rd-navbar-shop-product-delete icon mdi mdi-close" style="cursor:pointer" onClick="removeheadItem(<?php echo $product; ?>)"></span> </div>
                  </div>
                  <?php }
				   
				  $k++;
				$subtotal[]=$amt;
				  }
				  }				  ?>
                  <?php 
				  
				  //print_r($subtotal);
				  if(isset($_SESSION["shopping_cart"])){ ?>
                  <hr class="divider divider-gray divider-offset-20">
                  <input type="hidden" name="totalSum" id="totalSum" value="$<?php echo array_sum($subtotal); ?>">
                  <h4>Subtotal: <span class="text-regular text-primary text-normal text-spacing-40">A$ <?php echo array_sum($subtotal); ?></span> <span class="gst_cls">INC GST</span></h4>
                  <a class="btn btn-block btn-default" href="cart">VIEW CART</a><a class="btn btn-block btn-primary" href="billing-shipping">CHECKOUT</a> </div>
				  <?php }
				 else if(isset($_SESSION["shopping_ringcart"])){ ?>
				  
                  <hr class="divider divider-gray divider-offset-20">
                  <input type="hidden" name="totalSum" id="totalSum" value="A$ <?php echo array_sum($subtotal); ?>">
                  <h4>Subtotal: <span class="text-regular text-primary text-normal text-spacing-40">A$ <?php echo array_sum($subtotal); ?></span> <span class="gst_cls">INC GST</span></h4>
                  <a class="btn btn-block btn-default" href="cart">VIEW CART</a><a class="btn btn-block btn-primary" href="billing-shipping">CHECKOUT</a> </div>
				  <?php }
				 else if(isset($_SESSION["weddingringselect"])){ ?>
				 
                  <hr class="divider divider-gray divider-offset-20">
                  <input type="hidden" name="totalSum" id="totalSum" value="$<?php echo array_sum($subtotal); ?>">
                  <h4>Subtotal: <span class="text-regular text-primary text-normal text-spacing-40">A$ <?php echo array_sum($subtotal); ?></span> <span class="gst_cls">INC GST</span></h4>
                  <a class="btn btn-block btn-default" href="cart">VIEW CART</a><a class="btn btn-block btn-primary" href="billing-shipping">CHECKOUT</a> </div>
				  <?php }
				  else{ ?>
                   <div>Empty Cart</div>
                  <?php } ?>
				  
                </div>
                </div>
            </div>
          </div>
          <div class="rd-navbar-nav-wrap">
            <!-- RD Navbar Nav-->
            <ul class="rd-navbar-nav">
            <li class="mob-li">
            <div class="mob-log"> 
			 <?php
              if(isset($_SESSION["frontuser"]))
              {
            ?>
            <a class="rd-navbar-toppanel-submenu-toggle account-anch  btn btn-info" href="#"> 
			<div class="img_dv_lg"><img src="images/login.png" alt=""></div><span style="text-transform: uppercase;"><?php echo $username; ?></span></a>
              <ul class="account-user">
			  
                <li><a href="my-account">My Account</a></li>
              <li><a href="my-orders">My Orders</a></li>
                <li><a href="wishlist">My Wishlist</a></li>
                <li><a href="logout.php">Logout</a></li>
              </ul>
            
            <?php }else{ ?>
               <a class="rd-navbar-toppanel-submenu-toggle btn btn-info" data-toggle="modal" data-target="#loginPopup">
                <div class="img_dv_lg"><img src="images/login.png" alt=""></div> <span>LOGIN / SIGN UP </span></a>
            <?php } ?>
			
            </div>
            <div class="rd-navbar-currency mob-currency" style="display:none;">
                <select class="form-input select" name="find-job-location" data-minimum-results-for-search="Infinity">
                  <option value="1">$</option>
                  <option value="2">€</option>
                </select>
              </div></li>
              <li><div class="search-mobile">
	<form autocomplete="off" class="rd-navbar-search-form mob_inner_search" action="search_product" method="GET">
	
	<input id="querystrm" type="text" name="s" autocomplete="off" placeholder="Search Big Diamonds"> 
	
	<button class="mobilebutton" type="submit"><i class="material-icons"></i></button>
	 <!--<ul class="list-gpfrm" id="hdTuto_msearch"></ul>-->
	 
	</form>
	</div></li>
             
              <li <?php if( $_SESSION['menuid']=="0"){ echo "class='active'";} ?>><a href="index">home</a></li>
              
              <li <?php if( $_SESSION['menuid']=="1"){ echo "class='active'";} ?>><a href="diamonds">DIAMONDS</a>
                        <ul class="rd-navbar-megamenu">
                          <li>
                            <div class="">
                            <div class="row mega_menu_div">
                              <div class="col-md-3 first_sec_img">
                                  <h3>DESIGN YOUR OWN ENGAGEMENT RING</h3>
                                  <a href="about-us"><img src="images/diamond_menu_icon.jpg" alt="" /> <span>Start With A Natural Diamond</span></a>
                                  <a href="about-us"><img src="images/diamond_menu_icon.jpg" alt="" /> <span>Start With A Natural Fancy Colour Diamond</span></a>
                                  <a href="about-us"><img src="images/ring_menu_icon.jpg" alt="" /> <span>Start With A Setting</span></a>
                              </div>
                              <div class="col-md-3 natural_diamond  border-left-right">
                                
                              <h3>NATURAL DIAMONDS</h3>
                              <div class="flex_div">    
                              <a href="about-us"><img src="images/Round.svg" alt=""> Round</a>
                                  <a href="about-us"><img src="images/Princess.svg" alt=""> Princess</a>
                                  <a href="about-us"><img src="images/Emerald.svg" alt=""> Emerald</a>
                                  <a href="about-us"><img src="images/Asscher.svg" alt=""> Asscher</a>
                                  <a href="about-us"><img src="images/Cushion.svg" alt=""> Cushion</a>
                                  <a href="about-us"><img src="images/Marquise.svg" alt=""> Marquise</a>
                                  <a href="about-us"><img src="images/Radiant.svg" alt=""> Radiant</a>
                                  <a href="about-us"><img src="images/Oval.svg" alt=""> Oval</a>
                                  <a href="about-us"><img src="images/Pear.svg" alt=""> Pear</a>
                                  <a href="about-us"><img src="images/Heart.svg" alt=""> Heart</a>
                              </div>
                              </div>
                              <div class="col-md-3 fancy_diamond">
                                
                              <h3>NATURAL FANCY COLOURED DIAMONDS</h3>
                              <div class="flex_div">    
                                  <a href="about-us"><img src="images/Yellow.png" alt=""> Yellow</a>
                                  <a href="about-us"><img src="images/Pink.png" alt=""> Pink</a>
                                  <a href="about-us"><img src="images/Purple.png" alt=""> Purple</a>
                                  <a href="about-us"><img src="images/Blue.png" alt=""> Blue</a>
                                  <a href="about-us"><img src="images/Green.png" alt=""> Green</a>
                                  <a href="about-us"><img src="images/Orange.png" alt=""> Orange</a>
                                  <a href="about-us"><img src="images/Brown.png" alt=""> Brown</a>
                                  <a href="about-us"><img src="images/Black.png" alt=""> Black</a>
            </div>
                              </div>
                              <div class="col-md-3">
                                
                              <img src="images/menu-image.jpg" alt="" />                              
                            
                            </div>
                            </div>
            </div>
                          </li>
                        </ul>
              </li>
              <li <?php if( $_SESSION['menuid']=="2"){ echo "class='active'";} ?>><a href="engagement-rings">ENGAGEMENT RINGS</a>
              <ul class="rd-navbar-megamenu">
                          <li>
                            <div class="">
                            <div class="row mega_menu_div">
                              <div class="col-md-4 first_sec_img">
                                  <h3>DESIGN YOUR OWN ENGAGEMENT RING</h3>
                                  <a href="about-us"><img src="images/diamond_menu_icon.jpg" alt="" /> <span>Start With A Natural Diamond</span></a>
                                  <a href="about-us"><img src="images/diamond_menu_icon.jpg" alt="" /> <span>Start With A Natural Fancy Colour Diamond</span></a>
                                  <h3 class="marg_tp_insp">GET INSPIRED BY OUR GALLERY OF BESPOKE DESIGNS</h3>
                                  <a href="about-us"><span class="only_span">View Our Newest Collection</span></a>
                                  <a href="about-us"><span class="only_span">View Our Top 10 Best Sellers</span></a>
                              </div>
                              <div class="col-md-4 natural_diamond  border-left">
                                
                              <h3>SHOP BY STYLE</h3>
                              <div class="flex_div">    
                              <a href="about-us"><img src="images/ring_style-solitaire.png" alt=""> Solitaire</a>
                                  <a href="about-us"><img src="images/ring_style-pave.png" alt=""> Pave</a>
                                  <a href="about-us"><img src="images/ring_style-3-stone.png" alt=""> Channel-Set</a>
                                  <a href="about-us"><img src="images/ring_style-sidestone.png" alt=""> Sidestone</a>
                                  <a href="about-us"><img src="images/ring_style-3-stone.png" alt=""> 3 Stone</a>
                                  <a href="about-us"><img src="images/ring_style-halo.png" alt=""> Halo</a>
                              </div>
                              </div>
                              
                              <div class="col-md-4">
                                
                              <img src="images/engage_banner.jpg" alt="" />                              
                            
                            </div>
                            </div>
            </div>
                          </li>
                        </ul>
            </li>
              <li <?php if( $_SESSION['menuid']=="3"){ echo "class='active'";} ?>><a href="wedding-ring">WEDDING RINGS</a>
              <ul class="rd-navbar-megamenu">
                          <li>
                            <div class="">
                            <div class="row mega_menu_div">
                              <div class="col-md-3 first_sec_img">
                                  <h3>WOMEN'S WEDDING RINGS</h3>
                                  <a href="about-us"><img src="images/ring-menu.png" alt="" /> <span>Diamond Eternity Rings</span></a>
                                  <a href="about-us"><img src="images/wedding_ring_menu.png" alt="" /> <span>Classic Wedding Rings</span></a>
                                  <a href="about-us"><img src="images/diamond_menu_icon.jpg" alt="" /> <span>All Diamond Wedding Rings</span></a>
                                  <a href="about-us" class="marg_tp_insp"><span class="only_span">View Top Ten</span></a>
                              </div>
                              <div class="col-md-3 first_sec_img border-left-right">
                                
                                <h3>UNISEX</h3>
                                <a href="about-us"><img src="images/wedding_ring_menu.png" alt="" /> <span>Wedding Rings</span></a>
                                    <a href="about-us"><img src="images/ring_menu_icon.jpg" alt="" /> <span>Engagement Rings</span></a>
                                    <a href="about-us"><img src="images/ring_menu_icon.jpg" alt="" /> <span>Customize Your Own Ring</span></a>
                              
                              </div>
                              <div class="col-md-3 natural_diamond first_sec_img">
                              <h3>MEN'S WEDDING RINGS</h3>
                                <div class="flex_div full_flex weeding_img">    
                                <a href="about-us"><img src="images/ring_style-solitaire.png" alt=""> Classic Rings</a>
                                    <a href="about-us"><img src="images/ring_style-3-stone.png" alt=""> Diamond Rings</a>
                                    <a href="about-us"><img src="images/ring_style-pave.png" alt=""> Carved Rings</a>
                                    <a href="about-us"><img src="images/ring_style-sidestone.png" alt=""> Modern Rings</a>
                                    <a href="about-us" class="marg_tp_insp"><span class="only_span">View Top Ten</span></a>
                                </div>
                            </div>  
                              <div class="col-md-3">
                                
                              <img src="images/menu-image.jpg" alt="" />                            
                            
                            </div>
                            </div>
            </div>
                          </li>
                        </ul>
              </li>
              <li <?php if( $_SESSION['menuid']=="4"){ echo "class='active'";} ?>><a href="about-us">ABOUT US</a> </li>
              <li <?php if( $_SESSION['menuid']=="6"){ echo "class='active'";} ?>><a href="diamond-education">EDUCATION</a></li>
              <li <?php if( $_SESSION['menuid']=="9"){ echo "class='active'";} ?>><a href="faq">FAQ</a></li>
              <li class="d-none rd-navbar-fixed--visible" style="display:none!important;"><a href="cart">Cart</a></li>
              <li class="mob-contact mob-contacts soc_ico"> <strong>Connect with us</strong> <br>
              	<a href="https://www.facebook.com/bigdiamondsale/" target="_blank"><i class="icon icon-xs text-base fa-facebook"></i></a>
              	<a href="https://www.instagram.com/big_diamond_australia/?igshid=1sc8d6ktqnbfx" target="_blank"><img src="images/insta.png" alt=""></a>
              </li>
              <li class="contact_mob_li_last">
              	<div class="mob-contact mob_inner_cont_head"> <strong>Contact Us</strong> <br>
              	<div class="mob-a mob_inner_cont">
                	 <a href="https://wa.link/8hls43"><i class="fa fa-comment"></i><br><span>Chat</span></a>
              	<a href="tel:+61 432 413 202"><i class="fa fa-phone"></i><br><span>Call</span></a>
              	<a href="mailto:info@bigdiamond.com.au"><i class="fa fa-envelope"></i><br><span>Email</span></a>
                </div>
               
              </div>
              </li>
              <li><p class="rights mob_rights" style="float:none; text-align:center;"><span>©&nbsp;</span><span class="copyright-year">2020</span><span>&nbsp;</span><span class="brand-name"><span class="font-weight-normal">Big Diamond</span></span><span>.&nbsp;</span> <a href="#">All Rights Reserved</a></p></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <div class="search-mobile">
	<form autocomplete="off" class="rd-navbar-search-form" action="search_product" method="GET">
	
	<input id="querystrm" type="text" name="s" autocomplete="off" placeholder="Search Big Diamonds"> 
	
	<button class="mobilebutton" type="submit"><i class="material-icons"></i></button>
	 <!--<ul class="list-gpfrm" id="hdTuto_msearch"></ul>-->
	 
	</form>
	</div>
  </header>
<style>
@media only screen and (max-width: 748px) {
  .modal-content{
  width:85%;
  }
  .offset-top-10 {
    padding-top: 0px !important;
    padding-right: 0px !important;
}
}
</style>







  



  
  

<!--Make sure the form has the autocomplete function switched off:-->
