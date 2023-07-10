import { CgProfile } from "react-icons/cg";
import { FaAddressBook, FaUsers } from "react-icons/fa";
import { GiVerticalBanner,GiPriceTag } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { MdCategory, MdDashboardCustomize, MdEventNote } from "react-icons/md";

export const TABLE_ROWS = [
  {
    id: 1,
    img: "/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: 10,
    img: "/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: 9,
    img: "/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: 8,
    img: "/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: 7,
    img: "/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: 6,
    img: "/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: 2,
    img: "/img/logos/logo-amazon.svg",
    name: "Amazon",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: 3,
    img: "/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: 4,
    img: "/img/logos/logo-google.svg",
    name: "Google",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: 5,
    img: "/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

export const Menus = [
  { title: "Dashboard", to:'dashboard', icon: <MdDashboardCustomize /> },
  { title: "Catalog", to:'collection', icon: <ImBooks /> },
  { title: "Orders", to:'reserved', icon: <FaAddressBook /> },
  { title: "Users ", to:'users', icon: <FaUsers /> },
  { title: "Plans", to:'plans', icon: <GiPriceTag /> },
  { title: "Events", to:'events', icon: <MdEventNote /> },
  { title: "Category", to:'category', icon: <MdCategory /> },
  { title: "Banner ", to:'banner', icon: <GiVerticalBanner /> },
  { title: "Profile", to:'profile', icon: <CgProfile /> },
];

export const TABLPLANROWS = [
  { id: 1, name: "Spotify", amount: "$2,500", duration: "06/2026" },

  {
    id: 2,
    name: "Amazon",
    amount: "$5,000",
    duration: "06/2026",
  },
  {
    id: 3,
    name: "Pinterest",
    amount: "$3,400",
    duration: "06/2026",
  },
  {
    id: 4,
    name: "Google",
    amount: "$1,000",
    duration: "06/2026",
  },
];

export const Books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780061120084",
    publisher: "Harper Perennial Modern Classics",
    publicationDate: "2006-05-23",
    genre: "Fiction",
    description: "A story of racial injustice and the loss of innocence in the Deep South.",
    coverImage: "https://images.unsplash.com/photo-1521737609449-5a810fda9661",
    availability: {
      copies: 5,
      onLoan: 2,
    },
    location: "Fiction Section, Shelf A",
    amount: 25.99,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    publisher: "Signet Classic",
    publicationDate: "1950-06-01",
    genre: "Fiction",
    description: "A dystopian novel set in a totalitarian society controlled by Big Brother.",
    coverImage: "https://example.com/1984.jpg",
    availability: {
      copies: 3,
      onLoan: 1,
    },
    location: "Fiction Section, Shelf B",
    amount: 19.99,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "9780141439518",
    publisher: "Penguin Classics",
    publicationDate: "2003-04-29",
    genre: "Fiction",
    description: "A classic novel exploring themes of love, reputation, and social class.",
    coverImage: "https://example.com/pride-and-prejudice.jpg",
    availability: {
      copies: 7,
      onLoan: 0,
    },
    location: "Fiction Section, Shelf C",
    amount: 14.99,
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    publisher: "Scribner",
    publicationDate: "2004-09-30",
    genre: "Fiction",
    description: "A novel set in the Roaring Twenties, exploring themes of wealth, love, and the American Dream.",
    coverImage: "https://example.com/the-great-gatsby.jpg",
    availability: {
      copies: 4,
      onLoan: 2,
    },
    location: "Fiction Section, Shelf D",
    amount: 21.99,
  },
  {
    id: 5,
    title: "Moby-Dick",
    author: "Herman Melville",
    isbn: "9780142000083",
    publisher: "Penguin Classics",
    publicationDate: "2003-11-04",
    genre: "Fiction",
    description: "A tale of obsession and revenge, set against the backdrop of whaling in the 19th century.",
    coverImage: "https://example.com/moby-dick.jpg",
    availability: {
      copies: 2,
      onLoan: 0,
    },
    location: "Fiction Section, Shelf E",
    amount: 17.99,
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isbn: "9780316769488",
    publisher: "Little, Brown and Company",
    publicationDate: "2001-01-30",
    genre: "Fiction",
    description: "A coming-of-age novel that follows the experiences and thoughts of a teenage boy in New York City.",
    coverImage: "https://example.com/the-catcher-in-the-rye.jpg",
    availability: {
      copies: 3,
      onLoan: 1,
    },
    location: "Fiction Section, Shelf F",
    amount: 16.99,
  },
  {
    id: 7,
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    isbn: "9780156907392",
    publisher: "Mariner Books",
    publicationDate: "1989-10-31",
    genre: "Fiction",
    description: "An experimental novel that explores themes of time, art, and the complexity of human relationships.",
    coverImage: "https://example.com/to-the-lighthouse.jpg",
    availability: {
      copies: 6,
      onLoan: 3,
    },
    location: "Fiction Section, Shelf G",
    amount: 18.99,
  },
  {
    id: 8,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "9780547928227",
    publisher: "Mariner Books",
    publicationDate: "2012-09-18",
    genre: "Fantasy",
    description: "An adventure novel set in Middle-earth, prequel to The Lord of the Rings.",
    coverImage: "https://example.com/the-hobbit.jpg",
    availability: {
      copies: 5,
      onLoan: 0,
    },
    location: "Fantasy Section, Shelf A",
    amount: 23.99,
  },
  {
    id: 9,
    title: "The Odyssey",
    author: "Homer",
    isbn: "9780140268867",
    publisher: "Penguin Classics",
    publicationDate: "1999-11-01",
    genre: "Classics",
    description: "An ancient Greek epic poem, attributed to Homer, following the adventures of Odysseus.",
    coverImage: "https://example.com/the-odyssey.jpg",
    availability: {
      copies: 4,
      onLoan: 1,
    },
    location: "Classics Section, Shelf A",
    amount: 20.99,
  },
  {
    id: 10,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    isbn: "9781408855652",
    publisher: "Bloomsbury Publishing",
    publicationDate: "2014-09-01",
    genre: "Fantasy",
    description: "The first book in the Harry Potter series, introducing the magical world of Hogwarts.",
    coverImage: "https://example.com/harry-potter-and-the-philosophers-stone.jpg",
    // availability: {
    //   copies: 10,  This is not need becuase with this isbn there will be only one book
    //   onLoan: 2,
    // },
    location: "Fantasy Section, Shelf B",
    amount: 29.99,
  },
];

