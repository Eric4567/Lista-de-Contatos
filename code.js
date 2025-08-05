function Add()
{
    let name = document.getElementById("Name").value
    let num = document.getElementById("Phone").value
    let PhoneNumber = num.toString()
    let contato = name
    if(name.trim() === "")
    {
        return alert("É preciso colocar o nome do contato")
    }
    if(PhoneNumber.toString().toLowerCase() === "e"){
        return alert("O Telefone precisa ser um número")
    }

    else
    {
    if(localStorage.length > 0)
    {
        let repeat = false
      for(i = 0; i < localStorage.length; i++)
      {
        for (const [key, value] of Object.entries(localStorage)) 
            {
                // let key = localStorage.key(i)
                // let valor = localStorage.getItem(key)
                if(value == PhoneNumber)
                {
                    alert("Número de telefone repetido")
                    repeat = true
                    break;
                }      
            }
      }
        if(!repeat)
        {
            localStorage.setItem(name, PhoneNumber)
            document.getElementById("List").innerHTML = ""
            show()
        }
    }
        else
        {
            localStorage.setItem(name, PhoneNumber)
            document.getElementById("List").innerHTML = ""
            show()
         }
    }
}                
function show()
{
    document.getElementById("List").innerHTML = ""
    for(i = 0; i < localStorage.length; i++)
    {
        let chave = localStorage.key(i)
        let id = localStorage.getItem(chave)
        let contact = chave + id

        let ul = document.getElementById("List")
        let div = document.createElement("div")
        let NewLi = document.createElement("li")
        let p = document.createElement("p")
        let NewButton = document.createElement("button")
        NewButton.addEventListener("click", function(){
            let option = confirm("Você tem certeza que quer excluir este contato?")
            if(option == true){
                localStorage.removeItem(chave)
                show()
            }
            else{
            }
        })
        div.id = "element"
        NewButton.textContent = "Remover"
        NewButton.id = "button-element"
        p.id = "p-element"
        p.textContent = contact
        div.appendChild(NewButton)
        div.appendChild(p)
        NewLi.appendChild(div)
        ul.appendChild(NewLi)
    }
}