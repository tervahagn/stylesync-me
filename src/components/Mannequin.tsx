
import { ClothingItem } from "@/data/clothingItems";
import ItemDetail from "./ItemDetail";
import { useState } from "react";

interface MannequinProps {
  selectedItems: {
    top: ClothingItem | null;
    bottom: ClothingItem | null;
    shoe: ClothingItem | null;
    hat: ClothingItem | null;
  };
  selectedSizes: {
    top: string;
    bottom: string;
    shoe: string;
    hat: string;
  };
  selectedColors: {
    top: string;
    bottom: string;
    shoe: string;
    hat: string;
  };
  onSizeChange: (category: string, size: string) => void;
  onColorChange: (category: string, color: string) => void;
}

const Mannequin = ({ 
  selectedItems, 
  selectedSizes, 
  selectedColors,
  onSizeChange,
  onColorChange
}: MannequinProps) => {
  const [detailsItem, setDetailsItem] = useState<{
    item: ClothingItem | null,
    category: string
  }>({ item: null, category: '' });
  
  const showDetails = (item: ClothingItem, category: string) => {
    setDetailsItem({ item, category });
  };
  
  const closeDetails = () => {
    setDetailsItem({ item: null, category: '' });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Virtual Fitting Room</h2>
        <p className="text-gray-500">Try on different items to see how they look</p>
      </div>
      
      <div className="relative h-[600px] w-[340px]">
        {/* Mannequin base image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/mannequin.png" 
            alt="Mannequin"
            className="w-full h-full object-contain" 
          />
        </div>

        {/* Interactive clothing zones */}
        
        {/* Hat zone - top of mannequin */}
        <div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30 
                    w-[100px] h-[80px] cursor-pointer 
                    border-2 border-dashed border-transparent 
                    bg-white/30 hover:bg-green-100/50 hover:border-green-500 
                    transition-colors rounded-md"
          onClick={() => selectedItems.hat && showDetails(selectedItems.hat, 'hat')}
        >
          {selectedItems.hat && (
            <div className="w-full h-full rounded-md overflow-hidden animate-item-change">
              <img 
                src={selectedItems.hat.image} 
                alt={selectedItems.hat.name}
                className="w-full h-full object-contain" 
              />
            </div>
          )}
          {!selectedItems.hat && (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-sm text-gray-500 font-medium bg-white/80 px-2 py-1 rounded">Hat</span>
            </div>
          )}
        </div>
        
        {/* Top zone - torso area */}
        <div 
          className="absolute top-[80px] left-1/2 transform -translate-x-1/2 z-20 
                    w-[180px] h-[200px] cursor-pointer 
                    border-2 border-dashed border-transparent 
                    bg-white/30 hover:bg-green-100/50 hover:border-green-500 
                    transition-colors rounded-md"
          onClick={() => selectedItems.top && showDetails(selectedItems.top, 'top')}
        >
          {selectedItems.top && (
            <div className="w-full h-full rounded-md overflow-hidden animate-item-change">
              <img 
                src={selectedItems.top.image} 
                alt={selectedItems.top.name}
                className="w-full h-full object-contain" 
              />
            </div>
          )}
          {!selectedItems.top && (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-sm text-gray-500 font-medium bg-white/80 px-2 py-1 rounded">Top</span>
            </div>
          )}
        </div>
        
        {/* Bottom zone - waist to ankles */}
        <div 
          className="absolute top-[280px] left-1/2 transform -translate-x-1/2 
                    w-[180px] h-[220px] cursor-pointer 
                    border-2 border-dashed border-transparent 
                    bg-white/30 hover:bg-green-100/50 hover:border-green-500 
                    transition-colors rounded-md"
          onClick={() => selectedItems.bottom && showDetails(selectedItems.bottom, 'bottom')}
        >
          {selectedItems.bottom && (
            <div className="w-full h-full rounded-md overflow-hidden animate-item-change">
              <img 
                src={selectedItems.bottom.image} 
                alt={selectedItems.bottom.name}
                className="w-full h-full object-contain" 
              />
            </div>
          )}
          {!selectedItems.bottom && (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-sm text-gray-500 font-medium bg-white/80 px-2 py-1 rounded">Bottom</span>
            </div>
          )}
        </div>
        
        {/* Shoes zone - feet */}
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                    w-[180px] h-[80px] cursor-pointer 
                    border-2 border-dashed border-transparent 
                    bg-white/30 hover:bg-green-100/50 hover:border-green-500 
                    transition-colors rounded-md"
          onClick={() => selectedItems.shoe && showDetails(selectedItems.shoe, 'shoe')}
        >
          {selectedItems.shoe && (
            <div className="w-full h-full rounded-md overflow-hidden animate-item-change">
              <img 
                src={selectedItems.shoe.image} 
                alt={selectedItems.shoe.name}
                className="w-full h-full object-contain" 
              />
            </div>
          )}
          {!selectedItems.shoe && (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-sm text-gray-500 font-medium bg-white/80 px-2 py-1 rounded">Shoes</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Item Details Panel */}
      {detailsItem.item && (
        <div className="absolute top-[170px] right-4 w-[250px] z-40">
          <ItemDetail 
            item={detailsItem.item}
            onClose={closeDetails}
            selectedSize={selectedSizes[detailsItem.category as keyof typeof selectedSizes]}
            selectedColor={selectedColors[detailsItem.category as keyof typeof selectedColors]}
            onSizeChange={(size) => onSizeChange(detailsItem.category, size)}
            onColorChange={(color) => onColorChange(detailsItem.category, color)}
          />
        </div>
      )}
    </div>
  );
};

export default Mannequin;
