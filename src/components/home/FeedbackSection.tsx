
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const FeedbackSection = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, email, comment });
  };

  return (
    <>
      <div className="w-full bg-garden-accent/10 py-24 mb-6 flex flex-col items-center">
        <h2 className="text-6xl font-bold text-garden-accent">
          Your Feedback, Our Priority
        </h2>
      </div>

      <div id="feedback" className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <Card className="p-6 bg-garden-dark/50 backdrop-blur">
            <h1 className="text-3xl font-bold mb-6 text-white">
              Share Your Feedback
            </h1>

            <form onSubmit={handleFeedbackSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Username
                </label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-garden-dark/50 border-garden-accent/20 text-white"
                  placeholder="Enter your username"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-garden-dark/50 border-garden-accent/20 text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Comment
                </label>
                <Textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="bg-garden-dark/50 border-garden-accent/20 text-white h-32"
                  placeholder="Share your thoughts..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-garden-accent hover:bg-garden-accent/90 text-garden-dark"
              >
                Submit Feedback
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};
