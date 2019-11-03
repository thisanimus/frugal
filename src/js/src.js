'use strict';

var elem = document.querySelector('.post-list');

if (elem){
  var infScroll = new InfiniteScroll( elem, {
    // options
    path: '.pagination-next',
    append: '.post-intro',
    history: false,
    scrollThreshold: 800,
  });
}



if (document.querySelectorAll('img')) { 
    
    var images = document.querySelectorAll('img');
    
    for (let image of images) {   
        image.removeAttribute("width");
        image.removeAttribute("height");
    }

}