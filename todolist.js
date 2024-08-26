// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the input field for new to-do items
    const newTodoInput = document.getElementById('new-todo');
    // Select the button to add new to-do items
    const addTodoButton = document.getElementById('add-todo');
    // Select the unordered list to hold the to-do items
    const todoList = document.getElementById('todo-list');
    // Select the button to show all to-do items
    const showAllButton = document.getElementById('show-all');
    // Select the button to show only active to-do items
    const showActiveButton = document.getElementById('show-active');
    // Select the button to show only completed to-do items
    const showCompletedButton = document.getElementById('show-completed');

    // Add an event listener to the add button to call the addTodo function when clicked
    addTodoButton.addEventListener('click', addTodo);
    // Add an event listener to the show all button to call the filterTodos function with 'all' when clicked
    showAllButton.addEventListener('click', () => filterTodos('all'));
    // Add an event listener to the show active button to call the filterTodos function with 'active' when clicked
    showActiveButton.addEventListener('click', () => filterTodos('active'));
    // Add an event listener to the show completed button to call the filterTodos function with 'completed' when clicked
    showCompletedButton.addEventListener('click', () => filterTodos('completed'));

    // Function to add a new to-do item
    function addTodo() {
        // Get the text from the input field and trim any leading/trailing whitespace
        const todoText = newTodoInput.value.trim();
        // If the input is empty, return without doing anything
        if (todoText === '') return;

        // Create a new list item element
        const todoItem = document.createElement('li');
        // Create a new span element to hold the to-do text
        const todoTextElement = document.createElement('span');
        // Create a new button element for deleting the to-do item
        const deleteButton = document.createElement('button');
        // Create a new button element for toggling the to-do's completed state
        const toggleButton = document.createElement('button');

        // Set the span's text content to the to-do text
        todoTextElement.textContent = todoText;
        // Set the delete button's text content to 'Delete'
        deleteButton.textContent = 'Delete';
        // Set the toggle button's text content to 'Toggle'
        toggleButton.textContent = 'Toggle';

        // Add an event listener to the delete button to remove the list item when clicked
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });

        // Add an event listener to the toggle button to toggle the 'completed' class on the span when clicked
        toggleButton.addEventListener('click', () => {
            todoTextElement.classList.toggle('completed');
        });

        // Append the span to the list item
        todoItem.appendChild(todoTextElement);
        // Append the toggle button to the list item
        todoItem.appendChild(toggleButton);
        // Append the delete button to the list item
        todoItem.appendChild(deleteButton);

        // Append the list item to the unordered list
        todoList.appendChild(todoItem);
        // Clear the input field
        newTodoInput.value = '';
    }

    // Function to filter to-do items based on their status
    function filterTodos(filter) {
        // Get all the to-do items
        const todos = todoList.children;
        // Loop through each to-do item
        for (const todo of todos) {
            // Determine which items to show based on the filter
            switch (filter) {
                // Show all items
                case 'all':
                    todo.style.display = '';
                    break;
                    // Show only active items
                case 'active':
                    todo.style.display = todo.firstElementChild.classList.contains('completed') ? 'none' : '';
                    break;
                    // Show only completed items
                case 'completed':
                    todo.style.display = todo.firstElementChild.classList.contains('completed') ? '' : 'none';
                    break;
            }
        }
    }
});