//Dados
const proffys = [
    {
       name: "Diego Fernandes",
       avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
       whatsap: "37892373728",
       bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
       subject: "Quimíca",
       cost: "20",
       weekday: [0],
       time_from: [720],
       time_to: [1220]
    },
    {
        name: "Lucas Montano",
        avatar: "https://avatars.githubusercontent.com/u/7559318?s=460&u=9b45fc98ab22e71efa4951eee14cf349a73411ec&v=4", 
        whatsap: "37892373728",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Quimíca",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Matheus Riquelme",
        avatar: "https://avatars.githubusercontent.com/u/53120281?s=460&u=c4ef299aa2c13abcb13a406ae278df2533042c76&v=4", 
        whatsap: "35987234678",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Quimíca",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades
function getSubject(subjectNumber) {
    const position = +subjectNumber -1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
    //se tiver dados (data)
    if(isNotEmpty){
        data.subject = getSubject(data.subject)

        //adicionar data a lista de proffys
        proffys.push(data) 

        return res.redirect("/study")
    }

    // se nao, mostrar a pagina
    return res.render("give-classes.html", {subjects, weekdays})
}

//Servidor
const express = require('express')
const server = express()

// configurar nunjucks {template engine}
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server, 
    noCache: true,
})

//inicio e configuração do servidor
server
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start do servidor
.listen(5500)

