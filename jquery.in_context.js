;(function() {
  
  function init(selector, context){ 
    context || (context = init.prototype.context);
    return init.$super.apply(this, arguments);
  }
  for (var p in jQuery.fn.init) init[p] = jQuery.fn.init[p];
  init.$super = jQuery.fn.init;
  jQuery.fn.init = init;
  
  init.prototype.constructor = init;
  init.prototype.context = document;
  
  jQuery.fn.inContext = function inContext(block){
    this.constructor.prototype.context = this[0] || document;
    var error;
    try{ block(jQuery); }catch(e){ error = e; }
    this.constructor.prototype.context = this.context;
    if (error) throw error;
    return this;
  }
  
})();