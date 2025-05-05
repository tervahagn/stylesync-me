
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

// Create an array of fictional brands
const brands = [
  "Meridian Apparel",
  "Vanguard Collection",
  "Blue Harbor",
  "Streetwise",
  "Apex Headwear",
  "Trekker Footwear"
];

export const clothingItems: ClothingItem[] = [
  // Hats (Category 1)
  {
    id: 1,
    name: "Cap",
    brand: "Apex Headwear",
    category: "hat",
    image: "/lovable-uploads/30cd1a4a-16c7-4380-83e0-f254159dc0e6.png",
    color: "black",
    price: 20,
    colors: ["black", "navy", "red"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 2,
    name: "Hat",
    brand: "Apex Headwear",
    category: "hat",
    image: "/lovable-uploads/edb1dc34-a51f-491e-acdd-d246aaec2eb7.png",
    color: "brown",
    price: 35,
    colors: ["brown", "black", "tan"],
    sizes: ["M", "L", "XL"]
  },
  
  // Tops (Category 2)
  {
    id: 3,
    name: "T-shirt",
    brand: "Meridian Apparel",
    category: "top",
    image: "/lovable-uploads/99504c5e-c113-4c1d-8995-f28ce1bcd376.png",
    color: "black",
    price: 25,
    colors: ["black", "white", "grey"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 4,
    name: "Blazer",
    brand: "Vanguard Collection",
    category: "top",
    image: "/lovable-uploads/748fb7d7-60ad-4b4d-a6f7-0e481829cec2.png",
    color: "black",
    price: 120,
    colors: ["black", "navy", "grey"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 5,
    name: "Cardigan",
    brand: "Meridian Apparel",
    category: "top",
    image: "/lovable-uploads/3635d906-e9c7-4209-a862-37bf72053384.png",
    color: "grey",
    price: 60,
    colors: ["grey", "black", "navy"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 6,
    name: "Denim Jacket",
    brand: "Blue Harbor",
    category: "top",
    image: "/lovable-uploads/8833f277-3316-4914-8d79-af1fbc834559.png",
    color: "blue",
    price: 80,
    colors: ["blue", "black", "light blue"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 7,
    name: "Hoodie",
    brand: "Streetwise",
    category: "top",
    image: "/lovable-uploads/6f73acaf-7af9-4a90-ba70-19f8127699cb.png",
    color: "grey",
    price: 50,
    colors: ["grey", "black", "navy"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 8,
    name: "Leather Jacket",
    brand: "Vanguard Collection",
    category: "top",
    image: "/lovable-uploads/1aeae97f-41c4-4306-953f-e18a2e3f7411.png",
    color: "burgundy",
    price: 150,
    colors: ["burgundy", "black", "brown"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 9,
    name: "Military Jacket",
    brand: "Streetwise",
    category: "top",
    image: "/lovable-uploads/d1685fee-3f8d-4b64-8dad-7ce4acd22466.png",
    color: "khaki",
    price: 90,
    colors: ["khaki", "olive", "black"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 10,
    name: "Sport Jacket",
    brand: "Apex Headwear",
    category: "top",
    image: "/lovable-uploads/99f62d47-70e7-4b90-b57d-ac82e633bc91.png",
    color: "green",
    price: 70,
    colors: ["green", "black", "blue"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 11,
    name: "Sweather",
    brand: "Blue Harbor",
    category: "top",
    image: "/lovable-uploads/19b4a4af-cadb-4e1a-b662-c2f5a66683f1.png",
    color: "beige",
    price: 55,
    colors: ["beige", "grey", "black"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 12,
    name: "T-shirt",
    brand: "Meridian Apparel",
    category: "top",
    image: "/lovable-uploads/e05a6a5f-34c2-4c5e-8df9-f68470aaa032.png",
    color: "white - graphic",
    price: 30,
    colors: ["white", "black", "grey"],
    sizes: ["S", "M", "L", "XL"]
  },
  
  // Bottoms (Category 3)
  {
    id: 13,
    name: "Chinos",
    brand: "Vanguard Collection",
    category: "bottom",
    image: "/lovable-uploads/b14bb879-476b-4fff-a75f-9891feb2707b.png",
    color: "grey",
    price: 45,
    colors: ["grey", "beige", "navy"],
    sizes: ["30", "32", "34", "36"]
  },
  {
    id: 14,
    name: "Jeans",
    brand: "Blue Harbor",
    category: "bottom",
    image: "/lovable-uploads/771b3a0e-1446-4131-84cc-cb8a3a0e3e15.png",
    color: "blue",
    price: 50,
    colors: ["blue", "black", "grey"],
    sizes: ["30", "32", "34", "36"]
  },
  {
    id: 15,
    name: "Leggins",
    brand: "Meridian Apparel",
    category: "bottom",
    image: "/lovable-uploads/05bf97b9-502e-4831-afb9-96709af9d2bb.png",
    color: "black",
    price: 35,
    colors: ["black", "grey", "navy"],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 16,
    name: "Shorts",
    brand: "Streetwise",
    category: "bottom",
    image: "/lovable-uploads/9b0ecac0-fe78-434d-9d7f-72fd35f9c68c.png",
    color: "navy",
    price: 25,
    colors: ["navy", "black", "grey"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 17,
    name: "Sweatpants",
    brand: "Streetwise",
    category: "bottom",
    image: "/lovable-uploads/593f9b19-23c5-4567-bb6e-fe8498a2078a.png",
    color: "grey",
    price: 40,
    colors: ["grey", "black", "navy"],
    sizes: ["S", "M", "L", "XL"]
  },
  
  // Shoes (Category 4)
  {
    id: 18,
    name: "Boots",
    brand: "Trekker Footwear",
    category: "shoe",
    image: "/lovable-uploads/26c4e1e0-23d6-4759-9504-2d6337aa2193.png",
    color: "coffee",
    price: 95,
    colors: ["coffee", "black", "tan"],
    sizes: ["7", "8", "9", "10", "11"]
  },
  {
    id: 19,
    name: "Flipflops",
    brand: "Trekker Footwear",
    category: "shoe",
    image: "/lovable-uploads/74b91e6d-f318-4bf3-a706-ad5622b487d0.png",
    color: "green",
    price: 20,
    colors: ["green", "black", "blue"],
    sizes: ["7", "8", "9", "10"]
  },
  {
    id: 20,
    name: "Sneakers",
    brand: "Trekker Footwear",
    category: "shoe",
    image: "/lovable-uploads/a16f2266-f1b3-4adc-a58e-b93a00fcda8a.png",
    color: "black",
    price: 75,
    colors: ["black", "white", "grey"],
    sizes: ["7", "8", "9", "10", "11"]
  }
];
