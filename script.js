

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
