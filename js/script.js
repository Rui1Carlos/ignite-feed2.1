let posts = [];
let coments = [];

function publicar() {
  let nova_pub = document.getElementById("post");
  if (nova_pub.value !="") {
    posts.push(nova_pub.value);
  }
    
  if (posts.length > 0) {
    let publicacao = document.getElementById("publicacao")
    publicacao.innerHTML = nova_pub.value
      let div = document.getElementById("card-maior");
      div.style.display = "block";
    
  }

}

function comentar(event) {
  
  if (event.key == "Enter") {
      
      let texto = event.target.value
      let comentario = document.getElementById("comentario")
      //console.log(comentario)
    comentario.innerHTML = texto
    let div = document.getElementById("comentarios");
    div.style.display = "block";
        
      event.target.value = ""; 
      
    } 
      
  }
  



