"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dulces_1 = require("./Dulces");
var Dulces_2 = require("./Dulces");
var Dulces_3 = require("./Dulces");
var Maquina_1 = require("./Maquina");
var maquina = new Maquina_1.MaquinaExpendedora();
maquina.agregarProducto(new Dulces_1.Chocolate("Chocolate", 2.5, 5, 0, "Oscuro"));
maquina.agregarProducto(new Dulces_2.Galleta("Galleta Oreo", 1.75, 10, 0, true));
maquina.agregarProducto(new Dulces_3.Caramelo("Caramelo Chocolate", 0.5, 20, 0, "Fresa"));
maquina.mostrarProductos();
// Casos de uso de la máquina
// Múltiples compras
console.log("\n--- Compras ---");
maquina.comprarProducto(1, 3);
maquina.comprarProducto(2, 1.5);
maquina.comprarProducto(3, 0.5);
maquina.comprarProducto(3, 1);
// Compra con índice inválido
console.log("\n--- Índice inválido ---");
maquina.comprarProducto(10, 2);
// Falta de stock
console.log("\n--- Agotamiento de stock ---");
for (var i = 0; i < 6; i++) {
    maquina.comprarProducto(1, 5);
}
// Mostrar ventas
console.log("\n--- Reporte de Ventas ---");
maquina.mostrarVentas();
