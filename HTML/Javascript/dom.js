
        //CREATING ELEMENTS
        //we are using createElement document method
        let div = document.createElement('div')

            //we are using innerHTML
        div.innerHTML = "<p> Creating paragraphs using Javascript DOM</p>"
        
        div.id = "content"
        div.className = "note"


        
    let p = document.createElement("p")
    p.innerText = "My First paragraph using Javascript DOM" 
    p.id = "text"
    p.className = "letters"

    document.body.appendChild(p)

let first =  document.querySelectorAll('.letters')
console.log(first)

    let h2 = document.createElement('h2')
    h2.textContent = "This is an header 2 created using Javascript"
    div.appendChild(h2)


    document.body.appendChild(div)

    let ul = document.createElement('ul')
    ul.id = "menu"

   /*
    let li = document.createElement('li')
    li.textContent = 'Products'

    ul.appendChild(li)

    let li2 = document.createElement('li')
    li2.textContent = 'Services'

    ul.appendChild(li2)

    document.body.appendChild(ul)

    let li3 = document.createElement('li')
    li3.textContent = 'About Us'

    ul.appendChild(li3)

    document.body.appendChild(ul)
*/

    function createItem(name) {
        let li = document.createElement('li')
        li.textContent = name
        return li;
    }

    ul.appendChild(createItem("Home"))
    ul.appendChild(createItem("Products"))
    ul.appendChild(createItem("About Us"))
    ul.appendChild(createItem("Services"))
    ul.appendChild(createItem("Contact Us"))

    document.body.appendChild(ul)

//differencebetween textContent, innerText, and innerHTML

let ideaNote = document.getElementById('idea')

console.log(ideaNote.textContent)
console.log(ideaNote.innerText)

//This outputs the value of the html content into the console
console.log(ideaNote.innerHTML)

//this sets a new value for the html content

/*function changeContent (){
    ideaNote.innerHTML = "<p>This is a new HTML TAG</p>"
}

changeContent();
*/

//or
setTimeout(()=>{
    ideaNote.innerHTML = "<p>This is a new HTML TAG</p>"

}, 5000)



console.log(ideaNote.innerHTML)












