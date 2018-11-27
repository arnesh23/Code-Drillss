$(document).submit(function () {
    // prevent the default behavior of the submit
    event.preventDefault();
    // grab the show information from the form on the page
    var searchInformation = $("#showSearch").val();
    searchInformation = searchInformation.toLowerCase();

    console.log(searchInformation);


    // console.log the input


    // this is the api we are using add your search variable to end of the queryURL
    var queryURL = "http://api.tvmaze.com/search/shows?q="+searchInformation;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        
        // console.log the response 
         console.log(response);
        
        // create a forloop and append the first 3 responses to the page
        for(var i = 0; i < 3; i++){
            $(".shows").append(response[i].show.name);
            $(".shows").append("<br>");

            console.log(response[i].show.image.original);
        

            // console.log the image and then append it to the page.            
            var img = $('<img>');
            img.attr('src',response[i].show.image.original);

            // console.log the name of the show and append it to the page
            $(".shows").append(img);
            $(".shows").append("<br> <br>");

            // console.log the genres of the show and append it to the page
            console.log(response[i].show.genres);
            console.log(response[i].show.genres.length);
            for(var j = 0; j< response[i].show.genres.length;j++){
                $(".shows").append(response[i].show.genres[j]);
                $(".shows").append(" ");
            }
            console.log(response[i].show.summary);
            $(".shows").append(response[i].show.summary);

            // console.log the summary of the show and append it to the page

        }
    });

})
