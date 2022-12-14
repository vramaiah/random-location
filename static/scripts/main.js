// AJAX for getting the random city
function get_random_city() {
    var loading_sign = $("#loading-div");
    loading_sign.css({"display" : ""});
    console.log("Preparing to get city") // sanity check
    $.ajax({
        url : "/api/v1/get_random_city", // the endpoint
        type : "GET", // http method
        // handle a successful response
        success : function(json) {
            result = JSON.parse(json);
            loading_sign.css("display" , "none"); // remove the loading sign
            $("#results").html("<h1 id='name'>" + result.city + ", " + result.state + ", " + result.country + "</h1>")
            console.log(result); // log the returned json to the console
            console.log("Success in getting city"); // another sanity check
        },

        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            loading_sign.css("display" , "none"); // remove the loading sign
            alert("Oops! We have encountered an error: "+ errmsg);
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
};
$(document).ready(function() {
  get_random_city();
});
$("button.reload-button").on("click", function() {
    get_random_city();
});