import { Book } from "@/data/books";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card className="book-card overflow-hidden h-full flex flex-col dark:bg-hindi-card-dark">
      <div className="book-cover bg-hindi-cream dark:bg-hindi-cream-dark">
        <img
          src={book.cover}
          alt={book.title}
          className="h-full w-full object-cover object-center"
          onError={(e) => {
            // Fallback image if the book cover fails to load
            (e.target as HTMLImageElement).src = "https://via.placeholder.com/250x350/BC9F77/FFFFFF?text=" + encodeURIComponent(book.title);
          }}
        />
      </div>
      <CardContent className="pt-4 flex-grow dark:text-hindi-text-dark">
        <h3 className="text-lg font-bold font-serif">{book.titleInHindi || book.title}</h3>
        <p className="text-sm text-muted-foreground mb-2 dark:text-gray-400">{book.author} • {book.year}</p>
        <div className="flex flex-wrap gap-1 mt-2 mb-3">
          {book.genre.slice(0, 2).map((genre, index) => (
            <Badge key={index} variant="outline" className="bg-hindi-cream text-hindi-maroon dark:bg-hindi-cream-dark dark:text-hindi-gold-dark">
              {genre}
            </Badge>
          ))}
        </div>
        <p className="text-sm line-clamp-3 dark:text-gray-300">{book.description}</p>
      </CardContent>
      <CardFooter className="border-t pt-3 dark:border-gray-700">
        <Link to={`/book/${book.id}`} className="w-full">
          <Button variant="outline" className="w-full border-hindi-maroon text-hindi-maroon hover:bg-hindi-maroon hover:text-white dark:border-hindi-maroon-dark dark:text-hindi-gold-dark dark:hover:bg-hindi-maroon-dark dark:hover:text-hindi-text-dark">
            विवरण देखें (View Details)
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
