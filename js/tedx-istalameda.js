/* on document ready */
jQuery(document).ready(function () {

    /* Collect info about OS and browser */
    {
        var unknown = '-';

        // screen
        var screenSize = '';
        if (screen.width) {
            width = (screen.width) ? screen.width : '';
            height = (screen.height) ? screen.height : '';
            screenSize += '' + width + " x " + height;
        }

        // browser
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        var browser = navigator.appName;
        var version = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;

        // Opera
        if ((verOffset = nAgt.indexOf('Opera')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Opera Next
        if ((verOffset = nAgt.indexOf('OPR')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 4);
        }
        // Edge
        else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
            browser = 'Microsoft Edge';
            version = nAgt.substring(verOffset + 5);
        }
        // MSIE
        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(verOffset + 5);
        }
        // Chrome
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
            browser = 'Chrome';
            version = nAgt.substring(verOffset + 7);
        }
        // Safari
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            browser = 'Safari';
            version = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Firefox
        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
            browser = 'Firefox';
            version = nAgt.substring(verOffset + 8);
        }
        // MSIE 11+
        else if (nAgt.indexOf('Trident/') != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(nAgt.indexOf('rv:') + 3);
        }
        // Other browsers
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browser = nAgt.substring(nameOffset, verOffset);
            version = nAgt.substring(verOffset + 1);
            if (browser.toLowerCase() == browser.toUpperCase()) {
                browser = navigator.appName;
            }
        }
        // trim the version string
        if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

        majorVersion = parseInt('' + version, 10);
        if (isNaN(majorVersion)) {
            version = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        // mobile version
        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

        // cookie
        var cookieEnabled = (navigator.cookieEnabled) ? true : false;

        if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
            document.cookie = 'testcookie';
            cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
        }

        // system
        var os = unknown;
        var clientStrings = [
            { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
            { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
            { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
            { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
            { s: 'Windows Vista', r: /Windows NT 6.0/ },
            { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
            { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
            { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
            { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
            { s: 'Windows 98', r: /(Windows 98|Win98)/ },
            { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
            { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
            { s: 'Windows CE', r: /Windows CE/ },
            { s: 'Windows 3.11', r: /Win16/ },
            { s: 'Android', r: /Android/ },
            { s: 'Open BSD', r: /OpenBSD/ },
            { s: 'Sun OS', r: /SunOS/ },
            { s: 'Linux', r: /(Linux|X11)/ },
            { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
            { s: 'Mac OS X', r: /Mac OS X/ },
            { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
            { s: 'QNX', r: /QNX/ },
            { s: 'UNIX', r: /UNIX/ },
            { s: 'BeOS', r: /BeOS/ },
            { s: 'OS/2', r: /OS\/2/ },
            { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
        ];
        for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }

        var osVersion = unknown;

        if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
            os = 'Windows';
        }

        switch (os) {
            case 'Mac OS X':
                osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'Android':
                osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'iOS':
                osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                break;
        }

        // flash (you'll need to include swfobject)
        /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
        var flashVersion = 'no check';
        if (typeof swfobject != 'undefined') {
            var fv = swfobject.getFlashPlayerVersion();
            if (fv.major > 0) {
                flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
            }
            else {
                flashVersion = unknown;
            }
        }

        window.jscd = {
            screen: screenSize,
            browser: browser,
            browserVersion: version,
            browserMajorVersion: majorVersion,
            mobile: mobile,
            os: os,
            osVersion: osVersion,
            cookies: cookieEnabled,
            flashVersion: flashVersion
        };
    }

    /* in case the OS is iOS */
    if (jscd.os == 'iOS') {

        /* use picture as background */
        $('.video-background').css('background', "url('https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278263_656796467840718_2337298823345642103_o.jpg?oh=80bf60907a15c1f1c23fcf2354e62578&oe=5ABB96C8') center center / cover no-repeat");

        $('.video-background').css('transition', 'background-image 1s ease-in-out');
        $('.video-background').css('-webkit-transition', 'background-image 1s ease-in-out');

        /* remove the video */  /* =============> com mais tempo seria importante mudar isto para que não haja HTTP Get do vídeo */
        $('.video-background video').remove();
        /* remove the mute button */
        $('.mute').remove();
        /* logo letters turn black */
        $('.logo-ISTAlameda').css('fill', 'black');
        /* declare the slideshow pics */
        var slideshow_pics = ["https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278263_656796467840718_2337298823345642103_o.jpg?oh=80bf60907a15c1f1c23fcf2354e62578&oe=5ABB96C8",
            "https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18238783_656796484507383_8553989711615651939_o.jpg?oh=450080ee8a66bf8f49609022a55ae2ef&oe=5AFCCC7E",
            "https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18359286_656797047840660_4176287751385468806_o.jpg?oh=1542dd2464e448b61bd9416db2a6b4a2&oe=5AC4E0D4",
            "https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278622_656796544507377_4345007737904570848_o.jpg?oh=e8aec1dfd5976f5257ecdf1f0dc2e938&oe=5AFD0BBE",
            "https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18320674_656796694507362_3776247683413321490_o.jpg?oh=b7bb50b032c908bf687f81a975f6acb9&oe=5AC9BEA8",
            "https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278527_656796897840675_3729991618877967455_o.jpg?oh=2b9574ea9620a72e138d0245ca4deae9&oe=5ABE4BCD",
            "https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18319150_656797147840650_2415578651118883702_o.jpg?oh=a1157f7a1925ed48f649f8dacfd63eb3&oe=5AF7CB34",
            "https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18359010_656796777840687_8356012350490760992_o.jpg?oh=b9127213712fd57c55127ab83017c216&oe=5AB4B93F",
            "https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278977_656796751174023_6031488475074036417_o.jpg?oh=acc0a13a2bcdb774076b061562a7341a&oe=5AB8AC6F",
            "https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18238586_656795481174150_6734661085472720274_o.jpg?oh=21b30773d0b6bbea229cc18c277d9482&oe=5AFA95A3",
            "https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18238668_656795837840781_4792671965406444100_o.jpg?oh=c091b71d1054367e7f62a7f8b5d1f9bd&oe=5AF6B6C6",
            "https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278712_656795277840837_6666527526801430755_o.jpg?oh=2b6d3c9a0e1d6ac8988f49079a7f548e&oe=5ABFEEA1",
            "https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18318990_656795434507488_2232701498420165985_o.jpg?oh=3e0bafc6c469983398a511df7caa8699&oe=5AFBDF26",
            "https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278381_656796461174052_1570124178479807777_o.jpg?oh=2370b1cba7b98e2197b9b2db2be86cf6&oe=5AF883BB",
            "https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18238192_656795274507504_22599534720234302_o.jpg?oh=b1b13c04623edc41f97ce1607bd9601b&oe=5AC8A254"
        ];

    }
    /*necessário para o menu ficar fixado em baixo e para fixar a adress bar*/
    if( jscd.os == 'iOS' || jscd.os == 'Android'){
        $('html').css('position', 'fixed');
        $('body').css('position', 'fixed');
    }

    slideshow(jscd.os);

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
        $('.navbar').css("border-radius", "0");
    }

    if ($(window).width() < 480 && jscd.os != 'iOS') {
        $(".mute").css("display", "none");
        /* logo letters turn black */
        $('.logo-ISTAlameda').css('fill', 'black');
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
        var clicked_menu = document.querySelectorAll('div[data-description="' + num + '"]');
        clicked_menu.forEach(function(userItem) {
          userItem.classList.remove("content_selected");
        });
        document.querySelector('div[data-section="' + id + '"]').classList.add("content_selected");

    });

    /* on window resize */
    $(window).resize(function () {

        var nav_height = $('#navbar').height(),
            window_height = window.innerHeight,
            closed_top = window_height - nav_height;
        
        /* if the container is  closed position the navbar in the bottom of the screen and the content hidden under the screen */
        if ((!classie.has(container, 'container--open'))) {
            $(".animated_content").css('top', closed_top + 'px');
            $(".sections").css('margin-top', nav_height + 'px');
            $(".mobile_nav_overlay").css('height', closed_top + 'px');
        }

        
        /* Default */
        $('.short-nav').css("display", "none");
        $('.long-nav').css("display", "flex");
        $('.animated_content').css({ "width": "84vw", "left": "8vw", "right": "8vw" });
        $('.mobile_nav_overlay').removeClass('visible');
        $('#hamb-icon').removeClass('open');
        $('.mobile_section_title').css("display", "none");
        $('.navbar').css("padding-left", "2vw");
        $('.navbar').css("padding-right", "4vw");
        $(".mute").css("display", "block");
        $(".medium").css("display", "block");
        $('.logo-ISTAlameda').css('fill', 'white');
        if (document.getElementById("sound_mute").style.display == "none") {
            $("video").prop('muted', false);
            unmute();
        }
        else { mute() };

        if ($(window).width() < 780) {
            console.log('small');
            $('.long-nav').css("display", "none");
            $('.short-nav').css("display", "flex");
            $('.short-nav').css("display", "-webkit-flex");
            $('.short-nav').css("display", "-moz-flex");
            $('.short-nav').css("display", "-ms-flex");
            $('.animated_content').css({ "width": "100vw", "left": "0", "right": "0" });
            $('.mobile_section_title').css("display", "block");
            $('.navbar').css("padding-left", "8vw");
            $('.navbar').css("padding-right", "8vw");
            $('.navbar').css("border-radius", "0");
        }

        if ($(window).width() <= 480 && jscd.os != 'iOS') {
            $("video").prop('muted', true);
            $(".mute").css("display", "none");
            $('.logo-ISTAlameda').css('fill', 'black');
        }

        if ($(window).width() <= 335) {
            $(".medium").css("display", "none");
        }

    });

});


window.mobilecheck = function () {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};


if (window.mobilecheck == "true") {
    $('#attend').css("display", "none");

}

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
    
    var myVideo = document.getElementById("video-background");
    if (!myVideo.paused)
        myVideo.pause();
    
    $('.mobile_nav_overlay').removeClass('visible');
    $('.animated_content').css('visibility','hidden');
    document.getElementById("overlay").style.display = "block";
    setTimeout(function () {$('.overlay').toggleClass('open')},5);
}

function off() {
    var myVideo = document.getElementById("video-background");
    if (myVideo.paused)
        myVideo.play();
    
    $('.overlay').toggleClass('open');
    $('.animated_content').css('visibility','visible');
    document.getElementById("overlay").style.display = "none";
}

/* Attend Typeform */
(function () { var qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName, id = "typef_orm", b = "https://embed.typeform.com/"; if (!gi.call(d, id)) { js = ce.call(d, "script"); js.id = id; js.src = b + "embed.js"; q = gt.call(d, "script")[0]; q.parentNode.insertBefore(js, q) } })()
