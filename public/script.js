$(document).ready(function () {
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://covid-19-data.p.rapidapi.com/country?format=json&name=usa",
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "78e0cd5f3fmsh2af5609de3ce269p15d043jsne0237af7c234",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);

    // Get a reference to the container
    $("#totalNumCases").text(response[0].confirmed);

    // Set the content of that container to the target value from the response
  });
});

$(document).ready(function () {
  var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://covid-19-statistics.p.rapidapi.com/reports/total?date=2020-04-07",
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
      "x-rapidapi-key": "78e0cd5f3fmsh2af5609de3ce269p15d043jsne0237af7c234",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);

    $("#totalNumGlobCases").text(response.data.active);
  });
  var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://covid-19-news.p.rapidapi.com/v1/covid?lang=en&media=True&q=covid",
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-19-news.p.rapidapi.com",
      "x-rapidapi-key": "80e2e16372msh3040b936c7ffe75p1fd56fjsn595b9e911276",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});
