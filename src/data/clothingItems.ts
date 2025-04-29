
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
  // Hats (Category 1)
  {
    id: 1,
    name: "Cap",
    brand: "Apex Headwear",
    category: "hat",
    image: "/lovable-uploads/d51ca222-78b6-4cc0-83e6-76ed01cbc9f1.png",
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
    image: "/lovable-uploads/7b7a8c51-c9f0-403b-a70b-23dbdb2d5d6b.png",
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
    image: "/lovable-uploads/2efcd59b-207f-4d16-a39f-6d552ada60df.png",
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
    image: "/lovable-uploads/2836a103-ea24-42bc-8dff-69a501377bd3.png",
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
    image: "/lovable-uploads/2af903b0-7d86-4954-b7ad-11cef89966ce.png",
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
    image: "/lovable-uploads/f90cc528-c60c-4e0e-b103-90772a313a86.png",
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
    image: "/lovable-uploads/da767949-b16d-447c-8198-57e492c48153.png",
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
    image: "/lovable-uploads/3d06946b-659b-4cfd-a9ad-ec9d999c05cd.png",
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
    image: "/lovable-uploads/08e30bb5-91fe-4fa1-b9c9-a8bab87cb939.png",
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
    image: "/lovable-uploads/0fc56108-127c-4b53-82ac-fd5a555e7b87.png",
    color: "green",
    price: 70,
    colors: ["green", "black", "blue"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 11,
    name: "Sweater",
    brand: "Blue Harbor",
    category: "top",
    image: "/lovable-uploads/016d4ec8-3504-4abc-8adc-669a41683906.png",
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
    image: "/lovable-uploads/772f6b73-5ca6-4991-ab4d-340a86574141.png",
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
    image: "/lovable-uploads/5f26fc30-e48c-4024-8498-f342c25075e6.png",
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
    image: "/lovable-uploads/3112dd24-15e4-4462-a0c0-76fc54e79c21.png",
    color: "blue",
    price: 50,
    colors: ["blue", "black", "grey"],
    sizes: ["30", "32", "34", "36"]
  },
  {
    id: 15,
    name: "Leggings",
    brand: "Meridian Apparel",
    category: "bottom",
    image: "/lovable-uploads/a3fa2566-aef6-42d2-abd4-a94d656f2b2e.png",
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
    image: "/lovable-uploads/7a6fe5ae-0205-4da5-b829-94e2ee3c6197.png",
    color: "blue",
    price: 25,
    colors: ["blue", "black", "grey"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 17,
    name: "Sweatpants",
    brand: "Streetwise",
    category: "bottom",
    image: "/lovable-uploads/f8da9d03-f6ca-4a0c-9ef7-51b33baf867f.png",
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
    image: "/lovable-uploads/b8c57124-2aba-4a24-9f5f-cf6dad7092cd.png",
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
    image: "/lovable-uploads/9aea5888-a684-4e47-a070-6c5ed7cce20b.png",
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
    image: "/lovable-uploads/e449b3fd-0818-4733-b563-116a5448c598.png",
    color: "black",
    price: 75,
    colors: ["black", "white", "grey"],
    sizes: ["7", "8", "9", "10", "11"]
  }
];
