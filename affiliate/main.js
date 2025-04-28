function nav(h,e) {
 document.querySelector('nav .items').style.height = h+'vh';
 if (h == 45) {
  e.setAttribute('onclick','nav(0,this)')
 }
 else{
  e.setAttribute('onclick','nav(45,this)')

 }
}