export const reservationAddData = {
  reservationId: 1,
  bookId: 123,
  bookName: "Harry Potter and the Philosopher's Stone",
  reservedBy: "John Doe",
  reservedDate: "2023-06-05",
  returnDate: "2023-06-15",
  notes: "Please handle with care",
  // Other relevant fields
};


export const reservedBooks = [
  {
    id: 1,
    book: "Book 1",
    author: "Author 1",
    returnDate: "pending",
    imageURL: "https://example.com/book1.jpg",
    reservedBy: "John Doe",
    reservedDate: "2023-06-01",
    borrowerPhone: "987-654-3210",

  },
  {
    id: 2,
    book: "Book 2",
    author: "Author 2",
    returnDate: "2023-06-20",
    imageURL: "https://example.com/book2.jpg",
    reservedBy: "Jane Smith",
    reservedDate: "2023-06-03",
    borrowerPhone: "987-654-3210",

  },
  {
    id: 3,
    book: "Book 3",
    author: "Author 3",
    returnDate: "2023-06-25",
    imageURL: "https://example.com/book3.jpg",
    reservedBy: "Sam Wilson",
    reservedDate: "2023-06-05",
    borrowerPhone: "987-654-3210",

  },
  // Add more reserved books here
];

export const userData = [
  {
    username: "john_doe",
    password: "password123",
    dateOfBirth: "1990-05-15",
    gender: "Male",
    email:"MaleTeacher@gmail.com",
    contactno:"2024067830",
    occupation: "Teacher",
    membershipExpiryDate: "2024-06-30",
    fineBalance: 0,
    profilePicture: "https://example.com/profile/john_doe.jpg",
    interests: ["Mystery", "Science Fiction"],
    readingHistory: [
      {
        bookTitle: "The Da Vinci Code",
        borrowedDate: "2023-05-10",
        dueDate: "2023-05-24",
        returned: true,
      },
      // Other books in the reading history
    ],
    wishlist: [
      "9780061122415", // ISBN or book identifier
      "9780545010221",
      // Other books in the wishlist
    ],
    notifications: {
      email: true,
      sms: false,
      app: true,
    },
    libraryID: "12345", // Library branch or location ID
  },
  // Other user objects
];
export const eventData = [
   {
    id: 1,
    title: "Library Book Discussion",
    description: "Join us for a lively discussion about the latest best-selling book.",
    date: "2023-06-10T18:00:00",
    location: "Main Library Auditorium",
    Time:"3:00am",
    organizer: "ABC Library",
    contactInfo: "library@example.com",
    imageUrl:"https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
    ,registrationDetails: {
      required: true,
      registrationLink: "https://example.com/registration",
    },
    ticketPrice: 10.99,
  },
  {
    id: 4,
    title: "Library Book Discussion",
    description: "Join us for a lively discussion about the latest best-selling book.",
    date: "2023-06-10T18:00:00",
    location: "Main Library Auditorium",
    Time:"3:00am",
    organizer: "ABC Library",
    contactInfo: "library@example.com",
    imageUrl:"https://placeimg.com/800/400/people"
    ,registrationDetails: {
      required: true,
      registrationLink: "https://example.com/registration",
    },
    ticketPrice: 10.99,
  },
  {
    id: 3,
    title: "Library Book Discussion",
    description: "Join us for a lively discussion about the latest best-selling book.",
    date: "2023-06-10T18:00:00",
    location: "Main Library Auditorium",
    Time:"3:00am",
    organizer: "ABC Library",
    contactInfo: "library@example.com",
    imageUrl:"https://placeimg.com/800/400/architecture"
    ,registrationDetails: {
      required: true,
      registrationLink: "https://example.com/registration",
    },
    ticketPrice: 10.99,
  },
  {
  id: 2,
  title: "Summer Reading Challenge Kickoff",
  description: "Join us for the exciting launch of our summer reading challenge!",
  date: "2023-07-01T10:00:00",
    Time:"6:00am",
    duration: "2 hours",
  location: "Central Park",
  organizer: "XYZ Library",
  contactInfo: "library@example.com",
  imageUrl: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  registrationDetails: {
    required: false,
    registrationLink: "",
  },
  ticketPrice: 50,
  ageGroup: "Children",
  maximumAttendees: 100,
  speakers: ["Author Name", "Guest Speaker"],
  additionalInfo: {
    website: "https://example.com/event-details",
    socialMedia: {
      twitter: "@library",
      facebook: "library.page",
      instagram: "library",
    },
  },
}];

export const bannerData = [{
  id:1,
  image: "banner-image.jpg",
  heading: "Special Sale Event",
  description: "Enjoy up to 50% off on selected items",
  ctaText: "Shop Now",
  ctaLink: "https://example.com/shop"
},
{

  id:2,
  image: "banner-image.jpg",
  heading: "Special Sale Event",
  description: "Enjoy up to 50% off on selected items",

}];
