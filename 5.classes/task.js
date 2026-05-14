class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    set state(state) {
        if (state > 100) {
            this._state = 100;
        } else if (state < 0) {
            this._state = 0;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }

    fix() {
        if (this.state < 100 && this.state > 0) {
            this.state = this.state * 1.5;
        }
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "detective";
    }
}

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let foundBook = this.books.find(book => book[type] === value);
        if (foundBook !== undefined) {
            return foundBook;
        } else {
            return null;
        }
    }

    giveBookByName(bookName) {
        let id = this.books.findIndex(item => item.name === bookName)
        if (id !== -1) {
            return this.books.splice(id, 1)[0];
        } else {
            return null;
        }
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if ((mark < 2 || mark > 5) || typeof subject !== 'string' || typeof mark !== 'number') {
            return false;
        }

        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject] || this.marks[subject].length === 0) {
            return 0;
        } else return this.marks[subject].reduce((acc, item) => acc + item, 0) / this.marks[subject].length;
    }

    getAverage() {
        let subjects = Object.keys(this.marks);
        if (subjects.length === 0) return 0;

        return subjects.reduce((acc, subject) => acc += this.getAverageBySubject(subject), 0) / subjects.length;
    }
}