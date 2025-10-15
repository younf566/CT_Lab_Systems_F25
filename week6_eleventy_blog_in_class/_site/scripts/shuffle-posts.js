// shuffle-posts.js
// Shuffle the order of .post-item elements and give them a slight random offset/rotation
(function () {
  function randRange(min, max) { return Math.random() * (max - min) + min; }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.posts');
    if (!container) return;

    const items = Array.from(container.children);
    const shuffled = shuffleArray(items.slice());

    // Remove existing children
    container.innerHTML = '';

    shuffled.forEach((item, idx) => {
      // random translate within small bounds so blocks look scattered but stay within margins
      const tx = Math.round(randRange(-18, 18));
      const ty = Math.round(randRange(-10, 10));
      const rot = randRange(-2.5, 2.5);

      item.classList.add('scattered');
      item.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg)`;
      item.style.zIndex = `${100 - idx}`; // earlier items appear on top slightly

      container.appendChild(item);
    });
  });
})();
