/* hero-scramble.js
  Animates a text element by scrambling characters and resolving to the target text.
*/
(function () {
  function randomChar() {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    return chars[Math.floor(Math.random() * chars.length)];
  }

  function scrambleElement(el, target, duration) {
    const start = performance.now();
    const original = target.split('');
    const len = original.length;
  /* Reduce flipping frequency per-character by tracking last swap time per index */
    const lastSwap = new Array(len).fill(0);
    const current = new Array(len).fill('');
    for (let i = 0; i < len; i++) {
      current[i] = original[i] === ' ' ? ' ' : randomChar();
    }

  const baseSwapInterval = 220; /* ms between changes during most of the animation (larger -> fewer flips) */
  const finalSwapInterval = 60; /* faster swaps near the end so reveal resolves cleanly */
  const finalPhaseThreshold = 0.75; /* when t > threshold, enter final phase */

    function frame(now) {
      const t = Math.min(1, (now - start) / duration);
  /* ease-out so it slows near the end */
      const ease = 1 - Math.pow(1 - t, 3);
      const revealCount = Math.floor(ease * len);

      const swapInterval = t > finalPhaseThreshold ? finalSwapInterval : baseSwapInterval;

      let out = '';
      for (let i = 0; i < len; i++) {
        if (i < revealCount) {
          out += original[i];
        } else if (original[i] === ' ') {
          out += ' ';
        } else {
          if (now - lastSwap[i] >= swapInterval) {
            current[i] = randomChar();
            lastSwap[i] = now;
          }
          out += current[i];
        }
      }

      el.textContent = out;

      if (t < 1) {
        requestAnimationFrame(frame);
      }
    }

    requestAnimationFrame(frame);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const el = document.querySelector('.hero-title');
    if (!el) return;

    const target = el.textContent.trim();
  const duration = 5000; /* 5 seconds */
  /* initialize with blanks or random */
    el.textContent = ''.padEnd(target.length, ' ');

    scrambleElement(el, target, duration);

  /* image rotator for hero thumbnails --------------------------------- */
    const thumbs = Array.from(document.querySelectorAll('.hero-thumb'));
    if (!thumbs.length) return;

  /* probe each thumb's src to ensure it exists on the server */
    const availableThumbs = [];
    let probesDone = 0;

    function probeThumb(imgEl, cb) {
      const probe = new Image();
      const src = imgEl.getAttribute('src');
      probe.onload = () => cb(true, imgEl);
      probe.onerror = () => cb(false, imgEl);
      try {
    probe.src = encodeURI(src);
      } catch (e) {
        console.debug('probe failed for', src, e);
        cb(false, imgEl);
      }
    }

    thumbs.forEach(t => {
      probeThumb(t, (ok, elThumb) => {
        probesDone++;
        if (ok) availableThumbs.push(elThumb);
        if (probesDone === thumbs.length) startThumbRotator(availableThumbs);
      });
    });

  function startThumbRotator(list) {
      if (!list || list.length === 0) {
        // reveal original (first) thumb
        thumbs[0].classList.add('visible');
        return;
      }

  /* rapid cycling during text scramble, then slow down */
      let idx = 0;
      const rapidInterval = 120;
      const slowInterval = 2400;

      function showThumb(i) {
        thumbs.forEach(t => t.classList.remove('visible'));
        list[i].classList.add('visible');
      }

      const rapidTimer = setInterval(() => {
        idx = (idx + 1) % list.length;
        showThumb(idx);
      }, rapidInterval);

      setTimeout(() => {
        clearInterval(rapidTimer);
        showThumb(idx);
        setInterval(() => {
          idx = (idx + 1) % list.length;
          showThumb(idx);
        }, slowInterval);
      }, duration);
    }

    /* post-thumbs: probe and unscramble at the end of each post */
    const postThumbsGroups = Array.from(document.querySelectorAll('.post-thumbs'));
    if (postThumbsGroups.length) {
      postThumbsGroups.forEach(group => {
        const thumbs = Array.from(group.querySelectorAll('.post-thumb'));
        if (!thumbs.length) return;

        // reveal them by unscrambling opacity/transform sequence
        thumbs.forEach((t, i) => { t.style.opacity = '0'; t.style.transform = 'translateY(8px)'; });
        let pidx = 0;
        const pDuration = 1800;
        const pRapid = 90;
        const pTimer = setInterval(() => {
          thumbs.forEach(t => t.style.opacity = '0');
          thumbs.forEach(t => t.style.transform = 'translateY(8px)');
          thumbs[pidx].style.opacity = '1';
          thumbs[pidx].style.transform = 'translateY(0)';
          pidx = (pidx + 1) % thumbs.length;
        }, pRapid);

        setTimeout(() => {
          clearInterval(pTimer);
          // final settle: show all
          thumbs.forEach((t, i) => { t.style.opacity = '1'; t.style.transform = 'translateY(0)'; });
        }, pDuration);
      });
    }
  });
})();
