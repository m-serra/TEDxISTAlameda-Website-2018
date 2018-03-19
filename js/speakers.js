$(document).ready(function(){
    
    var slow = 250;
    var fast = 100;

    preload_pics=["./images/speakers/12_carmo.jpg","./images/speakers/bw/12_carmo.jpg","./images/speakers/11_jans.jpg","./images/speakers/bw/11_jans.jpg","./images/speakers/3_rosarinho.jpg","./images/speakers/bw/3_rosarinho.jpg","./images/speakers/7_darchite.jpg","./images/speakers/bw/7_darchite.jpg"];
    
    var images = [];
    function preload() {
        for (var i = 0; i < preload_pics.length; i++) {
            images[i] = new Image();
            images[i].src = preload_pics[i];
        }
    };

    preload(preload_pics);
    
    
    $(".close_speakers").click(function() {
        close_speakers();
        return false;
    });
    
    $("#speakers").click(function() {
        close_speakers();
        return false;
    });

    $(".ind_container").click(function() {
        
        if($(this).children().css('display')=='none'){

        if($(window).width()>480){
            var altura=$(this).offset().top;
            
            for(i=1;i<=10;i++){
                
                if($("#ind_container_"+i).offset().top==altura){
                    $("#speaker18_"+i).css({"width": size_min});
                }else{
                    $("#speaker18_"+i).css({"width": size_default});
                }
            }

            $(this).parent().css({"width": size_max+'%'});

            }
        
        for(i=1;i<=10;i++){
                
                if($(this)[0]!=$("#ind_container_"+i)[0]){
                    $("#ind_container_"+i).children().fadeOut(100);
                    $("#ind_container_"+i).prev().fadeIn(200);
                    $("#ind_container_"+i).css({"background-size": "background-size: cover"});
                }
               
            }
            
            $(this).children().fadeIn(200);
            $(this).prev().fadeOut(200);
            $( this ).fadeTo( fast , 1, function() {
            // Animation complete.
            });
            
            toggle_color();

        };
    return false;
    });

    var size_max, size_min, size_default, size_full;

    size_default = "200px";
    size_d = 200;

    size_full = "90%";


    function padding_speakers(){

        var comprimento = $(".speakers18_container")[0].getBoundingClientRect().width;
        var janela = $(window).width();


        if(janela>1000){
            size_max = 60;
        }else if(janela>500){
            size_max = 70;
        }else{
            size_max = 80;
        }

        if(janela<=480){
            $(".speakers18_container").css({"padding": "0"});
            for(i=1;i<=10;i++){
                $("#speaker18_"+i).css({"width": size_full});
            }
            size_d=0.9*$(".speakers18_container")[0].getBoundingClientRect().width;
        }

            for(i=1;i<=10;i++){
                if(janela<=480){
                    $("#speaker18_"+i).css({"width": size_full});
                }else{
                    $("#speaker18_"+i).css({"width": size_default}); 
                }

                $("#ind_container_"+i).children().fadeOut(100);
                $("#ind_container_"+i).prev().fadeIn(200);
                $("#ind_container_"+i).css({"background-size": "background-size: cover;"});
            

            var nr = Math.floor(comprimento/size_d);
            var padding = Math.floor(Math.floor(comprimento-nr*size_d)/2);

            $(".speakers18_container").css({"padding": "0 "+padding+"px"});
            size_min = Math.floor( (100-size_max) / (nr-1) ) + "%";
            
            toggle_color();

        }

    }

    padding_speakers();

    var addEvent = function(object, type, callback) {
        if (object == null || typeof(object) == 'undefined') return;
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
        } else if (object.attachEvent) {
            object.attachEvent("on" + type, callback);
        } else {
            object["on"+type] = callback;
        }
    };

    addEvent(window, "resize", padding_speakers);



    $(".ind_container").hover(function(){
        if($(this).children().css('display')=='none'){
            $("html").css("cursor: url('cursor url with protocol'), auto");
           /* $( this ).siblings('.overlay_name').css('color', 'red');*/
            $( this ).fadeTo( fast , 0.8, function() {
            // Animation complete.
            });
            };
        }, function(){
            /*$( this ).siblings('.overlay_name').css('color', 'white');*/
            $( this ).fadeTo( fast , 1, function() {
            // Animation complete.
            });
        });
        

    
    

    
    function close_speakers(){
        if($(window).width()>480){
            for(i=1;i<=10;i++){
                $("#speaker18_"+i).css({"width": size_default});
            }
        }
        
        for(i=1;i<=10;i++){    
            $("#ind_container_"+i).children().fadeOut(100);
            $("#ind_container_"+i).prev().fadeIn(200);
            $("#ind_container_"+i).css({"background-size": "background-size: cover;"});
                
        }
        
        toggle_color();
    }
    
    
    
    $("#ind_container_1").click(function() {
        setTimeout(function() {
            document.getElementById('ind_container_1').style.backgroundImage = 'url(./images/speakers/bw/12_carmo.jpg)';
        }, 100);
    });
    $("#ind_container_2").click(function() {
        setTimeout(function() {
            document.getElementById('ind_container_2').style.backgroundImage = 'url(./images/speakers/bw/11_jans.jpg)';
        }, 100);
    });
    $("#ind_container_3").click(function() {
        setTimeout(function() {
            document.getElementById('ind_container_3').style.backgroundImage = 'url(./images/speakers/bw/1_arlindo.jpg)';
        }, 100);
    });
    $("#ind_container_4").click(function() {
        setTimeout(function() {
            document.getElementById('ind_container_4').style.backgroundImage = 'url(./images/speakers/bw/3_rosarinho.jpg)';
        }, 100);
    });
    $("#ind_container_5").click(function() {
        setTimeout(function() {
            document.getElementById('ind_container_5').style.backgroundImage = 'url(./images/speakers/bw/7_darchite.jpg)';
        }, 100);
    });
    $("#ind_container_6").click(function() {
        setTimeout(function() {
            document.getElementById('ind_container_6').style.backgroundImage = 'url(./images/speakers/bw/1_arlindo.jpg)';
        }, 100);
    });
    $("#ind_container_7").click(function() {
        setTimeout(function() {
            document.getElementById('ind_container_7').style.backgroundImage = 'url(./images/speakers/bw/1_arlindo.jpg)';
        }, 100);
    });
    $("#ind_container_8").click(function() {
        setTimeout(function() {
            document.getElementById('ind_container_8').style.backgroundImage = 'url(./images/speakers/bw/1_arlindo.jpg)';
        }, 100);
    });
    $("#ind_container_9").click(function() {
        setTimeout(function() {
            document.getElementById('ind_container_9').style.backgroundImage = 'url(./images/speakers/bw/1_arlindo.jpg)';
        }, 100);
    });
    $("#ind_container_10").click(function() {
        setTimeout(function() {
            document.getElementById('ind_container_10').style.backgroundImage = 'url(./images/speakers/bw/1_arlindo.jpg)';
        }, 100);
    });

        
    
    function toggle_color(){
        document.getElementById('ind_container_1').style.backgroundImage = 'url(./images/speakers/12_carmo.jpg)';
        document.getElementById('ind_container_2').style.backgroundImage = 'url(./images/speakers/11_jans.jpg)';
        document.getElementById('ind_container_3').style.backgroundImage = 'url(./images/speakers/1_arlindo.jpg)';    
        document.getElementById('ind_container_4').style.backgroundImage = 'url(./images/speakers/3_rosarinho.jpg)';    
        document.getElementById('ind_container_5').style.backgroundImage = 'url(./images/speakers/7_darchite.jpg)';    
        document.getElementById('ind_container_6').style.backgroundImage = 'url(./images/speakers/1_arlindo.jpg)';    
        document.getElementById('ind_container_7').style.backgroundImage = 'url(./images/speakers/1_arlindo.jpg)';    
        document.getElementById('ind_container_8').style.backgroundImage = 'url(./images/speakers/1_arlindo.jpg)';    
        document.getElementById('ind_container_9').style.backgroundImage = 'url(./images/speakers/1_arlindo.jpg)';    
        document.getElementById('ind_container_10').style.backgroundImage = 'url(./images/speakers/1_arlindo.jpg)';    
    }
    
    
    
});