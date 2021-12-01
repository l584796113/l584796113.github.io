(function () {

setTimeout(function(){
    document.getElementById("start").style.display='none';
    document.getElementById("home").style.display='block';
    alert("Click the car you like");
},2000);

// document.getElementById("essenza").onclick = function () {
//     document.getElementById("home").style.display='none';
//     document.getElementById("slideShow").style.display="block";
// };

document.getElementById("sto").onclick = function () {

};

const imgs=document.querySelectorAll('#slideShow img');
let navLinks;
let car;
let counter=1;
document.querySelectorAll(".grid-item").forEach(function(item){
    item.addEventListener('click',function(){
        document.body.style.background="rgb(66,66,66)";
        document.body.style.background="linear-gradient(90deg, rgba(66,66,66,1) 0%, rgba(139,138,138,1) 10%, rgba(196,196,196,1) 20%, rgba(237,237,237,1) 30%, rgba(241,241,241,1) 40%, rgba(255,252,252,1) 50%, rgba(241,241,241,1) 60%, rgba(237,237,237,1) 70%, rgba(196,196,196,1) 80%, rgba(139,138,138,1) 90%, rgba(66,66,66,1) 100%)";
        document.body.style.textAlign="center";
        document.getElementById("home").style.display='none';
        document.getElementById("slideShow").style.display="block";
        car=item.getAttribute("id");
        dots=document.querySelectorAll("#slideShow #h ul li");
        let list=document.querySelector("#slideShow #h ul");
        let num=0;
        for(let i=0;i<imgs.length;i++){
            if(imgs[i].getAttribute("alt")==car){
                imgs[i].style.display="block";
                num++;
                if(num>dots.length){
                    let elem = document.createElement("a");
                    elem.setAttribute("href", `${num}`);
                    if(num==1){
                        elem.setAttribute("class","selected")
                    }
                    elem.innerHTML="·";
                    let elem2=document.createElement("li");
                    elem2.appendChild(elem);
                    list.appendChild(elem2);
                }
            }else{
                imgs[i].style.display="none";
            }
        }

        for(let i=num;i<dots.length;i++){
            list.removeChild(dots.childNodes[i]);
        }
        navLinks=document.querySelectorAll('#slideShow #h ul li a');
    navLinks.forEach(function(eachLink){
        eachLink.addEventListener('click',smoothScroll);
    });
    counter=1
});});

let leftDis=[];
const cars =document.querySelector('#slideShow #cars');

let allow=1;


cars.addEventListener('wheel', scroll);

// document.getElementById("home").addEventListener('click',function(event){
//     event.preventDefault();
//     window.location.href = "../index.html";
// })

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
        console.log(dots.length);
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
    console.log(car);
    const targetID=event.target.getAttribute('href');
    const targetAnchor= document.querySelector(`#${car}${targetID}`);

    const left=Math.floor(targetAnchor.getBoundingClientRect().left+targetAnchor.width/2-window.innerWidth/2);
    navLinks.forEach(function(eachLink){
        eachLink.removeAttribute('class');
    });
    event.target.className='selected';
    cars.scrollBy({top:0, left:left, behavior:'smooth'});
}

})();