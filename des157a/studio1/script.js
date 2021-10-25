(function(){
    'use strict'
    console.log('reading js');

    let submit2=document.querySelector("#start");
    let h1=document.getElementsByTagName("h1")[0];
    let header=document.getElementsByTagName("header")[0];
    submit2.addEventListener('click',function(event){
        event.preventDefault();
        h1.innerHTML="Enter Your Words";
        header.style.marginTop="160px"
        myForm.style.left="auto";
        submit2.style.position="absolute"
        submit2.style.left="9999px";
    });


    let myForm=document.querySelector('#myForm');
    let madLib=document.querySelector('#madlib');
    myForm.addEventListener('submit',function(event){
        event.preventDefault();
        let noun1 = document.querySelector('#noun1').value;   
        let noun2 = document.querySelector('#noun2').value;   
        let adj = document.querySelector('#adj').value;   
        let verb = document.querySelector('#verb').value;  
        let myText="";
        h1.innerHTML="Your Story"
        myForm.style.left="9999px";

        if(noun1 && noun2 && adj && verb){
            myText=`<u>${noun1}</u> is about to <u>${verb}</u> <u>${noun2}</u>, because <u>${noun2}</u> is <u>${adj}</u>.`;
        }else{
            myText="Please fill the empty fields.";
        }
        console.log(myText);
        madLib.innerHTML= myText;
        madLib.style.color="white";
        madLib.style.fontSize="18px";
        madLib.style.fontSize

        const datas=document.querySelectorAll("input[type=text]");

        for(let i of datas){
            i.value="";
        }
    });


}());