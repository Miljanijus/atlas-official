
//Portfolio see more

var portSlideshow = document.querySelector('.port-slideshow');
let down = false;
let startX;
let scroolLeft;

portSlideshow.addEventListener('mousedown',function(e){
    down = true;
    startX = e.pageX - portSlideshow.offsetLeft;
    scroolLeft = portSlideshow.scrollLeft;
})
portSlideshow.addEventListener('mouseleave',function(){
    down = false;
})
portSlideshow.addEventListener('mouseup',function(){
    down = false;
})
portSlideshow.addEventListener('mousemove',function(e){
    if(!down){
        return;
    }
    e.preventDefault();
    const x = e.pageX - portSlideshow.offsetLeft;
    const go = (x - startX)*5;
    portSlideshow.scrollLeft = scroolLeft - go;
})
//Our clients
var clients = document.querySelector('.client-list');
let down1 = false;
let start1X;
let scroolLeft1;
let scrollRight1;

clients.addEventListener('mousedown',function(e){
    down1 = true;
    start1X = e.pageX - clients.offsetLeft;
    scroolLeft1 = clients.scrollLeft;
    scrollRight1 = clients.scrollRight;
})
clients.addEventListener('mouseleave',function(){
    down1 = false;
})
clients.addEventListener('mouseup',function(){
    down1 = false;
})
clients.addEventListener('mousemove',function(e){
    if(!down1){
        return;
    }
    e.preventDefault();
    const x1 = e.pageX - clients.offsetLeft;
    const go1 = (x1 - start1X)*2;
    clients.scrollLeft = scroolLeft - go1;
    clients.scrollRight = scrollRight + go1;
})
// counter for pictures1
    var number = document.querySelector('#img1 h1');
    var array = document.querySelectorAll('.photo-big img');
    var counter = array[0].clientWidth;
     for(i = 0; i <= array.length - 1; i++){
        counter++;
     }
    number.innerHTML = "+" + counter;
