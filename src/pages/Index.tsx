
import { useState } from "react";
import { clothingItems, ClothingItem } from "@/data/clothingItems";
import ItemsSidebar from "@/components/ItemsSidebar";
import Mannequin from "@/components/Mannequin";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  
  const [selectedItems, setSelectedItems] = useState<{
    top: ClothingItem | null;
    bottom: ClothingItem | null;
    shoe: ClothingItem | null;
    hat: ClothingItem | null;
  }>({
    top: null,
    bottom: null,
    shoe: null,
    hat: null
  });

  const handleSelectItem = (item: ClothingItem) => {
    setSelectedItems(prev => ({
      ...prev,
      [item.category]: item
    }));
    
    toast({
      title: "Item selected",
      description: `${item.name} has been added to the mannequin.`,
      duration: 1500
    });
  };

  const handleClearSelection = () => {
    setSelectedItems({
      top: null,
      bottom: null,
      shoe: null,
      hat: null
    });

    toast({
      title: "Selection Cleared",
      description: "All clothing items have been removed from the mannequin.",
      duration: 1500
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Virtual Fitting Room</h1>
        <Button 
          variant="destructive" 
          size="sm" 
          onClick={handleClearSelection}
          disabled={!selectedItems.top && !selectedItems.bottom && !selectedItems.shoe && !selectedItems.hat}
        >
          <X className="mr-2" /> Clear All
        </Button>
      </header>
      
      <main className="flex flex-1 overflow-hidden">
        {/* Items sidebar */}
        <div className="w-full md:w-80 lg:w-96 overflow-hidden">
          <ItemsSidebar 
            items={clothingItems} 
            selected={selectedItems} 
            onSelectItem={handleSelectItem} 
          />
        </div>
        
        {/* Mannequin display */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <Mannequin selectedItems={selectedItems} />
        </div>
      </main>
    </div>
  );
};

export default Index;

