$(function() {
       var gallery_api =  jQuery("#gallery").unitegallery({
          gallery_width: 1000,
          gallery_height: 400,
          gallery_autoplay:false, 
          slider_scale_mode: "fit",
          slider_control_zoom: false, 
          slider_enable_arrows: false,  
          gallery_background_color: "transparent",
          slider_enable_bullets: false
        }); 
       
       /*HANDLE BULLET CHANGE*/
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
	

});
