
export function TodoListItemCreator(addItem) {

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('maxlength', 50);
    input.setAttribute('size', 50);
    input.setAttribute('placeholder', "What do you need to do?")

    input.addEventListener('keyup', ev => {
        if (ev.code == 'Enter') {
            // Add the new item
            addItem(ev.target.value);
            //Blank the input after 'Enter'
            ev.target.value = "";
        }
    })
    input.className = 'TodoListItemCreator';
    return input;

}