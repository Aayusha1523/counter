let count=0;

document.getElementById("decreaseBtn").onclick=function(){
    count--;
    document.getElementById("countId").innerHTML=count;
}

document.getElementById("resetbtn").onclick=function(){
    count=0;
    document.getElementById("countId").innerHTML=count;
}
document.getElementById("IncreaseBtn").onclick=function(){
    count++;
    document.getElementById("countId").innerHTML=count;
}


