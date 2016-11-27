$(function(){
	var main = $('.main');
	var albumtemplate = "<li class='album' data-id={{id}}><a>{{title}}</a></li>";
	var tracktemplate = "<tr><td>{{title}}</td><td>{{total_ratings}}</td></tr>";
	var albumdata, albums, trackdata;
	function addalbums(albumdata){
		main.empty();
		main.append('<ul id="albums"></ul>');
		albums = main.children().first();
		$.each(albumdata.results, function(i, item){		
			albums.append(Mustache.render(albumtemplate, item));
		});
	}
	function addtracks(trackdata){
		main.empty();
		$('.main').append("<table id='tracks'><tr><th>Title</th><th>Total Ratings</th></tr></table>");
		tracks = main.children().first();
		$.each(trackdata.results, function(i, track){		
			tracks.append(Mustache.render(tracktemplate, track));
		});
	}
	// function getjson(link){
	// 	if(albumdata===undefined){
	// 		$.ajax({
	// 			type: 'GET',
	// 			url: 'json.php?url='+link,
	// 			success: function(data){
	// 				albumdata=data;
	// 				addalbums(albumdata);
	// 			}
	// 		});	
	// 	}
	// 	else{
	// 		addalbums(albumdata);
	// 	}
	// }
	$('#trackbutton').on('click', function(){
		$(this).parent().siblings().children().removeClass('active');
		$(this).addClass('active');
		if(trackdata===undefined){
			$.ajax({
				type: 'GET',
				url: 'json.php?url='+"tracks.json",
				success: function(data){
					trackdata=data;
					addtracks(trackdata);
				}
			});	
		}
		else{
			addtracks(trackdata);
		}
	});
	$('#albumbutton').on('click', function(){
		$(this).addClass('active');
		$(this).parent().siblings().children().removeClass('active');
		if(albumdata===undefined){
			$.ajax({
				type: 'GET',
				url: 'json.php?url='+"albums.json",
				success: function(data){
					albumdata=data;
					addalbums(albumdata);
				}
			});	
		}
		else{
			addalbums(albumdata);
		}
	});
	$('.main').delegate('.album', 'click', function(){
		$this = $(this);
		var albumsongs;
		$('.main').empty();
		$('.main').append("<table id='tracks'><tr><th>Title</th><th>Total Ratings</th><th>Genre</th></tr></table>");
		$.each(albumdata.results, function(i, item){
				if($this.attr('data-id')==item.id){
					albumsongs = item.tracks;
				}	
		});
		$.each(albumsongs, function(i, item){
			var genres="";
			$.each(item.genres, function(i, genre){
				genres = genre.name+","+genres;
			});
			genres = genres.slice(0, -1);
			$('.main #tracks').append("<tr><td>" + item.title + "</td><td>"+item.total_ratings+"</td><td>"+genres+"</td></tr>");
		});
		//$('.main').html("<p>"+albumsongs+"</p>");
	});
});