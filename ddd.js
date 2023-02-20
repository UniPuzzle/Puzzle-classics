{
  /* <div class="button">
  <span class="sub-button">
    Check
  </span>
  <span class="main-button">Main button</span>
</div>

<div class="button">
  <span class="sub-button">
    Check
  </span>
  <span class="main-button">Main button</span>
</div>



======================


.button {
    display: inline-block;
    width: 200px;
    border-radius: 40px;
    padding: 10px 30px;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
    background: green;
    position: relative;
    z-index: 0;
}
.button .sub-button {
    display: none;
    position: absolute;
    line-height: 20px;
    left: 5px;
    top: 5px;
    padding: 5px 10px;
    border-radius: 20px;
    z-index: 1;
}
.button.active .sub-button {
    display: inline-block;
    background: red;
}
.button.active.clicked {
    background: red;
} */
}

// обработка клика на главную кнопку
let onClickMainButton = function (e, button) {
  if (!button.classList.contains('active')) {
    // если кнопка не была нажата (нет класса .active)
    button.classList.add('active');
    console.log('Handle click on main button');
  } else {
    // если кнопка уже была нажата
    console.log('Button was clicked second time');
  }
};

// обработка клика на внутреннюю кнопку
let onClickSubButton = function (e, button) {
  // button - главная кнопка, в которой находится внутренняя кнопка
  button.classList.add('clicked');
  console.log('Handle click on sub button');
};

// логика кликов на все кнопки вынесена в функцию
let handleButtonClick = function () {
  // находим все кнопки
  var buttons = document.querySelectorAll('.button');
  if (!buttons.length) return;

  // добавляем обработчик клика для каждой кнопки
  buttons.forEach(function (button) {
    button.onclick = function (e) {
      e.preventDefault();
      // проверяем, на какой элемент был произведен клик
      // если кликнута внутренняя кнопка, не обрабатывать это как клик на главнуу кнопку
      // (если таргет элемент содержит класс sub-button - клик на внутреннюю кнопку)
      if (!e.target.classList.contains('sub-button')) {
        onClickMainButton(e, button);
      }
    };

    // для каждой главной кнопки находим внутреннюю кнопку
    var subButton = button.querySelector('.sub-button');
    // если она есть, добавляем обработчик клика для нее
    if (subButton) {
      subButton.onclick = function (e) {
        e.preventDefault();
        onClickSubButton(e, button);
      };
    }
  });
};

handleButtonClick();
