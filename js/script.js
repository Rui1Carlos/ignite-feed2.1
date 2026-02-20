let posts = [];
let coments = [];

function coment() {
  let novo_coment = document.getElementById("post");
  if (novo_coment.value !="") {
      coments.push(novo_coment.value);
  }
    
    if (coments.length > 0) {
      let div = document.getElementById("card-maior");
      div.style.display = "block";
    
  }
}
