class MyStack {
    constructor() {
        this.elements = new Array(6);
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(element) {
        for (let i = this.elements.length - 1; i >= 0; i--) {
            this.elements[i] = element;
        }
        this.size++;
    }

    isNotEmpty() {
        return this.size > 0;
    }

    size() {
        return this.size;
    }

    get(index) {
        return this.elements[index];
    }

    pop() {
        if (this.size > 0) {
            let element = this.elements[--this.size];
            this.elements[this.size] = null;
            return element;
        }
        return null;
    }

    search(element) {
        for (let index = 0; index < this.size; index++) {
            if (this.elements[index] === element) {
                return true;
            }
        }
        return false;
    }

    contains(element) {
        for (let item of this.elements) {
            if (item === element) {
                return true;
            }
        }
        return false;
    }

    peek() {
        if (this.size > 0) {
            return this.elements[0];
        }
        return null;
    }
}
