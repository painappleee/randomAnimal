const btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
    fetch("https://random.dog/woof.json")
    .then((response) =>{
        if (!response.ok){
            throw new Error(`Http error! status = ${response.status}`)
        }else{
            return response.json()
        }
    })
    .then ((returned) =>{
        const returnedImg = returned.url
        const img = document.querySelector(".img")
        img.src =returnedImg
   
    })
    .catch((e) =>{
        console.log("There has been a problem with your fetch operation: " + e.message,
        )
    })
} )