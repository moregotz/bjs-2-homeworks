function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (marks.length > 0 && Array.isArray(this.marks)) {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if (Array.isArray(this.marks) === false || this.marks.length === 0) {
        return 0;
    } else {
        let marksSum = this.marks.reduce((acc, item) => {
            acc += item;
            return acc;
        }, 0);
        return marksSum / this.marks.length;
    }
}

Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
}