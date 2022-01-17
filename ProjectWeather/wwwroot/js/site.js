////$(document).ready(function () {
////    alert("jsdfjksdf")
////    $("#form-submit").submit(function (event) {
////        performSearch(event);
////    });
////});


////function performSearch(event) {
////    var request;
////    event.preventDefault();

////    request = $.ajax({
////        url: 'https://www.metaweather.com/api/location/search/?query=san',
////        type: "GET",
////        data: {
////            q: $("#city").val()

////        }
////    });

////    request.done(function (response) {
////        formatSearch(response);
////    });
////}

////function formatSearch(jsonObject) {
////    var city_name = jsonObject.latt_long[0];
////}
