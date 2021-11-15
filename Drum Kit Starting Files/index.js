

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function ()
        {
            var but=this.innerHTML;
            make(but);
            button_animation(but);
            
            // var audio=new Audio("sounds/tom-1.mp3");
            // audio.play();
        });
}
document.addEventListener("keypress",function(events) {make(events.key)
button_animation(events.key)});

function make(btn)
{
    switch(btn)
            {
                case "w":
                    var audio=new Audio("sounds/tom-1.mp3");
                    audio.play();    
                    break;
                case "a":
                    var audio=new Audio("sounds/tom-2.mp3");
                    audio.play();    
                    break;
                        
                case "s":
                    var audio=new Audio("sounds/tom-3.mp3");
                    audio.play();    
                    break;
                case "d":
                    var audio=new Audio("sounds/tom-4.mp3");
                    audio.play();    
                    break;
                case "j":
                    var audio=new Audio("sounds/snare.mp3");
                    audio.play();    
                    break;
                case "k":
                    var audio=new Audio("sounds/crash.mp3");
                    audio.play();    
                    break;        
                case "l":
                    var audio=new Audio("sounds/kick-bass.mp3");
                    audio.play();    
                    break;
                default: console.log("yes");   
            }
}
function button_animation(key)
{
    var active_button=document.querySelector("."+key);
    active_button.classList.add("pressed");
    setTimeout(function(){
        active_button.classList.remove("pressed");
    }, 100);
}


