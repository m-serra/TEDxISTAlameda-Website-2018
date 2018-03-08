function main() {

 $('.container-2017').hide();
 $('.container-2017').fadeIn(1000);

 $('.header-2017').on('click', function() {
   $('.2017-speakers').slideToggle(850);
   $('.2017-speakers').toggleClass('active');
   $('.2016-speakers').hide(500);
   $('.2013-speakers').hide(500);
   
 
 });

 $('.2016-container').hide();
 $('.2016-container').fadeIn(1000);

 $('.2016-speakers').hide();
 $('.header-2016').on('click', function() {
   $('.2016-speakers').slideToggle(850);
   $('.2016-speakers').toggleClass('active');
   $('.2017-speakers').hide(500);
   $('.2013-speakers').hide(500);
 });

 $('.2013-container').hide();
 $('.2013-container').fadeIn(1000);

 $('.2013-speakers').hide();
 $('.header-2013').on('click', function() {
   $('.2013-speakers').slideToggle(850);
   $('.2013-speakers').toggleClass('active');
   $('.2016-speakers').hide(500);
   $('.2017-speakers').hide(500);
 });

};



$(document).ready(main);
