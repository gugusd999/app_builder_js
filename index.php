<?php

if (!isset($_SESSION['js']) || $_SESSION['js'] == "") {
	echo "<noscript><meta http-equiv='refresh' content='0;url=/get-javascript-status.php&js=0'> </noscript>";
	$js = true;
} elseif (isset($_SESSION['js']) && $_SESSION['js'] == "0") {
	$js = false;
	$_SESSION['js'] = "";
} elseif (isset($_SESSION['js']) && $_SESSION['js'] == "1") {
	$js = true;
	$_SESSION['js'] = "";
}

if ($js) {
?>


	<html>

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Igeiatech</title>
	</head>
	<script src="./route.js"></script>

	<body>
		<div id="root">

		</div>
		<div id="loadjs"></div>
		<div id="preload" class="transition">
		</div>
	</body>

	</html>

<?php
} else {
	echo 'sorry if you want this website on you must to enables javascript';
}
?>