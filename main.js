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