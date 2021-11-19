/*const photos = 'https://api.thecatapi.com/v1/images/search';
const words = 'https://random-word-api.herokuapp.com/word?number=5';



function checkStatus(res) {
    if (!res.ok) Promise.reject(new Error(res.statusText));
    return Promise.resolve(res.json());
  }

const renderImage = (imgUrl) => {
    const wrap = document.getElementById('image-wrap');
    
    const img = document.createElement('img');
    img.src = imgUrl;
    wrap.append(img);
}


const renderText = (ord) => {
    const wrap = document.getElementById('text-wrap');
    let text = null ;
    ord.forEach(word => text += `${word} `);
    wrap.append(text);
        
   
}

async function renderCard() {
    try {
        const photoApi = await fetch(photos);
        const photoApiData = await checkStatus(photoApi);
        const wordsApi = await fetch(words);
        const wordsApiData = await checkStatus(wordsApi);

        const photoImgUrl = photoApiData[0].url
        renderImage(photoImgUrl);
        renderText(wordsApiData);

    } catch(error) {
        console.log('Error:' , error)
    }
}

renderCard();*/



async function renderUsers() {
    let response = await fetch('https://api.github.com/users?number=10');
    console.log(response);
    let data = await response.json()
    console.log(data)
    
    let render = "";
    data.map((values)=>{
        
        render +=`<div class="box">
        <img src =${values.avatar_url}>
        <h1> Username: ${values.login}</h1>
        <h2>ID: ${values.id}</h2>
        <h3>ID_Node: ${values.node_id}</h3>      
        <h4>URL: ${values.avatar_url}"</h4>
        </div>`
        
    });
    document.getElementById("kort").innerHTML=render;
    

}
renderUsers();
