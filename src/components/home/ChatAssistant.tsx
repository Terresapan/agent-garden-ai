import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const ChatAssistant = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const navigate = useNavigate();

  const handleChatSubmit = () => {
    navigate("/agent/data-whisperer");
    setIsChatOpen(false);
  };

  const handleSendMessage = () => {
    if (query.trim()) {
      setShowResponse(true);
      // Keep the user query
      // setQuery("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => {
          setIsChatOpen(!isChatOpen);
          setShowResponse(false);
          setQuery("");
        }}
        className={`${
          isChatOpen ? "h-14 w-14" : "h-14 px-6"
        } rounded-full bg-garden-accent hover:bg-garden-accent/80 transition-colors flex items-center gap-2`}
      >
        {isChatOpen ? (
          <X className="h-6 w-6 text-garden-dark" />
        ) : (
          <>
            <Bot className="h-5 w-5 text-garden-dark" />
            <span className="text-garden-dark font-medium">Ask AI</span>
          </>
        )}
      </Button>

      {isChatOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-garden-dark border border-garden-accent/20 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-garden-accent/20">
            <h3 className="text-white font-semibold">AI Assistant</h3>
          </div>
          <div className="p-4 h-80 overflow-y-auto">
            <div className="space-y-4">
              <div className="text-white">
                Tell me the problem you want to solve, and let me pick an agent
                for you!
              </div>
              {showResponse && <p className="text-white mb-2">User: {query}</p>}
              {showResponse && (
                <div className="bg-garden-accent/10 p-3 rounded-lg">
                  <p className="text-white mb-2">
                    Our featured agent Data Whisperer will be a perfect fit.
                  </p>
                  <Button
                    onClick={handleChatSubmit}
                    className="w-full bg-garden-accent hover:bg-garden-accent/80 text-garden-dark"
                  >
                    Try Data Whisperer
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="p-4 border-t border-garden-accent/20">
            <div className="flex gap-2">
              <Textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type your question..."
                className="min-h-[60px] bg-garden-dark text-white border-garden-accent/20 focus:border-garden-accent"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-garden-accent hover:bg-garden-accent/80 text-garden-dark"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
