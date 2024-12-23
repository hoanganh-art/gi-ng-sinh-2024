window.onload = function() {
    var bgMusic = document.querySelector('audio');
    bgMusic.volume = 0.3;
    
    // Create context for unmuting
    var context = new (window.AudioContext || window.webkitAudioContext)();
    
    // Try multiple ways to enable audio
    function enableAudio() {
        bgMusic.play();
        document.removeEventListener('click', enableAudio);
    }
    
    // Try auto-play
    var playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(function() {
            // Add backup click handler if autoplay fails
            document.addEventListener('click', enableAudio);
        });
    }
}