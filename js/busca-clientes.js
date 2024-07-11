const btn = document.getElementById("btn");
const btnIncluirCliente = document.getElementById("btnIncluirCliente");
const content = document.getElementById("content");

btnIncluirCliente.addEventListener("click", (e) => {
   const frmIncluirCliente = document.getElementById("frmIncluirCliente");
   frmIncluirCliente.style.setProperty("display", "block");
});

btnIncluir.addEventListener("click", (e) => {
   const xhr = new XMLHttpRequest();
   let cliente = new FormData(document.getElementById("frmIncluirCliente"));
   xhr.onload = function () {
      if (xhr.status == 200) {
         alert("Inclusão ok!");
      }
      else {
         alert("Erro na inclusao.");
      }
   }
   xhr.open("Post", "insert-cliente.php");
   xhr.send(cliente);
   e.preventDefault();
})



btn.addEventListener("click", buscaClientes());
document.addEventListener("DOMContentLoaded", buscaClientes());

function buscaClientes() {
   const req = new XMLHttpRequest();
   req.onload = function () {
      if (req.status == 200) {
         let html = "<table class='table table-bordered table-hover table-sm'>";
         html += "<tr><th>Cod</th><th>Nome</th><th>Email</th></tr>";
         const vetorClientes = JSON.parse(this.responseText);
         console.log(vetorClientes);
         // buscar registros de clientes
         for (let cliente of vetorClientes) {
            html += "<tr>";
            html += `<td>${cliente.codigo}</td>`;
            html += `<td>${cliente.nome}</td>`;
            html += `<td>${cliente.email}</td>`;
            html += `<td>`;
            html += `<button class="btn btn-info onClick="showClienteUpdForm(${cliente.codigo});"><i class="fa-solid fa-house"></i></button>`;
            html += `<button class="btn btn-danger onClick="delCliente(${cliente.codigo});"><i class="fa-solid fa-trash-can"></i></button>`;
            html += '</td>';
            html += "</tr>";
         }
         html += "</table>";
         content.innerHTML = html;
      }
      else {
         alert(`Erro: ${req.status} ${req.statusText}`);
      }
   }
   req.open("GET", "busca-clientes.php");
   req.send();
}
function delCliente(id){
   if(confirm("Corfima a exclusão do registro?") == true){
      console.log(id);
      let xhr = new XMLHttpRequest();
      xhr.onload = function(){
         if(xhr.status==200){
            alert("Exclusão Ok");
         }
         else{
            alert(`Erro: ${xhr.status} ${xhr.statusText}`);
         }
      }
      xhr.open("POST", "cliente-delete.php");
      xhr.send(data); }
}

