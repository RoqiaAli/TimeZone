
//Time
 // Clock .. world time 

 //# curl "http://worldtimeapi.org/api/timezone/America/Grand_Turk"
 function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
     mytime=setTimeout('display_ct()',refresh)
   }
async function display_ct() {
    var x =await fetch("http://worldtimeapi.org/api/timezone/America/Grand_Turk");
   // console.log(x);
    var x1= ` ${x.getHours( )}:${ x.getMinutes()}:${ x.getSeconds()}`;
    document.querySelector('.clock').innerHTML = x1;
    display_c();
    }
    display_ct();