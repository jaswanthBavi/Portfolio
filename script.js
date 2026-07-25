const text = "DevOps Engineer | AWS Cloud Enthusiast  | MAchine Learning";

let index = 0;

function typing(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typing,100);

    }

}

typing();
const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>200||document.documentElement.scrollTop>200){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}