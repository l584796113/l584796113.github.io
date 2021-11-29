(function () {

setTimeout(function(){
    document.getElementById("start").style.display='none';
    document.getElementById("home").style.display='block';
    alert("Click the car you like");
},2000);

document.getElementById("essenza").onclick = function () {
    location.href = "./studio2/index.html";
    alert("Slide or Click the dots for different views of the car. The hard slide will slide to next view while the soft slide will move the view. You can Click the header to return to home screen.");
};

document.getElementById("sto").onclick = function () {
    location.href = "./studio2/sto.html";
    alert("Slide or Click the dots for different views of the car. The hard slide will slide to next view while the soft slide will move the view.You can Click the header to return to home screen.");
};


})();