
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClothingItem } from "@/data/clothingItems";
import ClothingCard from "./ClothingCard";
import { Shirt, UserRoundCog, Footprints, ShoppingBag, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ItemsSidebarProps {
  items: ClothingItem[];
  selected: {
    top: ClothingItem | null;
    bottom: ClothingItem | null;
    shoe: ClothingItem | null;
    hat: ClothingItem | null;
  };
  onSelectItem: (item: ClothingItem) => void;
  favorites: number[];
  onToggleFavorite: (item: ClothingItem) => void;
  totalPrice: number;
  onClearAll: () => void;
}

const ItemsSidebar = ({
  items,
  selected,
  onSelectItem,
  favorites,
  onToggleFavorite,
  totalPrice,
  onClearAll
}: ItemsSidebarProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("top");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  // Filter items by category
  const getItemsByCategory = (category: string) => {
    let filteredItems = items.filter((item) => item.category === category);
    
    // Apply search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredItems = filteredItems.filter(
        item => item.name.toLowerCase().includes(term) || 
               item.brand.toLowerCase().includes(term)
      );
    }
    
    // Apply size filter
    if (selectedSize) {
      filteredItems = filteredItems.filter(item => item.sizes.includes(selectedSize));
    }
    
    // Apply color filter
    if (selectedColor) {
      filteredItems = filteredItems.filter(item => item.colors.includes(selectedColor));
    }
    
    return filteredItems;
  };

  const isSelected = (item: ClothingItem) => {
    if (selected[item.category as keyof typeof selected]?.id === item.id) {
      return true;
    }
    return false;
  };
  
  const isFavorite = (item: ClothingItem) => {
    return favorites.includes(item.id);
  };

  // Get all available sizes
  const allSizes = Array.from(
    new Set(items.flatMap(item => item.sizes))
  );
  
  // Get all available colors
  const allColors = Array.from(
    new Set(items.flatMap(item => item.colors))
  );

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="p-4 pb-2">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <Input 
            className="pl-10 pr-4 h-10" 
            placeholder="Search for items and brand" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 mb-2">
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Sizes</SelectItem>
              {allSizes.map(size => (
                <SelectItem key={size} value={size}>{size}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedColor} onValueChange={setSelectedColor}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Color" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Colors</SelectItem>
              {allColors.map(color => (
                <SelectItem key={color} value={color}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Tabs defaultValue="top" className="flex-1 flex flex-col" onValueChange={setActiveCategory}>
        <div className="border-b">
          <TabsList className="w-full justify-start h-auto p-0 bg-transparent">
            <TabsTrigger value="top" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2">
              <Shirt className="mr-2 h-4 w-4" />
              Tops
            </TabsTrigger>
            <TabsTrigger value="bottom" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Bottoms
            </TabsTrigger>
            <TabsTrigger value="shoe" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2">
              <Footprints className="mr-2 h-4 w-4" />
              Shoes
            </TabsTrigger>
            <TabsTrigger value="hat" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2">
              <UserRoundCog className="mr-2 h-4 w-4" />
              Hats
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="flex-1 overflow-y-auto">
          {["top", "bottom", "shoe", "hat"].map((category) => (
            <TabsContent key={category} value={category} className="h-full m-0 p-4">
              <div className="grid grid-cols-2 gap-4 pb-6">
                {getItemsByCategory(category).map((item) => (
                  <ClothingCard
                    key={item.id}
                    item={item}
                    selected={isSelected(item)}
                    onSelect={onSelectItem}
                    onToggleFavorite={onToggleFavorite}
                    isFavorite={isFavorite(item)}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </div>
        
        {/* Cart summary */}
        <div className="border-t p-4 bg-gray-600 text-white flex justify-between items-center">
          <div>
            <div className="text-md font-semibold">Total price: £{totalPrice.toFixed(2)}</div>
            <button 
              className="text-sm text-white/80 underline"
              onClick={onClearAll}
            >
              Clear All
            </button>
          </div>
          
          <button 
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded"
            onClick={() => {
              if (totalPrice > 0) {
                alert("Items sent to cart!");
              }
            }}
            disabled={totalPrice === 0}
          >
            Send to Cart
          </button>
        </div>
      </Tabs>
    </div>
  );
};

export default ItemsSidebar;
