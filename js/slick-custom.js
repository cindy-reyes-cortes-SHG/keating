$(document).ready(function(){

	$('.slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
	autoplay:true,
  prevArrow: '<button type="button" class="slick-button slick-prev"><i class="fa-solid fa-arrow-left-long"></i> Previous </button>',
  nextArrow: '<button type="button" class="slick-button slick-next">Next <i class="fa-solid fa-arrow-right-long"></i></button>',
	autoplaySpeed: 5000,

responsive: [
    {
      breakpoint: 775,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 545,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
	
   });