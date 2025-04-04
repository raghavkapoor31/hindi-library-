import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Book, books } from "@/data/books";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Calendar, Clock, User } from "lucide-react";
import Footer from "@/components/Footer";

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const foundBook = books.find(b => b.id === id);
    if (foundBook) {
      setBook(foundBook);
    } else {
      setNotFound(true);
    }
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, [id]);

  if (notFound) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F9F7F5] dark:bg-hindi-bg-dark">
        <div className="flex-grow library-pattern flex items-center justify-center">
          <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
            <h1 className="text-2xl font-bold mb-4 font-martel">पुस्तक नहीं मिली</h1>
            <p className="mb-6">The book you're looking for could not be found.</p>
            <Link to="/">
              <Button 
                variant="outline" 
                className="border-hindi-maroon text-hindi-maroon hover:bg-hindi-maroon hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                वापस जाएँ (Go Back)
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F7F5]">
        <div className="text-center">
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F5] dark:bg-hindi-bg-dark">
      <div className="bg-hindi-maroon dark:bg-hindi-maroon-dark text-white py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-hindi-maroon/20 dark:hover:bg-hindi-maroon-dark/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              वापस जाएँ (Back)
            </Button>
          </Link>
          <h1 className="text-xl font-bold font-martel ml-4">हिंदी कथा पुस्तकालय</h1>
        </div>
      </div>

      <main className="flex-grow library-pattern dark:bg-hindi-bg-dark">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white dark:bg-hindi-card-dark rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 p-6 bg-hindi-cream/50 dark:bg-hindi-cream-dark/10 flex items-center justify-center">
                <div className="relative max-w-xs">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full max-w-[250px] object-cover shadow-lg mx-auto"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/250x350/BC9F77/FFFFFF?text=" + encodeURIComponent(book.title);
                    }}
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 p-6 md:p-8 dark:text-hindi-text-dark">
                <h1 className="text-3xl font-bold mb-2 font-martel">{book.titleInHindi || book.title}</h1>
                <h2 className="text-xl mb-4">{book.title}</h2>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {book.genre.map((genre, index) => (
                    <Badge key={index} variant="outline" className="bg-hindi-cream text-hindi-maroon dark:bg-hindi-cream-dark dark:text-hindi-gold-dark">
                      {genre}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-2 text-hindi-maroon dark:text-hindi-gold-dark" />
                    <div>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">लेखक (Author)</p>
                      <p className="font-medium">{book.author}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-hindi-maroon dark:text-hindi-gold-dark" />
                    <div>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">प्रकाशन वर्ष (Year)</p>
                      <p className="font-medium">{book.year}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-hindi-maroon dark:text-hindi-gold-dark" />
                    <div>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">पृष्ठ (Pages)</p>
                      <p className="font-medium">{book.pages}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-2 font-martel">विवरण (Description)</h3>
                  <p className="text-gray-700 dark:text-gray-300">{book.description}</p>
                </div>
                
                {book.excerpt && (
                  <div className="mb-8 p-4 bg-hindi-cream/30 dark:bg-hindi-cream-dark/10 border-l-4 border-hindi-maroon dark:border-hindi-maroon-dark rounded">
                    <h3 className="text-lg font-semibold mb-2 font-martel">अंश (Excerpt)</h3>
                    <p className="text-gray-700 dark:text-gray-300 italic">{book.excerpt}</p>
                  </div>
                )}
                
                <div className="mt-8">
                  <Button className="bg-hindi-maroon hover:bg-hindi-maroon/90 dark:bg-hindi-maroon-dark dark:hover:bg-hindi-maroon-dark/90 text-white">
                    <BookOpen className="mr-2 h-5 w-5" />
                    अभी पढ़ें (Read Now)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDetail;
