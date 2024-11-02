 function cerdit(Rs){
   return (500)
 }
  try{
    cerdit(Rs)
    document.getElementById("p2").innerHTML=cerdit(500)
  }
  catch (e) {
      document.getElementById("p1").innerHTML = e.message;
  }