"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caramelo = exports.Galleta = exports.Chocolate = exports.Dulce = void 0;
var Dulce = /** @class */ (function () {
    function Dulce(nombre, precio, stock, vendidos) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.vendidos = 0;
    }
    Dulce.prototype.vender = function () {
        if (this.stock > 0) {
            this.stock--;
            this.vendidos++;
            return true;
        }
        return false;
    };
    return Dulce;
}());
exports.Dulce = Dulce;
var Chocolate = /** @class */ (function (_super) {
    __extends(Chocolate, _super);
    function Chocolate(nombre, precio, stock, vendidos, tipo) {
        var _this = _super.call(this, nombre, precio, stock, vendidos) || this;
        _this.tipo = tipo;
        return _this;
    }
    return Chocolate;
}(Dulce));
exports.Chocolate = Chocolate;
var Galleta = /** @class */ (function (_super) {
    __extends(Galleta, _super);
    function Galleta(nombre, precio, stock, vendidos, conChispas) {
        var _this = _super.call(this, nombre, precio, stock, vendidos) || this;
        _this.conChispas = conChispas;
        return _this;
    }
    return Galleta;
}(Dulce));
exports.Galleta = Galleta;
var Caramelo = /** @class */ (function (_super) {
    __extends(Caramelo, _super);
    function Caramelo(nombre, precio, stock, vendidos, sabor) {
        var _this = _super.call(this, nombre, precio, stock, vendidos) || this;
        _this.sabor = sabor;
        return _this;
    }
    return Caramelo;
}(Dulce));
exports.Caramelo = Caramelo;
