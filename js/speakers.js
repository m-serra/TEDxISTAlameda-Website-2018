$(document).ready(function(){
    
    var slow = 250;
    var fast = 100;

    preload_pics=["images/speakers/1_arlindo.jpg","images/speakers/3_rosarinho.jpg","images/speakers/7_darchite.jpg","images/speakers/8_zaid.jpg","images/speakers/10_diogo.jpg","images/speakers/11_jans.jpg","images/speakers/12_carmo.jpg","/images/speakers/bw/1_arlindo.jpg"];

    var images = [];
    function preload() {
        for (var i = 0; i < arguments.length; i++) {
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
                    $("#ind_container_"+i).css({"background-size": "background-size: auto 100%;"});
                }
               
            }
            
            $(this).children().fadeIn(200);
            $(this).prev().fadeOut(200);
            $(this).css({"background-size": "cover"});
        
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
        }else{

            for(i=1;i<=10;i++){
                $("#speaker18_"+i).css({"width": size_default});
                $("#ind_container_"+i).children().fadeOut(100);
                $("#ind_container_"+i).prev().fadeIn(200);
                $("#ind_container_"+i).css({"background-size": "background-size: auto 100%;"});
            }

            var nr = Math.floor(comprimento/size_d);
            var padding = Math.floor(Math.floor(comprimento-nr*size_d)/2);

            $(".speakers18_container").css({"padding": "0 "+padding+"px"});
            size_min = Math.floor( (100-size_max) / (nr-1) ) + "%";
            
            

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
            if($(this).parent().width()<=143){
            $(this).css({"background-size": "auto 110%"});
            };
        }, function(){
            if($(this).parent().width()<=143){
            $(this).css({"background-size": "auto 100%"});
            };
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
            $("#ind_container_"+i).css({"background-size": "background-size: auto 100%;"});
                
        }
    }
    
    
    
    $("#ind_container_1").click(function() {
        document.getElementById('ind_container_1').style.backgroundImage = 'url(./images/speakers/bw/1_arlindo.jpg)';
    });
    
    $("#ind_container_2").click(function() {
        document.getElementById('ind_container_2').style.backgroundImage = 'url(./images/speakers/bw/1_arlindo.jpg)';
    });
    
    $("#ind_container_3").click(function() {
        document.getElementById('ind_container_3').style.backgroundImage = 'url(./images/speakers/bw/1_arlindo.jpg)';
    });
    
    $("#ind_container_4").click(function() {
        document.getElementById('ind_container_4').style.backgroundImage = 'url(./images/speakers/bw/1_arlindo.jpg)';
    });
    
    $("#ind_container_5").click(function() {
        document.getElementById('ind_container_5').style.backgroundImage = 'url(./images/speakers/bw/1_arlindo.jpg)';
    });
    
    $("#ind_container_6").click(function() {
        document.getElementById('ind_container_6').style.backgroundImage = 'url(./images/speakers/bw/1_arlindo.jpg)';
    });
    
    $("#ind_container_7").click(function() {
        document.getElementById('ind_container_7').style.backgroundImage = 'url(./images/speakers/bw/1_arlindo.jpg)';
    });
    
    $("#ind_container_8").click(function() {
        document.getElementById('ind_container_8').style.backgroundImage = 'url(./images/speakers/bw/1_arlindo.jpg)';
    });
    
    $("#ind_container_9").click(function() {
        document.getElementById('ind_container_9').style.backgroundImage = 'url(./images/speakers/bw/1_arlindo.jpg)';
    });
    
    $("#ind_container_10").click(function() {
        document.getElementById('ind_container_10').style.backgroundImage = 'url(./images/speakers/bw/1_arlindo.jpg)';
    });
    
    
    
    
    
});