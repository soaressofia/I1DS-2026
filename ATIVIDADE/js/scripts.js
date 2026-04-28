letuserCount=0;

constcadastrar= (event) => {
event.preventDefault();

letnome=document.getElementById("nome").value;
letemail=document.getElementById("email").value;

letlista=document.getElementById("lista");

userCount++;
letid=userCount;

letnovoItem=document.createElement("li");
novoItem.setAttribute("data-id",id);

novoItem.innerHTML=id+" - "+nome+" - "+email+
` <button onclick="editar(${id})">Editar</button>
    <button onclick="excluir(${id})">Excluir</button>`;

lista.appendChild(novoItem);

document.getElementById("nome").value="";
document.getElementById("email").value="";
}

consteditar= (id) => {
console.log("Editar:",id);
}

constexcluir= (id) => {
constitens=document.querySelectorAll("li");

itens.forEach((item) => {
if (item.getAttribute("data-id")==id) {
item.remove();
    }
  });
}