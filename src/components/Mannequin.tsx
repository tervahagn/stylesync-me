
import { ClothingItem } from "@/data/clothingItems";

interface MannequinProps {
  selectedItems: {
    top: ClothingItem | null;
    bottom: ClothingItem | null;
    shoe: ClothingItem | null;
    hat: ClothingItem | null;
  };
}

const Mannequin = ({ selectedItems }: MannequinProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Virtual Fitting Room</h2>
        <p className="text-gray-500">Try on different items to see how they look</p>
      </div>
      
      <div className="relative h-[500px] w-[300px]">
        {/* Hat position */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30 w-24 h-20">
          {selectedItems.hat ? (
            <div className="w-full h-full rounded-md animate-item-change overflow-hidden">
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
        <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-48 h-[180px] flex items-center justify-center z-10">
          {selectedItems.top ? (
            <div className="w-full h-full rounded-md animate-item-change overflow-hidden">
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
        <div className="absolute top-[300px] left-1/2 transform -translate-x-1/2 w-40 h-[140px] flex items-center justify-center">
          {selectedItems.bottom ? (
            <div className="w-full h-full rounded-md animate-item-change overflow-hidden">
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
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-12 flex justify-center space-x-2">
          {selectedItems.shoe ? (
            <div className="w-full rounded-md animate-item-change overflow-hidden">
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
    </div>
  );
};

export default Mannequin;
