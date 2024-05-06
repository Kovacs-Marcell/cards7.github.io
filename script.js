document.addEventListener('DOMContentLoaded', function() {
    var toastContainer = document.getElementById('toast-container');
    var closeButton = document.getElementById('close-toast');

    // Toast bezárása
    closeButton.addEventListener('click', function() {
        toastContainer.style.display = 'none';
    });

    var nightModeButton = document.getElementById('night-mode-button');
    var todoSection = document.querySelector('.todo');
    var taskInput = document.getElementById('taskInput');
    var addTaskButton = document.getElementById('addTaskButton');
    var taskList = document.getElementById('taskList');

    // Szövegszínek váltása éjszakai üzemmódban
    function toggleTextColors() {
        paragraphs.forEach(function(paragraph) {
            paragraph.classList.toggle('dark-mode-text');
        });
    }

    // Éjszakai üzemmód váltása
    nightModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        toggleMenuItems();
        toggleTextColors();
    });

    // Menüelemek stílusának váltása éjszakai üzemmódban
    function toggleMenuItems() {
        var menuItems = menuToggle.querySelectorAll('ul li');
        menuItems.forEach(function(item) {
            item.classList.toggle('dark-mode');
        });
    }

    // TO DO LIST megjelenítése a menü gombra kattintva
    menuToggle.addEventListener('click', function() {
        todoSection.style.display = 'block';
    });

    // Feladat hozzáadása a TO DO LIST-hez
    addTaskButton.addEventListener('click', function() {
        var taskText = taskInput.value;
        if (taskText.trim() !== '') {
            var li = document.createElement('li');
            li.textContent = taskText;
            li.classList.add('taskItem', 'tod-list-item'); // Hozzáadva az egyedi osztályok
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.classList.add('deleteButton');
            deleteButton.addEventListener('click', function() {
                li.remove();
            });
            li.appendChild(deleteButton);
            taskList.appendChild(li); // Hozzáadva az új elemet a listához
            taskInput.value = '';
        }
    });
});