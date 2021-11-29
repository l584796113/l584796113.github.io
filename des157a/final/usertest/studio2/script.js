(function () {

    'use strict';

    let leftDis=[];
    const cars =document.querySelector('#cars');
    let counter=1;
    let allow=1;
    const imgs=document.querySelectorAll('img');

    cars.addEventListener('wheel', scroll);

    document.getElementById("home").addEventListener('click',function(event){
        event.preventDefault();
        window.location.href = "../index.html";
    })

    function noscroll(event){
        event.preventDefault();
        const ID=document.querySelector(".selected");
        const targetID=ID.getAttribute('href');
        let targetAnchor= document.querySelector(targetID);

        cars.scrollBy({
            left:targetAnchor.getBoundingClientRect().left+targetAnchor.width/2-window.innerWidth/2
        });

    }
    
    function scroll(event){
        event.preventDefault();
        
        const ID=document.querySelector(".selected");
        const targetID=ID.getAttribute('href');
        let targetAnchor= document.querySelector(targetID);
        console.log(event.deltaY);

        if(allow==1){
            cars.scrollBy({     
                left: event.deltaY
            });
        }
        

        if(event.deltaY<-120){     
            allow=0;

            if(counter==imgs.length){
                counter=0;
            }
            counter++;
            navLinks.forEach(function(eachLink){
                eachLink.removeAttribute('class');
            });

            const thisLink=document.querySelector(`#h ul li:nth-child(${counter}) a`);

            thisLink.className='selected';
            targetAnchor=document.querySelector(`.i${counter}`);

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
                counter=imgs.length+1;
            }
            counter--;
            navLinks.forEach(function(eachLink){
                eachLink.removeAttribute('class');
            });

            const thisLink=document.querySelector(`#h ul li:nth-child(${counter}) a`);

            thisLink.className='selected';
            targetAnchor=document.querySelector(`.i${counter}`);

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

    const navLinks=document.querySelectorAll('#h ul li a');
    navLinks.forEach(function(eachLink){
        eachLink.addEventListener('click',smoothScroll);
    });

    function smoothScroll(event){
        event.preventDefault();

        const targetID=event.target.getAttribute('href');
        const targetAnchor= document.querySelector(targetID);

        const left=Math.floor(targetAnchor.getBoundingClientRect().left+targetAnchor.width/2-window.innerWidth/2);
        navLinks.forEach(function(eachLink){
            eachLink.removeAttribute('class');
        });
        event.target.className='selected';
        cars.scrollBy({top:0, left:left, behavior:'smooth'});
    }

    // function smoothScroll(event){
    //     event.preventDefault();

    //     const imgID=parseInt(event.target.getAttribute('href'));
    //     cars.scrollTo({top:0, left:distanceLeft[imgID], behavior:'smooth'});

    // }

})();