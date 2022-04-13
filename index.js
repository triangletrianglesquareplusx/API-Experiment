'use strict'
console.log('about to fetch a character');
fetch('finn.jpg')
.then(response=>{
    console.log(response);
    // convert response into img blob
    return response.blob();
})
.then(blob=>{
    console.log(blob);
    document.getElementById('fin').src = URL.createObjectURL(blob);
})
.catch(error=>{
    console.error(error);
});