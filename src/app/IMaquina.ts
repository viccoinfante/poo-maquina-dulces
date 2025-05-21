import { Dulce } from "./Dulces";

export interface IMaquina {
  agregarProducto(producto: Dulce): void;
  mostrarProductos(): void;
  comprarProducto(indice: number, dinero: number): void;
  mostrarVentas(): void;
}