window.addEventListener("scroll",onScroll);
var back2topBtn = document.getElementsByClassName("back-to-top")[0];
function onScroll(event){
    if(window.scrollY < 60){
        back2topBtn.style.display = "none";
    }else{
        back2topBtn.style.display = "inline";
    }
}