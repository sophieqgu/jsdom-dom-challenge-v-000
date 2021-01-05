document.addEventListener("DOMContentLoaded", function() {
  let counter = getElementById('counter');
  let plus = document.getElementById('plus');
  let minus = document.getElementById('minus');
  let heart = document.getElementById('heart');
  let pause = document.getElementById('pause');
  let likes = document.querySelector('likes');

  let submitButton = document.getElementById('submit');
  let commentForm = document.getElementById('comment-form');

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

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    p.innerText = commentForm.querySelector('input').value;
    document.getElementById('list').appendChild(p);
    commentForm.reset();
  });

});
