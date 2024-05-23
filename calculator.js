let equation = document.getElementById('equation'),
  main = document.getElementById('main'),
  eq = document.getElementById('eq'),
  divide = document.getElementById('divide'),
  mul = document.getElementById('mul'),
  sub = document.getElementById('sub'),
  addi = document.getElementById('add'),
  clear = document.getElementById('clr');
  backspace = document.getElementById('backspace');

var numbers = document.getElementsByClassName('num');
let value1 = 0,
  value2 = 0,
  currentOp = '',
  turn2 = false;

// Clear function
clear.addEventListener('click', function () {
  value1 = 0;
  value2 = 0;
  main.textContent = '0';
  equation.textContent = ''
  currentOp = '';
  turn2 = false;
});

// Backspace function
backspace.addEventListener('click', function () {
  main.textContent = main.textContent.slice(0, -1);
  if (turn2 == false) {
    value1 = Number(main.textContent);
    main.textContent = String(value1);
  } else {
    value2 = Number(main.textContent);
    main.textContent = String(value2);
  }
});

// Multiplication button click
mul.addEventListener('click', function () {
  equation.textContent = String(value1) + '*';
  currentOp = '*';
  turn2 = true;
  main.textContent = '0';
});

// Division button click
divide.addEventListener('click', function () {
  turn2 = true;
  equation.textContent = String(value1) + '÷';
  currentOp = '÷';
  main.textContent = '0';
});

// Addition button click
addi.addEventListener('click', function () {
  turn2 = true;
  equation.textContent = String(value1) + '+';
  currentOp = '+';main.textContent = '0';
});

// Subtraction button click
sub.addEventListener('click', function () {
  turn2 = true;
  equation.textContent = String(value1) + '-';
  currentOp = '-';main.textContent = '0';
});

// Number buttons click
for (var i = 0; i < numbers.length; i++) {
  (function (index) {
    numbers[index].addEventListener('click', function () {
      if (turn2 === false) {
        if (main.textContent.length < 11) {
          value1 = Number(main.textContent + numbers[index].textContent);
          main.textContent = String(value1);
        }
      } else {
        if (main.textContent.length < 11) {
          value2 = Number(main.textContent + numbers[index].textContent);
          main.textContent = String(value2);
        }
      }
    });
  })(i);
}

// Equals button click
eq.addEventListener('click', function () {
  if (currentOp === '=') {
    equation.textContent = value1;
    value2 = 0;
    main.textContent = '0';
    turn2 = false; // Reset turn2 after calculation
  }
  if (currentOp === '*') {
    main.textContent = String(value1 * value2);
    value1 = main.textContent;
    equation.textContent = equation.textContent + String(value2);
  } else if (currentOp === '÷') {
    main.textContent = String(value1 / value2);
    value1 = main.textContent;
    equation.textContent = equation.textContent + String(value2);
  } else if (currentOp === '+') {
    main.textContent = String(value1 + value2);
    value1 = main.textContent;
    equation.textContent = equation.textContent + String(value2);
  } else if (currentOp === '-') {
    main.textContent = String(value1 - value2);
    value1 = main.textContent;
    equation.textContent = equation.textContent + String(value2);
  }

  currentOp = '=';


});
