const inputText = document.getElementById('input-text')
const errorMassage = document.getElementById('error-massage');
const foundBookNamber = document.getElementById('founded-book-namber');
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
        .then(data => displaySearchResult(data))
        inputText.value ='';
        errorMassage.textContent ='';
        foundBookNamber.textContent = '';
        searchResult.textContent = '';

        
    
    }
}
const displaySearchResult =  books =>{
// --- how boopk founded
  const showResultNam = (num) =>{
    if( num === 0){
      errorMassage.innerHTML =
      "<h5 class='text-center p-3 bg-info'><b>No Result Found</b></h5>";
    }
    else{
      foundBookNamber.innerHTML =`
      <h4 class='text-center p-3 bg-info'>${num}result Found</h4>
     
      `
    }
   
  }
  showResultNam(books.numFound);
 ///-----books card



    books.docs.forEach(book => {
      console.log(book)


        const writerName = (name)=>{
          if(name.author_name === undefined){
            return 'Author Not Avilable';
          }
          else{
            return `Author Name:${name.author_name[0]}` ;
          }
        }
        
        const publishName= (nam2) =>{
          if(nam2.publisherName === undefined){
            return ' Publisher Not Avilable';
          }
          else{
            return `Publier  Name${nam2.publisherName}`;
          }
        }
  
        const publishedDate = (date) =>{
          if(date.first_publish_year === undefined){
            return 'Publish date Not Avilable'
          }
          else{
            return `First Publish year: ${date.first_publish_year}`
          }
        }
            // const searchResult = document.getElementById('search-result');
            //  foundedBook.textContent ='';
         const div = document.createElement('div')
         div.classList.add('col')
         div.innerHTML =`<div class="card " style="height: 400px; width: 350px" >
         <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 mx-auto p-3"   alt="..." >
         <div class="card-body">
           <h5 class="card-title">Book Name:${book.title}</h5>
           <h5 class="card-title">${writerName(book)}</h5>
           <h5 class="card-title">${publishName(book)}</h5>
           <h5 class="card-title">${publishedDate(book) }</h5>
  
         </div>
       </div>
         `
         
         searchResult.appendChild(div);

    
      

 });
 console.log('finised')


  
}

// //function for displaying error message.
const errorMessage = () => {
    console.log('errror kaocos')
    const errorMessageDiv = document.getElementById("error-massage");
  
    errorMessageDiv.innerHTML = ` <div class="card m-auto p-5 bg-warning" style="width: 18rem">
            <h5 class="card-title">Dear Sir/Ma'am,</h5>
            <p class="card-text">
               No Result Found
            </p>
          </div>`;
  };