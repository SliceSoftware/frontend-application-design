
class VirtualDom {
    
    /** 
     * Mount a component at the given element.
     * @param el_id The ID of the element where the Virtual DOM will mount a component
     * @param component A function that returns an HTMLElement when called 
     */
    mount(el_id, component) {
        this.mountpoint = document.getElementById(el_id);
        this.root = component;
        this.refresh();
    }

    /**
     * Re-render the component and replace the 
     * dom below the mountpoint
     */
    refresh() {
        if (this.mountpoint) {
            const new_element = this.root();
            this.mountpoint.replaceChildren(new_element);
        }
    }
}

export const VDOM = new VirtualDom();