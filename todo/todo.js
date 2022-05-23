const $form = document.getElementById('form');
const $inputButton = document.getElementById('inputButton');
const $input = document.getElementById('input');
const $ul = document.getElementById('ul');
const todos = JSON.parse(localStorage.getItem("todos"));

if(todos) {
    todos.forEach(todo => {
        add(todo);
    });
}
$inputButton.addEventListener('click', function(event) {
    event.preventDefault();
    console.log($input.value);
    add();
})

function add(todo) {    //入力された値をTodoリストに追加して表示する
    let todoText = $input.value;
    if(todo) {
        todoText = todo.text;
    };
    if(todoText){
        const li = document.createElement("li");
        li.innerText = todoText;
        li.classList.add("list-item");

        if(todo && todo.completed) {
            li.classList.add("done");
        };

        li.addEventListener("contextmenu", function(event) {
            event.preventDefault();
            li.remove();
            saveData();
        });

        li.addEventListener("click", function() {
            li.classList.toggle("done");    //引数のクラスを持っていれば削除、持っていなければ追加
            saveData();
        });

        $ul.appendChild(li);
        $input.value = "";
        saveData();
    };
}

function saveData() {   //追加した情報を配列に保存する
    const lists = document.querySelectorAll("li");
    let todos = [];
    lists.forEach(list => {
        let todo = {
            text: list.innerText,
            completed: list.classList.contains("done")
        }
        todos.push(todo);
    });
    localStorage.setItem("todos", JSON.stringify(todos));   //JSON.stringify()でjsonファイルに変換、扱いやすくする
}