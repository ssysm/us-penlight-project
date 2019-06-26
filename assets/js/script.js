//CSS framework init
document.addEventListener('DOMContentLoaded', function() {
    M.FormSelect.init(document.querySelectorAll('select'));
    var players = Plyr.setup('.video',{
        controls:['play-large', 'play', 'progress', 'current-time', 'mute', 'volume','pip', 'airplay', 'fullscreen']
    });
    M.Sidenav.init(document.getElementsByClassName('sidenav')[0]);
    var modalInstances = M.Modal.init(document.getElementById('promoVideo'),{
        onCloseStart: () => {
            players.map(p => {
                p.stop();
            });
        }
    });
    playPromoVideo(modalInstances);
});
function playPromoVideo(modalInstances) {
    var val = localStorage.getItem('1st_visit');
    if (!val) {
        modalInstances.open();
        localStorage.setItem('1st_visit', 'false');
    }
}