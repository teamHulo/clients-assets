window.Squarespace.onInitialize(Y, function() {
  Y.all('.gallery-block .slide .video-lightbox-wrapper').each(function(node){
    var d = node.getAttribute('data-description');
    var t = node.getAttribute('data-title');
    node.all('.sqs-video-overlay').appendChild(Y.Node.create('<div class="gallery-desc"><div class="gallery-cont">'+t+d+'</div></div>'));
  });
})
