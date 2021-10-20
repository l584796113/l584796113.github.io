(function(){
    'use strict'
    console.log('reading js');

    let myForm=document.querySelector('#myForm');
    let madLib=document.querySelector('#madlib');
    myForm.addEventListener('submit',function(event){
        event.preventDefault();
        let noun1 = document.querySelector('#noun1').value;   
        let noun2 = document.querySelector('#noun2').value;   
        let adj = document.querySelector('#adj').value;   
        let verb = document.querySelector('#verb').value;  
        let myText="";
        if(noun1 && noun2 && adj && verb){
            myText=`Here are the words: ${noun1}, ${noun2}, ${adj}, and ${verb}`;
        }else{
            myText="Please fill the empty fields.";
        }
        console.log(myText);
        madLib.innerHTML= myText;

        const datas=document.querySelectorAll("input[type=text]");

        for(let i of datas){
            i.value="";
        }
    });


}());