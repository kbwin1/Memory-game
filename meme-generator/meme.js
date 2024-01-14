const form = document.querySelector("#meme");
const url = document.querySelector("#url");
const topText = document.querySelector("#toptext");
const bottomText = document.querySelector("#bottom");
const results = document.querySelector("#results");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const result3 = document.querySelector("#result3");
const result4 = document.querySelector("#result4");

//to make the image
form.addEventListener("submit", function(e){
    e.preventDefault();
    
    let newImg = document.createElement("img"); 
    newImg.src = url.value;
    let topText1 =document.createElement("p");
    topText1.innerText = topText.value;
    let bottomText1 = document.createElement("p");
    bottomText1.innerText = bottomText.value;
    if(result1.children.length === 1 || result4.children.length === 1 ){
        result1.appendChild(newImg);
    
    topText1.classList.add("tp1");
    result1.appendChild (topText1);
    
    bottomText1.classList.add('bt1');
    result1.appendChild (bottomText1);
    }
    
    if( result1.children.length === 7 || result2.children.length === 1 ){
        result2.appendChild (newImg);
        topText1.classList.add("tp2");
        result2.appendChild(topText1);
        result2.appendChild(bottomText1);
        bottomText1.classList.add("bt2");
       }
       if( result2.children.length === 7 || result3.children.length === 1 ){
        result3.appendChild(newImg);
        topText1.classList.add("tp3");
        result3.appendChild(topText1);
        result3.appendChild(bottomText1);
        bottomText1.classList.add("bt3");
       }
       if( result3.children.length === 7 || result4.children.length === 1){
        result4.appendChild(newImg);
        topText1.classList.add("tp4");
        result4.appendChild(topText1);
        result4.appendChild(bottomText1);
        bottomText1.classList.add("bt4");
       }
       if(result4.children.length === 4 && result3.children.length === 4 && result2.children.length === 4 && result1.children.length === 4 ){
        alert("Please delete a meme to continue");
        
        
       }
       //topText.value="";
       //bottomText.value="";
       //url.value ="";
    })

            //to delete image
    result1.addEventListener('click',function(j){
    if(j.target.tagName === 'DIV' && result1.children.length > 2){
        result1.removeChild(result1.children[1]);
        result1.removeChild(result1.children[1]);
        result1.removeChild(result1.children[1]);
    }

    })
    result2.addEventListener('click',function(j){
        if(j.target.tagName === 'DIV' && result2.children.length > 2){
            result2.removeChild(result2.children[1]);
            result2.removeChild(result2.children[1]);
            result2.removeChild(result2.children[1]);
        }
    
        })
        result3.addEventListener('click',function(j){
            if(j.target.tagName === 'DIV' && result3.children.length > 2){
                result3.removeChild(result3.children[1]);
                result3.removeChild(result3.children[1]);
                result3.removeChild(result3.children[1]);
            }
        
            })
            result4.addEventListener('click',function(j){
                if(j.target.tagName === 'DIV' && result4.children.length > 2){
                    result4.removeChild(result4.children[1]);
                    result4.removeChild(result4.children[1]);
                    result4.removeChild(result4.children[1]);
                }
            
                })

