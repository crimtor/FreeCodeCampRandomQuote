$(document).ready(function() {
  function jsonCallback(json) {
    console.log(json);
  }
  let quote = '';
  let author = '';
  let dave = JSON.parse(JSON.stringify(quotes));
  function getNewQuote() {
    let rn = Math.floor(Math.random() * dave.length);
    quote = dave[rn].quote;
    author = dave[rn].name;
    if(quote && author){
      $('#text').text(quote);
      $('#author').text(" -As said by " + author);
    }
  }
$('#new-quote').on('click', function(event){
  event.preventDefault();
  let rando = Math.floor(Math.random() * 360);
  getNewQuote();
  document.body.style.backgroundColor = "hsl(" + rando +", 80%, 85%)";
});
$('#tweet-quote').on('click', function(event){
  event.preventDefault();
  window.open('https://twitter.com/intent/tweet?text=' + quote + " -As said by " + author);
});
getNewQuote();

});
