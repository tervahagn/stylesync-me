
import { useState } from "react";
import { clothingItems, ClothingItem } from "@/data/clothingItems";
import ItemsSidebar from "@/components/ItemsSidebar";
import Mannequin from "@/components/Mannequin";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { Home } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  // State for selected items on mannequin
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
  
  // State for favorites
  const [favorites, setFavorites] = useState<number[]>([]);
  
  // State for selected sizes
  const [selectedSizes, setSelectedSizes] = useState<{
    top: string;
    bottom: string;
    shoe: string;
    hat: string;
  }>({
    top: "M",
    bottom: "32",
    shoe: "9",
    hat: "One Size"
  });
  
  // State for selected colors
  const [selectedColors, setSelectedColors] = useState<{
    top: string;
    bottom: string;
    shoe: string;
    hat: string;
  }>({
    top: "blue",
    bottom: "blue",
    shoe: "black",
    hat: "black"
  });

  const handleSelectItem = (item: ClothingItem) => {
    // Update selected item
    setSelectedItems(prev => ({
      ...prev,
      [item.category]: item
    }));
    
    // Set initial size and color
    setSelectedSizes(prev => ({
      ...prev,
      [item.category]: item.sizes[0]
    }));
    
    setSelectedColors(prev => ({
      ...prev,
      [item.category]: item.color
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
  
  const handleToggleFavorite = (item: ClothingItem) => {
    if (favorites.includes(item.id)) {
      setFavorites(favorites.filter(id => id !== item.id));
      toast({
        title: "Removed from favorites",
        description: `${item.name} has been removed from your favorites.`,
        duration: 1500
      });
    } else {
      setFavorites([...favorites, item.id]);
      toast({
        title: "Added to favorites",
        description: `${item.name} has been added to your favorites.`,
        duration: 1500
      });
    }
  };
  
  const handleSizeChange = (category: string, size: string) => {
    setSelectedSizes(prev => ({
      ...prev,
      [category]: size
    }));
  };
  
  const handleColorChange = (category: string, color: string) => {
    setSelectedColors(prev => ({
      ...prev,
      [category]: color
    }));
  };
  
  // Calculate total price
  const calculateTotalPrice = () => {
    let total = 0;
    if (selectedItems.top) total += selectedItems.top.price;
    if (selectedItems.bottom) total += selectedItems.bottom.price;
    if (selectedItems.shoe) total += selectedItems.shoe.price;
    if (selectedItems.hat) total += selectedItems.hat.price;
    return total;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Floating Home Button */}
      <a
        href="https://stylesync.me"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-4 z-[2000] bg-white shadow-lg rounded-full w-14 h-14 flex items-center justify-center border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
        aria-label="Home"
      >
        <Home className="w-7 h-7 text-gray-500" />
      </a>
      <main className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Items sidebar - 40% on desktop, full width on mobile */}
        <div className="w-full md:w-2/5 border-r overflow-hidden">
          <ItemsSidebar 
            items={clothingItems} 
            selected={selectedItems} 
            onSelectItem={handleSelectItem} 
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            totalPrice={calculateTotalPrice()}
            onClearAll={handleClearSelection}
          />
        </div>
        
        {/* Mannequin display - 60% on desktop */}
        <div className={`${isMobile ? 'w-full' : 'flex-1 flex justify-center'} overflow-y-auto bg-gray-50`}>
          <Mannequin 
            selectedItems={selectedItems} 
            selectedSizes={selectedSizes}
            selectedColors={selectedColors}
            onSizeChange={handleSizeChange}
            onColorChange={handleColorChange}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
