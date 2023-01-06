import checked from './assets/checked.png';
import unchecked from './assets/unchecked.png'

/**
 * Returns an HTMLElement representing a todo list item.
 * <code>item</code> must contain two properties:
 * @param item.complete A boolean representing if the item is completed or not
 * @param item.text A string for the todo item text to display
 */
export function TodoListItem(item) {
    const div = document.createElement('div');
    const image = `<img src="${item.complete ? checked : unchecked}" width="20" height="20" />`;
    div.innerHTML = `
        ${image} ${item.text}
    `;
    div.addEventListener('click', (ev) => {
        item.toggleComplete();
    })
    div.className = 'TodoListItem';
    return div;
}