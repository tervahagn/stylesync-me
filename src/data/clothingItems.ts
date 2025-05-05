
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
    name: "Cap Black",
    brand: "Apex Headwear",
    category: "hat",
    image: "/lovable-uploads/1dd14a2a-67d9-43e3-85ce-199ef29640fd.png",
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
    image: "/lovable-uploads/d926920c-7db6-4501-a802-1c93a9c2cf2f.png",
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
    image: "/lovable-uploads/b439dbc8-9367-48d7-b739-4e4a1233370c.png",
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
    image: "/lovable-uploads/a645e090-8c8d-43b1-a08b-fb3d56b57af0.png",
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
    image: "/lovable-uploads/b12ce4bc-d683-43b6-a9dd-0dda8c110bbb.png",
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
    image: "/lovable-uploads/0f84a624-dfd1-4b2f-8f7c-338a581ed83d.png",
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
    image: "/lovable-uploads/dca3088b-4b00-4306-9394-b64df73406fb.png",
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
    image: "/lovable-uploads/f5039af1-fcb7-4d52-ba2c-b76dc0a35eb2.png",
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
    image: "/lovable-uploads/3a09a0d7-8bb9-46dc-abf7-c006282d942c.png",
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
    image: "/lovable-uploads/a29f0926-9a57-4919-bc52-acfe8950ad41.png",
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
    image: "/lovable-uploads/c400de8c-631d-487b-9615-793713b492e9.png",
    color: "beige",
    price: 55,
    colors: ["beige", "grey", "black"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 12,
    name: "T-shirt White",
    brand: "Meridian Apparel",
    category: "top",
    image: "/lovable-uploads/5fb4fb91-e869-4fff-bc22-22794d376007.png",
    color: "white - graphic",
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
    image: "/lovable-uploads/1e7acee3-7482-429e-8c82-8cdddf500942.png",
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
    image: "/lovable-uploads/e42be662-21f3-470d-a9cf-3122c885a886.png",
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
    image: "/lovable-uploads/f1616e49-9129-4b13-86f4-c84bfc657ceb.png",
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
    image: "/lovable-uploads/21efdf84-0219-4d77-8b82-a2fcbe539dcb.png",
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
    image: "/lovable-uploads/f26fa8f5-8c8f-4458-9207-a2691530dd45.png",
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
    image: "/lovable-uploads/b2456925-4656-4a8b-949e-eae9e9058d07.png",
    color: "coffee",
    price: 95,
    colors: ["coffee", "black", "tan"],
    sizes: ["7", "8", "9", "10", "11"]
  },
  {
    id: 19,
    name: "Flipflops Green",
    brand: "Trekker Footwear",
    category: "shoe",
    image: "/lovable-uploads/c5997073-1a4a-411f-a969-8508d7e27a65.png",
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
    image: "/lovable-uploads/17da800f-05f8-45eb-9750-c33f6d9c8ed6.png",
    color: "black",
    price: 75,
    colors: ["black", "white", "grey"],
    sizes: ["7", "8", "9", "10", "11"]
  }
];
