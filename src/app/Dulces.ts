
export class Dulce {
    nombre: string;
    precio: number;
    stock: number;
    vendidos: number;

    constructor(nombre: string, precio: number, stock: number, vendidos: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.vendidos = 0;
    }

    vender(): boolean {
        if (this.stock > 0) {
            this.stock--;
            this.vendidos++;
            return true;
        }
        return false;
    }
}

export class Chocolate extends Dulce {
    tipo: string;

    constructor(nombre: string, precio: number, stock: number, vendidos: number, tipo: string) {
        super(nombre, precio, stock, vendidos);
        this.tipo = tipo;
    }
}

export class Galleta extends Dulce {
    conChispas: boolean;

    constructor(nombre: string, precio: number, stock: number, vendidos: number, conChispas: boolean) {
        super(nombre, precio, stock, vendidos);
        this.conChispas = conChispas;
    }
}

export class Caramelo extends Dulce {
    sabor: string;

    constructor(nombre: string, precio: number, stock: number, vendidos: number, sabor: string) {
        super(nombre, precio, stock, vendidos);
        this.sabor = sabor;
    }
}

