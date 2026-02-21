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
    nova_pub.value=""
      let div = document.getElementById("card-maior");
      div.style.display = "block";
    
  }

}

function comentar(event) {
  let usuarioAtual = 'Leslie Alexander';
  let comentarios = document.getElementById('comentarios');

  
  function atualizarComentarios() {
    comentarios.innerHTML = '';
    
    if (coments.length === 0) {
      comentarios.innerHTML = '<p style="text-align: center; color: #999;">Nenhum comentário ainda. Seja o primeiro!</p>';
      return;
    }
    coments.forEach(com => {
      const isUsuarioAtual = com.nome === usuarioAtual;
      const selo = isUsuarioAtual ? '<span class="tempo">(você)</span>' : '';
      const modalId = "modal-" + com.id

      const div = document.createElement('div');
      div.classList.add('comentario');
      div.innerHTML = `
  <img src="assets/Rectangle 4234.png" alt="Avatar" />
  <div>
  <div class="coment">
      <div class="campo">
        <div class="cabecalho">
          <div class="sobre">
            <p class="name">
              ${com.nome} ${selo}
            </p>
            <p class="tempo">2h</p>
          </div>
          <div>
            <a href="#${modalId}">
              <img src="assets/Delete.png" alt="Excluir" />
            </a>
          </div>
             <!-- Modal de exclusão -->
          <div id="${modalId}" class="modal">
            <div class="modal-content">
              <div class="modal-excluir">
                <h2>Excluir comentário</h2>
                <p class="p1">Você tem certeza que gostaria de excluir este comentário?</p>
              </div>
              <div class="botoes">
                <a href="#">
                  <button class="cancelar"><p>cancelar</p></button>
                </a>
                <a href="#">
                  <button class="confirmar" data-id="${com.id}"><p>Sim, excluir</p></button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p class="texto">${com.mensagem}</p>
      </div>
      <button class="reacoes ${com.apleudir > 0 ? 'reagido' : ''}" data-id="${com.id}">
        <img src="assets/Vector.png" alt="Aplaudir" />
        <p>Aplaudir • ${com.apleudir || 0}</p>
      </button>
    </div>
  </div>
  `;

      comentarios.appendChild(div);
    });

    
    document.querySelectorAll('.confirmar').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-id');
        excluirComentario(id);
        window.location.hash = ''; // Fecha o modal
      });
    });

    
    document.querySelectorAll('.reacoes').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-id');
        aplaudirComentario(id);
      });
    });

  }
  
  function adicionarComentario(nome, mensagem) {
    const novo = {
      id: Date.now().toString(), // ID único baseado no timestamp
      nome: nome,
      mensagem: mensagem,
      data: new Date().toISOString(),
      apleudir: 0
    };

    coments.push(novo);
    atualizarComentarios();
  }
  
  function excluirComentario(id) {
    coments = coments.filter(com => com.id !== id);
    atualizarComentarios();
  }
  
  function aplaudirComentario(id) {
    const com = coments.find(c => c.id === id);
    
    if (com) {
      com.apleudir = (com.apleudir || 0) + 1;
      atualizarComentarios(); 
    }
  }



  if (event.key == "Enter") {
      
    let texto = event.target.value
    let comentario = document.getElementById("comentario")

    adicionarComentario(usuarioAtual, texto)
      comentario.value=""
    
    
        
    event.target.value = ""; 
 
      
    } 
      
}
  



