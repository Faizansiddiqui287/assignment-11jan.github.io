const add_btn = document.querySelector('.add-btn')
const model = document.querySelector('.modal')
const hide_modal = document.querySelector('.hide-modal-btn')
const book_title= document.querySelector('.book-title')
const add_book_btn=document.querySelector('.add-book-btn')
const container = document.querySelector('.container')
let delete_keys = document.querySelectorAll('.cross-btn')
const id_value=1


delete_keys.forEach((key)=>{
    console.log("hi")
})

const deleteBook =(event)=>{
    // console.log(event.target.classList[0])
    console.log(event.srcElement.id)
    console.log("clicked")
}


let books=[]
const showModal =()=>{
     model.classList.add('show-modal')  
}
const hideModal =()=>{
    model.classList.remove('show-modal')
}
const BuildUi =(books)=>{
    books.forEach((book)=>{
        const book_ctn = document.createElement('div')
        book_ctn.classList.add('book')
        const book_name = document.createElement('h2')
        book_name.classList.add("book-name")
        book_name.innerText=book.title

        const icon = document.createElement('img')
        icon.classList.add("cross-btn")

        icon.setAttribute('id',"ones")
        icon.setAttribute('src',"cross.png")
        book_ctn.append(book_name,icon)
        container.append(book_ctn)
    })
    delete_keys = document.querySelectorAll('.cross-btn')
    delete_keys.forEach((key)=>{
        key.addEventListener('click',deleteBook)
    })
}
const setBooks =()=>{
    if(localStorage.getItem("books")){
        books = JSON.parse(localStorage.getItem("books"))
    }else{
        const test={
            title:"Manual"
        }
        books.push(test)
    }
    BuildUi(books)
}
const fetchBookTitle =(event)=>{
    const book ={
        title:book_title.value
    }
    books.push(book)
    localStorage.setItem("books",JSON.stringify(books))
    console.log(localStorage.getItem("books"))
    book_title.value=""  
}


add_book_btn.addEventListener('click',fetchBookTitle)
hide_modal.addEventListener('click',hideModal)
add_btn.addEventListener('click',showModal)


setBooks()