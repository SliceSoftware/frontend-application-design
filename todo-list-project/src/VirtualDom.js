
// Cache state pairs in this array
const hooks = [];

// Reset this to 0 at the end of a rendering cycle
// Increment it during each invocation of myUseState()
let hookIndex = 0;

// Cached array of effect dependencies
const effectDependencies = []

// Reset this to 0 at the end of a rendering cycle
// Increment it during each invocation of myUseEffect()
let effectIndex = 0;

// Effects to call in current rendering cycle
const currentEffects =[];


class VirtualDom {
    
    /** 
     * Mount a component at the given element.
     * @param el_id The ID of the element where the Virtual DOM will mount a component
     * @param component A function that returns an HTMLElement when called 
     */
    mount(el_id, component) {
        this.mountpoint = document.getElementById(el_id);
        this.root = component;
        this.scheduleRefresh();
    }

    scheduleRefresh() {
        this.refreshNeeded = true;
        this.refresh();
    }

    /**
     * Re-render the component and replace the 
     * dom below the mountpoint
     */
    refresh() {
        if (this.mountpoint) {

            // Prevent recursive refreshing inside effect execution
            if (this.refreshNeeded && ! this.refreshing) {
                
                this.refreshNeeded = false;
                this.refreshing = true;

                const new_element = this.root();
                this.mountpoint.replaceChildren(new_element);
            
                // Execute scheduled effects
                for (let f of currentEffects) {
                    f();
                }

                this.refreshing = false;
            }

            // refreshNeeded was set true during effect execution.
            // refresh again now.
            // This will result in infinite recursion if an effect 
            // calls a myUsestate update function without a dependency.
            if (this.refreshNeeded) {
                this.refresh();
            }

            resetHookIndicies();
        }
    }
}

export const VDOM = new VirtualDom();

/**
 * Returns a two element array. First element is current value
 * second element is function that sets value and triggers a dom refresh.
 * @param {*} initial 
 * @returns 
 */
export function myUseState(initial) {

    // Return the cached pair if it exists
    let pair = hooks[hookIndex];
    if (pair) {
        hookIndex++;
        return pair;
    }

    // No cached pair found initialize a new one
    pair = [initial, (v) => {pair[0] = v; VDOM.scheduleRefresh()}];

    // cache the pair
    hooks[hookIndex++] = pair;
    return pair;
}

function resetHookIndicies() {
    hookIndex = 0;
    effectIndex = 0;
    currentEffects.length = 0;
}

/**
 * Schedules execution of the function f if dependency changed since
 * list invocation or if dependency is undefined.
 * 
 * @param {function} f Effect function to call
 * @param {*} dependency Dependency to compare.  f is only invoked if this changes between rendering cycles.
 */
export function myUseEffect(f, dependency = null) {

    let d = effectDependencies[effectIndex];
    if (dependency == null || dependency !== d) {
        // Update dependency
        effectDependencies[effectIndex] = dependency;
        // Push effect onto current effects if dependency changed
        currentEffects.push(f);
    }
    effectIndex++;

}