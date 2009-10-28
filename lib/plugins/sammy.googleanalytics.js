(function($) {

  Sammy = Sammy || {};

  // A simple plugin that pings Google Analytics tracker
  // every time a route is triggered
  //
  // === Arguments
  //
  // +tracker+:: the Google Analytics pageTracker object.  Defaults to
  // the default object defined by the GA snippet, or pass your own if you
  // have a custom install
  Sammy.GoogleAnalytics = function(app, tracker) {
    var _tracker = tracker || window.pageTracker;

    this.bind('run-route', function() {
      if(typeof _tracker != 'undefined') {
        _tracker._trackPageview(this.params.path);
      }
    });
  };
})(jQuery);
