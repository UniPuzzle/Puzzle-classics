const activeButton = document.querySelectorAll('.button');
const btnCheck = document.querySelectorAll('.button__check');
const btnActive = document.querySelectorAll('.button--active');

const id1 = document.getElementById('#1');
const id2 = document.getElementById('#2');

const getButton = activeButton.forEach(btn => {
  btn.addEventListener('click', function () {
    activeButton.forEach(function (btn) {
      btn.classList.remove('button--active');
    });

    btn.classList.add('button--active');
  });
});
