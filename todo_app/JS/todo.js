/* this function gets the task from input */
function get_todos() {
    /* creates an array of inputted tasks */
    var todos = new Array;
    /* pulls saved task from web browser memory */
    var todos_str = localStorage.getItem('todo');
    /* if input isn't null, then JSON.parse will
    communicate with the web browser to make the task a JS object */
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/* this function adds inputted task to the get_todos function array */
function add() {
    /*this creates a variable with the input */
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /*adds a new task to end of the array*/
    todos.push(task);
    /*converts the task input into JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = '';
    show();

    return false;
}

/*this function keeps tasks displayed on the screen*/
function show() {
    /* sets the task retrieved as a variable*/
    var todos = get_todos();

    /*sets up each task in an <ul>*/
    var html = '<ul>';
    /* displays tasks in the list in the inputted order*/
    for (var i = 0; i < todos.length; i++) {
        /*also displays the tasks as a list and creates the button with the 'x'*/
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';

    };
    
    html += '</ul>';
    /*displays the task as a list*/
    document.getElementById('todos').innerHTML = html;

    /*adjusts display after clicking to remove an element*/
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        /* runs remove() when 'x' is pressed on id correlating to list */
        buttons[i].addEventListener('click', remove);
    };
}

/*displays input when 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);

/*removes input when 'x' button is clicked*/
function remove() {
    /* sets attribute[i] as variable */
    var id = this.getAttribute('id');
    var todos = get_todos();
    /* removes the selected id */
    todos.splice(id, 1);
    /* converts input into JSON string */
    localStorage.setItem('todo', JSON.stringify(todos));
    /*displays list with now removed item*/
    show();
}

/*this will permanently show inputs on the screen*/
show();