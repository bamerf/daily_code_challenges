

$(document).ready(function() {
  
  const showTime = () => {
    
    const time = new Date().toLocaleTimeString()
    
    $('.clock').text(time)
    
  }
  
  setInterval(showTime, 1000)

})
