$(document).ready(function() {

    $('nav').localScroll({duration:800});


    var video = document.getElementsByTagName('video')[0];
    var jVideo = $('video');
    var stopHideButton = $("#close-video");
    var playButton = $(".play-button");
    var button = $(".overlay-icon");
    var playing = false;

    jVideo.toggle();

    playButton.on("click touchend", function(e){
        if($( window ).width() > 767){
          e.preventDefault();
        playing = !playing;
        $(".video-wrapper").show(500);
        $("video").show(600);
        $("#vol-control").show(600);
        $("#close-video").show(600);
        button.hide();
        jVideo.show(600);
        video.play();
      }
    })

    $(".overlay-icon, video").on("click touchend", function(){
        if(!playing){
            video.play();
        }
        else{
            video.pause();
        }
        button.toggle();
        playing = !playing;
    })

    video.onended = function(e) {
        $("video").hide(1000);
        $("#vol-control").hide(500);
        $("#close-video").hide(500);
    };


    stopHideButton.on("click touchend", function(){
      video.pause();
      button.hide();
      $("#vol-control").hide(100);
      $("#close-video").hide(100);
      $("video").hide(1000);
    });
});

function SetVolume(val){
    var player = document.getElementById('video');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
}
