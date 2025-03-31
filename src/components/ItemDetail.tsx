
import { X } from "lucide-react";
import { ClothingItem } from "@/data/clothingItems";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface ItemDetailProps {
  item: ClothingItem;
  onClose: () => void;
  selectedSize: string;
  selectedColor: string;
  onSizeChange: (size: string) => void;
  onColorChange: (color: string) => void;
}

const ItemDetail = ({ 
  item, 
  onClose, 
  selectedSize, 
  selectedColor, 
  onSizeChange, 
  onColorChange 
}: ItemDetailProps) => {
  // Function to get dynamic color class
  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      black: "bg-black",
      white: "bg-white",
      red: "bg-red-500",
      blue: "bg-blue-500",
      green: "bg-green-500",
      yellow: "bg-yellow-500",
      purple: "bg-purple-500",
      pink: "bg-pink-500",
      gray: "bg-gray-500",
      brown: "bg-amber-800"
    };
    
    return colorMap[color] || "bg-gray-300";
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <div className="font-bold text-xl">£{item.price.toFixed(2)}</div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          className="rounded-full"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="mb-4">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>Color</div>
          <div className="flex items-center">
            <div className={`w-4 h-4 rounded-full ${getColorClass(selectedColor)} mr-2`}></div>
            <Select value={selectedColor} onValueChange={onColorChange}>
              <SelectTrigger className="w-24">
                <SelectValue>{selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {item.colors.map((color) => (
                  <SelectItem key={color} value={color}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>Size</div>
          <Select value={selectedSize} onValueChange={onSizeChange}>
            <SelectTrigger className="w-24">
              <SelectValue>{selectedSize}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {item.sizes.map((size) => (
                <SelectItem key={size} value={size}>{size}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
