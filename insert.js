$(document).ready(function()
{
$.ajax({
  jsonp: "jsonp",
  dataType: "jsonp",
  url: "https://crossorigin.me/http://api.forismatic.com/api/",
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
