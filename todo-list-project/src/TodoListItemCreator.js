import v from './v';

export function TodoListItemCreator(addItem) {

    const input = v('input', {
        className: 'TodoListItemCreator',
        type: 'text',
        maxlength: 50,
        size: 50,
        placeholder: "What do you need to do?",
        onkeyup: (ev) => {
            if (ev.code == 'Enter') {
                // Add the new item
                addItem(ev.target.value);
                //Blank the input after 'Enter'
                ev.target.value = "";
            }
        }
    })

    input.className = 'TodoListItemCreator';
    return input;

}