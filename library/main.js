"use strict"

let library = []
let bookArea = document.getElementById("book-area")

function Book(name, author) {

	this.name = {
		value: name,
		element: createEntryElement("book-entry-info-title")	
	},
	this.author = {
		value: author,
		element: createEntryElement("book-entry-info-author")
	},
	this.pages = {
		element: createEntryElement("book-entry-info-pages"),
		value: undefined
	},
	this.description = {
		element: createEntryElement("book-entry-description"),
		value: undefined
	},
	this.readStatus = {
		element: createEntryElement("book-entry-readstatus"),
		value: undefined,
	},
	this.entryIcon = {
		element: createEntryElement("book-entry-icon"),
		img: document.createElement("img")
	},

	this.entryContainer = createEntryElement("book-entry"),
	this.entryInfoContainer = createEntryElement("book-entry-info"),
	this.entryDeleteButton = createEntryElement("book-entry-delete"),
	this.listenersAdded = false,
	this.index = 0
}

function refreshLibrary() {
	bookArea.innerHTML = ""

	for (const [index, book] of library.entries()) {
		console.log(index + ": " + book.name.value + " by " + book.author.value)

		appendEntryElements(bookArea, book.entryContainer)

		appendEntryElements(
			document.querySelectorAll(".book-entry")[index], 
				book.entryIcon.element, 
				book.entryInfoContainer, 
				book.description.element, 
				book.readStatus.element,
				book.entryDeleteButton
		)
		
		appendEntryElements(book.entryIcon.element, book.entryIcon.img)
		book.entryIcon.img.src = "assets/BookClosed.svg"

		appendEntryElements(book.entryInfoContainer, 
			book.name.element, 
			book.author.element, 
			book.pages.element
		)

		addListeners(book)

		book.name.element.textContent = book.name.value
		book.author.element.textContent = book.author.value
		book.pages.element.textContent = book.pages.value + " pages"
		book.description.element.textContent = book.description.value
		book.readStatus.element.textContent = book.readStatus.value ? "Read" : "Unread"
		book.entryDeleteButton.textContent = "[delete]"
		book.index = index
	}
}

function addListeners (book) {

	if (!book.listenersAdded) {
		book.listenersAdded = true
		book.entryDeleteButton.addEventListener("click", ()=> deleteBook(book.index))
		book.entryContainer.addEventListener("mouseover", ()=> {
			book.entryDeleteButton.style.display = "block"
			book.entryIcon.img.src = "assets/BookOpen.svg"
		})
		book.entryContainer.addEventListener("mouseout", ()=> {
			book.entryDeleteButton.style.display = "none"
			book.entryIcon.img.src = "assets/BookClosed.svg"
		})
	}
}

function createEntryElement (className) {
	const element = document.createElement("div")
	element.classList.add(className)
	return element
}

function appendEntryElements (target, ...elements) {
	for (const e of elements) {
		target.appendChild(e)
	}
}

function deleteBook (index) {
	library.splice(index, 1)
	refreshLibrary()
}

let addBookDialog = document.getElementById("add-book-dialog")
let inputAddButton = document.getElementById("add-book-dialog-button")

let inputForm = document.getElementById("add-book-form")
let inputBookTitle = document.getElementById("add-book-dialog-title")
let inputBookAuthor = document.getElementById("add-book-dialog-author")
let inputBookPages = document.getElementById("add-book-dialog-pages")
let inputBookDescription = document.getElementById("add-book-dialog-description")
let inputBookReadStatus = document.getElementById("add-book-dialog-readstatus") 
inputBookReadStatus.checked = false;

inputAddButton.addEventListener("click", (e) => {
	e.preventDefault()
})

addBookDialog.addEventListener("click", (e)=>{
	console.log(e.target)
	// e.target != inputForm ? addBookDialog.close() : return
	if (e.target == addBookDialog) addBookDialog.close()
})

function showDialogue () {
	addBookDialog.showModal()
}

function inputAddBook () {
	let newBook = new Book(inputBookTitle.value, inputBookAuthor.value)
	newBook.pages.value = inputBookPages.value
	newBook.description.value = inputBookDescription.value
	newBook.readStatus.value = inputBookReadStatus.checked // .value is not related to whether the box is checked. .checked is
	library.push(newBook)
	refreshLibrary()
	inputForm.reset()
	addBookDialog.close()
}

function addDefaultBook (name, author, pages, description, readStatus) {
	let newBook = new Book(name, author)
	newBook.pages.value = pages
	newBook.description.value = description
	newBook.readStatus.value = readStatus
	library.push(newBook)
}

addDefaultBook(
	"Elric of Melnibone"
	, "Michael Moorcock"
	, 752
	, "Sword and sorcery with horror elements. Protagonist is a brooding king fighting to rise above the fascist brutality of his traditional culture."
	, false)
addDefaultBook(
	"Doom Guy"
	, "John Romero"
	, 384
	, "Autobiography by the famed iD Software founder. Covers his life and games, from Commander Keen to Daikatana and then some."
	, true)
addDefaultBook(
	"Dune"
	, "Frank Herbert"
	, 412
	, "Extended and convoluted emperialism metaphor with some orientalism thrown in. Kind of slow tbh."
	, true)
addDefaultBook(
	"Radio Free Albemuth"
	, "Phillip K. Dick"
	, 214
	, "Subversive paranoia with a gnostic subtext. The pro-communist aliens communicate through records. I should reread it."
	, true)
addDefaultBook(
	"Dhalgren"
	, "Samuel Delaney"
	, 874
	, "Something about a pocket of warped reality engulfing a town in California. Communications are cut off and holographic gangs roam the streets."
	, false)

refreshLibrary()