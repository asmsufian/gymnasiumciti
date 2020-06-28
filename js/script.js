
$("#colorful").colorfulTab();    
        $("#colorful-background-image").colorfulTab({
            theme: "flatline",
            backgroundImage: "true",
            overlayColor: "#002F68",
            overlayOpacity: "0.8"
        });   
    



$('#banner-part').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
    arrows: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
       
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})




$('.testi-slide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
    arrows: false,
 slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
       
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})



$('.sponser').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
     arrows: true,
    prevArrow:'<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
     nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
  responsive: [
      
      {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      
      }
    },
      
      
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})











  $('.venobox').venobox();


$('.counter').counterUp({
                delay: 1,
                time: 15000
            });