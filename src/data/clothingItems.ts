
export interface ClothingItem {
  id: number;
  name: string;
  category: 'top' | 'bottom' | 'shoe' | 'hat';
  image: string;
  color: string;
}

export const clothingItems: ClothingItem[] = [
  // Tops
  {
    id: 1,
    name: "White T-Shirt",
    category: "top",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1000",
    color: "bg-white"
  },
  {
    id: 2,
    name: "Black Sweater",
    category: "top",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=1000",
    color: "bg-gray-800"
  },
  {
    id: 3,
    name: "Blue Button-Up",
    category: "top",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1000",
    color: "bg-blue-500"
  },
  
  // Bottoms
  {
    id: 4,
    name: "Black Jeans",
    category: "bottom",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=1000",
    color: "bg-gray-900"
  },
  {
    id: 5,
    name: "Beige Chinos",
    category: "bottom",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=1000",
    color: "bg-amber-200"
  },
  {
    id: 6,
    name: "Blue Denim",
    category: "bottom",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=1000",
    color: "bg-blue-700"
  },
  
  // Shoes
  {
    id: 7,
    name: "White Sneakers",
    category: "shoe",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
    color: "bg-white"
  },
  {
    id: 8,
    name: "Brown Boots",
    category: "shoe",
    image: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&q=80&w=1000",
    color: "bg-amber-700"
  },
  {
    id: 9,
    name: "Black Dress Shoes",
    category: "shoe",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=1000",
    color: "bg-gray-900"
  },
  
  // Hats
  {
    id: 10,
    name: "Baseball Cap",
    category: "hat",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=1000",
    color: "bg-red-500"
  },
  {
    id: 11,
    name: "Beanie",
    category: "hat",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=1000",
    color: "bg-gray-700"
  },
  {
    id: 12,
    name: "Sun Hat",
    category: "hat",
    image: "https://images.unsplash.com/photo-1565789589804-2fd521faed3e?auto=format&fit=crop&q=80&w=1000",
    color: "bg-yellow-200"
  }
];
