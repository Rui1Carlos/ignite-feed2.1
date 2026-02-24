"use strict";

let posts = [];
let coments = [];

function publicar() {
    let nova_pub = document.getElementById("post");
    if (nova_pub.value !== "") {
        posts.push(nova_pub.value);
    }
    if (posts.length > 0) {
        let publicacao = document.getElementById("publicacao");
        publicacao.innerHTML = nova_pub.value;
        nova_pub.value = "";
        let div = document.getElementById("card-maior");
        div.style.display = "block";
    }
}
//# sourceMappingURL=Script.js.map