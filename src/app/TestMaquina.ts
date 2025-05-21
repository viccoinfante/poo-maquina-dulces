import { Dulce } from "./Dulces";
import { Chocolate } from "./Dulces";
import { Galleta } from "./Dulces";
import { Caramelo } from "./Dulces";
import { MaquinaExpendedora } from "./Maquina";

const maquina = new MaquinaExpendedora();
maquina.agregarProducto(new Chocolate("Chocolate", 2.5, 5,0, "Oscuro"));
maquina.agregarProducto(new Galleta("Galleta Oreo", 1.75, 10,0, true));
maquina.agregarProducto(new Caramelo("Caramelo Chocolate", 0.5, 20,0, "Fresa"));

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
for (let i = 0; i < 6; i++) {
  maquina.comprarProducto(1, 5);
}

// Mostrar ventas
console.log("\n--- Reporte de Ventas ---");
maquina.mostrarVentas();
