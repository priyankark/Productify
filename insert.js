$(document).ready(function()
{
$.ajax({
  jsonp: "jsonp",
  dataType: "jsonp",
  url: "https://api.forismatic.com/api/1.0/",
  contentType: "application/jsonp",
  data: {
    lang: "en",
    method: "getQuote",
    format: 'jsonp'
  },
  success: function(data) { 
  	$(".quote").append(data.quoteText);
  }
});
});
