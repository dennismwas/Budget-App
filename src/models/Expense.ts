class Expense {
    public name: string;
    public price: number;
    public color: string;

    constructor(name: string, price: number, color: string = null) {
        this.name = name;
        this.price = price;
        this.color = color ?? this.generateColor();
    }


    generateColor() {
        const o = Math.random;
        const g = Math.trunc;
        const s = 255;
        return `rgb(${g(o() * s)} , ${g(o() * s)} , ${ g(o() * s)} )`;
    }

}

export default Expense