import { productUtils, serviceUtils } from "@/utils/storeUtils";
import racao from "@/images/ração.png";
import osso from "@/images/osso.png";
import banho from "@/images/banho.png";
import tosa from "@/images/tosa.png";

export const productData: productUtils[] = [
  {
    id: 1,
    name: "Ração Pedigree",
    description: "A melhor ração do mercado",
    oldPrice: 139.97,
    price: 89.99,
    quantity: 10,
    button: "Comprar",
    image: racao,
    status: "Indisponível",
  },
  {
    id: 2,
    name: "Osso de plástico",
    description: "Brinquedo para cães",
    oldPrice: 41.83,
    price: 13.99,
    quantity: 10,
    button: "Comprar",
    image: osso,
    status: "Disponível",
  },
];

export const serviceData: serviceUtils[] = [
  {
    id: 1,
    name: "Banho",
    description: "Banho completo no animal",
    oldPrice: 329.45,
    price: 129.99,
    button: "Agendar",
    image: banho,
    status: "Disponível",
  },
  {
    id: 2,
    name: "Tosa",
    description: "Corte completo dos pelos do animal",
    oldPrice: 219.15,
    price: 139.99,
    button: "Agendar",
    image: tosa,
    status: "Indisponível",
  },
];
