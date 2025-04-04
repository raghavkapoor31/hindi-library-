import connectDB from '../lib/db.js';
import Category from '../models/Category.js';
import Story, { type Difficulty } from '../models/Story.js';

const genres = [
  {
    name: 'Story',
    description: 'Short stories and tales that capture imagination',
    slug: 'story',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Novel',
    description: 'Longer works of fiction with complex narratives',
    slug: 'novel',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Play',
    description: 'Dramatic works written for theatrical performance',
    slug: 'play',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Poetry',
    description: 'Artistic expression through verse and rhythm',
    slug: 'poetry',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Autobiography',
    description: 'Personal life stories and memoirs',
    slug: 'autobiography',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Historical',
    description: 'Works based on historical events and figures',
    slug: 'historical',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Inspirational',
    description: 'Uplifting stories that motivate and inspire',
    slug: 'inspirational',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Literary',
    description: 'Works of artistic and cultural significance',
    slug: 'literary',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Social',
    description: 'Stories that explore social issues and relationships',
    slug: 'social',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const books = [
  {
    id: "1",
    title: "Godaan",
    titleInHindi: "गोदान",
    author: "Munshi Premchand",
    genre: ["उपन्यास (Novel)", "समाजिक (Social)"],
    year: 1936,
    cover: "/images/godaan.jpg",
    description: "Considered one of the greatest Hindi novels, Godaan presents the socio-economic challenges faced by Indian farmers. The story revolves around Hori, a poor farmer, and his dream of owning a cow.",
    excerpt: "होरी चुपचाप बाहर ख‌ड़ा इन बातों को सुन रहा था| जब पंडित दातादीन डांटकर चले गये, तो होरी ने अन्दर आकर झ‌ुनिया से कहा - तूने अपनी करनी का फल पा लिया| अब तुझे कौन पूछेगा?",
    pages: 432,
    language: "Hindi",
    readAvailable: true
  },
  {
    id: "2",
    title: "Nirmala",
    titleInHindi: "निर्मला",
    author: "Munshi Premchand",
    genre: ["उपन्यास (Novel)", "समाजिक (Social)"],
    year: 1928,
    cover: "/images/nirmala.jpg",
    description: "Nirmala is a powerful novel that addresses the issue of dowry and its consequences on women's lives. It tells the story of a young woman married to an older man and the subsequent hardships she faces.",
    pages: 204,
    language: "Hindi",
    readAvailable: true
  },
  {
    id: "3",
    title: "Gunahon Ka Devta",
    titleInHindi: "गुनाहों का देवता",
    author: "Dharamvir Bharati",
    genre: ["उपन्यास (Novel)", "साहित्यिक (Literary)"],
    year: 1949,
    cover: "/images/gunahon-ka-devta.jpg",
    description: "A complex love triangle that explores human emotions, relationships, and societal constraints. The novel revolves around the characters of Chander, Sudha, and Pammi.",
    pages: 288,
    language: "Hindi",
    readAvailable: true
  },
  {
    id: "4",
    title: "Chandrakanta",
    titleInHindi: "चंद्रकांता",
    author: "Devaki Nandan Khatri",
    genre: ["उपन्यास (Novel)", "ऐतिहासिक (Historical)"],
    year: 1888,
    cover: "/images/chandrakanta.jpg",
    description: "One of the first Hindi fantasy and romance novels, Chandrakanta is a tale of love and adventure. It narrates the story of Princess Chandrakanta and Prince Virendra Singh.",
    pages: 525,
    language: "Hindi",
    readAvailable: false
  },
  {
    id: "5",
    title: "Andha Yug",
    titleInHindi: "अंधा युग",
    author: "Dharamvir Bharati",
    genre: ["नाटक (Play)", "ऐतिहासिक (Historical)"],
    year: 1953,
    cover: "/images/andha-yug.jpg",
    description: "A verse play set in the last day of the Mahabharata war. It explores the devastation and moral collapse following the war, questioning the notion of victory.",
    pages: 128,
    language: "Hindi",
    readAvailable: true
  },
  {
    id: "6",
    title: "Madhushala",
    titleInHindi: "मधुशाला",
    author: "Harivansh Rai Bachchan",
    genre: ["कविता (Poetry)", "साहित्यिक (Literary)"],
    year: 1935,
    cover: "/images/madhushala.jpg",
    description: "A collection of 135 quatrains that uses the metaphor of a tavern (madhushala) to philosophize about life, offering profound reflections on existence and human emotions.",
    pages: 92,
    language: "Hindi",
    readAvailable: true
  },
  {
    id: "7",
    title: "Raag Darbari",
    titleInHindi: "राग दरबारी",
    author: "Shrilal Shukla",
    genre: ["उपन्यास (Novel)", "व्यंग्य (Satire)"],
    year: 1968,
    cover: "/images/raag-darbari.jpg",
    description: "A satirical novel that portrays rural India and exposes the corruption and politics of the village through the eyes of Ranganath, who comes to live with his uncle in the village.",
    pages: 352,
    language: "Hindi",
    readAvailable: false
  },
  {
    id: "8",
    title: "Aadhe Adhure",
    titleInHindi: "आधे अधूरे",
    author: "Mohan Rakesh",
    genre: ["नाटक (Play)", "समाजिक (Social)"],
    year: 1969,
    cover: "/images/aadhe-adhure.jpg",
    description: "A play that delves into the complexities of modern urban relationships, focusing on a middle-class family and their struggles with identity and fulfillment.",
    pages: 104,
    language: "Hindi",
    readAvailable: true
  },
  {
    id: "9",
    title: "Kitne Pakistan",
    titleInHindi: "कितने पाकिस्तान",
    author: "Kamleshwar",
    genre: ["उपन्यास (Novel)", "ऐतिहासिक (Historical)"],
    year: 2000,
    cover: "/images/kitne-pakistan.jpg",
    description: "A novel that reflects on the partition of India and Pakistan, questioning the arbitrary drawing of boundaries and the subsequent human suffering.",
    pages: 269,
    language: "Hindi",
    readAvailable: false
  },
  {
    id: "10",
    title: "Tamas",
    titleInHindi: "तमस",
    author: "Bhisham Sahni",
    genre: ["उपन्यास (Novel)", "ऐतिहासिक (Historical)"],
    year: 1974,
    cover: "/images/tamas.jpg",
    description: "A novel set amidst the communal riots during the partition of India. It provides a poignant account of violence, human suffering, and the horrors of religious extremism.",
    pages: 341,
    language: "Hindi",
    readAvailable: true
  },
  {
    id: "11",
    title: "Kafan",
    titleInHindi: "कफ़न",
    author: "Munshi Premchand",
    genre: ["कहानी (Story)", "समाजिक (Social)"],
    year: 1936,
    cover: "/images/kafan.jpg",
    description: "A short story that portrays the extreme poverty and dehumanization of the lower classes. It tells the tale of a father and son who drink away the money collected for the funeral shroud (kafan) of their dead wife/mother.",
    excerpt: "गुली ने ज्यों ही बुढ़िया के चेहरे से कपड़ा हटाया, झिंगुरी सिंह के चेहरे पर एक अजीब-सी झिलमिलाहट आई, जैसे खून की मांग रही हो। उसके बाद वह एक अनमनी-सी हँसी हँसा, जिसमें आँसू भी थे और हँसी भी।",
    pages: 18,
    language: "Hindi",
    readAvailable: true
  },
  {
    id: "12",
    title: "Usne Kaha Tha",
    titleInHindi: "उसने कहा था",
    author: "Chandradhar Sharma Guleri",
    genre: ["कहानी (Story)", "प्रेरणादायक (Inspirational)"],
    year: 1915,
    cover: "/images/usne-kaha-tha.jpg",
    description: "Considered the first Hindi short story, it narrates the tale of a Sikh soldier who sacrifices his life to fulfill a promise made to a woman he once loved.",
    pages: 15,
    language: "Hindi",
    readAvailable: true
  }
];

async function seedDatabase() {
  try {
    await connectDB();

    // Clear existing data
    await Category.deleteMany({});
    await Story.deleteMany({});

    // Insert genres
    const savedGenres = await Category.insertMany(genres);

    // Map genre names to their IDs
    const genreMap = savedGenres.reduce((acc, genre) => {
      acc[genre.name] = genre._id;
      return acc;
    }, {} as Record<string, any>);

    // Add genre IDs to books
    const booksWithGenres = books.map(book => ({
      ...book,
      category: genreMap['Literary'], // Default genre
      createdAt: new Date(),
      updatedAt: new Date(),
      likes: 0,
      views: 0,
    }));

    // Insert books
    await Story.insertMany(booksWithGenres as any);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 