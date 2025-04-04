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
    <header className="library-header py-16 px-4 md:px-8 text-center relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-martel">
          हिंदी कथा पुस्तकालय
        </h1>
        <h2 className="text-xl md:text-2xl font-light mb-8 font-poppins">
          Hindi Literature Virtual Library
        </h2>
        <p className="mb-8 max-w-2xl mx-auto font-poppins">
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
