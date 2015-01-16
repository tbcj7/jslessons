
$(window).load(function(){

	$('#search').keyup(function(){

		var searchField = $('#search').val();
		console.log(searchField);
		var myExp = new RegExp(searchField, 'i');

		$.getJSON('users.json', function(data) {

			var output = '<ul class="searchresults">';
			$.each(data, function(key, val) {
				if (val.name.search(myExp) != -1) {
					// if the value of the name seach (built in jQuery function) from my regular expresion 
					// has find some results -> not equal to -1 than output the results
					output += '<li>';
					output += '<h2>' + val.name + '</h2>';
					output += '<i>' + val.email + '</i>';
					output += ' / ';
					output += '<i>' + val.phone + '</i>';
					output += ' / ';
					output += 'Company: <b>' + val.company.name + '</b>';
					output += '</li>';
				};

			});
			output += '</ul>';

			$('#update').html(output);
		}); // get JSON
	});


});

