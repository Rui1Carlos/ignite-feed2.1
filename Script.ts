
let posts: string[] = [];
let coments: Comentario[] = [];


type Comentario = {
  id: string;
  nome: string;
  mensagem: string;
  data: string;
  apleudir: number;
};



function publicar(): void {
  let nova_pub = document.getElementById("post") as HTMLInputElement;

  if (nova_pub.value !== "") {
    posts.push(nova_pub.value);
  }

  if (posts.length > 0) {
    let publicacao = document.getElementById("publicacao") as HTMLElement;
    publicacao.innerHTML = nova_pub.value;

    nova_pub.value = "";

    let div = document.getElementById("card-maior") as HTMLElement;
    div.style.display = "block";
  }
}

