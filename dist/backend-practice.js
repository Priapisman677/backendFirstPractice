"use strict";
//*The line below will create a new instance of the XMLHttpRequest object:
const xhr = new XMLHttpRequest();
//*The line below will wait for her response:
xhr.addEventListener('load', () => {
    console.log(xhr.response);
});
//*The line bellow sets up the request:
xhr.open('GET', 'https://supersimplebackend.dev');
//*This sends the message:
xhr.send();
