<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Heroku Music App</title>
	<style>
		body{
			margin: 0;
		}
		a,a:link,a:visited{
			text-decoration: none;
			color: #000;
		}
		ul{
			list-style: none;
			padding: 0;
			margin: 0;
		}
		header{
			background: #493636;
			height: 40px;
		}
		header p{
			line-height: 40px;
			margin: 0;
			color: #fff;
			font-size: 20px;
			margin-left: 20px;
		}
		.controls{
			max-width: 900px;
			margin: 0 auto;
			background-color: #ddd;
		}
		.controls ul{
			display: flex;
			list-style: none;
		}
		.controls ul li{
			flex: 1;
			width: 50px;
		}
		.controls ul li a{
			padding: 10px;
			display: block;
			text-align: center;
		}
		.active{
			background-color: #a2a2a2;
			color: #fff;
		}
		#albums{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
		}
		#albums li{
			width: 150px;
			height: 150px;
			margin-bottom: 10px;
			display: table;
		}
		#albums li a{
			font-size: 24px;
			background-color: #db3a3a;
			text-align: center;
			color: #fffde7;
			display: table-cell;
			vertical-align: middle;
			height: 100%;
			width: 100%;
			cursor: pointer;
		}
		#tracks{
			table-layout: fixed;
			width: 100%;
		}
		#tracks tr{
			line-height: 20px;
			text-align: center;
		}
/*		#tracks li:first-child{
			text-align: left;
		}*/
		.container{
			max-width: 900px;
			margin: 20px auto;
		}
		.main{
			padding: 20px 0;
		}
	</style>
</head>
<body>
<header>
	<p>HeroKu Soundbar</p>
</header>
<div class="container">
<div class="controls">
	<ul>
		<li><a href="#" id="albumbutton">Albums</a></li>
		<li><a href="#" id="trackbutton">Tracks</a></li>
	</ul>
</div>
<div class="main"></div>
</div>
	<script src="jquery-3.1.1.min.js"></script>
	<script src="mustache.min.js"></script>
	<script src="index.js"></script>
</body> 
</html>