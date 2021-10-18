//Requirement for our project

//We are a book management company

//BOOKS
//ISBN, title, pub date, language, num page, author[], category[]

//AUTHORS
//id, name, books[]

//PUBLICATIONS
//id, name, books[]

//We have to design and code an API over this .

//1. BOOKS
//We need an API :-
//To get all the books -done
//To get specific book-done
//To get a list of books based on category
//To get a list of books based on languages

//2. AUTHORS
//We need an API :-
//To get all the authors- done
//To get a specific author-task
//To get a list of authors based on books

//3. PUBLICATIONS
//We need an API :-
//To get all the publications
//To get a specific publication
//To get a list of publications based on a book


//*****put*****
//update book deatails if author is changed

//****DELETE*****
//1. Delete a books
//2.DELETE author from books
//3.Delete


//Schema - Blueprint of how data has to be constructed
//MongoDB is schemaless
//mongoose has schema
//mongoose - validation , relationship with other data.
//model -> document model of MongoDB
//Schema -> Model -> use them .
booky.post("/book/new",async (req,res) => {
  const { newBook } = req.body;
  const addNewBook = BookModel.create(newBook);
  return res.json({
    books: addNewBook,
    message: "Book was added !!!"
  });
});
