

$(document).ready(function(){
    $('#rel-lookup').submit(function(e){
        e.preventDefault();

        var results = $('.results-container')
            zipcode = $('#zipinput').val(),
            apiKey = '09b6a4fb08a24d3eae45d15520a86baa';

        var requestURL = 'http://congress.api.sunlightfoundation.com/legislators/locate?callback=?';

        results.html('You senator for <b>' + zipcode + '</b> are: ');

        $.getJSON(requestURL, {
            'apikey' : apiKey,
            'zip' : zipcode,
        }, function(data){
            //console.log(data);
            if(data.results && data.results.length > 0) {
                var yourSenators = '<b>Your senators are</b>';

                $.each(data.results, function(i, rep){
                   // if ('senate' === rep.chamber.toLowerCase()) {
                        yourSenators += '<hr>';
                        yourSenators += '<p>';
                        yourSenators += rep.first_name + ' ' + rep.last_name;
                        yourSenators += '</p>';
                    //}
                })

                results.html(yourSenators);
            } else {
                results.html('No senators <b>' + zipcode + '</b>. Try again.');
            }
        })


    });
});
