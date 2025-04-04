import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hindi-maroon dark:bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-martel">Hindi Story Library</h3>
            <p className="text-sm text-white/90 dark:text-white/80">
              A virtual library showcasing the best of Hindi literature, making classic and contemporary 
              works accessible to readers around the world.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-martel">Contact Us</h3>
            <p className="text-sm text-white/90 dark:text-white/80">
              We're always looking to expand our collection with more books and authors.
              Have suggestions or feedback? Reach out to us!
            </p>
            <p className="text-sm mt-2 text-white/90 dark:text-white/80">
              Email: contact@hindikathapustakalaya.org
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-martel">About Us</h3>
            <p className="text-sm text-white/90 dark:text-white/80">
              Our mission is to preserve and promote Hindi literature and make it accessible to everyone.
              Join us in celebrating the rich literary heritage of Hindi language.
            </p>
          </div>
        </div>
        
        <div className="border-t border-hindi-gold/30 mt-8 pt-4 text-center text-sm">
          <p className="text-white/90 dark:text-white/80">
            For Hindi literature lovers
          </p>
          <p className="mt-1 text-white/90 dark:text-white/80">© {new Date().getFullYear()} Hindi Story Library - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
