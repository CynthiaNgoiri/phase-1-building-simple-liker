// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// document.addEventListener("DOMContentLoaded",(e)=>{
//   const errorMessage=document.querySelector('#modal-message')
//   const removeHidden=document.querySelector('#modal')
//   const clickerHeart=document.querySelectorAll('.like-glyph')

// });
const likeHeart = document.querySelectorAll(".like-glyph");
const error= document.getElementById("modal");



likeHeart.forEach(element=>{
  element.addEventListener('click',()=>{
    mimicServerCall("http://mimicServer.example.com")
    .then(()=>{
      if (element.innerText === EMPTY_HEART){
        element.innerText =FULL_HEART;
        element.className ='activated-heart'
      }
        else{
          element.innerText= EMPTY_HEART;
      

        }

      })
        .catch (error =>{
        removeHidden.classList.remove('hidden')
        errorMessage.innerText=error
        setTimeout(()=>{
          removeHidden.classList.add('hidden')
          errorMessage.innerText=''
        }, 3000)

      })
    })
  })


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
