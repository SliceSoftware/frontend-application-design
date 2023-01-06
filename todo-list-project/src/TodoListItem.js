import checked from './assets/checked.png';
import unchecked from './assets/unchecked.png'
import v from './v';

/**
 * Returns an HTMLElement representing a todo list item.
 * <code>item</code> must contain two properties:
 * @param item.complete A boolean representing if the item is completed or not
 * @param item.text A string for the todo item text to display
 */
export function TodoListItem(item) {

    const div = v('div', {
        className: "TodoListItem",
        onclick:(ev) => {
            item.toggleComplete();
        }
    });

    const image = v('img', {
        width: 20,
        height: 20,
        src: item.complete ? checked : unchecked
    })
    
    div.add(image);
    div.add(item.text);
    
    return div;
}