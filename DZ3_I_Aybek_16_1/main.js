// function seyHello() {
//     console.log("Hello")
// }
//
// // seyHello()
// //
// function getFullName(user, age, user2) {
//     if (age < 18){
//         console.log("Close")
//     }else {
//         // console.log(user.first_name, user.last_name + " " + "Open")
//         console.log(`${user.first_name} ${user.last_name} Open`)
//     }
// }

// const age = prompt("Сколько тебе лет?")
//
// const user = {
//     first_name: "John",
//     last_name: "Barbara"
// }
//
// getFullName(user, age)

// const anonym = function (users) {
//     console.log(user, users)
// }
//
// anonym()

// function numbers(number1, number2) {
//     if (number1 > number2) {
//         console.log("Первое больше")
//     } else if (number1 < number2) {
//         console.log("Второе больше")
//     } else {
//         console.log("Они равны")
//     }
// }
// const number = {
//     number1: prompt("Число?"),
//     number2: prompt("Второе число?")
// }
//
// numbers(number.number1, number.number2)
//
//
// const one = [123, 12321, 123, 3123, 313]
// const two = [434, 4234, 43, 234]
// console.log(one, two)
// function getFullName(users, cb) {
//     console.log(user.first_name, user.last_name)
// }
// function callBack() {
//     console.log("I am Call Back")
// }
// const user = {
//     first_name: "Jack",
//     last_name: "Barbara"
// }
// getFullName(user, callBack())
// const button = document.getElementById("button");
// const input = document.getElementById("input");
//
// button.onclick = function () {
//     console.log(input.value)}


// function tr () {
//     let line = "*"
//     while (line.length < 7){
//         console.log(line)
//         line = line + "*"
//     }
// }
//     tr()

// const blocks = document.getElementsByClassName('block')
// console.log(blocks)
//
// const block3 = document.getElementById('block3')
// console.log(block3)

// block3.className = 'changedClass';
// console.log(block3.classList)

// block3.classList.add('newClass');
// console.log(block3.classList )
//
// block3.classList.remove('block')
//
// block3.onclick = () => {
//     block3.classList.toggle('active')
// }

// const block = document.querySelector('.block')
//
// const block2 = document.querySelectorAll('.block')
// console.log(block2)
//
// const button = document.getElementById('button')
// const input = document.getElementById('input')
//
// button.onclick = () => {
//     const div = document.createElement('div')
//     const deleteButton = document.createElement('button')
//     deleteButton.innerText = 'delete'
//     const changeButton = document.createElement('button')
//     changeButton.innerText = 'Change'
//     div.setAttribute ('class', 'block')
//     div.innerText = input.value
//
//     div.append(deleteButton, changeButton)
//     document.body.append(div)
//     input.value = ''
// }

// const list = [];
// const addButton = document.getElementById('button');
// const input = document.getElementById('input')
//
// function change(id) {
//   const item = list.findIndex((d) => {
//     if (d.id === id) {
//       return true;
//     }
//   })
//   const text = prompt('Текст для изменения')
//   list[item].text = text;
//   render()
// }
//
// function Deleted(id) {
//   const item = list.findIndex(d => d.id === id)
//   list.splice(item, 1)
//   render(list)
// }
//
// function render() {
//   const mainDiv = document.createElement('div');
//   mainDiv.setAttribute('class', 'list');
//
//   for (let i = 0; i < list.length; i++) {
//     const div = document.createElement('div');
//     div.setAttribute('class', 'todoBlock');
//     const p = document.createElement('p');
//     p.innerText = list[i].text
//     div.append(p);
//
//     const buttons = document.createElement('div');
//     buttons.setAttribute('class', 'actions');
//     const changeButton = document.createElement('button');
//     changeButton.setAttribute('class', 'change');
//     changeButton.setAttribute('class', 'change');
//     changeButton.onclick = () => {
//       change(list[i].id)
//     }
//     changeButton.innerText = "change";
//     const deleteButton = document.createElement('button');
//     deleteButton.setAttribute('class', 'delete');
//     deleteButton.onclick = () => {
//       Deleted(list[i].id).remove()
//     }
//     deleteButton.innerText = "delete";
//     buttons.append(changeButton, deleteButton);
//     div.append(buttons);
//     mainDiv.append(div);
//
//   }
//
//   const form = document.querySelector('.form');
//   document.querySelector('.list').remove();
//   form.append(mainDiv);
// }
//
//
// addButton.addEventListener('click', function () {
//
//     const obj = {
//     id: list.length + 1,
//     text: input.value
//   }
//   if (input.value === '') {
//     return false
//   } else {
//     list.push(obj);
//     render()
//   }
//   input.value = '';
// })
//



//  ДЗ

function numbers(number1, number2) {
    if (number1 > number2) {
        console.log("Первое больше")
    } else if (number1 < number2) {
        console.log("Второе больше")
    } else {
        console.log("Они равны")
    }
}
const number = {
    number1: prompt("Число?"),
    number2: prompt("Второе число?")
}

numbers(number.number1, number.number2)


const one = [123, 12321, 123, 3123, 313]
const two = [434, 4234, 43, 234]
console.log(one, two)

