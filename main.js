    let num = document.getElementById("number").innerHTML;
    

   setInterval(function myfunction(){
    num = num - 1;
    document.getElementById("number").innerHTML = num;
   },1000)