const input1 = document.querySelector('.username')
const input2 = document.querySelector('.password')
const button = document.querySelector('.button')

function handleChange() {
  if (input1.value && input2.value.length >= 8) {
    button.classList.remove('button')
    button.classList.add('box')
  } else {
    button.classList.remove('box')
    button.classList.add('button')
  }
}

input1.addEventListener('input', handleChange)
input2.addEventListener('input', handleChange)