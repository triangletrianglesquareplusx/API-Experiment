'use strict'
console.log('about to fetch a character');

//make an async function

catchChar()
.then(response=>{
    console.log('wohooo');
})
.catch(error=>{
    console.error(error);
});

async function catchChar(){
    const response = await fetch('finn.jpg');
    const blob = await response.blob();
    document.getElementById('finn').src = URL.createObjectURL(blob);
    
}

/*fetch('finn.jpg')
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
});*/