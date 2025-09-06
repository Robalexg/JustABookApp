let menuItems = document.querySelector('.menu').children
let search =document.querySelector("#search")
const currentURL = window.location.href.split('/');
let input = document.querySelector('#searchInput')
let searchTitle = document.querySelector('.divider').children[0]
let add = document.querySelector('#addForm')
let booksArray = [
    {
        title:'Ariana is mean',
        genre: 'Mystery',
        author: 'Julius Rulius',
        description: 'A book about a really really mean cat',
        publisher: 'Julius Books',
        pages: 130,
        id: crypto.randomUUID()
    }
]
let dialog = document.querySelector('.addBookModule')
let infoDialog = document.querySelector('.bookInfoModule')
let addBook = document.querySelector('#addBook')
let booksContainer = document.querySelector(".bookContainer")
let infoSet = document.querySelector('#infoSet')
let radioReset = document.querySelector('#Non-Fiction')
let closeButtonAdd = document.querySelector('#closeButtonAdd')
let closeButtonInfo = document.querySelector('#closeButtonInfo')
let bookInfoMain = document.querySelector('.bookInfoMain')
let curBook = {}
let deleteButton = document.querySelector("#deleteButtton")


// dialog.style.display = 'grid';
infoDialog.style.display = 'none';

let getBook = (e) => {
    let id = e.target.id;
    let book = booksArray.filter((b) => b.id === id);
    curBook = book[0]
    infoDialog.style.display = 'grid';
    addBookInfo()
}


let addBookInfo = () => {
    let title = document.querySelector("#bookInfoTitle")
    let author = document.querySelector("#bookInfoAuthor")
    let pages = document.querySelector("#bookInfoPages")
    let genre = document.querySelector("#bookInfoGenre")
    let pub = document.querySelector("#bookInfoPub");
    let des = document.querySelector("#bookInfoDes");
    title.textContent = curBook.title
    author.textContent = curBook.author
    pages.textContent = curBook.pages
    genre.textContent = curBook.genre
    pub.textContent = curBook.publisher
    des.textContent = curBook.description
}





let init = () => {
        search.addEventListener('submit', (e) => {
            e.preventDefault()
            // let blah = input.value
            // input.value = ''
            // searchTitle.innerHTML = blah
            // console.log(searchTitle.innerHTML)
        })

        addBook.addEventListener('click',() => {
            dialog.style.display = 'grid';
        })

        add.addEventListener('submit', (e) => {
            e.preventDefault()
            let data = Object.fromEntries(new FormData(add))
            data.id = crypto.randomUUID()
            booksArray.push(data)
            dialog.style.display = 'none'
            addBooks(booksArray)


            for(let i = 0; i < infoSet.children.length; i++){
                let tag = infoSet.children[i].tagName

                if(tag ==='INPUT' || tag ==='TEXTAREA'){
                    infoSet.children[i].value = ''
                }

            }
            radioReset.checked = true
        })

        closeButtonAdd.addEventListener('click', (e) => {
            e.preventDefault()
            dialog.style.display = 'none'
        })

        closeButtonInfo.addEventListener('click', (e) => {
            e.preventDefault()
            infoDialog.style.display = 'none'
        })

        deleteButton.addEventListener('click', (e) => {
            console.log("click")
            booksArray = booksArray.filter((b) => b.id !== curBook.id)
            addBooks(booksArray)
            infoDialog.style.display = 'none'
        })



}   

let addBooks = (books) => {
    booksContainer.innerHTML = ''
    for(let i = 0; i < books.length; i++){
        let book = document.createElement("div")
        let img = document.createElement('div')
        let title = document.createElement('h1')
        let author = document.createElement('h2')
        book.classList.add("book")
        img.classList.add("img")
        img.addEventListener('click',getBook)
        title.textContent = books[i].title
        author.textContent = books[i].author
        
        book.appendChild(img)
        book.appendChild(title)
        book.appendChild(author)
        img.id = books[i].id

        booksContainer.appendChild(book)
    }
}

addBooks(booksArray)
init()



