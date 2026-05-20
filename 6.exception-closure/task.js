function parseCount(value) {
    if (isNaN(Number.parseFloat(value))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(value);
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
        throw error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;

        if ((this.sideA + this.sideB) < this.sideC || (this.sideA + this.sideC) < this.sideB || (this.sideB + this.sideC) < this.sideA) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        this.trianglePerimeter = this.sideA + this.sideB + this.sideC;
        return this.trianglePerimeter;
    }

    get area() {
        this.triangleHalfPerimeter = this.trianglePerimeter / 2;

        this.triangleArea = Number(Math.sqrt(this.triangleHalfPerimeter * (this.triangleHalfPerimeter - this.sideA) * (this.triangleHalfPerimeter - this.sideB) * (this.triangleHalfPerimeter - this.sideC)).toFixed(3));

        return this.triangleArea;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}
