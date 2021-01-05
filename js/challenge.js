document.addEventListener("DOMContentLoaded", function() {
  const counter = getElementById('counter');
  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');
  const heart = document.getElementById('heart');
  const pause = document.getElementById('pause');
  const likes = document.querySelector('likes');

  const submitButton = document.getElementById('submit');
  const commentForm = document.getElementById('comment-form');

  let count = setInterval(() => {
    counter.innterHTML++
  }, 1000);

  plus.addEventListener('click', () => {
    counter.innerHTML++
  });

  minus.addEventListener('click', ()=> {
    counter.innerHTML--
  });

  pause.addEventListener('click', () => {
    if (pause.innerText === "pause") {
      clearInterval(count)
      pause.innerHTML = "resume";
      plus.disabled = true;
      minus.disabled = true;
      heart.disabled = true;
      submitButton.disabled = true;
    } else {
      count = setInterval(() => {
        counter.innerHTML++
      }, 1000)
      pause.innerHTML = "pause"
      plus.disabled = false;
      minus.disabled = false;
      heart.disabled = false;
      submitButton.disabled = false;
    }
  });

});
