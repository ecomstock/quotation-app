let ajaxCall = function(){
  $.ajax({
    url : "https://random-quote-generator.herokuapp.com/api/quotes/random",
    format : "jsonp",
    success : displayQuote
  });
};

function displayQuote(data){
  console.log('IN DISPLAY');
  $('#quote-content').html(data.quote);
  $('#quote-author').html(data.author);
  tweet = 'http://twitter.com/intent/tweet?text=' + '"' + data.quote.toString() + '" ' + data.author.toString();
  $('#tweet-this').click(function(){
    window.open(tweet.toString());
  });
};

$(document).ready(function(){
    ajaxCall();
  $('#new-quote').click(function(){
    ajaxCall();
  });
});