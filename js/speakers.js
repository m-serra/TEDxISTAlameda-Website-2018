function select_speaker(n){
    toggle_speaker(n);    
}


/*
$(document).ready(function(){
    
    var fast = 100;
    
    $("#speaker18_1").hover(function(){
        hover_width(1,1); 
    }, function(){
       hover_width(1,0);
    });
    
    $("#speaker18_2").hover(function(){
        hover_width(2,1);
    }, function(){
        hover_width(2,0);
    });
    
    $("#speaker18_3").hover(function(){
        hover_width(3,1);
    }, function(){
        hover_width(3,0);
    });
    
    $("#speaker18_4").hover(function(){
        hover_width(4,1);
    }, function(){
        hover_width(4,0);
    });
    
    $("#speaker18_5").hover(function(){
        hover_width(5,1);
    }, function(){
        hover_width(5,0);
    });
    
    
    
});
*/
 


function hover_width(n,c){
    
    switch(c) {
            
        case 0:
            width_change(n,20,20);
            break;
            
        case 1: 
            width_change(n,19,24);
            break;
                
        default:
    
    }

}


function width_change(n,x,y){
    var min, max;
    var fast = 50;
    
    if(n<6){
        min=1;
        max=5;
    }else if(n<=10){
        min=6;
        max=10;
    }else if(n<=14){
        min=11;
        max=14;
    }
    
    for(i=min;i<=max;i++){
        if(i==n){
            $(document.getElementById("speaker18_"+i)).animate({ width:y+'%' },fast);
        }else{
            $(document.getElementById("speaker18_"+i)).animate({ width:x+'%' },fast);
        }
    }
}

function toggle_speaker(n){
    
    var min, max;
    var fast = 100;
    
    if(n==0){
        
        for(i=1;i<=10;i++){
        $(document.getElementById("speaker18_"+i)).animate({ width:'19%' },fast);
        $("#info_speaker"+i).fadeOut(fast); 
        };
        return
    }
    
    if(n<=5){
        min=1;
        max=5;
    }else if(n<=10){
        min=6;
        max=10;
    }else if(n<=14){
        min=11;
        max=14;
    }
    
    
    for(i=1;i<=10;i++){
        if(i==n){
            $(document.getElementById("speaker18_"+i)).animate({ width:'67%' },fast);
            $("#info_speaker"+i).fadeIn(200);
            
        }else if((min<=i)&&(i<=max)){
            $(document.getElementById("speaker18_"+i)).animate({ width:'7%' },fast);
            $("#info_speaker"+i).fadeOut(100);
            
        }else{
            $(document.getElementById("speaker18_"+i)).animate({ width:'19%' },fast);
            $("#info_speaker"+i).fadeOut(100);
        }
    }
           
}
