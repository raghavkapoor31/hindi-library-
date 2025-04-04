import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

interface LibraryHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const LibraryHeader = ({ searchTerm, setSearchTerm }: LibraryHeaderProps) => {
  return (
    <header className="library-header min-h-screen flex items-center justify-center py-16 px-4 md:px-8 text-center relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover animate-slide-right-to-left"
          style={{
            right: '-100%',
            animation: 'slideRightToLeft 30s linear infinite'
          }}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
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
        
        <div className="relative max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Search by title, author, or genre..."
            className="pl-10 bg-white/90 text-black h-12 font-poppins dark:bg-gray-800/90 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default LibraryHeader;
