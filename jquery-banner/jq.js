
//------------------------------- banner ---------------------------------------
(function($) {

    $.fn.banner = function(method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Метод с именем ' + method + ' не существует для jQuery.banner');
        }
    };

     var $this = $(this),
            i_imgs = 0,
            i_loop = 0,
            thisurl = 0,
            timer = null,
            imgs = document.getElementById('imgs'),
            cover = document.getElementById('cover'),
            settings;   

    var methods = {
        init: function(option) {
            return this.each(function() {
          // Создаём настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы       
        settings = $.extend({
        imgsname: ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png" ],
        imgsurl: ["http://www.yahoo.com", "http://www.altavista.com", "http://www.excite.com"],
        imgstop: 110,
        imgsleft: 30,
        pause: 80,
        standstill: 3000,
        coverimage: ["images/imgtransj115.gif", "images/imgtransj215.gif", "images/imgtransj315.gif",
            "images/imgtransj415.gif", "images/imgtransj515.gif", "images/imgtransj615.gif",
            "images/imgtransj715.gif", "images/imgtransj815.gif", "images/imgtransj915.gif",
            "images/imgtransj1015.gif", "images/imgtransj1115.gif","images/imgtransj1215.gif",
            "images/imgtransj1315.gif", "images/imgtransj1415.gif", "images/imgtransj1515.gif"
        ],
        gotourl: function() {
            alert("href");
            $('a').prop('href', settings.imgsurl[i_imgs]);

        }
    }, option); 
                // el_id = $this.attr('id'),
                // background_image = (new Image());
                // background_image_src = $._spritely._spStrip($this.css('background-image'), 'url("); ');

                imgs.style.top = settings.imgstop;
                imgs.style.left = settings.imgsleft;
                cover.style.top = settings.imgstop;
                cover.style.left = settings.imgsleft;
                enlargehearts();
                
                 function enl_1(){ // - 1 -
                     imgcover.src = settings.coverimage[i_loop];
                     i_loop++;
                     timer = setTimeout(function() {  enlargehearts() }, settings.pause);
                };
                 function enl_2(){ // -2-
                     clearTimeout(timer);
                     i_loop--;
                     timer = setTimeout(function() { shrinkhearts() }, settings.standstill); 
                }

                function enlargehearts() {
                    (i_loop <= settings.coverimage.length - 1) ? enl_1() : enl_2();
                }

                function shrinkhearts() {
                    (i_loop >= 0) ? shr_1() : shr_2() 
                }
                
                function shr_1(){ // - 3 -
                    imgcover.src = settings.coverimage[i_loop];
                    i_loop--;
                    timer = setTimeout(function() { shrinkhearts() }, settings.pause); 
                }
                
                function shr_2(){ // - 4 -
                     clearTimeout(timer);
                     i_loop = 0;
                     i_imgs++;
                     if (i_imgs >= settings.imgsname.length) {  i_imgs = 0;  }
                     imgsback.src = settings.imgsname[i_imgs];
                     timer = setTimeout(function() { enlargehearts() }, (4 * settings.pause)); 
                }

//            $('a').on('click', function() {
//                  $('a').prop('href', settings.imgsurl[i_imgs]);
//            }); 
            });
        },
        gotourl: function() {
            return this.each(function() {
                 // alert("gotoURL: " + settings.imgsname[0]);
               $('a').prop('href', settings.imgsurl[i_imgs]);
            });
        },
        destroy: function() {
            return this.each(function() {
               
            });
        }
    };

})(jQuery);