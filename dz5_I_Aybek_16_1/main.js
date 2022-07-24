const list = [];

const addButton = document.getElementById("button");
const input = document.getElementById("input")

function change(id) {
  const item = list.findIndex((d) => {
    if (d.id === id) {
      return true;
    }
  })
  const text = prompt('Текст для изменения')
  list[item].text = text;
  render()
}

function Deleted(id) {
  const item = list.findIndex(d => d.id === id)
  list.splice(item, 1)
  render(list)
}

function render() {
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute('class', 'list');

    for(let i = 0; i < list.length; i++){
        const div = document.createElement('div');
        div.setAttribute("class", "todoBlock");
        const p = document.createElement("p");
        p.innerText = list[i].text
        div.append(p);

        const actions = document.createElement("div");
        actions.setAttribute("class", "actions");
        const changeButton = document.createElement("button");
        changeButton.setAttribute("class", "change");
        changeButton.onclick = () => {
            change(list[i].id)
        }
        changeButton.innerText = "change";
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute('class', 'delete');
        deleteButton.onclick = () => {
            Deleted(list[i].id)
        }
        deleteButton.innerText = "delete";
        actions.append(changeButton, deleteButton);
        div.append(actions);
        mainDiv.append(div);
    }

    const form = document.querySelector('.form');
    document.querySelector('.list').remove();
    form.append(mainDiv)

}

addButton.addEventListener('click', function () {

    const obj = {
        id: list.length + 1,
        text: input.value
    }
    if (input.value === '') {
        return false
    } else {
        list.push(obj);
        render()
    }
    input.value = '';
})