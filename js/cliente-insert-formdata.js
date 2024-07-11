document.addEventListener("submit", (e) => {
    const form = document.querySelector("form");
    let cliente = new FormData();
    cliente.append("codigo", form.inCodigo.value);
    cliente.append('nome', form.inNome.value);
    cliente.append('email', form.inEmail.value);

    console.log(cliente);
    e.preventDefault();
    
    const req = new XMLHttpRequest();
    req.onload = function (){
        if (req.status == 200){
            let resp = this.responseText;
            document.getElementById("resp").innerText = resp;
            form.reset();
        }
        else{
            alert(`Erro: ${req.status} ${req.statusText}`);
        }
    }
    req.open("POST", "cliente-insert-formdata.php");
    req.send(cliente);
   
})


