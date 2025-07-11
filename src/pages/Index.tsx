
import { useState } from "react";
import { clothingItems, ClothingItem } from "@/data/clothingItems";
import ItemsSidebar from "@/components/ItemsSidebar";
import Mannequin from "@/components/Mannequin";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { Home, MessageCircle, List } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

const Index = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  // State for selected items on mannequin
  const [selectedItems, setSelectedItems] = useState<{
    top: ClothingItem | null;
    bottom: ClothingItem | null;
    shoe: ClothingItem | null;
    hat: ClothingItem | null;
  }>({
    top: null,
    bottom: null,
    shoe: null,
    hat: null
  });

  // State for active sidebar tab
  const [activeCategory, setActiveCategory] = useState<string>("top");
  
  // State for favorites
  const [favorites, setFavorites] = useState<number[]>([]);
  
  // State for selected sizes
  const [selectedSizes, setSelectedSizes] = useState<{
    top: string;
    bottom: string;
    shoe: string;
    hat: string;
  }>({
    top: "M",
    bottom: "32",
    shoe: "9",
    hat: "One Size"
  });
  
  // State for selected colors
  const [selectedColors, setSelectedColors] = useState<{
    top: string;
    bottom: string;
    shoe: string;
    hat: string;
  }>({
    top: "blue",
    bottom: "blue",
    shoe: "black",
    hat: "black"
  });

  const [chatMessages, setChatMessages] = useState([
    {
      sender: "assistant",
      text: "There will be an AI-powered fashion assistant that instantly creates complete outfits based on visitors' natural language requests."
    }
  ]);
  const [userInput, setUserInput] = useState("");

  function handleChatSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!userInput.trim()) return;
    setChatMessages((msgs) => [
      ...msgs,
      { sender: "user", text: userInput }
    ]);
    setUserInput("");
    setTimeout(() => {
      setChatMessages((msgs) => [
        ...msgs,
        { sender: "assistant", text: "An assistant is in development and not ready yet. Stay tuned for updates!" }
      ]);
    }, 500);
  }

  const handleSelectItem = (item: ClothingItem) => {
    // Update selected item
    setSelectedItems(prev => ({
      ...prev,
      [item.category]: item
    }));
    
    // Set initial size and color
    setSelectedSizes(prev => ({
      ...prev,
      [item.category]: item.sizes[0]
    }));
    
    setSelectedColors(prev => ({
      ...prev,
      [item.category]: item.color
    }));
    
    toast({
      title: "Item selected",
      description: `${item.name} has been added to the mannequin.`,
      duration: 1500
    });
  };

  const handleClearSelection = () => {
    setSelectedItems({
      top: null,
      bottom: null,
      shoe: null,
      hat: null
    });

    toast({
      title: "Selection Cleared",
      description: "All clothing items have been removed from the mannequin.",
      duration: 1500
    });
  };
  
  const handleToggleFavorite = (item: ClothingItem) => {
    if (favorites.includes(item.id)) {
      setFavorites(favorites.filter(id => id !== item.id));
      toast({
        title: "Removed from favorites",
        description: `${item.name} has been removed from your favorites.`,
        duration: 1500
      });
    } else {
      setFavorites([...favorites, item.id]);
      toast({
        title: "Added to favorites",
        description: `${item.name} has been added to your favorites.`,
        duration: 1500
      });
    }
  };
  
  const handleSizeChange = (category: string, size: string) => {
    setSelectedSizes(prev => ({
      ...prev,
      [category]: size
    }));
  };
  
  const handleColorChange = (category: string, color: string) => {
    setSelectedColors(prev => ({
      ...prev,
      [category]: color
    }));
  };
  
  // Calculate total price
  const calculateTotalPrice = () => {
    let total = 0;
    if (selectedItems.top) total += selectedItems.top.price;
    if (selectedItems.bottom) total += selectedItems.bottom.price;
    if (selectedItems.shoe) total += selectedItems.shoe.price;
    if (selectedItems.hat) total += selectedItems.hat.price;
    return total;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Floating Home Button */}
      <a
        href="https://stylesync.me"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-4 z-[2000] bg-white shadow-lg rounded-full w-14 h-14 flex items-center justify-center border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
        aria-label="Home"
      >
        <Home className="w-7 h-7 text-gray-500" />
      </a>

      {/* Floating Chatbot Button */}
      <Dialog>
        <DialogTrigger asChild>
          <button
            className="fixed top-1/2 right-4 z-[3000] bg-white shadow-lg rounded-full w-14 h-14 flex items-center justify-center border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200"
            style={{ transform: 'translateY(-50%)', boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
            aria-label="Chatbot"
          >
            <MessageCircle className="w-7 h-7 text-gray-500" />
          </button>
        </DialogTrigger>
        <DialogContent className="z-[3000] max-w-md flex flex-col items-end bg-gray-50">
          <div className="text-lg font-semibold mb-4 self-center">AI Fashion Assistant</div>
          <div className="w-full flex flex-col gap-2 flex-1 max-h-80 overflow-y-auto pr-2">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.sender === "user"
                    ? "self-end max-w-[80%] bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3 shadow-sm"
                    : "self-start max-w-[80%] bg-blue-100 text-gray-800 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm"
                }
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form className="w-full mt-4 flex gap-2" onSubmit={handleChatSubmit}>
            <input
              type="text"
              placeholder="Type your request..."
              className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white shadow-sm"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              autoFocus
            />
            <button type="submit" className="bg-blue-500 text-white rounded-full px-4 py-2 font-semibold shadow-sm disabled:opacity-60 disabled:cursor-not-allowed" disabled={!userInput.trim()}>
              Send
            </button>
          </form>
        </DialogContent>
      </Dialog>
      {/* Floating Backlog Button */}
      <Dialog>
        <DialogTrigger asChild>
          <button
            className="fixed bottom-4 right-4 z-[3000] bg-white shadow-lg rounded-full w-14 h-14 flex items-center justify-center border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200"
            aria-label="Backlog"
            style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
          >
            <List className="w-7 h-7 text-gray-500" />
          </button>
        </DialogTrigger>
        <DialogContent className="z-[3000] max-w-2xl">
          <div className="text-lg font-semibold mb-4">Product Backlog</div>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border-b text-left">Backlog Name</th>
                  <th className="px-4 py-2 border-b text-left">Planned Work</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="px-4 py-2 border-b align-top font-bold">Enhance AR Realism</td><td className="px-4 py-2 border-b">Improve rendering fidelity and fit accuracy of the virtual mannequin</td></tr>
                <tr><td className="px-4 py-2 border-b align-top font-bold">Expand AI Outfit Dataset</td><td className="px-4 py-2 border-b">Broaden brand/style catalog and add contextual inputs for recommendations</td></tr>
                <tr><td className="px-4 py-2 border-b align-top font-bold">Prototype StyleSync API (B2B)</td><td className="px-4 py-2 border-b">Develop a white-label API/SDK for retailer integration</td></tr>
                <tr><td className="px-4 py-2 border-b align-top font-bold">CMS Platform Integrations</td><td className="px-4 py-2 border-b">Build connectors for Shopify, Magento, BigCommerce, WooCommerce, etc.</td></tr>
                <tr><td className="px-4 py-2 border-b align-top font-bold">Professional Stylist Features & Brand Portal</td><td className="px-4 py-2 border-b">Create advanced styling tools and a portal for brands and agencies</td></tr>
                <tr><td className="px-4 py-2 border-b align-top font-bold">Localization & Regional Styling</td><td className="px-4 py-2 border-b">Adapt UI, styling rules, and local catalogs for key markets</td></tr>
                <tr><td className="px-4 py-2 border-b align-top font-bold">Customizable App Configuration</td><td className="px-4 py-2 border-b">Enable merchants to configure widget placement and styling settings</td></tr>
                <tr><td className="px-4 py-2 border-b align-top font-bold">Social & Gamification Modules</td><td className="px-4 py-2 border-b">Introduce badges, challenges, community feeds, and peer-voting</td></tr>
                <tr><td className="px-4 py-2 border-b align-top font-bold">In-Store Fulfillment & Reservations</td><td className="px-4 py-2 border-b">Implement “Send to Store” reservation flow for physical outlets</td></tr>
              </tbody>
            </table>
          </div>
        </DialogContent>
      </Dialog>
      <main className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Items sidebar - 40% on desktop, full width on mobile */}
        <div className="w-full md:w-2/5 border-r overflow-hidden">
          <ItemsSidebar 
            items={clothingItems} 
            selected={selectedItems} 
            onSelectItem={handleSelectItem} 
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            totalPrice={calculateTotalPrice()}
            onClearAll={handleClearSelection}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
        
        {/* Mannequin display - 60% on desktop */}
        <div className={`${isMobile ? 'w-full' : 'flex-1 flex justify-center'} overflow-y-auto bg-gray-50`}>
          <Mannequin 
            selectedItems={selectedItems} 
            selectedSizes={selectedSizes}
            selectedColors={selectedColors}
            onSizeChange={handleSizeChange}
            onColorChange={handleColorChange}
            setActiveCategory={setActiveCategory}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
