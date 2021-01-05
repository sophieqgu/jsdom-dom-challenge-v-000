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

});
