function Gomethod(){
    document.getElementById("status").value="GO";
    document.getElementById("Green").style.display= "inline-block";
     document.getElementById("Red").style.display= "none";
     document.getElementById("Yellow").style.display="none";
    
    
  document.getElementById("gobtn").style.backgroundColor = "green";
  document.getElementById("stopbtn").style.backgroundColor = "red";
  document.getElementById("waitbtn").style.backgroundColor = "yellow";
}
function Stopmethod(){
    document.getElementById("status").value="STOP";
    document.getElementById("Red").style.display="inline-block";
     document.getElementById("Green").style.display= "none";
     document.getElementById("Yellow").style.display="none";
  document.getElementById("gobtn").style.backgroundColor = "green";
  document.getElementById("stopbtn").style.backgroundColor = "red";
  document.getElementById("waitbtn").style.backgroundColor = "yellow";
}
function Waitmethod(){
    document.getElementById("status").value="WAIT";
    document.getElementById("Yellow").style.display="inline-block";
     document.getElementById("Red").style.display= "none";
     document.getElementById("Green").style.display="none";
  document.getElementById("gobtn").style.backgroundColor = "green";
  document.getElementById("stopbtn").style.backgroundColor = "red";
  document.getElementById("waitbtn").style.backgroundColor = "yellow";
}
