/* global $ */
$(document).ready(function() {
    //making the suggestion appear when typing in to the city select bar
    $( "#cityField" ).keyup(function() {
        var url = "http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q="+$("#cityField").val();
        $.getJSON(url,function(data) {
            var everything;
            everything = "<h4>Here are some suggestions of cities in Utah:</h4>";
            everything += "<ul>";
            $.each(data, function(i,item) {
                everything += "<li> "+data[i].city;
            });
            everything += "</ul>";
            $("#txtHint").html(everything);
        })
        .done(function() { console.log('getJSON request succeeded!'); })
        .fail(function(jqXHR, textStatus, errorThrown) { 
            console.log('getJSON request failed! ' + textStatus); 
            console.log("incoming "+jqXHR.responseText);
        })
        .always(function() { 
            console.log('getJSON request ended!'); 
        });
    });
    
    //clicking the weather button
    $("#weatherButton").click(function(e){
        let city = $("#cityField").val();
        // alert(city);
        console.log(city);
        $("#displayCity").text(city);
        var myurl= "https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=300418f86d1e3a3ad740bedfa04ae726&q=";
        myurl += city;
        console.log(myurl);
        $.ajax({
            url : myurl,
            dataType : "json",
            success : function(parsed_json) {
                var location = parsed_json['name'];
                var weather = parsed_json['weather'][0]['main'];
                var temp = parsed_json['main']['temp'];
                var weather_icon = parsed_json['weather'][0]['icon'];
                var humidity = parsed_json['main']['humidity'];
                var temp_min = parsed_json['main']['temp_min'];
                var temp_max = parsed_json['main']['temp_max'];
                var wind_speed = parsed_json['wind']['speed'];
                var everything = "<h4>Current Weather:</h4><br>";
                everything += "<img id=\"weather-icon\" src=\"http://openweathermap.org/img/w/" + weather_icon + ".png\"/>"
                everything += "<ul>";
                everything += "<li><strong>Weather:</strong> " + weather; + " (" + temp + "&#8457;)";
                everything += "<li><strong>Low: </strong>" + temp_min + "&#8457; | <strong>High: </strong>" + temp_max + "&#8457;";
                everything += "<li><strong>Humidity: </strong>" + humidity + "%";
                everything += "<li><strong>Wind: </strong>" + wind_speed + " mph";
                everything += "</ul>";
                $("#weather").html(everything);
            }
        });
        e.preventDefault();
    });
    
    //clicking the StackExchange search button
    $("#stackButton").click(function(e){
        let par = $("#stackField").val();
        // alert(par + "!");
        console.log(par);
        $("#stackDisplay").text("Search Results for " + par + ":");
        var myurl= "https://api.stackexchange.com/2.2/search?order=desc&sort=relevance&intitle=";
        myurl += par;
        myurl += "&site=stackoverflow";
        console.log(myurl);
        $.ajax({
            url : myurl,
            dataType : "json",
            success : function(parsed_json) {
                var everything = "<ul>";
                let numItems = parsed_json['items'].length;
                let limit = numItems < 10 ? numItems : 10;
                for(let i = 0; i < limit; i++) {
                    var title = parsed_json['items'][i]['title'];
                    var link = parsed_json['items'][i]['link'];
                    everything += "<li><a href=\'" + link + "\'>" + title + "</a></li>";
                }
                if(limit <= 0) {
                    everything += "<li>No StackExchange pages match your search--please try again</li>"
                }
                everything += "</ul>";
                $("#stackAnswer").html(everything);
            }
        });
        e.preventDefault();
    });
    
});

