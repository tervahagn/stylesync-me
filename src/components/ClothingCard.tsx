
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
        <div className="h-36 w-full rounded-md mb-2 overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-sm font-medium">{item.name}</div>
      </CardContent>
    </Card>
  );
};

export default ClothingCard;
