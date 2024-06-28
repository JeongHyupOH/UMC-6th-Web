const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

increase.onclick = () => {
  const increase_num = parseInt(number.innerText, 10)
  number.innerText = increase_num + 1
}

decrease.onclick = () => {
  const decrease_num = parseInt(number.innerText, 10)
  number.innerText = decrease_num - 1
}