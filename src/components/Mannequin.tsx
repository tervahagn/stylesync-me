
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
      
      <div className="relative h-[500px] w-[300px]">
        {/* Hat position */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30 w-24 h-20"
             onClick={() => selectedItems.hat && showDetails(selectedItems.hat, 'hat')}>
          {selectedItems.hat ? (
            <div className="w-full h-full rounded-md overflow-hidden cursor-pointer">
              <img 
                src={selectedItems.hat.image} 
                alt={selectedItems.hat.name}
                className="w-full h-full object-cover" 
              />
            </div>
          ) : (
            <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center">
              <span className="text-xs text-gray-400">Hat</span>
            </div>
          )}
        </div>
        
        {/* Head */}
        <div className="absolute top-[45px] left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gray-300 rounded-full z-20"></div>
        
        {/* Torso - where the top goes */}
        <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-48 h-[180px] flex items-center justify-center z-10"
             onClick={() => selectedItems.top && showDetails(selectedItems.top, 'top')}>
          {selectedItems.top ? (
            <div className="w-full h-full rounded-md overflow-hidden cursor-pointer">
              <img 
                src={selectedItems.top.image} 
                alt={selectedItems.top.name}
                className="w-full h-full object-cover" 
              />
            </div>
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-sm text-gray-600">Select a top</span>
            </div>
          )}
        </div>
        
        {/* Legs - where the bottom goes */}
        <div className="absolute top-[300px] left-1/2 transform -translate-x-1/2 w-40 h-[140px] flex items-center justify-center"
             onClick={() => selectedItems.bottom && showDetails(selectedItems.bottom, 'bottom')}>
          {selectedItems.bottom ? (
            <div className="w-full h-full rounded-md overflow-hidden cursor-pointer">
              <img 
                src={selectedItems.bottom.image} 
                alt={selectedItems.bottom.name}
                className="w-full h-full object-cover" 
              />
            </div>
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-sm text-gray-600">Select bottoms</span>
            </div>
          )}
        </div>
        
        {/* Feet - where the shoes go */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-12 flex justify-center space-x-2"
             onClick={() => selectedItems.shoe && showDetails(selectedItems.shoe, 'shoe')}>
          {selectedItems.shoe ? (
            <div className="w-full rounded-md overflow-hidden cursor-pointer">
              <img 
                src={selectedItems.shoe.image} 
                alt={selectedItems.shoe.name}
                className="w-full h-full object-cover" 
              />
            </div>
          ) : (
            <div className="w-full border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center">
              <span className="text-xs text-gray-400">Shoes</span>
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
