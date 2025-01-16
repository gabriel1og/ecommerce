import { StaticImageData } from "next/image";

export interface storeUtils {
  id: number;
  name: string;
  description: string;
  oldPrice: number;
  status: "Disponível" | "Indisponível";
  price: number;
  image: StaticImageData;
}

export interface productUtils extends storeUtils {
  quantity: number;

  button: "Comprar";
}

export interface serviceUtils extends storeUtils {
  button: "Agendar";
}
