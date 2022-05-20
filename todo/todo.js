const $listButton = document.querySelectorAll('.listButton');
const $addButton = document.getElementById('addButton');

$listButton.forEach((button) =>{
    button.addEventListener('click', () => {
        const li = button.closest('li');
        li.classList.add('done');    
    })
})

$addButton.addEventListener('click', () => {
    const input = document.getElementById('newTodo');

    const $li = document.createElement('li');
    $li.innerText = input.value;
    const doneButton = document.createElement('button');
    doneButton.innerText = 'done';
    $li.appendChild(doneButton);
    doneButton.addEventListener('click', () => {
        $li.classList.add('done');
    })

    const $ul = document.getElementById('list');
    $ul.appendChild($li);

})


/*$button.addEventListener('click', () => {
    console.log('clickbutton');
})*/