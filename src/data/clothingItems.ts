
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

// Helper function to format item name from filename
const formatNameFromFilename = (filename: string): string => {
  // Split by hyphen and take parts after the second hyphen
  const parts = filename.split('-');
  if (parts.length >= 3) {
    // Join all parts after the second hyphen and remove file extension
    return parts.slice(2).join(' ').trim().replace('.png', '');
  }
  return filename;
};

export const clothingItems: ClothingItem[] = [
  // Hats (Category 1)
  {
    id: 1,
    name: "Cap Black",
    brand: "Apex Headwear",
    category: "hat",
    image: "/lovable-uploads/cc436444-3bcb-4cba-bbc1-a5fc82184930.png",
    color: "black",
    price: 20,
    colors: ["black", "navy", "red"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 2,
    name: "Hat Brown",
    brand: "Apex Headwear",
    category: "hat",
    image: "/lovable-uploads/317cc230-8cce-4d6b-8b20-67d1fc97c603.png",
    color: "brown",
    price: 35,
    colors: ["brown", "black", "tan"],
    sizes: ["M", "L", "XL"]
  },
  
  // Tops (Category 2)
  {
    id: 3,
    name: "T-shirt Black",
    brand: "Meridian Apparel",
    category: "top",
    image: "/lovable-uploads/2095f7a3-83c9-46f2-82aa-42a136ab813a.png",
    color: "black",
    price: 25,
    colors: ["black", "white", "grey"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 4,
    name: "Blazer Black",
    brand: "Vanguard Collection",
    category: "top",
    image: "/lovable-uploads/d0d06ca4-1897-4fd9-9ab0-4390a9fa0574.png",
    color: "black",
    price: 120,
    colors: ["black", "navy", "grey"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 5,
    name: "Cardigan Grey",
    brand: "Meridian Apparel",
    category: "top",
    image: "/lovable-uploads/25aa1a6e-0f13-4252-85bb-9c6e9fcb14d4.png",
    color: "grey",
    price: 60,
    colors: ["grey", "black", "navy"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 6,
    name: "Denim Jacket Blue",
    brand: "Blue Harbor",
    category: "top",
    image: "/lovable-uploads/f80821c7-6ed2-4c4c-9ccf-a114df204b37.png",
    color: "blue",
    price: 80,
    colors: ["blue", "black", "light blue"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 7,
    name: "Hoodie Grey",
    brand: "Streetwise",
    category: "top",
    image: "/lovable-uploads/a9605835-f921-489d-b64b-8d7a767107f6.png",
    color: "grey",
    price: 50,
    colors: ["grey", "black", "navy"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 8,
    name: "Leather Jacket Brown",
    brand: "Vanguard Collection",
    category: "top",
    image: "/lovable-uploads/3aac0382-0c8d-4bcc-bb3d-48ff3f106e03.png",
    color: "brown",
    price: 150,
    colors: ["brown", "black", "burgundy"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 9,
    name: "Military Jacket Khaki",
    brand: "Streetwise",
    category: "top",
    image: "/lovable-uploads/dd83d960-31b3-4a2a-9479-3ea975cdba07.png",
    color: "khaki",
    price: 90,
    colors: ["khaki", "olive", "black"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 10,
    name: "Sport Jacket Green",
    brand: "Apex Headwear",
    category: "top",
    image: "/lovable-uploads/9a65e9e9-08a8-49a3-8287-578390dd80f1.png",
    color: "green",
    price: 70,
    colors: ["green", "black", "blue"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 11,
    name: "Sweater Beige",
    brand: "Blue Harbor",
    category: "top",
    image: "/lovable-uploads/876769eb-6678-4482-8368-c190b2389ddf.png",
    color: "beige",
    price: 55,
    colors: ["beige", "grey", "black"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 12,
    name: "T-shirt Summer Vibes",
    brand: "Meridian Apparel",
    category: "top",
    image: "/lovable-uploads/45665bc2-7a70-43dd-ad66-1e328f503224.png",
    color: "white",
    price: 30,
    colors: ["white", "black", "grey"],
    sizes: ["S", "M", "L", "XL"]
  },
  
  // Bottoms (Category 3)
  {
    id: 13,
    name: "Chinos Grey",
    brand: "Vanguard Collection",
    category: "bottom",
    image: "/lovable-uploads/b693ac33-b2c8-43bb-9c47-5225f0853e40.png",
    color: "grey",
    price: 45,
    colors: ["grey", "beige", "navy"],
    sizes: ["30", "32", "34", "36"]
  },
  {
    id: 14,
    name: "Jeans Blue",
    brand: "Blue Harbor",
    category: "bottom",
    image: "/lovable-uploads/8e4431dd-b484-40ea-8ffa-d1fd979b4db1.png",
    color: "blue",
    price: 50,
    colors: ["blue", "black", "grey"],
    sizes: ["30", "32", "34", "36"]
  },
  {
    id: 15,
    name: "Leggings Black",
    brand: "Meridian Apparel",
    category: "bottom",
    image: "/lovable-uploads/82f06f23-0368-4d3a-83f5-a799bb55b0f2.png",
    color: "black",
    price: 35,
    colors: ["black", "grey", "navy"],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 16,
    name: "Shorts Navy",
    brand: "Streetwise",
    category: "bottom",
    image: "/lovable-uploads/e3c31702-c152-4895-bdec-477070c4a97d.png",
    color: "navy",
    price: 25,
    colors: ["navy", "black", "grey"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 17,
    name: "Sweatpants Grey",
    brand: "Streetwise",
    category: "bottom",
    image: "/lovable-uploads/275cba51-0736-4924-bc71-9494df67cc20.png",
    color: "grey",
    price: 40,
    colors: ["grey", "black", "navy"],
    sizes: ["S", "M", "L", "XL"]
  },
  
  // Shoes (Category 4)
  {
    id: 18,
    name: "Boots Brown",
    brand: "Trekker Footwear",
    category: "shoe",
    image: "/lovable-uploads/8e59588a-1cf7-4489-8d53-cda3e9a73ddc.png",
    color: "brown",
    price: 95,
    colors: ["brown", "black", "tan"],
    sizes: ["7", "8", "9", "10", "11"]
  },
  {
    id: 19,
    name: "Flipflops Green",
    brand: "Trekker Footwear",
    category: "shoe",
    image: "/lovable-uploads/209bf1c3-0915-480a-aebb-f2f86c86107a.png",
    color: "green",
    price: 20,
    colors: ["green", "black", "blue"],
    sizes: ["7", "8", "9", "10"]
  },
  {
    id: 20,
    name: "Sneakers Black",
    brand: "Trekker Footwear",
    category: "shoe",
    image: "/lovable-uploads/7f09a31d-89fa-4163-8749-c733bff7f610.png",
    color: "black",
    price: 75,
    colors: ["black", "white", "grey"],
    sizes: ["7", "8", "9", "10", "11"]
  }
];
