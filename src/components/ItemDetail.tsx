
import { X } from "lucide-react";
import { ClothingItem } from "@/data/clothingItems";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

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
            <div className={`w-4 h-4 rounded-full bg-${selectedColor}-500 mr-2`}></div>
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
