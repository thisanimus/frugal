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
