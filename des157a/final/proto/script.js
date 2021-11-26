(function () {

setTimeout(function(){
    document.getElementById("start").style.display='none';
    document.getElementById("home").style.display='block';
},2000);

document.getElementById("essenza").onclick = function () {
    location.href = "./studio2/index.html";
};

document.getElementById("sto").onclick = function () {
    location.href = "./studio2/sto.html";
};

})();