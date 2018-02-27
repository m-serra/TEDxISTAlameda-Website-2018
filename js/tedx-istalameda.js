/* on document ready */
jQuery(document).ready(function () {
    
        var myVideo = document.getElementById("video-background");

        /* start by positioning the navbar in the bottom of the screen and the content hidden under the screen */
        var nav_height = $('#navbar').height(),
            window_height = window.innerHeight,
            closed_top = window_height - nav_height;

        $(".animated_content").css('top', closed_top + 'px');
        $(".sections").css('margin-top', nav_height + 'px');
        $(".mobile_nav_overlay").css('height', closed_top + 'px');        

        /*then hide all sections to prevent address bar scroll in mobile*/
        var section1 = document.getElementById("about"),
            section2 = document.getElementById("speakers"),
            section3 = document.getElementById("partners"),
            section4 = document.getElementById("info"),
            sections = [section1, section2, section3, section4];

        for (i = 0; i < 4; i++) {
            if (!(classie.has(sections[i], 'container--close'))) {
                classie.add(sections[i], 'container--close');
            }
        }

        /* Window Size Testing to choose proper navbar & other stuff */

        /* Default usar long nav */
        $('.short-nav').css("display", "none");
        $('.long-nav').css("display", "flex");
        $('.long-nav').css("display", "-webkit-flex");
        $('.long-nav').css("display", "-moz-flex");
        $('.long-nav').css("display", "-ms-flex");
        /* myVideo.play(); */ //precaução para se o autoplay não funcionar

        if ($(window).width() < 780) {
            $('.long-nav').css("display", "none");
            $('.short-nav').css("display", "flex");
            $('.short-nav').css("display", "-webkit-flex");
            $('.short-nav').css("display", "-moz-flex");
            $('.short-nav').css("display", "-ms-flex");
            $('.animated_content').css({ "width": "100vw", "left": "0", "right": "0" });
            $('.mobile_section_title').css("display", "block");
            $('.navbar').css("padding-left", "8vw");
            $('.navbar').css("padding-right", "8vw");
        }

        if ($(window).width() < 480) {
            $(".mute").css("display", "none");
           /* myVideo.pause(); */
        }
    
        if ($(window).width() <= 335) {
            $(".medium").css("display", "none"); /* porque depois os títulos das secções não cabem */
        }
    
        /* Mute Button */
        $(".mute").click(function () {
				if ($("video").prop('muted')) {
					$("video").prop('muted', false);
				}
				else {
					$("video").prop('muted', true);
				}
        });

        /* Toggle Content Sub Menu (ex: speakers vs. past editions) */
        jQuery("#sub_menu a").bind("click", function (e) {
            e.preventDefault();

            // Removes selection from current button
            document.querySelector(".sub_section_selected").classList.remove("sub_section_selected");

            // Adds selection to clicked button
            var current = $(this)[0];
            var id = current.getAttribute('data-section');
            var num = current.getAttribute('data-description');
            current.classList.add("sub_section_selected");

            // Substitutes content, based on data-section attribute
            document.querySelector('div[data-description="' + num + '"]').classList.remove("content_selected");
            document.querySelector('div[data-section="' + id + '"]').classList.add("content_selected");

        });

    /* on window resize */
    $(window).resize(function () {

        /* position the navbar in the bottom of the screen and the content hidden under the screen */
        var nav_height = $('#navbar').height(),
            window_height = window.innerHeight,
            closed_top = window_height - nav_height;

        $(".animated_content").css('top', closed_top + 'px');
        $(".sections").css('margin-top', nav_height + 'px');
        $(".mobile_nav_overlay").css('height', closed_top + 'px');

        /* Window Size Testing to set proper navbar & other stuff */
        
        /* Default */
        $(".mute").css("display", "block");
        $(".medium").css("display", "block");
        if (document.getElementById("sound_mute").style.display == "none") {
            $("video").prop('muted', false);
            unmute();
        } 
        else { mute() };
        
        if ($(window).width() < 780) {
            $('.long-nav').css("display", "none");
            $('.short-nav').css("display", "flex");
            $('.short-nav').css("display", "-webkit-flex");
            $('.short-nav').css("display", "-moz-flex");
            $('.short-nav').css("display", "-ms-flex");
            $('.animated_content').css({ "width": "100vw", "left": "0", "right": "0" });
            $('.mobile_section_title').css("display", "block");
            $('.navbar').css("padding-left", "8vw");
            $('.navbar').css("padding-right", "8vw");
        }
        
        if ($(window).width() <= 480) {
            $("video").prop('muted', true);
            $(".mute").css("display", "none");
        } 
        
        if ($(window).width() <= 335) {
            $(".medium").css("display", "none");
        }

        else {
            $('.short-nav').css("display", "none");
            $('.long-nav').css("display", "flex");
            $('.animated_content').css({ "width": "84vw", "left": "8vw", "right": "8vw" });
            $('.mobile_nav_overlay').removeClass('visible');
            $('.mobile_section_title').css("display", "none");
            $('.navbar').css("padding-left", "2vw");
            $('.navbar').css("padding-right", "4vw");
        }
    });
    
});


