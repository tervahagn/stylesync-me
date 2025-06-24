
import { ClothingItem } from "@/data/clothingItems";
import ItemDetail from "./ItemDetail";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

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
  
  const isMobile = useIsMobile();
  
  const showDetails = (item: ClothingItem, category: string) => {
    setDetailsItem({ item, category });
  };
  
  const closeDetails = () => {
    setDetailsItem({ item: null, category: '' });
  };

  return (
    <div className="flex flex-col items-center h-full relative pt-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Virtual Fitting Room</h2>
        <p className="text-gray-500">Try on different items to see how they look</p>
      </div>
      
      {/* Mannequin container */}
      <div className="relative h-[900px] w-[510px]">
        {/* Mannequin base image */}
        <div className="absolute inset-0 z-0 opacity-80">
          <img 
            src="/lovable-uploads/a1be0029-6396-4c85-9f5d-8cc7392d685d.png" 
            alt="Mannequin"
            className="w-full h-full object-contain" 
            aria-label="Mannequin silhouette"
          />
        </div>

        {/* Interactive clothing zones */}
        
        {/* Hat zone */}
        <div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 z-[400] 
                    w-[150px] h-[120px] cursor-pointer 
                    border-2 border-dotted border-gray-300
                    hover:border-gray-400 transition-colors duration-300
                    rounded-md flex items-center justify-center"
          onClick={() => selectedItems.hat && showDetails(selectedItems.hat, 'hat')}
          aria-label="Head zone for hats"
        >
          {selectedItems.hat ? (
            <div className="w-full h-full rounded-md overflow-hidden animate-item-change">
              <img 
                src={selectedItems.hat.image} 
                alt={selectedItems.hat.name}
                className="w-full h-full object-contain" 
              />
            </div>
          ) : (
            <div className="bg-gray-200 px-2 py-1 rounded text-sm text-gray-600">
              Hat
            </div>
          )}
        </div>
        
        {/* Top zone */}
        <div 
          className="absolute top-[120px] left-1/2 transform -translate-x-1/2 z-[300] 
                    w-[350px] h-[312px] cursor-pointer 
                    border-2 border-dotted border-gray-300
                    hover:border-gray-400 transition-colors duration-300 
                    rounded-md flex items-center justify-center"
          onClick={() => selectedItems.top && showDetails(selectedItems.top, 'top')}
          aria-label="Top zone for shirts"
        >
          {selectedItems.top ? (
            <div className="w-full h-full rounded-md overflow-hidden animate-item-change">
              <img 
                src={selectedItems.top.image} 
                alt={selectedItems.top.name}
                className="w-full h-full object-contain" 
              />
            </div>
          ) : (
            <div className="bg-gray-200 px-2 py-1 rounded text-sm text-gray-600">
              Top
            </div>
          )}
        </div>
        
        {/* Bottom zone */}
        <div 
          className="absolute top-[370px] left-1/2 transform -translate-x-1/2 z-[200]
                    w-[350px] h-[438px] cursor-pointer 
                    border-2 border-dotted border-gray-300
                    hover:border-gray-400 transition-colors duration-300
                    rounded-md flex items-center justify-center"
          onClick={() => selectedItems.bottom && showDetails(selectedItems.bottom, 'bottom')}
          aria-label="Bottom zone for pants"
        >
          {selectedItems.bottom ? (
            <div className="w-full h-full rounded-md overflow-hidden animate-item-change">
              <img 
                src={selectedItems.bottom.image} 
                alt={selectedItems.bottom.name}
                className="w-full h-full object-contain" 
              />
            </div>
          ) : (
            <div className="bg-gray-200 px-2 py-1 rounded text-sm text-gray-600">
              Bottom
            </div>
          )}
        </div>
        
        {/* Shoes zone - positioned to touch the bottom of the Bottom zone */}
        <div 
          className="absolute top-[808px] left-1/2 transform -translate-x-1/2 z-[100] 
                    w-[150px] h-[150px] cursor-pointer 
                    border-2 border-dotted border-gray-300
                    hover:border-gray-400 transition-colors duration-300
                    rounded-md flex items-center justify-center"
          onClick={() => selectedItems.shoe && showDetails(selectedItems.shoe, 'shoe')}
          aria-label="Shoe zone for footwear"
        >
          {selectedItems.shoe ? (
            <div className="w-full h-full rounded-md overflow-hidden animate-item-change">
              <img 
                src={selectedItems.shoe.image} 
                alt={selectedItems.shoe.name}
                className="w-full h-full object-contain" 
              />
            </div>
          ) : (
            <div className="bg-gray-200 px-2 py-1 rounded text-sm text-gray-600">
              Shoes
            </div>
          )}
        </div>
      </div>
      
      {/* Item Details Panel */}
      {detailsItem.item && (
        <div className={`${isMobile ? 'absolute bottom-4 left-4 right-4' : 'absolute top-[170px] right-4 w-[250px]'} z-[900]`}>
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
