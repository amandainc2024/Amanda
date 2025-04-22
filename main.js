const img = document.querySelector('.hero-img');

    let x = 300, y = 200;         // Start position of the hole
    let dx = 2, dy = 2;           // Direction/speed
    const radius = 80;

    function animate() {
      const rect = img.getBoundingClientRect();
      const maxX = rect.width;
      const maxY = rect.height;

      // Bounce on edges
      if (x - radius <= 0 || x + radius >= maxX) dx *= -1;
      if (y - radius <= 0 || y + radius >= maxY) dy *= -1;

      // Move the mask center
      x += dx;
      y += dy;

      const mask = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0, transparent ${radius - 1}px, black ${radius}px)`;
      img.style.webkitMaskImage = mask;
      img.style.maskImage = mask;

      requestAnimationFrame(animate);
    }

    // Start moving in random direction
    dx = (Math.random() - 0.5) * 6;
    dy = (Math.random() - 0.5) * 6;

    animate();
    
    function shift(what){
      var img = document.getElementById('viewport');
      var infop = document.getElementById('ip');

     
     function  animateimg() {
       img.style.width='1%';
       setTimeout(function() {
         imgS();
         img.style.width='100%';
       },300)

     }
     var mi = ["Building powerful web solutions designed to deliver seamless performance and exceptional user experiences.","We bring creativity and strategy together to deliver designs that not only look stunning but also serve a purpose. Whether it's a logo, brochure, or social media content, our designs amplify your message and elevate your brand.","We combine sleek design with smart functionality to build apps that users love and businesses rely on. Whether it's a customer-facing mobile app or a powerful internal tool, we develop solutions that are intuitive, scalable, and built to perform.","We blend compelling visuals with strategic messaging to craft social media ads that stop the scroll and spark engagement. From Instagram stories to sponsored posts, our ads are designed to connect, convert, and grow your audience."]
     animateimg()
      function imgS() {
        
      
      if(what == 'w'){
        img.src='images/web.jpg';
        ip.innerText = mi[0]
      }
      else if (what == 'a') {
  img.src = 'images/app.jpg';
  ip.innerText = mi[2]
}
else if (what == 'o') {
  img.src = 'images/smedia.jpg';
  ip.innerText = mi[3]
}
if (what == 'g') {
  img.src = 'images/graphics.jpg';
  ip.innerText = mi[1]

}}
 
    }
    
function fillYear(){
  var yr = document.getElementById('year');
  var date = new Date();
  var cYr = date.getFullYear();
  
  yr.innerText = cYr;
  
}
fillYear()