//Procurar o botão 
document.querySelector("#add-time")
//quando clicar no botão 
.addEventListener('click', cloneField)

//Executar uma ação 
function cloneField() {
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //booleam= true or false

    //pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    
    // para cada campo, limpar
    //primeira maneira de se fazer, mas nao a mais inteligente
    // fields[0].value = ""
    // fields[1].value = ""
    //essa é melhor
    fields.forEach(function(field) {
        //pega o field do momento e limpa ele
        field.value = ""
    })

    //colocar na página:onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer) 
}