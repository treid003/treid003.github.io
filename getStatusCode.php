<?php // Get the status code for a web page
	function getStatusCode($url){
		$c = curl_init($url); 
		$fp = fopen("curlTemp.txt", "w"); 
		curl_setopt($c, CURLOPT_FILE, $fp); 
		curl_setopt($c, CURLOPT_HEADER, 0); 
		curl_exec($c); 
		$status = curl_getinfo($c, CURLINFO_HTTP_CODE); 
		curl_close($c);
		echo $status;
	}
	 
	if(isset($_POST["safeframeURL"]))
	{
		$url = $_POST["safeframeURL"];
		getStatusCode($url);
	}	
?>
