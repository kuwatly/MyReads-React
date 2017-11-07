# MyReads
---

## Project Purpose:

My Reads is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.

The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## How to Load the App
The project uses Node.js and the Create-React-App starter.  If you do not have Node >= 6.x installed, you can download it here: [Node.js](https://nodejs.org/en/)

Once Node is installed, navigate to the directory where you want to store the app
```
git clone https://github.com/kuwatly/MyReads-React.git
npm install
```
Once all of the dependencies have been installed you can launch the app with
```
npm start
```

A new browser window should automatically open displaying the app.  If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser

![Load Screen](src/screenshots/mainscreen.png "main screen")

## How to Use the App
* Books are sorted into three categories: Currently Reading, Want to Read and Read
* To change a book's category or remove a book from the list, click on the green button on  the book cover

* To add new books, click on the green + button at the bottom of the page.
Enter an author's name or subject. Up to 20 items will be returned.

*Note: The backend API is limited to a fixed set of [search terms](#search-terms)  -- see below for valid search options*

#### Search Terms
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'