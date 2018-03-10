var slow = 250;
var fast = 100;

function select_speaker(n){
    toggle_speaker(n);    
}


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
        if($("#ind_container_2").width()<=$("#ind_container_3").width()){
        $("#ind_container_2").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_2").width()<=$("#ind_container_3").width()){
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
        if($("#ind_container_4").width()<=$("#ind_container_5").width()){
        $("#ind_container_4").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_4").width()<=$("#ind_container_5").width()){
        $("#ind_container_4").css({"background-size": "auto 100%"});
        };
    });
    
    
    $("#ind_container_5").hover(function(){
        if($("#ind_container_5").width()<=$("#ind_container_1").width()){
        $("#ind_container_5").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_5").width()<=$("#ind_container_1").width()){
        $("#ind_container_5").css({"background-size": "auto 100%"});
        };
    });
    
    
    $("#ind_container_6").hover(function(){
        if($("#ind_container_6").width()<=$("#ind_container_7").width()){
        $("#ind_container_6").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_6").width()<=$("#ind_container_7").width()){
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
        if($("#ind_container_8").width()<=$("#ind_container_9").width()){
        $("#ind_container_8").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_8").width()<=$("#ind_container_9").width()){
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
        if($("#ind_container_10").width()<=$("#ind_container_6").width()){
        $("#ind_container_10").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_10").width()<=$("#ind_container_6").width()){
        $("#ind_container_10").css({"background-size": "auto 100%"});
        };
    });
    
    
    $("#ind_container_11").hover(function(){
        if($("#ind_container_11").width()<=$("#ind_container_6").width()){
        $("#ind_container_11").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_11").width()<=$("#ind_container_6").width()){
        $("#ind_container_11").css({"background-size": "auto 100%"});
        };
    });
    
    
    $("#ind_container_12").hover(function(){
        if($("#ind_container_12").width()<=$("#ind_container_6").width()){
        $("#ind_container_12").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_12").width()<=$("#ind_container_6").width()){
        $("#ind_container_12").css({"background-size": "auto 100%"});
        };
    });
    
    
    $("#ind_container_13").hover(function(){
        if($("#ind_container_13").width()<=$("#ind_container_6").width()){
        $("#ind_container_13").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_13").width()<=$("#ind_container_6").width()){
        $("#ind_container_13").css({"background-size": "auto 100%"});
        };
    });
    
    
    $("#ind_container_14").hover(function(){
        if($("#ind_container_14").width()<=$("#ind_container_6").width()){
        $("#ind_container_14").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_14").width()<=$("#ind_container_6").width()){
        $("#ind_container_14").css({"background-size": "auto 100%"});
        };
    });
    
    
    $("#ind_container_15").hover(function(){
        if($("#ind_container_15").width()<=$("#ind_container_6").width()){
        $("#ind_container_15").css({"background-size": "auto 110%"});
        };
    }, function(){
        if($("#ind_container_15").width()<=$("#ind_container_6").width()){
        $("#ind_container_15").css({"background-size": "auto 100%"});
        };
        
        
    });
        
});



function toggle_speaker(n){
    
    var min, max;
    
    if(n==0){
        
        for(i=1;i<=15;i++){
        $(document.getElementById("speaker18_"+i)).animate({ width:'19%' },slow);
        $("#info_speaker"+i).fadeOut(slow); 
        $("#ind_container_"+i).css({"background-size": "background-size: auto 100%;"});
        };
        return
    }
    
    if(n<=5){
        min=1;
        max=5;
    }else if(n<=10){
        min=6;
        max=10;
    }else if(n<=15){
        min=11;
        max=15;
    }
    
    
    for(i=1;i<=15;i++){
        if(i==n){
            $(document.getElementById("speaker18_"+i)).animate({ width:'67%' },slow);
            $("#info_speaker"+i).fadeIn(200);
            $("#ind_container_"+i).css({"background-size": "cover"});
            
        }else if((min<=i)&&(i<=max)){
            $(document.getElementById("speaker18_"+i)).animate({ width:'7%' },slow);
            $("#info_speaker"+i).fadeOut(100);
            $("#ind_container_"+i).css({"background-size": "background-size: auto 100%;"});
        }else{
            $(document.getElementById("speaker18_"+i)).animate({ width:'19%' },slow);
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
