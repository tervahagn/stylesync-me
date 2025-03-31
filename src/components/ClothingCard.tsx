
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ClothingItem } from "@/data/clothingItems";
import { useState } from "react";

interface ClothingCardProps {
  item: ClothingItem;
  selected: boolean;
  onSelect: (item: ClothingItem) => void;
  onToggleFavorite?: (item: ClothingItem) => void;
  isFavorite?: boolean;
}

const ClothingCard = ({ 
  item, 
  selected, 
  onSelect, 
  onToggleFavorite,
  isFavorite = false
}: ClothingCardProps) => {
  return (
    <Card 
      className={`overflow-hidden transition-all hover:shadow-md cursor-pointer relative ${
        selected ? "ring-2 ring-green-500" : ""
      }`}
      onClick={() => onSelect(item)}
    >
      <CardContent className="p-0">
        <div className="h-36 w-full overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        {onToggleFavorite && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 rounded-full bg-gray-100 hover:bg-gray-200"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(item);
            }}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
        )}
        <div className="p-3">
          <div className="text-xs text-gray-500">{item.brand}</div>
          <div className="text-sm font-medium truncate">{item.name} {item.color}</div>
          <div className="text-sm font-bold">£{item.price.toFixed(2)}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClothingCard;
