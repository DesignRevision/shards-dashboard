/*
 |--------------------------------------------------------------------------
 | Shards Dashboards: Components Overview Template
 |--------------------------------------------------------------------------
 */

'use strict';

(function ($) {
  $(document).ready(function() {

    // Slider example 1
    $('#slider-example-1').customSlider({
      start: 85,
      connect: [true, false],
      tooltips: true,
      range: {
        'min':  0,
        'max':  100
      }
    });

    // Slider example 2
    $('#slider-example-2').customSlider({
      start: 15,
      connect: [false, true],
      range: {
        'min':  0,
        'max':  100
      }
    });

    // Slider example 3
    $('#slider-example-3').customSlider({
      start: [35, 65],
      range: {
        min: 0,
        max: 100
      },
      connect: true,
      pips: {
        mode: 'positions',
        values: [0, 25, 50, 75, 100],
        density: 5
      }
    });

  });
})(jQuery);
