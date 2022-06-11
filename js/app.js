//navbar toggle functionality
const menu = document.querySelector('#menu-bar')
const navbar = document.querySelector('.navbar')
const header = document.querySelector('.header-2')
const headerContainer = document.querySelector('.header')

menu.addEventListener('click', () => {
  menu.classList.toggle('active')
  navbar.classList.toggle('active')
  
})
/*window.onscroll = () =>{
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')

  const headerHight = headerContainer.getBoundingClientRect().height
  if(window.scrollY > headerHight){
    header.classList.add('active')
  }else{
    header.classList.remove('active')
  }
}*/
window.onscroll = () =>{
  menu.classList.remove('active');
  navbar.classList.remove('active');

  if(window.scrollY > 150){
      header.classList.add('active');
  }else{
      header.classList.remove('active');
  }

}

//creating the date line functionality
const countDown = document.querySelector('.count-down')
const items = document.querySelectorAll('.count-down .box h3')
let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

//time in miliseconds
let oneDay = 24 * 60  *60 * 1000
let oneHour = 60 * 60 * 1000
let oneMinute = 60 * 1000
let oneSecond = 1000

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 16, 30)

// function that will create the functionality
function deadline(){
  const futureTime = futureDate.getTime()
  const now = new Date().getTime()
  const timeDifference = futureTime - now

  // calculating the time remaining
  let days = Math.floor(timeDifference / oneDay)
  let hours = Math.floor((timeDifference % oneDay) / oneHour)
  let minutes = Math.floor((timeDifference % oneHour) / oneMinute)
  let seconds = Math.floor((timeDifference % oneMinute) / oneSecond)

  // settin the values as arrays
  const values = [days, hours, minutes, seconds]

  //function that formats the date and time
  function format(item){
    if(item < 10){
      return `0${item}`
    }
    else{
      return item
    }
  }

  items.forEach(function(item, index){
    item.innerText = format(values[index])
  })
  if(timeDifference < 0){
    clearInterval(int)
    countDown.innerHTML = `<h2 class = "expired">Sorry! the deal has already expired</h2>`
  }

  
}
let int = setInterval(deadline, 1000)
