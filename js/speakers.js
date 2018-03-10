var slow = 250;
var fast = 100;

$(document).ready(function(){
    
    
    $("#ind_container_1").hover(function(){
        if($("#ind_container_1").width()<=$("#ind_container_2").width()){
        $("#ind_container_1").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_1").width()<=$("#ind_container_2").width()){
        $("#ind_container_1").css({"background-size": "auto 100%"});
        };
    });
    
    
    $("#ind_container_2").hover(function(){
        if($("#ind_container_2").width()<=$("#ind_container_1").width()){
        $("#ind_container_2").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_2").width()<=$("#ind_container_1").width()){
        $("#ind_container_2").css({"background-size": "auto 100%"});
        };
    });
    
    
    $("#ind_container_3").hover(function(){
        if($("#ind_container_3").width()<=$("#ind_container_4").width()){
        $("#ind_container_3").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_3").width()<=$("#ind_container_4").width()){
        $("#ind_container_3").css({"background-size": "auto 100%"});
        };
    });
    
    
    $("#ind_container_4").hover(function(){
        if($("#ind_container_4").width()<=$("#ind_container_3").width()){
        $("#ind_container_4").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_4").width()<=$("#ind_container_3").width()){
        $("#ind_container_4").css({"background-size": "auto 100%"});
        };
    });
    
    
    $("#ind_container_5").hover(function(){
        if($("#ind_container_5").width()<=$("#ind_container_6").width()){
        $("#ind_container_5").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_5").width()<=$("#ind_container_6").width()){
        $("#ind_container_5").css({"background-size": "auto 100%"});
        };
    });
    
    
    $("#ind_container_6").hover(function(){
        if($("#ind_container_6").width()<=$("#ind_container_5").width()){
        $("#ind_container_6").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_6").width()<=$("#ind_container_5").width()){
        $("#ind_container_6").css({"background-size": "auto 100%"});
        };
    });
    
    
    $("#ind_container_7").hover(function(){
        if($("#ind_container_7").width()<=$("#ind_container_8").width()){
        $("#ind_container_7").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_7").width()<=$("#ind_container_8").width()){
        $("#ind_container_7").css({"background-size": "auto 100%"});
        };
    });
    
    $("#ind_container_8").hover(function(){
        if($("#ind_container_8").width()<=$("#ind_container_7").width()){
        $("#ind_container_8").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_8").width()<=$("#ind_container_7").width()){
        $("#ind_container_8").css({"background-size": "auto 100%"});
        };
    });
    
    
    $("#ind_container_9").hover(function(){
        if($("#ind_container_9").width()<=$("#ind_container_10").width()){
        $("#ind_container_9").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_9").width()<=$("#ind_container_10").width()){
        $("#ind_container_9").css({"background-size": "auto 100%"});
        };
    });
    
    
    $("#ind_container_10").hover(function(){
        if($("#ind_container_10").width()<=$("#ind_container_9").width()){
        $("#ind_container_10").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_10").width()<=$("#ind_container_9").width()){
        $("#ind_container_10").css({"background-size": "auto 100%"});
        };
    });
        
        
});



function select_speaker(n){
    
    var min, max, size_default, size_min, size_max;
    
    if($(window).width()>896){
        if(n<=5){
            min=1;
            max=5;
        }else if(n<=10){
            min=6;
            max=10;
        }
        size_default="19%";
        size_min="7%";
        size_max="67%";
    }else{
       if(n<=2){
            min=1;
            max=2;
        }else if(n<=4){
            min=3;
            max=4;
        }else if(n<=6){
            min=5;
            max=6;
        }else if(n<=8){
            min=7;
            max=8;
        }else if(n<=10){
            min=9;
            max=10;
        }
        
        size_default="49%";
        size_min="14%";
        size_max="85%";
    }
    
    if(n==0){
        
        for(i=1;i<=15;i++){
        $(document.getElementById("speaker18_"+i)).animate({ width:size_default },slow);
        $("#info_speaker"+i).fadeOut(slow); 
        $("#ind_container_"+i).css({"background-size": "background-size: auto 100%;"});
        };
        return
    }
    
    for(i=1;i<=10;i++){
        if(i==n){
            $(document.getElementById("speaker18_"+i)).animate({ width:size_max },slow);
            $("#info_speaker"+i).fadeIn(200);
            $("#ind_container_"+i).css({"background-size": "cover"});
            
        }else if((min<=i)&&(i<=max)){
            $(document.getElementById("speaker18_"+i)).animate({ width:size_min },slow);
            $("#info_speaker"+i).fadeOut(100);
            $("#ind_container_"+i).css({"background-size": "background-size: auto 100%;"});
        }else{
            $(document.getElementById("speaker18_"+i)).animate({ width:size_default },slow);
            $("#info_speaker"+i).fadeOut(100);
            $("#ind_container_"+i).css({"background-size": "background-size: auto 100%;"});
        }
    }
           
}


preload_pics=["images/speakers/unknown-avatar.jpg","images/speakers/1_arlindo.jpg","images/speakers/3_rosarinho.jpg","images/speakers/7_darchite.jpg","images/speakers/8_zaid.jpg","images/speakers/10_diogo.jpg","images/speakers/11_jans.jpg","images/speakers/12_carmo.jpg"];

var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload_pics[i];
    }
};

preload(preload_pics);


$("#ind_container_1").click(function(){select_speaker(1);return false});
$("#ind_container_2").click(function(){select_speaker(2);return false});
$("#ind_container_3").click(function(){select_speaker(3);return false});
$("#ind_container_4").click(function(){select_speaker(4);return false});
$("#ind_container_5").click(function(){select_speaker(5);return false});
$("#ind_container_6").click(function(){select_speaker(6);return false});
$("#ind_container_7").click(function(){select_speaker(7);return false});
$("#ind_container_8").click(function(){select_speaker(8);return false});
$("#ind_container_9").click(function(){select_speaker(9);return false});
$("#ind_container_10").click(function(){select_speaker(10);return false});
$("#speakers").click(function(){select_speaker(0);return false});
$(".button2").click(function(){select_speaker(0);return false});
$(".button6").click(function(){select_speaker(0);return false});

