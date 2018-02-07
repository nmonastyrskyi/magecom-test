$(function() {
       var gallery_api =  jQuery("#slider").unitegallery({
          gallery_theme:"slider",
          gallery_width: 1000,
          gallery_height: 400,
          gallery_autoplay:false, 
          slider_scale_mode: "fit",
          slider_control_zoom: false, 
          slider_enable_arrows: false,  
          gallery_background_color: "transparent",
          slider_enable_bullets: false
        }); 
 
       
       /*HANDLE SLIDER BULLET CHANGE*/
       $('.bullet').eq(0).addClass('bullet--active')
       $('.bullet').each(function(i){
          $(this).click(function(){
            $(this).siblings().removeClass('bullet--active')
            $(this).addClass('bullet--active')
            gallery_api.selectItem(i)
          })
       })
      gallery_api.on("item_change",function(num, data){  
        $('.bullet').removeClass('bullet--active')
        $('.bullet').eq(num).addClass('bullet--active')
      });
      /*HANDLE BULLET CHANGE END*/
	 var owl = $(".owl-carousel").owlCarousel({
      loop: true,
      smartSpeed: 600,
      margin: 40,
      nav: false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          768:{
              items:2
          },
          1000:{
              items:4
          }
    }
   });

   /*HANDLE CAROUSEL BUTTONS*/
   $('.works__header__arrow-left ').click(function() {
    owl.trigger('prev.owl.carousel');
})
$('.works__header__arrow-right').click(function() {

    owl.trigger('next.owl.carousel');
})
});
