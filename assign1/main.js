$(function () {



	$('#search').on('click',function(){


		var pathInput = $('#title').val();
        var path = 'http://www.omdbapi.com/?s='+ pathInput;
        //console.log(path);

		$.ajax ({
			type: 'GET',
			url: path,
			success: function(path){
		    $.each(path,function(i,movies){
				$.each(movies,function(index,item){
					//if ($('#movie').is(':empty')){
					

						$('#movie').append('<li><strong>Title: </strong>'+item.Title+'</li>',
											'<li><strong>Type: </strong>'+item.Type+'</li>',
									        '<li><strong>Year: </strong>'+item.Year+'</li>',
											'<li><strong>IMDB-ID: </strong>'+item.imdbID+'</li>',
											'<li><img src = '+item.Poster+'</li>');
					$('#search').prop('disabled',true);

					
				//}

				});

			});
		}

	    });


	    $('#title').on('click',function(){
	    	$('#movie').empty();
	    	$('#search').prop('disabled',false);
	    });

		
	});
});