// counter for pictures2
var number = document.querySelector('#img2 h1');
var array = document.querySelectorAll('.photo-big1 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures3
var number = document.querySelector('#img3 h1');
var array = document.querySelectorAll('.photo-big2 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures4
var number = document.querySelector('#img4 h1');
var array = document.querySelectorAll('.photo-big3 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures5
var number = document.querySelector('#img5 h1');
var array = document.querySelectorAll('.photo-big4 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures6
var number = document.querySelector('#img6 h1');
var array = document.querySelectorAll('.photo-big5 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures7
var number = document.querySelector('#img7 h1');
var array = document.querySelectorAll('.photo-big6 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures8
var number = document.querySelector('#img8 h1');
var array = document.querySelectorAll('.photo-big7 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures9
var number = document.querySelector('#img9 h1');
var array = document.querySelectorAll('.photo-big8 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures10
var number = document.querySelector('#img10 h1');
var array = document.querySelectorAll('.photo-big9 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures11
var number = document.querySelector('#img11 h1');
var array = document.querySelectorAll('.photo-big10 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures12
var number = document.querySelector('#img12 h1');
var array = document.querySelectorAll('.photo-big11 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures13
var number = document.querySelector('#img13 h1');
var array = document.querySelectorAll('.photo-big12 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures14
var number = document.querySelector('#img14 h1');
var array = document.querySelectorAll('.photo-big13 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures15
var number = document.querySelector('#img15 h1');
var array = document.querySelectorAll('.photo-big14 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures16
var number = document.querySelector('#img16 h1');
var array = document.querySelectorAll('.photo-big15 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures17
var number = document.querySelector('#img17 h1');
var array = document.querySelectorAll('.photo-big16 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures18
var number = document.querySelector('#img18 h1');
var array = document.querySelectorAll('.photo-big17 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures19
var number = document.querySelector('#img19 h1');
var array = document.querySelectorAll('.photo-big18 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
// counter for pictures20
var number = document.querySelector('#img20 h1');
var array = document.querySelectorAll('.photo-big19 img');
var counter = array[0].clientWidth;
 for(i = 0; i <= array.length - 1; i++){
    counter++;
 }
number.innerHTML = "+" + counter;
//Form js

function myButton(Form){
   var txtName = document.querySelector('.txtName');
   var txtCompany = document.querySelector('.txtCompany');
   var txtCountry = document.querySelector('.txtCountry');
   var txtEmail = document.querySelector('.email');
   var txtArea = document.querySelector('.txtArea');

   var mail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var email = document.forms["form"]["email"].value;

   if(Form.txtName.value == '' || Form.txtName.value == null){
      alert('Name: You must fill this field.')
      Form.txtName.focus();
      return false;
   }else if(Form.txtCompany.value == '' || Form.txtCompany.value == null){
      alert('Company: You must fill this field.')
      Form.txtCompany.focus();
      return false;
   } else if(mail.test(email) == false){
      alert('Email: You must fill email adress.')
      return false;
   }else if(Form.txtCountry.value == '' || Form.txtCountry.value == null){
      alert('Country: You must fill this field.')
      Form.txtCountry.focus();
      return false;
   }else if(Form.txtArea.value == '' || Form.txtArea.value == null){
      alert('Text Area: You must fill this field.')
      Form.txtArea.focus();
      return false;
   }else{
      return true;
   }
   
}
//Applicaton for a job
var apply = document.querySelector('.apply');
var closing = document.querySelector('.btnClose');

apply.addEventListener('click', function(){
   document.querySelector('.job-app').style.display = "block";
})
closing.addEventListener('click', function(){
   document.querySelector('.job-app').style.display = "none";
})
function validate(form){
   var txtNameJob = document.querySelector('.txtNameJob');
   var txtPhone = document.querySelector('.txtPhone');
   var txtExperience = document.querySelector('.txtExperience');
   var txtPosition = document.querySelector('.txtPosition');
   var txtMessage = document.querySelector('.txtMessage');

   if(form.txtNameJob.value == '' || form.txtNameJob.value == null){
      alert('Name: You must fill this field.');
      form.txtNameJob.focus();
      return false;
   }else if(form.txtPhone.value == '' || form.txtPhone.value == null){
      alert('Phone: You must fill this field.')
      form.txtPhone.focus();
      return false;
   }else if(form.txtExperience.value == '' || form.txtExperience.value == null){
      alert('Experience: You must fill this field.')
      form.txtExperience.focus();
      return false;
   }else if(form.txtPosition.value == '' || form.txtPosition.value == null){
      alert('Position: You must fill this field.')
      form.txtPosition.focus();
      return false;
   }else if(form.txtMessage.value == '' || form.txtMessage.value == null){
      alert('Message: You must fill this field.')
      form.txtMessage.focus();
      return false;
   }else{
      return true;
   }
}
//Window for a privacy
var apply1 = document.querySelector('.apply1');
var closing = document.querySelector('.btnClose-privacy');

apply1.addEventListener('click', function(){
   document.querySelector('.privacy-policy').style.display = "block";
})
closing.addEventListener('click', function(){
   document.querySelector('.privacy-policy').style.display = "none";
})
//Window for a terms
var button = document.querySelector('.openTerm');
var hidding = document.querySelector('.btnClose-terms');

button.addEventListener('click', function(){
   document.querySelector('.terms-of-service').style.display = "block";
})
hidding.addEventListener('click', function(){
   document.querySelector('.terms-of-service').style.display = "none";
})
//Animation & efects
window.onscroll = function(){
   const scroolTop = document.documentElement.scrollTop;
   if(scroolTop>50){
      document.querySelector('.nav').classList.add('color');
      document.querySelector('.hamburger').classList.add('color');
   }
   else{
      document.querySelector('.nav').classList.remove('color');
      document.querySelector('.hamburger').classList.remove('color');
   }
}

document.querySelector('.home').addEventListener('click',function(){
   document.querySelector('.content1').style.display = "block";
   document.querySelector('.content1').animate([
      { transform: 'translateX(-100%)' }, 
      { transform: 'translateX(0%)' }
   ], {
      duration: 1300
      });
})
document.querySelector('.about-us').addEventListener('click',function(){
   document.querySelector('.content2').animate([
      { transform: 'translateX(100%)' }, 
      { transform: 'translateX(0%)' }
   ], {
      duration: 1300
      });
})
document.querySelector('.our-services').addEventListener('click',function(){
   document.querySelector('.content3').style.display = "block";
   document.querySelector('.content3').animate([
      { transform: 'scale(0)' }, 
      { transform: 'scale(1)' }
   ], {
      duration: 1300
      });
})
document.querySelector('.port').addEventListener('click',function(){
   document.querySelector('.content4').style.display = "block";
   document.querySelector('#heading2').animate([
      { transform: 'translateY(100%)' }, 
      { transform: 'translateY(0%)' }
   ], {
      duration: 1300
      
      });
   document.querySelector('.portfolio').animate([
      { transform: 'translateY(-100%)' }, 
      { transform: 'translateY(0%)' }
   ], {
      duration: 1300
      
      });
})
document.querySelector('.client').addEventListener('click',function(){
   document.querySelector('.content5').style.display = "block";
   document.querySelector('#heading4').animate([
      { transform: 'translateX(-100%)' }, 
      { transform: 'translateX(0%)' }
   ], {
      duration: 1300
      
      });
   document.querySelector('.clients').animate([
      { transform: 'translateX(100%)' }, 
      { transform: 'translateX(0%)' }
   ], {
      duration: 1300 
      
      });
})
document.querySelector('.contacts').addEventListener('click',function(){
   document.querySelector('.content6').style.display = "block";
   document.querySelector('.content6').animate([
      { transform: 'scale(0)' }, 
      { transform: 'scale(1)' }
   ], {
      duration: 1500
      });
})
// meny
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
    document.querySelector('.nav').classList.toggle('show');
    this.classList.toggle('show');
    document.querySelector('header').classList.toggle('show');
})

const navigation = document.querySelector('.nav');
i = navigation.querySelectorAll('a');

i.forEach(function(navi){
    navi.addEventListener('click', function(){
      document.querySelector('.nav').classList.toggle('show');
      hamburger.classList.toggle('show');
      document.querySelector('header').classList.toggle('show');
})});
