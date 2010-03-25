;(function(jQuery) {

  jQuery.fn.inContext = function inContext(block){
    var default_context = this[0];
    function contextualjQuery(selector, context){
      return jQuery(selector, context || default_context);
    }

    for (var p in jQuery) contextualjQuery[p] = jQuery[p];

    block.call(default_context, contextualjQuery);
    return this;
  }
  
})(jQuery);