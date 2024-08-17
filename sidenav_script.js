var x = window.innerWidth;

const min_width = 1000;


function openNav() {

  x = window.innerWidth;
  if(x > min_width){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    
  }else{
    document.getElementById("myNav").style.height = "100%";
    
  }
    
}

function closeNav() {
  x = window.innerWidth;
  if(x > min_width){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  
  }else{
    document.getElementById("myNav").style.height = "0%";
  }
}