class MyQueue {
    constructor() {
        this.isEmpty = true;
        this.size = 0;
        this.number = 0;
        this.elements = new Array(5);
    }

    isEmpty() {
        this.isEmpty = true;
        return this.isEmpty;
    }

    isNotEmpty() {
        this.isEmpty = true;
        return this.isEmpty;
    }

    add(element) {
        this.elements[this.size] = element;
        this.size++;
    }

    size() {
        return this.size;
    }

    remove(element) {
        const element1 = this.elements[this.size - (this.size - 1)];
        this.size--;
        this.number++;
    }

    offer(element) {
        this.elements[this.size] = element;
        this.size++;
    }

    peek() {
        return this.elements[this.size - 1];
    }

    poll() {
        return this.elements[this.size - 1];
    }
}
