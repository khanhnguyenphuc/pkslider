/**
     *  @name pkpopup
     *  @description get html into popup by ajax
     *  @version 1.0
     *  @options
     *    element: null,
     *    url: '',
     *    template: '<div class="box-pkslider">' +
     *              '<div class="content-pkslider"></div>' +
     *              '</div>',
     *    onCallback: null,
     *    remote: '/popup'
     *  @events
     *    click
     *  @methods
     *    init
     *    bindCustomEvent
     *    destroy
     */
    ;(function($, window, undefined) {
      'use strict';

      var pluginName = 'pkslider';
      // var ui = {
      //   nextSlide: '<button type="button" class="btn btn-default next-slide"></button>',
      //   prevSlide: '<<button type="button" class="btn btn-default prev-slide"></button>',
      //   navBar: '<div class="pkslider-nav"></div>',
            
      //   slide: '<div class="slide"></div>'

      // };

      function Plugin(element, options) {
        this.element = $(element);
        this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
        this.init();
      }

      Plugin.prototype = {
        init: function() {
          // initialize
          // var that = this;
          this.vars = {

          };
        },
        bindCustomEvent: function() {
          $.isFunction(this.options.onCallback) && this.options.onCallback();
          this.element.trigger('customEvent');
        },
        destroy: function() {
          // remove events
          // deinitialize
          $.removeData(this.element[0], pluginName);
        }
      };

      $.fn[pluginName] = function(options, params) {
        
        return this.each(function() {
          var instance = $.data(this, pluginName);
          if (!instance) {
            $.data(this, pluginName, new Plugin(this, options));
          } else if (instance[options]) {
            instance[options](params);
          }
        });
      };

      $.fn[pluginName].defaults = {
        element: null,
        template: '<div class="box-pkslider">' +
                  '<div class="content-pkslider"></div>' +
                  '</div>',
        onCallback: null,
        drap: false,
        carousel: false
      };

      $(function() {
        $('[data-' + pluginName + ']')[pluginName]();
        $('[data-' + pluginName + ']').on('customEvent', function() {

        });
      });

    }(jQuery, window));