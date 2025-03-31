
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClothingItem } from "@/data/clothingItems";
import ClothingCard from "./ClothingCard";
import { shirt, hat, shoe } from "lucide-react";

interface ItemsSidebarProps {
  items: ClothingItem[];
  selected: {
    top: ClothingItem | null;
    bottom: ClothingItem | null;
    shoe: ClothingItem | null;
    hat: ClothingItem | null;
  };
  onSelectItem: (item: ClothingItem) => void;
}

const ItemsSidebar = ({ items, selected, onSelectItem }: ItemsSidebarProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("top");

  // Filter items by category
  const getItemsByCategory = (category: string) => {
    return items.filter((item) => item.category === category);
  };

  const isSelected = (item: ClothingItem) => {
    if (selected[item.category as keyof typeof selected]?.id === item.id) {
      return true;
    }
    return false;
  };

  return (
    <div className="w-full h-full flex flex-col overflow-hidden border-r">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Clothing Items</h2>
        <p className="text-sm text-gray-500">Select items to try on</p>
      </div>
      
      <Tabs defaultValue="top" className="flex-1 flex flex-col" onValueChange={setActiveCategory}>
        <div className="border-b">
          <TabsList className="w-full justify-start h-auto p-0 bg-transparent">
            <TabsTrigger value="top" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2">
              Tops
            </TabsTrigger>
            <TabsTrigger value="bottom" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2">
              Bottoms
            </TabsTrigger>
            <TabsTrigger value="shoe" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2">
              Shoes
            </TabsTrigger>
            <TabsTrigger value="hat" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2">
              Hats
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {["top", "bottom", "shoe", "hat"].map((category) => (
            <TabsContent key={category} value={category} className="h-full m-0">
              <div className="grid grid-cols-2 gap-4 pb-6">
                {getItemsByCategory(category).map((item) => (
                  <ClothingCard
                    key={item.id}
                    item={item}
                    selected={isSelected(item)}
                    onSelect={onSelectItem}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ItemsSidebar;
