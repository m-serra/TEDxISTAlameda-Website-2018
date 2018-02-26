var bg = document.getElementById("bg"); image = "";


/*JavaScript Client Detection
(C) viazenetti GmbH (Christian Ludwig) */
jQuery(document).ready(function (window) {
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
            {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
            {s:'Windows Vista', r:/Windows NT 6.0/},
            {s:'Windows Server 2003', r:/Windows NT 5.2/},
            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
            {s:'Windows 98', r:/(Windows 98|Win98)/},
            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s:'Windows CE', r:/Windows CE/},
            {s:'Windows 3.11', r:/Win16/},
            {s:'Android', r:/Android/},
            {s:'Open BSD', r:/OpenBSD/},
            {s:'Sun OS', r:/SunOS/},
            {s:'Linux', r:/(Linux|X11)/},
            {s:'iOS', r:/(iPhone|iPad|iPod)/},
            {s:'Mac OS X', r:/Mac OS X/},
            {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s:'QNX', r:/QNX/},
            {s:'UNIX', r:/UNIX/},
            {s:'BeOS', r:/BeOS/},
            {s:'OS/2', r:/OS\/2/},
            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
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
            else  {
                flashVersion = unknown;
            }
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


    if(jscd.os == 'iOS'){

        $('.video-background').css('background', "url('https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278263_656796467840718_2337298823345642103_o.jpg?oh=80bf60907a15c1f1c23fcf2354e62578&oe=5ABB96C8') center center / cover no-repeat");
        
        $('.video-background').css( 'transition', 'background-image 1s ease-in-out');
        $('.video-background').css( '-webkit-transition', 'background-image 1s ease-in-out');

        $('.video-background video').remove(); 
        
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


    slideshow(jscd.os);

}(this)); 

/* fetch pictures only if necessary */
if(slideshow_pics === undefined ){

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

function slideshow(os) {
    setTimeout(function(){
        if($(window).width() <= 480 || os == 'iOS'){
            image = 'url(' + slideshow_pics[Math.floor(Math.random() * slideshow_pics.length)] + ')'
        };
        bg.style.backgroundImage = image;
        slideshow(os);
    }, 5000);
};

/* 
alert(
    'OS: ' + jscd.os +' '+ jscd.osVersion + '\n' +
    'Browser: ' + jscd.browser +' '+ jscd.browserMajorVersion +
      ' (' + jscd.browserVersion + ')\n' + 
    'Mobile: ' + jscd.mobile + '\n' +
    'Flash: ' + jscd.flashVersion + '\n' +
    'Cookies: ' + jscd.cookies + '\n' +
    'Screen Size: ' + jscd.screen + '\n\n' +
    'Full User Agent: ' + navigator.userAgent
); */

