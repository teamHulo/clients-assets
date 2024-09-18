window.Squarespace.onInitialize(Y, function() {
  Y.all('section[id*="bg-with-play"]').each(function(node){
    Y.Node.create('<div class="trigger-video-play"></div>').appendTo(node);
  });

  Y.all('.trigger-video-play').each(function(node){
    node.on('click', function(){
      node.ancestor('section').one('.sqs-block.gallery-block.sqs-block-gallery .sqs-video-wrapper').simulate('click');
      node.ancestor('section').addClass('section-trigger');
      node.ancestor('section').one('.sqs-block.gallery-block.sqs-block-gallery .sqs-video-wrapper').simulate('click');
    });
  });
});
