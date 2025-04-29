
import { X } from "lucide-react";
import { ClothingItem } from "@/data/clothingItems";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { AspectRatio } from "./ui/aspect-ratio";

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
      grey: "bg-gray-500",
      brown: "bg-amber-800",
      navy: "bg-blue-900",
      beige: "bg-amber-100",
      khaki: "bg-amber-300",
      burgundy: "bg-red-800",
      coffee: "bg-amber-800",
      tan: "bg-amber-200",
      olive: "bg-olive-600"
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

      <div className="mb-4 bg-gray-50 rounded-md overflow-hidden">
        <AspectRatio ratio={1} className="w-full">
          <img 
            src={item.image} 
            alt={`${item.name} in ${item.color} by ${item.brand}`}
            className="w-full h-full object-contain p-2"
          />
        </AspectRatio>
      </div>
      
      <div className="space-y-4">
        <div className="text-sm font-medium">
          {item.brand}
        </div>
        <div className="text-lg font-bold">
          {item.name} - {item.color.charAt(0).toUpperCase() + item.color.slice(1)}
        </div>
        
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
