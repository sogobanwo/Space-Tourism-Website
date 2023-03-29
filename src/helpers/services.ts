 import axios from 'axios';


export const getDestinationData = async () =>{
   const response = await axios.get('../data.json');
   return response.data.destinations
}

export const getCrewData = async () =>{
   const response = await axios.get('../data.json');
   return response.data.crew
}

export const getTechnologyData = async () =>{
   const response = await axios.get('../data.json');
   return response.data.technology
}




// const Book = ({ book }) => {
//   return (
//     <div>
//       <h2>{book.title}</h2>
//       <p>Author: {book.author}</p>
//       <p>Price: {book.price}</p>
//     </div>
//   );
// };

// const BookList = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get('/books.json');
//       setBooks(response.data.books);
//     };
//     fetchData();
//   }, []);

//   const [selectedBook, setSelectedBook] = useState(null);

//   const handleClick = (book) => {
//     setSelectedBook(book);
//   };

//   return (
//     <div>
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>
//             <h2>{book.title}</h2>
//             <p>Author: {book.author}</p>
//             <button onClick={() => handleClick(book)}>View Details</button>
//           </li>
//         ))}
//       </ul>
//       {selectedBook && <Book book={selectedBook} />}
//     </div>
//   );
// };

// export default BookList;
