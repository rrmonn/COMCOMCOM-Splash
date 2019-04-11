if($(window).width() > 500) {

  $(document).on('mousemove', function (event) {

    $('.container').css('top', $(window).height() - event.pageY)

  })


  $('a').on('mouseover', function() {

    $('.background').css('opacity', '1')

  })


  $('a').on('mouseout', function() {

    $('.background').css('opacity', '0')

  })
  
  
  
  
  
  $('.hovie').on('mouseover', function() {

    
    $('.background').css('opacity', '1')
    $('.text').css('opacity', '0')
    

  })
  
  $('.hovie').on('mouseout', function() {

    $('.background').css('opacity', '0')
    $('.text').css('opacity', '1')
    
  })
  
  
  
  
  
  $('.design').on('mouseover', function() {

    
    $('.background').css('backgroundImage', 'url("assets/images/design.jpg")')
    $('.design').css('background', '#faf06f')
    
    
//    $('.design').css('opacity', '0')
    $('.code').css('opacity', '0')
    $('.content').css('opacity', '0')
    $('.storage').css('opacity', '0')
    $('.fulfillment').css('opacity', '0')
    $('.zine').css('opacity', '0')
    $('.paper').css('opacity', '0')
    $('.mail').css('opacity', '0')
    $('.follow').css('opacity', '0')
    

  })
  
  $('.design').on('mouseout', function() {

    $('.background').css('backgroundImage', 'none')
    $('.design').css('background', 'transparent')
    
//    $('.design').css('opacity', '1')
    $('.code').css('opacity', '1')
    $('.content').css('opacity', '1')
    $('.storage').css('opacity', '1')
    $('.fulfillment').css('opacity', '1')
    $('.zine').css('opacity', '1')
    $('.paper').css('opacity', '1')
    $('.mail').css('opacity', '1')
    $('.follow').css('opacity', '1')
    
  })
  
  
  
  $('.code').on('mouseover', function() {

    
    $('.background').css('backgroundImage', 'url("assets/images/code.jpg")')
    $('.code').css('background', '#faf06f')
    
    $('.design').css('opacity', '0')
//    $('.code').css('opacity', '0')
    $('.content').css('opacity', '0')
    $('.storage').css('opacity', '0')
    $('.fulfillment').css('opacity', '0')
    $('.zine').css('opacity', '0')
    $('.paper').css('opacity', '0')
    $('.mail').css('opacity', '0')
    $('.follow').css('opacity', '0')
    

  })
  
  $('.code').on('mouseout', function() {

    $('.background').css('backgroundImage', 'none')
    $('.code').css('background', 'transparent')
    
    $('.design').css('opacity', '1')
//    $('.code').css('opacity', '1')
    $('.content').css('opacity', '1')
    $('.storage').css('opacity', '1')
    $('.fulfillment').css('opacity', '1')
    $('.zine').css('opacity', '1')
    $('.paper').css('opacity', '1')
    $('.mail').css('opacity', '1')
    $('.follow').css('opacity', '1')
    
  })
  
  
  $('.content').on('mouseover', function() {

    
    $('.background').css('backgroundImage', 'url("assets/images/content.jpg")')
    $('.content').css('background', '#faf06f')
    
    $('.design').css('opacity', '0')
    $('.code').css('opacity', '0')
//    $('.content').css('opacity', '0')
    $('.storage').css('opacity', '0')
    $('.fulfillment').css('opacity', '0')
    $('.zine').css('opacity', '0')
    $('.paper').css('opacity', '0')
    $('.mail').css('opacity', '0')
    $('.follow').css('opacity', '0')
    

  })
  
  $('.content').on('mouseout', function() {

    $('.background').css('backgroundImage', 'none')
    $('.content').css('background', 'transparent')
    
    $('.design').css('opacity', '1')
    $('.code').css('opacity', '1')
//    $('.content').css('opacity', '1')
    $('.storage').css('opacity', '1')
    $('.fulfillment').css('opacity', '1')
    $('.zine').css('opacity', '1')
    $('.paper').css('opacity', '1')
    $('.mail').css('opacity', '1')
    $('.follow').css('opacity', '1')
    
  })
  
  
  $('.storage').on('mouseover', function() {

    
    $('.background').css('backgroundImage', 'url("assets/images/storage.jpg")')
    $('.storage').css('background', '#faf06f')
    
    $('.design').css('opacity', '0')
    $('.code').css('opacity', '0')
    $('.content').css('opacity', '0')
//    $('.storage').css('opacity', '0')
    $('.fulfillment').css('opacity', '0')
    $('.zine').css('opacity', '0')
    $('.paper').css('opacity', '0')
    $('.mail').css('opacity', '0')
    $('.follow').css('opacity', '0')
    

  })
  
  $('.storage').on('mouseout', function() {

    $('.background').css('backgroundImage', 'none')
    $('.storage').css('background', 'transparent')
    
    $('.design').css('opacity', '1')
    $('.code').css('opacity', '1')
    $('.content').css('opacity', '1')
//    $('.storage').css('opacity', '1')
    $('.fulfillment').css('opacity', '1')
    $('.zine').css('opacity', '1')
    $('.paper').css('opacity', '1')
    $('.mail').css('opacity', '1')
    $('.follow').css('opacity', '1')
    
  })
  
  
  $('.fulfillment').on('mouseover', function() {

    
    $('.background').css('backgroundImage', 'url("assets/images/fulfillment.jpg")')
    $('.fulfillment').css('background', '#faf06f')
    
    $('.design').css('opacity', '0')
    $('.code').css('opacity', '0')
    $('.content').css('opacity', '0')
    $('.storage').css('opacity', '0')
//    $('.fulfillment').css('opacity', '0')
    $('.zine').css('opacity', '0')
    $('.paper').css('opacity', '0')
    $('.mail').css('opacity', '0')
    $('.follow').css('opacity', '0')
    

  })
  
  $('.fulfillment').on('mouseout', function() {

    $('.background').css('backgroundImage', 'none')
    $('.fulfillment').css('background', 'transparent')
    
    $('.design').css('opacity', '1')
    $('.code').css('opacity', '1')
    $('.content').css('opacity', '1')
    $('.storage').css('opacity', '1')
//    $('.fulfillment').css('opacity', '1')
    $('.zine').css('opacity', '1')
    $('.paper').css('opacity', '1')
    $('.mail').css('opacity', '1')
    $('.follow').css('opacity', '1')
    
  })
  
  
  
  
  $('.mail').on('mouseover', function() {

    
    $('.background').css('backgroundImage', 'url("assets/images/mail.jpg")')
    $('.mail').css('background', '#faf06f')
    
    $('.design').css('opacity', '0')
    $('.code').css('opacity', '0')
    $('.content').css('opacity', '0')
    $('.storage').css('opacity', '0')
    $('.fulfillment').css('opacity', '0')
    $('.zine').css('opacity', '0')
    $('.paper').css('opacity', '0')
//    $('.mail').css('opacity', '0')
    $('.follow').css('opacity', '0')
    

  })
  
  $('.mail').on('mouseout', function() {

    $('.background').css('backgroundImage', 'none')
    $('.mail').css('background', 'transparent')
    
    $('.design').css('opacity', '1')
    $('.code').css('opacity', '1')
    $('.content').css('opacity', '1')
    $('.storage').css('opacity', '1')
    $('.fulfillment').css('opacity', '1')
    $('.zine').css('opacity', '1')
    $('.paper').css('opacity', '1')
//    $('.mail').css('opacity', '1')
    $('.follow').css('opacity', '1')
    
  })
  
  
  
   $('.follow').on('mouseover', function() {

    
    $('.background').css('backgroundImage', 'url("assets/images/follow.jpg")')
    $('.follow').css('background', '#faf06f')
    
    $('.design').css('opacity', '0')
    $('.code').css('opacity', '0')
    $('.content').css('opacity', '0')
    $('.storage').css('opacity', '0')
    $('.fulfillment').css('opacity', '0')
    $('.zine').css('opacity', '0')
    $('.paper').css('opacity', '0')
    $('.mail').css('opacity', '0')
//    $('.follow').css('opacity', '0')
    

  })
  
  $('.follow').on('mouseout', function() {

    $('.background').css('backgroundImage', 'none')
    $('.follow').css('background', 'transparent')
    
    $('.design').css('opacity', '1')
    $('.code').css('opacity', '1')
    $('.content').css('opacity', '1')
    $('.storage').css('opacity', '1')
    $('.fulfillment').css('opacity', '1')
    $('.zine').css('opacity', '1')
    $('.paper').css('opacity', '1')
    $('.mail').css('opacity', '1')
//    $('.follow').css('opacity', '1')
    
  })
  
  
  
  
  
  


  $('.italic').on('mouseover', function() {

    $('.hello').css('opacity', '1')
    $('.standard').css('opacity', '0')
    $('a').css('opacity', '0')

  })
  

  $('.italic').on('mouseout', function() {

    $('.hello').css('opacity', '0')
    $('.standard').css('opacity', '1')
    $('a').css('opacity', '1')

  })

}
