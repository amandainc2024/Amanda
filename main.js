const img = document.querySelector('.hero-img');

    let x = 300, y = 200;         // Start position of the hole
    let dx = 2, dy = 2;
    // Direction/speed
    
    let radius;
      if(window.innerWidth < 400){
        radius = 60;
        x = 200;
        y = 100;
      }
      else{
        radius = 80;
      }
    

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

    if(window.innerWidth < 400){
      dx = 1.8975638002117152;
      dy = -1.5310844066923595;
    }else{
    dx = (Math.random() - 0.5) * 6;
    dy = (Math.random() - 0.5) * 6;
    }
    
console.log(dx + ' ' + dy);
    animate();
    
    function shift(what){
      var img = document.getElementById('viewport');
      var infop = document.getElementById('ip');

     
     function  animateimg() {
       img.style.width='1%';
       setTimeout(function() {
         imgS();
         
         if (window.innerWidth < 400) {
          img.style.width='50%';
         }
        else {
          img.style.width='100%';
        }
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
fillYear();

const pData = [
  {
    'img':'images/pp1.PNG',
    'ps':'Create a poster that could boost sales during Christmas by use of a discount',
    'des':'Tito Cakes wanted to take advantage of the festive season to get more sales. They needed a poster that could inform their customers and potential customers about their offer and retain them for the whole next year.',
    'tes':'This beautiful, am sure my message will be heard. Thank you'
  },
    {
    'img':'images/pp3.PNG',
    'ps':"Designing a logo as part of the ministries' brand",
    'des':'The ministry lacked a brand logo to be used on the t shirts, social media, posters and other media.',
    'tes':'Not exactly my wish, but definitely better. Thank you.'
  },
  {
    'img':'images/pp2.PNG',
    'ps':'Create business cards to promote contact sharing to potential customers.',
    'des':'Tito Cakes is a business that usually gains customers from affiliate and communication. Martha wanted business cards with her contacts to build a bigger contact list.',
    'tes':'This is great design. Well done'
  },
  {
    'img':'images/pp4.PNG',
    'ps':'Create a real life mock up for realistic visualization of Nadia\'s picture.',
    'des':'Nadia wanted to have a magazine cover design to visualize its real life use and to be used in her eMagazine',
    'tes':'This looks cool, I like everything at large.'
  },
  {
    'img':'images/pp5.PNG',
    'ps':'Create a poster to provide the required information and convert viewers to attendees.',
    'des':'The organizers of this event were just a start up that didn\'t have a lit engagement. They sought a social media poster that could provide information about the concert and attract people.',
    'tes':'The poster is better than what I had in mind . Thanks for the professional advice to bring the out the purpose instead of the my wants.'
  },
  {
    'img':'images/pp6.PNG',
    'ps':'Design a poster for my vocational institute highlighting the available courses.',
    'des':'David was starting up a vocational institute with four courses in mind. He sought a poster that could advertise his start up and also gain customers.',
    'tes':'Good work! This is my actual expectation.'
  }
];

function  fillPP(d) {
  var current = parseInt(document.getElementById("id").innerText.replace('[','').replace(']',''));
  
  var ps = document.getElementById('ps');
  var des = document.getElementById('des');
  var tes = document.getElementById('tes');
  var img = document.getElementById('imgP');
  
  var data = () => {
    if (d == 'f') {
      return pData[current];
    } else {
      return pData[current - 2]
    }
  };
  
  ps.innerHTML = '<u>Project Scope: </u>'+ data().ps;
  des.innerHTML = data().des;
  tes.innerHTML = data().tes;
  img.src = data().img;
  
  if(current < 6 &&d == 'f'){
    document.getElementById("id").innerText = '['+(current+1)+']';
  }
  else if (current == 6 && d == 'f') {
    document.getElementById("id").innerText = '[' + (current) + ']';
  }
  else if (current < 7 && d == 'b') {
    document.getElementById("id").innerText = '[' + (current - 1) + ']';
  }
  else if (current == 1 && d == 'b') {
  document.getElementById("id").innerText = '[' + (current ) + ']';
}
 console.log(current)
}

setTimeout(function() {
  document.querySelector('.splash').style.opacity = '0';
  setTimeout(function() {
  document.querySelector('.splash').style.display = 'none';
}, 2000)
}, 3000)


 

 console.log(window.location .href)
