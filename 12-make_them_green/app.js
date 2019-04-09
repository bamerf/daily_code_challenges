var boxes = document.querySelectorAll('div')

var changeColor = function() {
  event.target.classList.toggle('completed')
  if (document.querySelectorAll('.completed').length === 3) {
    for (i = 0; i < boxes.length; i++)
    boxes[i].style.backgroundColor = "green"
  }
}


boxes.forEach(function(box) {
  box.addEventListener('click', changeColor)
})
