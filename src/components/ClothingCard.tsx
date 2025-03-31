
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ClothingItem } from "@/data/clothingItems";

interface ClothingCardProps {
  item: ClothingItem;
  selected: boolean;
  onSelect: (item: ClothingItem) => void;
}

const ClothingCard = ({ item, selected, onSelect }: ClothingCardProps) => {
  return (
    <Card 
      className={`overflow-hidden transition-all hover:shadow-md cursor-pointer ${
        selected ? "ring-2 ring-primary" : ""
      }`}
      onClick={() => onSelect(item)}
    >
      <CardContent className="p-3">
        <div className={`h-24 w-full ${item.color} rounded-md mb-2 flex items-center justify-center`}>
          {/* This is a placeholder for the actual image */}
          <span className="text-sm text-white text-opacity-80">{item.name}</span>
        </div>
        <div className="text-sm font-medium">{item.name}</div>
      </CardContent>
    </Card>
  );
};

export default ClothingCard;
