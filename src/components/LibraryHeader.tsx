import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { books } from "@/data/books";

interface LibraryHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const LibraryHeader = ({ searchTerm, setSearchTerm }: LibraryHeaderProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const navigate = useNavigate();

  const getRandomBook = () => {
    const randomBook = books[Math.floor(Math.random() * books.length)];
    navigate(`/book/${randomBook.id}`);
  };

  return (
    <header className="library-header min-h-screen flex items-center justify-center py-16 px-4 md:px-8 text-center relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={(e) => console.error("Video failed to load:", e)}
          className={cn(
            "absolute min-w-full min-h-full object-cover transition-opacity duration-500",
            isVideoLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay with reduced opacity */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-martel text-white">
          हिंदी कथा पुस्तकालय
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8 font-poppins text-white">
          Hindi Literature Virtual Library
        </h2>
        <p className="mb-8 max-w-2xl mx-auto font-poppins text-lg text-white">
          Explore a curated collection of classic and contemporary Hindi literature. 
          Discover stories, novels, plays and poetry from renowned Hindi authors.
        </p>
        
        <div className="relative w-full max-w-2xl mx-auto mb-6">
          <Input
            type="text"
            placeholder="Search by title, author, or genre..."
            className="pl-10 bg-white/90 text-black h-12 font-poppins dark:bg-gray-800/90 dark:text-white rounded-2xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
        </div>

        {/* Random Book Button */}
        <Button
          onClick={getRandomBook}
          className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 px-8 py-6 rounded-full font-poppins text-lg flex items-center gap-2"
        >
          <BookOpen className="h-5 w-5" />
          Discover a Random Book
        </Button>
      </div>
    </header>
  );
};

export default LibraryHeader;
