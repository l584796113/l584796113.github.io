(function () {

    const cars =document.querySelector('#slideShow #cars');

setTimeout(function(){
    document.querySelector("#left").style.transform="translate(-20%,0)";
document.querySelector("#top").style.transform="translate(-10%,0)";
document.querySelector("#bottom").style.transform="translate(10%,0)";
document.querySelector("#right").style.transform="translate(20%,0)";
},1000);
setTimeout(function(){
    document.getElementById("start").style.display='none';
    document.getElementById("menu").style.display='flex';
},4000);

document.getElementById("returnMenu").addEventListener("click",function(){
    document.getElementById("menu").style.display='flex';
    document.getElementById("home").style.display='none';
});

document.getElementById("returnHome").addEventListener("click",function(){
    document.getElementById("slideShow").style.display='none';
    document.getElementById("home").style.display='grid';
    document.body.style.background="black";
    document.getElementsByClassName("selected")[0].classList.remove("selected");

});


let homeContainer=document.getElementsByClassName("grid-item");

document.querySelectorAll("#menu div").forEach(function(item){
    item.addEventListener('click',function(){
        let menuChoice=item.getAttribute("id")
        for(let i=0;i<homeContainer.length;i++){
            if(menuChoice=="menuAll"){
                homeContainer[i].style.display="block";
            }else{
                homeContainer[i].style.display="none";
            }
            
            if(homeContainer[i].querySelector("img").getAttribute("alt")==menuChoice){
                homeContainer[i].style.display="block"
            }
        }
        document.getElementById("menu").style.display='none';
        document.getElementById("home").style.display='grid';

    });
})



const imgs=document.querySelectorAll('#slideShow img');
let navLinks;
let car;
let counter=1;



document.querySelectorAll(".grid-item").forEach(function(item){
    item.addEventListener('mouseover', function(event){
            item.querySelector(".homeOverlay").style.cursor="pointer"
            item.querySelector(".homeOverlay").style.zIndex="1";
    });
    item.addEventListener('mouseout', function(event){
        item.querySelector(".homeOverlay").style.zIndex="-1";
});

    item.addEventListener('click',function(){
        counter=1;

        document.body.style.background="rgb(66,66,66)";
        document.body.style.background="linear-gradient(90deg, rgba(66,66,66,1) 0%, rgba(139,138,138,1) 10%, rgba(196,196,196,1) 20%, rgba(237,237,237,1) 30%, rgba(241,241,241,1) 40%, rgba(255,252,252,1) 50%, rgba(241,241,241,1) 60%, rgba(237,237,237,1) 70%, rgba(196,196,196,1) 80%, rgba(139,138,138,1) 90%, rgba(66,66,66,1) 100%)";
        document.body.style.textAlign="center";
        document.getElementById("home").style.display='none';
        document.getElementById("slideShow").style.display="block";
        car=item.getAttribute("id");
        slideHeader=document.querySelector("#slideHeader h1");
        switch(car){
            case "sto": slideHeader.innerHTML="Lamborghini Sto";
                        break;
            case "essenza": slideHeader.innerHTML="Lamborghini Essenza";
                        break;
            case "r8": slideHeader.innerHTML="Audi R8";
                        break;         
            case "srt": slideHeader.innerHTML="Challenger Srt";
                        break; 

        }
        dots=document.querySelectorAll("#slideShow #h ul li");
        let list=document.querySelector("#slideShow #h ul");
        let num=0;
        list.innerHTML = '';

        for(let i=1;i<imgs.length;i++){
            if(imgs[i].getAttribute("alt")==car){
                imgs[i].style.display="block";
                    num++;
                    let elem = document.createElement("a");
                    elem.setAttribute("href", `${num}`);
                    elem.innerHTML="·";
                    let elem2=document.createElement("li");
                    elem2.appendChild(elem);
                    list.appendChild(elem2);
                
            }else{
                imgs[i].style.display="none";
            }
        }
        
        const cars =document.querySelector('#slideShow #cars');
        cars.scrollLeft=0;
        navLinks=document.querySelectorAll('#slideShow #h ul li a');
        navLinks[0].setAttribute("class","selected");
        navLinks.forEach(function(eachLink){
        eachLink.addEventListener('click',smoothScroll);
    });
});});

let leftDis=[];

let allow=1;


cars.addEventListener('wheel', scroll);


function noscroll(event){
    event.preventDefault();
    const ID=document.querySelector(".selected");
    const targetID=ID.getAttribute('href');
    let targetAnchor= document.querySelector(`#${car}${targetID}`);

    cars.scrollBy({
        left:targetAnchor.getBoundingClientRect().left+targetAnchor.width/2-window.innerWidth/2
    });

}

function scroll(event){
    event.preventDefault();
    
    const ID=document.querySelector(".selected");
    const targetID=ID.getAttribute('href');
    let targetAnchor= document.querySelector(`#${car}${targetID}`);

    if(allow==1){
        cars.scrollBy({     
            left: event.deltaY
        });
    }
    

    if(event.deltaY<-120){     
        allow=0;

        if(counter==navLinks.length){
            counter=0;
        }
        counter++;
        navLinks.forEach(function(eachLink){
            eachLink.removeAttribute('class');
        });
        
        const thisLink=document.querySelector(`#slideShow #h ul li:nth-child(${counter}) a`);

        thisLink.className='selected';
        targetAnchor=document.querySelector(`#${car}${counter}`);

        cars.removeEventListener('wheel', scroll);
        cars.addEventListener('wheel',noscroll);

        setTimeout(function () {
        cars.removeEventListener('wheel', noscroll);
        cars.addEventListener('wheel',scroll);allow=1;},1000);
        cars.scrollBy({
            left:targetAnchor.getBoundingClientRect().left+targetAnchor.width/2-window.innerWidth/2
          });
        
    }else if(event.deltaY>120){
        allow=0;
    
        if(counter==1){
            counter=navLinks.length+1;
        }
        counter--;
        navLinks.forEach(function(eachLink){
            eachLink.removeAttribute('class');
        });
        const thisLink=document.querySelector(`#slideShow #h ul li:nth-child(${counter}) a`);

        thisLink.className='selected';
        targetAnchor=document.querySelector(`#${car}${counter}`);

        cars.removeEventListener('wheel', scroll);
        cars.addEventListener('wheel',noscroll);

        setTimeout(function () {
        cars.removeEventListener('wheel', noscroll);
        cars.addEventListener('wheel',scroll);allow=1;},1000);
        cars.scrollBy({
            left:targetAnchor.getBoundingClientRect().left+targetAnchor.width/2-window.innerWidth/2
          });

    }else{
        setTimeout(function () {
            if(allow==1){
            cars.scrollBy({
              left:targetAnchor.getBoundingClientRect().left+targetAnchor.width/2-window.innerWidth/2
            });
        }
        },800);
        
    }
    

}



function smoothScroll(event){
    event.preventDefault();
    const targetID=event.target.getAttribute('href');

    const targetAnchor= document.querySelector(`#${car}${targetID}`);
    console.log(targetAnchor);

    const left=Math.floor(targetAnchor.getBoundingClientRect().left+targetAnchor.width/2-window.innerWidth/2);
    navLinks.forEach(function(eachLink){
        eachLink.removeAttribute('class');
    });
    event.target.className='selected';
    cars.scrollBy({top:0, left:left, behavior:'smooth'});
}

})();