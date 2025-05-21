"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaquinaExpendedora = void 0;
var MaquinaExpendedora = /** @class */ (function () {
    function MaquinaExpendedora() {
        this.productos = [];
        this.ventasTotales = 0;
    }
    MaquinaExpendedora.prototype.agregarProducto = function (producto) {
        this.productos.push(producto);
    };
    MaquinaExpendedora.prototype.mostrarProductos = function () {
        console.log("\nProductos disponibles:");
        this.productos.forEach(function (p, indice) {
            return console.log("".concat(indice + 1, ". ").concat(p.nombre, " - Precio: $").concat(p.precio, " - Stock: ").concat(p.stock));
        });
    };
    MaquinaExpendedora.prototype.comprarProducto = function (indice, dinero) {
        var producto = this.productos[indice - 1];
        var resultado = this.validarCompra(producto, dinero);
        console.log(resultado.mensaje);
        if (resultado.exito && producto) {
            producto.vender();
            this.ventasTotales += producto.precio;
        }
    };
    MaquinaExpendedora.prototype.mostrarVentas = function () {
        console.log("\nVentas totales: $".concat(this.ventasTotales.toFixed(2)));
        this.productos.forEach(function (prod) {
            console.log("".concat(prod.nombre, ": Vendidos: ").concat(prod.vendidos));
        });
    };
    MaquinaExpendedora.prototype.validarCompra = function (producto, dinero) {
        if (!producto)
            return { exito: false, mensaje: "Producto inválido." };
        if (producto.stock <= 0)
            return { exito: false, mensaje: "Lo sentimos, no hay stock disponible." };
        if (dinero < producto.precio)
            return { exito: false, mensaje: "Fondos insuficientes. Inserte más dinero." };
        var cambio = dinero - producto.precio;
        return { exito: true, mensaje: "Gracias por su compra. Su cambio es: $".concat(cambio.toFixed(2)) };
    };
    return MaquinaExpendedora;
}());
exports.MaquinaExpendedora = MaquinaExpendedora;
