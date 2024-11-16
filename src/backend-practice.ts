
//*The line below will create a new instance of the XMLHttpRequest object:
const anyNameButPickedxhr: XMLHttpRequest = new XMLHttpRequest();

//*The line below will wait for her response:
anyNameButPickedxhr.addEventListener('load', ()=>{
  console.log(anyNameButPickedxhr.response)
});

//*The lineS bellow sets up the request:---------------------------------

//*This replies with text/plain:

anyNameButPickedxhr.open('GET', 'https://supersimplebackend.dev');

//*This replies with a JSON object:
// anyNameButPickedxhr.open('GET', 'https://supersimplebackend.dev/products/first');

//*This replies with am image:
// anyNameButPickedxhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');

//*This replies with HTML:
// anyNameButPickedxhr.open('GET', 'https://supersimplebackend.dev/documentation');

//*This sends the message:----------------------------------------------
anyNameButPickedxhr.send();


//ammendments