/* Past Speakers Lazy Loading of videos */
(function () {
    b = document.body;

    // ADDS TALK VIDEO
    for (var ab = b.querySelectorAll(".talkcontainer"), c = 0; c < ab.length; c++) {
        var e = ab[c];
        e.addEventListener("click", P)
    }
    E();


    // ADDS PLAY MODE TO VIDEO TALK
    function P(b) {
        if (b.currentTarget.querySelector("iframe"))
            a();
        else {
            a();
            b.currentTarget.classList.add("playing");
            var c = document.createElement("iframe");
            c.src = "https://www.youtube.com/embed/" + b.currentTarget.getAttribute("data-media") + "?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=1";
            c.classList.add("videotalk");
            c.frameborder = "0";
            c.allowtransparency = "true";
            c.style.display = "block";
            c.setAttribute('allowFullScreen', '');
            c.setAttribute('webkitAllowFullScreen', '');
            c.setAttribute('mozallowFullScreen', '');
            b.currentTarget.appendChild(c);

            // HIDES THUMBNAIL & ICON
            c.parentNode.getElementsByTagName("img")[0].style.display = "none";
            c.parentNode.getElementsByTagName("div")[0].style.display = "none";
            c.style.border = 0;
        }
    }
    // CHANGES PLACEHOLDER IMAGE WITH THUMBNAIL FROM TALK
    function E() {
        ca = !0;
        for (var ab = b.querySelectorAll(".talkcontainer"), c = 0; c < ab.length; c++) {
            // ADD THUMBNAIL
            var e = document.createElement("img");
            e.num = c;
            e.onload = function () {
                ab[this.num].src = this.src
            };
            e.src = /*Model.IMAGE_PATH +*/ "https://img.youtube.com/vi/" + ab[c].getAttribute("data-media") + "/hqdefault.jpg"
            e.classList.add("imgtalk");
            ab[c].appendChild(e);

            // ADD YOUTUBE ICON
            var f = document.createElement("div");
            f.classList.add("hoverlay");
            ab[c].appendChild(f);
        }
    }

    // ENDS TALK
    function a() {
        for (var ab = b.querySelectorAll(".playing"), c = 0; c < ab.length; c++) {
            var e = ab[c];
            e.classList.remove("playing");
            e.getElementsByTagName("img")[0].style.display = "block";
            e.getElementsByTagName("div")[0].style.display = "block";
            (e = e.querySelector("iframe")) && e.parentNode.removeChild(e)
        }
    }

})();


/* Attend Overlay */
function on() {
			document.getElementById("overlay").style.display = "block";
		}

function off() {
    document.getElementById("overlay").style.display = "none";
}

/* Attend Typeform */
(function () { var qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName, id = "typef_orm", b = "https://embed.typeform.com/"; if (!gi.call(d, id)) { js = ce.call(d, "script"); js.id = id; js.src = b + "embed.js"; q = gt.call(d, "script")[0]; q.parentNode.insertBefore(js, q) } })()


