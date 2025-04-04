import fs from 'fs';
import path from 'path';
import https from 'https';

const bookCovers = [
  {
    title: 'Godaan',
    url: 'https://api.dicebear.com/7.x/shapes/svg?seed=Godaan&backgroundColor=b71c1c&size=300'
  },
  {
    title: 'Nirmala',
    url: 'https://api.dicebear.com/7.x/shapes/svg?seed=Nirmala&backgroundColor=1b5e20&size=300'
  },
  {
    title: 'Gunahon Ka Devta',
    url: 'https://api.dicebear.com/7.x/shapes/svg?seed=GunahonKaDevta&backgroundColor=0d47a1&size=300'
  },
  {
    title: 'Chandrakanta',
    url: 'https://api.dicebear.com/7.x/shapes/svg?seed=Chandrakanta&backgroundColor=4a148c&size=300'
  },
  {
    title: 'Andha Yug',
    url: 'https://api.dicebear.com/7.x/shapes/svg?seed=AndhaYug&backgroundColor=263238&size=300'
  },
  {
    title: 'Madhushala',
    url: 'https://api.dicebear.com/7.x/shapes/svg?seed=Madhushala&backgroundColor=c62828&size=300'
  },
  {
    title: 'Raag Darbari',
    url: 'https://api.dicebear.com/7.x/shapes/svg?seed=RaagDarbari&backgroundColor=f57f17&size=300'
  },
  {
    title: 'Aadhe Adhure',
    url: 'https://api.dicebear.com/7.x/shapes/svg?seed=AadheAdhure&backgroundColor=00695c&size=300'
  },
  {
    title: 'Kitne Pakistan',
    url: 'https://api.dicebear.com/7.x/shapes/svg?seed=KitnePakistan&backgroundColor=d84315&size=300'
  },
  {
    title: 'Tamas',
    url: 'https://api.dicebear.com/7.x/shapes/svg?seed=Tamas&backgroundColor=6a1b9a&size=300'
  },
  {
    title: 'Kafan',
    url: 'https://api.dicebear.com/7.x/shapes/svg?seed=Kafan&backgroundColor=bf360c&size=300'
  },
  {
    title: 'Usne Kaha Tha',
    url: 'https://api.dicebear.com/7.x/shapes/svg?seed=UsneKahaTha&backgroundColor=00796b&size=300'
  }
];

const downloadImage = async (url: string, filepath: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request Failed With a Status Code: ${response.status}`);
    }
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filepath, Buffer.from(buffer));
    return filepath;
  } catch (error) {
    throw error;
  }
};

async function downloadBookCovers() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  for (const book of bookCovers) {
    const filename = book.title.toLowerCase().replace(/ /g, '-') + '.svg';
    const filepath = path.join(imagesDir, filename);
    
    try {
      await downloadImage(book.url, filepath);
      console.log(`Downloaded: ${filename}`);
    } catch (error) {
      console.error(`Error downloading ${filename}:`, error);
      // If download fails, create a fallback placeholder image
      const fallbackUrl = `https://placehold.co/300x400/f5f5f5/333333/png?text=${encodeURIComponent(book.title)}&font=playfair-display`;
      try {
        const fallbackFilepath = filepath.replace('.svg', '.jpg');
        await downloadImage(fallbackUrl, fallbackFilepath);
        console.log(`Created fallback image for: ${filename}`);
      } catch (fallbackError) {
        console.error(`Error creating fallback image for ${filename}:`, fallbackError);
      }
    }
  }
}

downloadBookCovers(); 