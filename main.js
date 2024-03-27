const button = document.getElementById("Enviar");

const animation = button.animate(
  [
    // Keyframes
    { transform: 'scale(1)', backgroundColor: 'blue' },
    { transform: 'scale(1.1)', backgroundColor: 'lightblue' },
  ],
  {
    // Duration and delay
    duration: 200,
    delay: 0,
    // Easing function
    easing: 'ease-in-out',
    // Iteration count
    iterations: 1,
  }
);