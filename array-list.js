class ArrayList {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(value) {
        this.data[this.length] = value;
        this.length++;
    }
    pop() {
        const result = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return result;
    }
    get(index) {
        return this.data[index];
    }
    delete(index) {
        const answer = this.data[index];
        this._collapseTo(index);
        return answer;

    }
    _collapseTo(index) {
        while (index < this.length) {
            this.data[index] = this.data[index + 1];
            index++;
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}