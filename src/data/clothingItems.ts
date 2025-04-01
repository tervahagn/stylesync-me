
export interface ClothingItem {
  id: number;
  name: string;
  category: 'top' | 'bottom' | 'shoe' | 'hat';
  image: string;
  color: string;
  brand: string;
  price: number;
  colors: string[];
  sizes: string[];
}

export const clothingItems: ClothingItem[] = [
  // Tops
  {
    id: 1,
    name: "T-Shirt",
    brand: "Jack & Jones",
    category: "top",
    image: "/lovable-uploads/ecf69992-c0a6-4078-b496-b935cc9345cf.png",
    color: "white",
    price: 19.99,
    colors: ["white", "black", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Varsity Jacket",
    brand: "Jack & Jones",
    category: "top",
    image: "/lovable-uploads/6f579f70-c4c5-4642-bad1-8bac528e2c11.png",
    color: "black",
    price: 79.99,
    colors: ["black", "navy", "burgundy"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "Hoodie",
    brand: "Jack & Jones",
    category: "top",
    image: "/lovable-uploads/8d024b60-63f9-4960-893d-40abce89db0f.png",
    color: "gray",
    price: 39.99,
    colors: ["gray", "black", "blue"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 4,
    name: "Sweatshirt",
    brand: "Jack & Jones",
    category: "top",
    image: "/lovable-uploads/fa3b293b-a9da-48e5-b51c-84813d6f1be1.png",
    color: "brown",
    price: 34.99,
    colors: ["brown", "black", "green"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 5,
    name: "Puffer Vest",
    brand: "Jack & Jones",
    category: "top",
    image: "/lovable-uploads/060a1e17-69fd-40bf-92b7-b5f5a7c11b42.png",
    color: "beige",
    price: 49.99,
    colors: ["beige", "black", "navy"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  
  // Bottoms
  {
    id: 6,
    name: "Wide Jeans",
    brand: "Jack & Jones",
    category: "bottom",
    image: "/lovable-uploads/175af81e-b30f-4422-8547-d90f7906e55a.png",
    color: "blue",
    price: 49.99,
    colors: ["blue", "black", "gray"],
    sizes: ["28", "30", "32", "34", "36"]
  },
  {
    id: 7,
    name: "Chino Shorts",
    brand: "Jack & Jones",
    category: "bottom",
    image: "/lovable-uploads/ce98ac9b-ded3-44c1-9d27-cbb21d217371.png",
    color: "red",
    price: 29.99,
    colors: ["red", "beige", "navy"],
    sizes: ["28", "30", "32", "34", "36"]
  },
  {
    id: 8,
    name: "Boxer Shorts",
    brand: "Jack & Jones",
    category: "bottom",
    image: "/lovable-uploads/a3dbf1e2-55c0-453d-8829-79962bcedf48.png",
    color: "black",
    price: 14.99,
    colors: ["black", "gray", "navy"],
    sizes: ["S", "M", "L", "XL"]
  },
  
  // Shoes
  {
    id: 9,
    name: "Boots",
    brand: "Jack & Jones",
    category: "shoe",
    image: "/lovable-uploads/fe940d74-d0b3-4199-a45a-1755742cd8b6.png",
    color: "brown",
    price: 79.99,
    colors: ["brown", "black", "tan"],
    sizes: ["7", "8", "9", "10", "11"]
  },
  {
    id: 10,
    name: "Leather Boots",
    brand: "Jack & Jones",
    category: "shoe",
    image: "/lovable-uploads/fd16a222-e8a3-4708-9cd8-b7b884feb27e.png",
    color: "brown",
    price: 89.99,
    colors: ["brown", "black", "burgundy"],
    sizes: ["7", "8", "9", "10", "11"]
  },
  
  // Hats
  {
    id: 11,
    name: "Beanie",
    brand: "Jack & Jones",
    category: "hat",
    image: "/lovable-uploads/4bcc9112-90d5-49e6-95f6-3789012fc97e.png",
    color: "navy",
    price: 19.99,
    colors: ["navy", "black", "gray"],
    sizes: ["One Size"]
  },
  {
    id: 12,
    name: "Cap",
    brand: "Jack & Jones",
    category: "hat",
    image: "/lovable-uploads/da426b30-60f0-4646-af8c-3fb0bf139110.png",
    color: "red",
    price: 22.99,
    colors: ["red", "black", "blue"],
    sizes: ["S/M", "L/XL"]
  }
];
