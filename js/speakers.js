function main() {

 $('.2017-container').hide();
 $('.2017-container').fadeIn(1000);

 $('.2017-speakers').hide();
 $('.2017-header').on('click', function() {
   $('.2017-speakers').slideToggle(500);
   $('.2017-speakers').toggleClass('active');
 });

 $('.2016-container').hide();
 $('.2016-container').fadeIn(1000);

 $('.2016-speakers').hide();
 $('.2016-header').on('click', function() {
   $('.2016-speakers').slideToggle(500);
   $('.2016-speakers').toggleClass('active');
 });

 $('.2013-container').hide();
 $('.2013-container').fadeIn(1000);

 $('.2013-speakers').hide();
 $('.2013-header').on('click', function() {
   $('.2013-speakers').slideToggle(500);
   $('.2013-speakers').toggleClass('active');
 });

};

$(document).ready(main);
