import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Check, ChevronDown, Filter } from "lucide-react";
import { genres, authors } from "@/data/books";

interface FilterBarProps {
  selectedGenres: string[];
  setSelectedGenres: (genres: string[]) => void;
  selectedAuthors: string[];
  setSelectedAuthors: (authors: string[]) => void;
  resetFilters: () => void;
}

const FilterBar = ({
  selectedGenres,
  setSelectedGenres,
  selectedAuthors,
  setSelectedAuthors,
  resetFilters
}: FilterBarProps) => {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isAuthorOpen, setIsAuthorOpen] = useState(false);

  const toggleGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const toggleAuthor = (author: string) => {
    if (selectedAuthors.includes(author)) {
      setSelectedAuthors(selectedAuthors.filter(a => a !== author));
    } else {
      setSelectedAuthors([...selectedAuthors, author]);
    }
  };

  const activeFiltersCount = selectedGenres.length + selectedAuthors.length;

  return (
    <div className="bg-white shadow-sm py-3 px-4 sticky top-0 z-10 border-b flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="flex items-center text-sm font-medium">
          <Filter className="h-4 w-4 mr-1" /> Filters
          {activeFiltersCount > 0 && (
            <span className="ml-2 bg-hindi-maroon text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
              {activeFiltersCount}
            </span>
          )}
        </span>

        <Popover open={isGenreOpen} onOpenChange={setIsGenreOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 border-hindi-earth text-hindi-earth">
              Genre
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-2 bg-white z-50">
            <div className="max-h-60 overflow-auto">
              {genres.map(genre => (
                <div
                  key={genre}
                  className="flex items-center px-2 py-1.5 hover:bg-muted rounded cursor-pointer"
                  onClick={() => toggleGenre(genre)}
                >
                  <div className="w-4 h-4 mr-2 flex items-center justify-center border rounded border-hindi-earth">
                    {selectedGenres.includes(genre) && (
                      <Check className="h-3.5 w-3.5 text-hindi-maroon" />
                    )}
                  </div>
                  <span className="text-sm">{genre}</span>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <Popover open={isAuthorOpen} onOpenChange={setIsAuthorOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 border-hindi-earth text-hindi-earth">
              Author
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-2 bg-white z-50">
            <div className="max-h-60 overflow-auto">
              {authors.map(author => (
                <div
                  key={author}
                  className="flex items-center px-2 py-1.5 hover:bg-muted rounded cursor-pointer"
                  onClick={() => toggleAuthor(author)}
                >
                  <div className="w-4 h-4 mr-2 flex items-center justify-center border rounded border-hindi-earth">
                    {selectedAuthors.includes(author) && (
                      <Check className="h-3.5 w-3.5 text-hindi-maroon" />
                    )}
                  </div>
                  <span className="text-sm">{author}</span>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {activeFiltersCount > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 text-hindi-maroon underline" 
            onClick={resetFilters}
          >
            Clear All
          </Button>
        )}
      </div>

      <div className="text-sm text-muted-foreground">
        {activeFiltersCount > 0
          ? `${activeFiltersCount} filters applied`
          : "Showing all books"}
      </div>
    </div>
  );
};

export default FilterBar;
