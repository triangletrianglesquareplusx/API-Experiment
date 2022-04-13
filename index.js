'use strict'
console.log('about to fetch a character');
fetch('finn.jpg').then(response=>{
    console.log(response);
});