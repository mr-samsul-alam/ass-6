const inputText = document.getElementById('input-text')
const errorMassage = document.getElementById('error-massage');
const foundBook = document.getElementById('founded-book');
const searchResult = document.getElementById('search-result');

const button = () =>{
    const  inputTextvalue = inputText.value
    console.log(inputTextvalue);
    if(inputTextvalue.length === 0){
        document.getElementById("error-massage").innerHTML =
        "<h5 class='text-center p-3 bg-danger'><b>Please enter a  book Name...</b></h5>";
    }
    else{
        const url = `https://openlibrary.org/search.json?q=${inputTextvalue}`
        fetch(url)
        .then(res => res.json())
        .then(data =>   displaySearchResult(data.docs))
    }
}
const displaySearchResult = books =>{
    // console.log(books);
    const foundedBook =  document.getElementById('founded-book')
    foundedBook.textContent ='';

    books.forEach(book => {
        console.log(book);
       const div = document.createElement('div')
       div.classList.add('col')
       div.innerHTML =`<div class="card " style="height: 400px; width: 350px" >
       <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 mx-auto p-3"   alt="..." >
       <div class="card-body">
         <h5 class="card-title">Book Name:${book.title}</h5>
         <h5 class="card-title"> Author Name:${book.author_name[0]}</h5>
         <h5 class="card-title">Published Date:${book.publish_date[0]}</h5>

       </div>
     </div>
       `
       foundedBook.appendChild(div);

 });

  
}
// style="width: 500px; height: 500px;"