let form = document.querySelector('#addForm')
let itemList = document.querySelector('#items')
let filter = document.querySelector('#filter')


form.addEventListener('submit', addItem)


const clearInput = () => {
    document.querySelector('#newItemText').value = ''
}

//Функци добавления элемента
function addItem (e){
    e.preventDefault()

    let newItemInput = document.querySelector('#newItemText')
    let newItemText = newItemInput.value
    
    let newElement = document.createElement('li')

    newElement.className = 'list-group-item'

    let newTextNode = document.createTextNode(newItemText)

    newElement.appendChild(newTextNode)

    let deleteBtn = document.createElement('button')
    deleteBtn.appendChild(document.createTextNode('Удалить'))

    deleteBtn.className = 'btn btn-light btn-sm float-right'

    deleteBtn.dataset.action = 'delete'

    newElement.appendChild(deleteBtn)

    itemList.prepend(newElement)

    clearInput()
}

itemList.addEventListener('click', removeItem)

//Функция удаления элемента
function removeItem(e){
    e.preventDefault()

    if (
        e.target.hasAttribute('data-action') &&
        e.target.getAttribute('data-action') == 'delete'
    ){
        if (confirm('Удалить задачу?')) {
            e.target.parentNode.remove()
        }
    }
}

filter.addEventListener('keyup', searchItems)

//Функция быстрого поиска
function searchItems(e){
    e.preventDefault()

    let searchedText = e.target.value.toLowerCase()


    let item = itemList.querySelectorAll('li')
    console.log(item)

    for (let i=0; i < item.length; i++) {
        let itemText = item[i].firstChild.textContent.toLocaleLowerCase()

        if (itemText.indexOf(searchedText) != -1){
            item[i].style.display = 'block'
        } else {
            item[i].style.display = 'none'
        }
    }
}