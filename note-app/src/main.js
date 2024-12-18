const create_note = document.getElementsByClassName('create_note')[0];
const note_main = document.getElementsByClassName('note_main')[0];
const close = document.getElementById('close');
const save = document.getElementById('save');
const container_notes = document.getElementsByClassName('container_notes')[0];
const note_content_main = document.getElementsByClassName('note_content_main')[0];

let current_note = null; // Variable para rastrear la nota seleccionada

function createNote() {
    let note = document.createElement('p');
    note.classList.add('note');

    let note_content = document.createElement('span');
    note_content.classList.add('note_content');
    note_content.textContent = note_content_main.textContent;

    let icon_trash = document.createElement('i');
    icon_trash.classList.add('ri-delete-bin-fill', 'delete_note'); // Usar clase en lugar de ID

    // Agregar eventos
    note.appendChild(note_content);
    note.appendChild(icon_trash);
    container_notes.appendChild(note);

    // Evento para abrir la nota
    note.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete_note')) return; // Ignorar si se hace clic en el ícono de eliminar
        current_note = note; // Marcar esta nota como seleccionada
        note_content_main.textContent = note_content.textContent; // Mostrar contenido
        note_main.classList.add('active');
    });

    // Evento para eliminar la nota
    icon_trash.addEventListener('click', () => {
        if (note === current_note) {
            current_note = null; // Si se elimina la nota seleccionada, reiniciar selección
        }
        note.remove();
    });
}

create_note.addEventListener('click', () => {
    current_note = null; // Nueva nota, sin selección previa
    note_content_main.textContent = ''; // Limpiar contenido
    note_main.classList.add('active');
});

close.addEventListener('click', () => {
    note_main.classList.remove('active');
    note_content_main.textContent = ''; // Limpiar contenido
    current_note = null; // Reiniciar selección
});

save.addEventListener('click', () => {
    if (current_note) {
        // Editar la nota seleccionada
        const note_content = current_note.querySelector('.note_content');
        note_content.textContent = note_content_main.textContent;
    } else {
        // Crear una nueva nota
        createNote();
    }
    note_main.classList.remove('active');
    note_content_main.textContent = ''; // Limpiar contenido
    current_note = null; // Reiniciar selección
});
