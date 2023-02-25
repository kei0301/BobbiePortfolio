/*-----------------------------------------------------------------------------------

   

-----------------------------------------------------------------------------------

    Js INDEX

    ===================

----------------------------------------------------------------------------------- */

/*Counter Init 1*/
(function ($) {
  $.fn.countTo = function (options) {
    options = options || {};

    return $(this).each(function () {
      // set options for current element
      var settings = $.extend(
        {},
        $.fn.countTo.defaults,
        {
          from: $(this).data("from"),
          to: $(this).data("to"),
          speed: $(this).data("speed"),
          refreshInterval: $(this).data("refresh-interval"),
          decimals: $(this).data("decimals"),
        },
        options
      );

      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data("countTo") || {};

      $self.data("countTo", data);

      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      // initialize the element with the starting value
      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof settings.onUpdate == "function") {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData("countTo");
          clearInterval(data.interval);
          value = settings.to;

          if (typeof settings.onComplete == "function") {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0, // the number the element should start at
    to: 0, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    formatter: formatter, // handler for formatting the value before rendering
    onUpdate: null, // callback method for every time the element is updated
    onComplete: null, // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
})(jQuery);

// count-number 2
jQuery(function ($) {
  // custom formatting example
  $(".count-number").data("countToOptions", {
    formatter: function (value, options) {
      return value
        .toFixed(options.decimals)
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    },
  });

  // start all the timers
  $(".timer").each(count);

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data("countToOptions") || {});
    $this.countTo(options);
  }
});

// menu-btn 3
$(".menu-btn").on("click", function () {
  $("body.menu-layer").addClass("active");
  return false;
});
$(".menu-cls-btn").on("click", function () {
  $("body.menu-layer").removeClass("active");
  return false;
});
if ($.isFunction($.fn.aniTabs)) {
  jQuery(".js-tabs-link").aniTabs({
    autoHeight: false,
  });
}

// photo 5
$(document).ready(function () {
  $(".lightbox-toggle").click(function () {
    $(".backdrop")
      .animate({ opacity: ".50" }, 300, "linear")
      .css("display", "block");
    $(".box").fadeIn();
  });

  /* Click to close lightbox */
  $(".close, .backdrop").click(function () {
    $(".backdrop").animate({ opacity: "0" }, 300, "linear", function () {
      $(".backdrop").css("display", "none");
    });
    $(".box").fadeOut();
  });

  options = {
    cursorOuter: "disable",
    hoverEffect: "pointer-overlay",
    hoverItemMove: false,
    defaultCursor: false,
  };
  magicMouse(options);

  if ($.isFunction($.fn.owlCarousel)) {
    $(".photo").owlCarousel({
      items: 1,
      loop: false,
      margin: 10,
      callbacks: true,
      URLhashListener: true,
      dot: false,
      startPosition: "URLHash",
    });
  }
  if ($.isFunction($.fn.owlCarousel)) {
    $(".custome").owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      dot: false,
      nav: true,
      mouseDrag: false,
      animateOut: "fadeOut",
    });
  }

  if ($.isFunction($.fn.owlCarousel)) {
    $(".client-logo").owlCarousel({
      loop: true,
      dot: false,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });
  }
  if ($.isFunction($.fn.owlCarousel)) {
    $(".present-data-home-page").owlCarousel({
      loop: true,
      dot: false,
      margin: 35,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 3,
        },
      },
    });
  }
  if ($.isFunction($.fn.increase)) {
    function increase() {
      // Change the variable to modify the speed of the number increasing from 0 to (ms)
      let SPEED = 40;
      // Retrieve the percentage value
      let limit = parseInt(document.getElementById(".value1").innerHTML, 10);

      for (let i = 0; i <= limit; i++) {
        setTimeout(function () {
          document.getElementById(".value1").innerHTML = i + "%";
        }, SPEED * i);
      }
    }

    increase();
  }

  // Responsive header menu
  jQuery(".mobile-nav .menu-item-has-children").on("click", function ($) {
    jQuery(this).toggleClass("active");
  });

  jQuery("#nav-icon4").click(function ($) {
    jQuery("#mobile-nav").toggleClass("open");
  });

  jQuery("#res-cross").click(function ($) {
    jQuery("#mobile-nav").removeClass("open");
  });

  jQuery(".bar-menu").click(function ($) {
    jQuery("#mobile-nav").toggleClass("open");
    jQuery("#mobile-nav").toggleClass("hmburger-menu");
    jQuery("#mobile-nav").show();
  });

  jQuery("#res-cross").click(function ($) {
    jQuery("#mobile-nav").removeClass("open");
  });
});

jQuery(".new-tabe").click(function ($) {
  jQuery("#mobile-nav").removeClass("open");
});

// bars
var bars = document.querySelectorAll(".meter > span");

setInterval(function () {
  bars.forEach(function (bar) {
    var getWidth = parseFloat(bar.dataset.progress);

    for (var i = 0; i < getWidth; i++) {
      bar.style.width = i + "%";
    }
  });
}, 500);

// ------------------------             stickyHeader

if ($("#stickyHeader")[0]) {
  // Sticky Header
  var new_scroll_position = 0;

  var last_scroll_position;

  var header = document.getElementById("stickyHeader");

  window.addEventListener("scroll", function (e) {
    last_scroll_position = window.scrollY;

    if (
      new_scroll_position < last_scroll_position &&
      last_scroll_position > 100
    ) {
      header.classList.remove("slideUp");

      header.classList.add("slideUp");
    } else if (last_scroll_position < 100) {
      header.classList.remove("slideUp");
    } else if (new_scroll_position > last_scroll_position) {
      header.classList.remove("slideUp");

      header.classList.add("slideUp");
    }

    new_scroll_position = last_scroll_position;
  });
}

//AOS animation 11
AOS.init({
  once: true,
});

/*   --------------------  loader ----------------------  */

$(window).on("load", function () {
  setTimeout(function () {
    // orix loader
    $(".page-loader").fadeOut();
  });
});
/*   --------------------  loader ----------------------  */
var $owl = $(".zoom-slider");

$owl.children().each(function (index) {
  $(this).attr("data-position", index);
});
if ($.isFunction($.fn.owlCarousel)) {
  $owl.owlCarousel({
    center: true,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
}
