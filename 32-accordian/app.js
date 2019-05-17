coding = document.querySelector('.coding')
// list = document.querySelector('.list')

links = ["Javascript", "jQuery", "Ruby"]
state = "hidden"

expandMenu = (event) => {


  if (state == "hidden") {

    for (let i = 0; i < links.length; i++) {
      state = "visible"
      item = document.createElement('li')
      item.textContent = links[i]
      coding.appendChild(item)
    }

  } else {

    for (let i = 0; i < links.length; i++) {
      state = "hidden"
      coding.children[0].remove()
    }

  }
  

}


coding.addEventListener('click', expandMenu)