 // Typewriter effect
    const text = "Muhammad Hassan Raja";
    let index = 0;
    function typeWriter() {
      if (index < text.length) {
        document.getElementById("typed").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    }
    window.onload = typeWriter;

    // Toggle light/dark mode
    function toggleMode() {
      document.body.classList.toggle("light");
    }