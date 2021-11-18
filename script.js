const memeBtn = document.getElementById('memeBtn');

memeBtn.addEventListener('click', generateMeme)


const words = 'https://random-word-api.herokuapp.com/word?number=8';
const renderText = (ord) => {
  const wrap = document.getElementById('text-wrap');
  let text = null ;
  ord.forEach(word => text += `${word} `);
  wrap.append(text);
}


async function generateMeme() {
const res = await fetch('https://api.imgflip.com/get_memes')
const data = await res.json();
if (!res.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}

console.log(data) 
console.log(data.data.memes)

    

     
      let i = Math.floor(Math.random() * 101);
      console.log(i);
      let previousImage = document.querySelector('img');
      let previoush2 = document.querySelector('h2');
     
      
      if( previousImage !== null ) {
        document.body.querySelector('.container').removeChild(previousImage);
        document.body.querySelector('.container').removeChild(previoush2);
        
      }
    
      
      
      console.log(previousImage);

      
      let image = document.createElement('img');
      image.src = data.data.memes[i].url
      
      let header = document.createElement('h2');
      
      header.textContent = data.data.memes[i].name
      document.body.querySelector('.container').appendChild(header);
      document.body.querySelector('.container').appendChild(image);
    
      function myFunction(event){console.log(event)
        if(event.target.id === "memeBtn"){
          document.querySelector(".container").style.background = 'silver';
         
        }
      }
      document.getElementById("memeBtn").addEventListener("focus", (event)=>myFunction(event));
    
          

      function changeColor(event)
          {

          if(event.target.id === "memeBtn"){
            document.querySelector(".container").style.background = 'white';
            console.log(event.currentTarget);
          } 

        }
          
          document.getElementById("memeBtn").addEventListener("blur",(event)=>changeColor(event));  
          
          
        
      };

   
    generateMeme();
   