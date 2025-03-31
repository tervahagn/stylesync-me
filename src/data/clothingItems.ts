
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
    brand: "ONLY & SONS",
    category: "top",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1000",
    color: "blue",
    price: 22.00,
    colors: ["blue", "black", "white"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Sweater",
    brand: "ONLY & SONS",
    category: "top",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=1000",
    color: "black",
    price: 29.99,
    colors: ["black", "gray", "navy"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "Button-Up Shirt",
    brand: "ONLY & SONS",
    category: "top",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1000",
    color: "blue",
    price: 34.50,
    colors: ["blue", "white", "black"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  
  // Bottoms
  {
    id: 4,
    name: "Jeans",
    brand: "ONLY & SONS",
    category: "bottom",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=1000",
    color: "black",
    price: 45.00,
    colors: ["black", "blue", "gray"],
    sizes: ["28", "30", "32", "34", "36"]
  },
  {
    id: 5,
    name: "Chinos",
    brand: "ONLY & SONS",
    category: "bottom",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=1000",
    color: "beige",
    price: 39.99,
    colors: ["beige", "black", "navy"],
    sizes: ["28", "30", "32", "34", "36"]
  },
  {
    id: 6,
    name: "Dress Pants",
    brand: "ONLY & SONS",
    category: "bottom",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=1000",
    color: "blue",
    price: 52.00,
    colors: ["blue", "black", "gray"],
    sizes: ["28", "30", "32", "34", "36"]
  },
  
  // Shoes
  {
    id: 7,
    name: "Sneakers",
    brand: "ONLY & SONS",
    category: "shoe",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
    color: "white",
    price: 64.99,
    colors: ["white", "black", "blue"],
    sizes: ["7", "8", "9", "10", "11"]
  },
  {
    id: 8,
    name: "Boots",
    brand: "ONLY & SONS",
    category: "shoe",
    image: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&q=80&w=1000",
    color: "brown",
    price: 79.99,
    colors: ["brown", "black", "tan"],
    sizes: ["7", "8", "9", "10", "11"]
  },
  {
    id: 9,
    name: "Dress Shoes",
    brand: "ONLY & SONS",
    category: "shoe",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=1000",
    color: "black",
    price: 89.00,
    colors: ["black", "brown", "burgundy"],
    sizes: ["7", "8", "9", "10", "11"]
  },
  
  // Hats
  {
    id: 10,
    name: "Cap",
    brand: "ONLY & SONS",
    category: "hat",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=1000",
    color: "red",
    price: 19.99,
    colors: ["red", "black", "blue"],
    sizes: ["S/M", "L/XL"]
  },
  {
    id: 11,
    name: "Beanie",
    brand: "ONLY & SONS",
    category: "hat",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=1000",
    color: "gray",
    price: 15.99,
    colors: ["gray", "black", "navy"],
    sizes: ["One Size"]
  },
  {
    id: 12,
    name: "Sun Hat",
    brand: "ONLY & SONS",
    category: "hat",
    image: "https://images.unsplash.com/photo-1565789589804-2fd521faed3e?auto=format&fit=crop&q=80&w=1000",
    color: "beige",
    price: 22.99,
    colors: ["beige", "white", "black"],
    sizes: ["S/M", "L/XL"]
  }
];
