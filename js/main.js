$(function () {
    var browser = navigator.userAgent;
    var isIE = false;
    if(browser.indexOf("ie")>-1){
        isIE=true;
    }
    var dv = $( "#fixedMenu");
    var st;
   var otop =dv.offset().top; //存储原来的距离顶部的距离<br />
    $(window).scroll(function () {

        st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
        if (st >= parseInt(otop)) {
            if(isIE){
                dv.css({ "position":  "absolute" , "top": st });
            }
            else if(dv.css("position")!="fixed")
       dv.css({"position":"fixed","top":"0"});
        } else if (dv.css("position") != "static" ) dv.css({"position" : "static"  });
    });
});

$(function(){
    $('a, nav a, #logo').bind('click',function(event){
        var $anchor = $(this);
        $("html, body").stop().animate({scrollTop: $($anchor.attr('href')).offset().top-35}, 1000);
        event.preventDefault();
    });
});

