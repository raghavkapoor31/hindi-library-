import { useState, useEffect, useRef } from "react";
import { books } from "@/data/books";
import BookCard from "@/components/BookCard";
import LibraryHeader from "@/components/LibraryHeader";
import FilterBar from "@/components/FilterBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const resetFilters = () => {
    setSelectedGenres([]);
    setSelectedAuthors([]);
  };

  useEffect(() => {
    // Handle video loading and playback
    const video = videoRef.current;
    if (video) {
      video.load();
      const playVideo = () => {
        video.play().catch(error => {
          console.error("Video playback failed:", error);
        });
      };

      video.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true);
        playVideo();
      });

      // Try to play immediately in case the video is already loaded
      playVideo();

      return () => {
        video.removeEventListener("loadeddata", () => setIsVideoLoaded(true));
      };
    }
  }, []);

  useEffect(() => {
    let result = books;

    // Apply search term filter
    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      result = result.filter(
        book =>
          book.title.toLowerCase().includes(lowerCaseSearch) ||
          (book.titleInHindi && book.titleInHindi.includes(searchTerm)) ||
          book.author.toLowerCase().includes(lowerCaseSearch) ||
          book.genre.some(genre => genre.toLowerCase().includes(lowerCaseSearch))
      );
    }

    // Apply genre filter
    if (selectedGenres.length > 0) {
      result = result.filter(book =>
        book.genre.some(genre => selectedGenres.includes(genre))
      );
    }

    // Apply author filter
    if (selectedAuthors.length > 0) {
      result = result.filter(book => selectedAuthors.includes(book.author));
    }

    setFilteredBooks(result);
  }, [searchTerm, selectedGenres, selectedAuthors]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F5] dark:bg-hindi-bg-dark">
      {/* Video Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-20 dark:opacity-10' : 'opacity-0'
          }`}
          onError={(e) => console.error("Video error:", e)}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <LibraryHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <main className="flex-grow library-pattern dark:bg-hindi-bg-dark/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <FilterBar
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            selectedAuthors={selectedAuthors}
            setSelectedAuthors={setSelectedAuthors}
            resetFilters={resetFilters}
          />

          <div className="mt-12">
            {filteredBooks.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-2 font-martel">No results found</h2>
                <p className="text-muted-foreground">No books found matching your search criteria.</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFilters}
                  className="h-8"
                >
                  Clear all filters
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6 font-martel">
                  Books ({filteredBooks.length})
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredBooks.map(book => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
