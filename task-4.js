/* Task 4

Напишите функцию, которая принимает два числа. 
Каждую секунду необходимо выводить в консоль, 
начиная от первого и заканчивая вторым. 
Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. Каждую 
секунду в консоль должно печататься число, начиная 
с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15). */

function countFromTo(a, b) {
  let timeOff = (b - a + 2) * 1000;
  let i = a;
  function printI() {
    if (i <= b) {
      console.log(i);
      i += 1;
    }
  }
  function stopCount() {
    clearInterval(timerId);
    // console.log("Stop");
  }
  let timerId = setInterval(printI, 1000);
  setTimeout(stopCount, timeOff);
}

countFromTo(5, 15);
