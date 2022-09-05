const list = document.querySelector('.booklist ul');
list.addEventListener('click',(e) => {
    if(e.target.className == 'BTN') {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});

const forms = document.forms;
const addForm = forms['add-book']
addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    bookName.textContent = value;
    deleteBtn.textContent = 'delete';
    bookName.classList.add('booktitle')
    deleteBtn.classList.add('deleteBtn')
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});
