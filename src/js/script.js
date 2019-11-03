'use strict';

var elem = document.querySelector('.post-list');

if (elem) {
  var infScroll = new InfiniteScroll(elem, {
    // options
    path: '.pagination-next',
    append: '.post-intro',
    history: false,
    scrollThreshold: 800
  });
}

if (document.querySelectorAll('img')) {
  var images = document.querySelectorAll('img');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var image = _step.value;
      image.removeAttribute("width");
      image.removeAttribute("height");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}