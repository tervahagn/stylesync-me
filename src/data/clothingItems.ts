
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
    image: "/placeholder.svg",
    color: "bg-white"
  },
  {
    id: 2,
    name: "Black Sweater",
    category: "top",
    image: "/placeholder.svg",
    color: "bg-gray-800"
  },
  {
    id: 3,
    name: "Blue Button-Up",
    category: "top",
    image: "/placeholder.svg",
    color: "bg-blue-500"
  },
  
  // Bottoms
  {
    id: 4,
    name: "Black Jeans",
    category: "bottom",
    image: "/placeholder.svg",
    color: "bg-gray-900"
  },
  {
    id: 5,
    name: "Beige Chinos",
    category: "bottom",
    image: "/placeholder.svg",
    color: "bg-amber-200"
  },
  {
    id: 6,
    name: "Blue Denim",
    category: "bottom",
    image: "/placeholder.svg",
    color: "bg-blue-700"
  },
  
  // Shoes
  {
    id: 7,
    name: "White Sneakers",
    category: "shoe",
    image: "/placeholder.svg",
    color: "bg-white"
  },
  {
    id: 8,
    name: "Brown Boots",
    category: "shoe",
    image: "/placeholder.svg",
    color: "bg-amber-700"
  },
  {
    id: 9,
    name: "Black Dress Shoes",
    category: "shoe",
    image: "/placeholder.svg",
    color: "bg-gray-900"
  },
  
  // Hats
  {
    id: 10,
    name: "Baseball Cap",
    category: "hat",
    image: "/placeholder.svg",
    color: "bg-red-500"
  },
  {
    id: 11,
    name: "Beanie",
    category: "hat",
    image: "/placeholder.svg",
    color: "bg-gray-700"
  },
  {
    id: 12,
    name: "Sun Hat",
    category: "hat",
    image: "/placeholder.svg",
    color: "bg-yellow-200"
  }
];
