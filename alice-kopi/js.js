

//Indsætter dato i footer - dato: 28.01.22 spørgsmål 1: 
const d = new Date();
document.getElementById('dato').innerHTML = d.toDateString();

//Indsæt adresse i footer - dato 28.01.22 Spørgsmål 2
const info = {
    navn: 'Alices Spisehus',
    adresse: 'Klostergade 2, 8000 Århus C',
    telefon: '+45 60783501'
}

//Jeg forstår ikke hvor denne linje ikke gør, at info kommer frem i footeren. 
//Der står bare [Object, object] - det virker i console log
document.getElementById('adresse').innerHTML = info;
console.log(info)


//Medarbejder liste - dato: 28.01.22 Spørgsmål 3
let visMig,medarbejdere = [
    "Alice Bergren - Ejer",
    "Anders Møller - Kok",
    "Sidsel Sommer - Tjener",
    "Victor Holt - Tjener",
    "Bastian Krarup - Opvasker",
    "Julie Engmann - Opvasker",
    "Frederik Stoltenberg - Altmuligmand "
]

//Alfabetisk rækkefølge
medarbejdere.sort();


for (visMig in medarbejdere) {
    //console.log (medarbejdere[visMig]);
    medarb.innerHTML += '<li>' + medarbejdere[visMig] + '</li>';
}

//Mouseover events - viser liste med medarbejdere dato: 01.02.22
medarb1.addEventListener('mouseover', function(){
    medarb.style.display = 'block';
})
medarb1.addEventListener('mouseout', function(){
    medarb.style.display = 'none';
})

medarb.addEventListener('mouseover', function(){
    medarb.style.display = 'block';
})
medarb.addEventListener('mouseout', function(){
    medarb.style.display = 'none';
})

//For at den også virker på mobilen 
medarb1.addEventListener('click', function(){
    medarb.style.display = 'block';
})
medarb1.addEventListener('click', function(){
    medarb.style.display = 'none';
})

medarb.addEventListener('click', function(){
    medarb.style.display = 'block';
})
medarb.addEventListener('click', function(){
    medarb.style.display = 'none';
})



//indsæt citat - Spørgsmål 4
const citat = [
    '“One day… I’m gonna make the onions cry.”',
    '“Many kids can tell you about drugs but do not know what celery or courgettes taste like.”',
    '“When you’re stressed, you eat ice cream, chocolate and sweets. Why? Because stressed spelled backwards is desserts.”',
    '“My cooking is so fabolous… Even the smoke alarm cheers me on.”',
    '“I have mixed drinks about feelings.”',
    '“I don’t want my restaurant to be a place where people sit and eat. I want people to sit at that table and be sick with longing.”'
  ];
  
  //Vælger random citat hver gang siden opdateres eller åbnes
  var randomItem = citat[Math.floor(Math.random()*citat.length)];
  
  document.getElementById('citat').innerHTML += randomItem;




//Vis burger ved klik 
//OPGAVE FRA D. 01.02.22 - Spørgsmål 7
let hide = true;

let hideShow = function(){

  if (hide == true) {
    document.getElementById('showBrg').style.display = 'block';
    hide = false;
  } else {
    document.getElementById('showBrg').style.display = 'none';
    hide = true;
  }

}

burger.addEventListener('click', hideShow);






  //Form (Næste) dato: 03.02.22
  btn1.addEventListener('click', function(){
    antal.style.display = 'block';
    navn.style.display = 'none';

})

    btn2.addEventListener('click', function(){
    date.style.display = 'block';
    antal.style.display = 'none';
})

    btn3.addEventListener('click', function(){
    tid.style.display = 'block';
    date.style.display = 'none';
})

    btn4.addEventListener('click', function(){
    lastField.style.display = 'block'
    tid.style.display = 'none'
})


//Forrige
    btn22.addEventListener('click', function(){
    navn.style.display = 'block';
    antal.style.display = 'none';
})

    btn33.addEventListener('click', function(){
    antal.style.display = 'block';
    date.style.display = 'none';
})

    btn44.addEventListener('click', function(){
    date.style.display = 'block';
    tid.style.display = 'none';
})






//video der stopper når man ikke kan se den hele - dato: 04.02.22
//Videoen skal startes, men derefter virker funktionen

const video = document.querySelector('video');
let isPaused = false;
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio !== 1 && !video.paused) {
      video.pause();
      isPaused = true;
    } else if (isPaused) {
      video.play();
      isPaused = false
    }
  });
}, {
  threshold: 1
});
observer.observe(video);




//Formvalidation - dato: 03.02.22

( function ( ) {

    const form = document.getElementById( 'contact' )
    
    form.addEventListener( 'button', 'btn1', 
          function ( event ) { validate( form, event ) } )
  } ) ( )
  
  function validate( form, event ) {
    let value = form.elements[ 'Name' ].value
    if( value === '' ) {
      alert( 'Please Enter Your Name' )
      event.preventDefault( ) ; return }
    
    value = form.elements[ 'Email' ].value 
    if( ( value === '' ) || ( value.indexOf('@') === -1 ) || 
    ( value.indexOf('.') === -1 ) ) {
      alert( 'Please Enter A Valid Email Address' )
      event.preventDefault( ) }
  }
//Jeg har brugt præcis samme kode som fra mcgrath eksemplet, men jeg kan simpelthen ikke få det til at spille
