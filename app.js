document.addEventListener('DOMContentLoaded', function() {
    var audio = document.querySelector('audio');
    
    // Force enable audio through interaction
    function startAudio() {
        audio.play();
        audio.volume = 0.3;
    }
    
    // Try multiple trigger events
    ['click', 'touchstart', 'scroll'].forEach(function(event) {
        document.addEventListener(event, startAudio, { once: true });
    });
});
var boxgift = document.querySelector('.box-gift')
var Close = document.querySelector('.fa-xmark')
var boxContent = document.querySelector('.box-content')
var content =document.querySelector('.content')

boxgift.onclick = function(){
    boxgift.classList.toggle('active')
    // boxContent.classList.add('active')
}
content.onclick = function(){
    boxContent.classList.add('active')
}
Close.onclick = function(){
    boxContent.classList.remove('active')
}