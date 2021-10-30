(function(){
    'use strict'
    console.log('reading js');

    let body=document.getElementsByTagName("body")[0];
    let submit2=document.querySelector("#start");
    window.onload = function() {
        body.style.backgroundImage="url('start.gif')";
        setTimeout(() => { submit2.style.left="auto"; }, 1500);
      };

    
    let h1=document.getElementsByTagName("h1")[0];
    let header=document.getElementsByTagName("header")[0];
    let footer=document.getElementsByTagName("footer")[0];
    submit2.addEventListener('click',function(event){
        event.preventDefault();
        h1.innerHTML="Enter Your Words";
        header.style.paddingTop="0px"
        myForm.style.display="block";
        submit2.style.display="none";
        footer.style.display="none";

    });


    let myForm=document.querySelector('#myForm');
    let madLib=document.querySelector('#madlib');
    let myText="";
    let myText2="";

    let printWords = function (index, interval) {  
        if (index < myText.length) {
          madLib.append(myText[index++]);
          setTimeout(function () { printWords(index, interval); }, interval);
        }else{
             
             setTimeout(function () { madLib.innerHTML=""; printWords2(0, 70); }, 1000);
        }
    }
      

    let printWords2 = function (index, interval) {  
        if (index < myText2.length) {
          madLib.append(myText2[index++]);
          setTimeout(function () { printWords2(index, interval); }, interval);
        }
    }
      

    myForm.addEventListener('submit',function(event){
        event.preventDefault();
        let name = document.querySelector('#name').value;   
        let car = document.querySelector('#cars').value;   
        let friend = document.querySelector('#friend').value;   
        let place = document.querySelector('#place').value;  
        let job = document.querySelector('#job').value;  
        
        myForm.style.display="none";
        h1.innerHTML="";
 
        if(name && car && friend && place && job){
            myText=`It was an ordinary day. You were sitting in the yard after dinner, thinking that one day, you will drive your dream car traveling at the place you wanna go the most. All of a sudden, 
            a meteor flashed by. You believe it very much. So, you closed your eyes and made a wish about your dream. Then you went to bed.`
            myText2=`When you got up the next day, the miracle happened. You were not on your bed. Instead, it’s a place you don’t recognize. As you walked out of the house, someone drove a <${car}> and stopped in front of you. He gave the key to you and said “Enjoy Your Car, Boss ”. It’s your dream car and the key was in your hand. You were so confused and started to ask others where you are. People told you that you were in <${place}>.  Then you started to realize that it is all about your dream. The wishes became reality. At that moment, someone, whose sound was so familiar, called your name from behind. You turned around and saw <${friend}>. He/she was your best friend and told you that everything is real. You still couldn’t believe it, but you actually felt a bit excited. As you were trying to get into the car, you received a call. You picked it up and he called you boss. But, you didn’t know what’s going on so you told him that you are busy and will call back. Trying to figure out who you are right now, you open up your wallet and see your business card. What’s printed on it is “<${name}>” and it also indicates your success at <${job}>. All of your dreams have come true. 
            `;
        }else{
            myText="Please fill the empty fields.";
        }

        switch(car){
            case "lambo": body.style.backgroundImage="url('lambo.gif')"; break;
            case "r8": body.style.backgroundImage="url('audi.gif')"; break;
            default: body.style.backgroundImage="url('challenger.gif')"; break;

        }
        setTimeout(() => { 
            h1.innerHTML="Your Story";
            madLib.style.display="block";
            printWords(0, 70);
        }, 1500);

        // let words = myText.split(" ");
        // let i =0;
        // if(i < words.length)
        // {   
        //     setTimeout(() => { 
        //         madLib.append(words[i] + " ");
        //         i++;
        //     }, 2500);

        // }
        


        const datas=document.querySelectorAll("input[type=text]");

        for(let i of datas){
            i.value="";
        }
    });


}());