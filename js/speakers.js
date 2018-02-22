function main() {

 $('.container-2017').hide();
 $('.container-2017').fadeIn(1000);

 $('.header-2017').on('click', function() {
   $('.2017-speakers').slideToggle(850);
   $('.2017-speakers').toggleClass('active');
 });

 $('.2016-container').hide();
 $('.2016-container').fadeIn(1000);

 $('.2016-speakers').hide();
 $('.header-2016').on('click', function() {
   $('.2016-speakers').slideToggle(850);
   $('.2016-speakers').toggleClass('active');
 });

 $('.2013-container').hide();
 $('.2013-container').fadeIn(1000);

 $('.2013-speakers').hide();
 $('.header-2013').on('click', function() {
   $('.2013-speakers').slideToggle(850);
   $('.2013-speakers').toggleClass('active');
 });

};

$(function() {
  $('.header-2017').hover(function() {
    $('.container-2017').css('background-color', 'rgba(0,0,0,0.05)');
  }, function() {
    // on mouseout, reset the background colour
    $('.container-2017').css('background-color', '');
  });
});

$(function() {
  $('.header-2016').hover(function() {
    $('.container-2016').css('background-color', 'rgba(0,0,0,0.05)');
  }, function() {
    // on mouseout, reset the background colour
    $('.container-2016').css('background-color', '');
  });
});

$(function() {
  $('.header-2013').hover(function() {
    $('.container-2013').css('background-color', 'rgba(0,0,0,0.05)');
  }, function() {
    // on mouseout, reset the background colour
    $('.container-2013').css('background-color', '');
  });
});

$(document).ready(main);
