const btn_add = document.getElementsByClassName('btn-add')[0];
const input = document.getElementsByClassName('input-add')[0];
const task_container = document.getElementsByClassName('container-task')[0]; // Corregido el nombre de variable

// Evento para agregar tarea
btn_add.addEventListener('click', addTask);

function addTask() {
    if (input.value.trim() === '') { // Asegura que no se agreguen tareas vacías
        alert('Please enter a task');
        return;
    }

    // Crear estructura de la nueva tarea
    let task = document.createElement('div');
    task.classList.add('task');

    let task_left = document.createElement('div');
    task_left.classList.add('task-left');

    let btn_check = document.createElement('button');
    btn_check.classList.add('btn-check');
    btn_check.innerHTML = '✔'; // Palomita

    let task_title = document.createElement('p');
    task_title.classList.add('task-title');
    task_title.textContent = input.value;

    let btn_delete = document.createElement('button');
    btn_delete.classList.add('btn-delete');
    btn_delete.innerHTML = '✖'; // Cruz para eliminar

    // Armar la estructura
    task.appendChild(task_left);
    task_left.appendChild(btn_check);
    task_left.appendChild(task_title);
    task.appendChild(btn_delete);
    task_container.appendChild(task);

    // Limpiar input
    input.value = '';

    // Agregar eventos a los nuevos botones
    btn_check.addEventListener('click', () => {
        task_title.classList.toggle('checked');
        btn_check.classList.toggle('checked');
    });

    btn_delete.addEventListener('click', () => {
        task.remove();
    });
}
