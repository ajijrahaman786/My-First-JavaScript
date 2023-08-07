let onBtn = document.getElementById("onBtn");

onBtn.addEventListener("click", function(){
    document.getElementById("myImg").src="/img/onbulb.png";

});

let offBtn = document.getElementById("offBtn");

offBtn.addEventListener("click", function(){
    document.getElementById("myImg").src = "/img/offbulb.png";

});