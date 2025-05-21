import { Dulce } from "./Dulces";
import { Chocolate } from "./Dulces";
import { Galleta } from "./Dulces";
import { Caramelo } from "./Dulces";
import { IMaquina } from './IMaquina';

export class MaquinaExpendedora implements IMaquina{
  private productos: Dulce[] = [];
  private ventasTotales: number = 0;

  agregarProducto(producto: Dulce): void {
    this.productos.push(producto);
  }

  mostrarProductos(): void {
    console.log("\nProductos disponibles:");
    this.productos.forEach((p, indice) =>
      console.log(`${indice + 1}. ${p.nombre} - Precio: $${p.precio} - Stock: ${p.stock}`)
    );
  }

  comprarProducto(indice: number, dinero: number): void {
    const producto = this.productos[indice - 1];
    const resultado = this.validarCompra(producto, dinero);

    console.log(resultado.mensaje);
    if (resultado.exito && producto) {
      producto.vender();
      this.ventasTotales += producto.precio;
    }
  }

  mostrarVentas(): void {
    console.log(`\nVentas totales: $${this.ventasTotales.toFixed(2)}`);
    this.productos.forEach((prod) => {
      console.log(`${prod.nombre}: Vendidos: ${prod.vendidos}`);
    });
  }

  private validarCompra(producto: Dulce | undefined, dinero: number): { exito: boolean; mensaje: string } {
    if (!producto) return { exito: false, mensaje: "Producto inválido." };
    if (producto.stock <= 0) return { exito: false, mensaje: "Lo sentimos, no hay stock disponible." };
    if (dinero < producto.precio) return { exito: false, mensaje: "Fondos insuficientes. Inserte más dinero." };

    const cambio = dinero - producto.precio;
    return { exito: true, mensaje: `Gracias por su compra. Su cambio es: $${cambio.toFixed(2)}` };
  }
}