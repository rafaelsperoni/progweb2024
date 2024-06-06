let cursos = [
    {
        id: 1,
        nome: 'TSI - EaD',
        semestres: 5,
        coordenador: 'Joice Seleme Mota'
    },
    {
        id: 2,
        nome: 'BSI',
        semestres: 8,
        coordenador: 'Aujor Andrade'
    },
    {
        id: 3,
        nome: 'TNI',
        semestres: 6,
        coordenador: 'Gianfranco'
    },
]

function getCurso(id){
    return cursos[id-1]
}


/////////////////////////
const express = require('express')

app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res)=>{
    res.send('Olá - página inicial')
})

app.get('/cursos', (req, res) => {

    res.render('cursos', {cursos: cursos})
})

app.get('/cursos/:id', (req, res) => {
    let curso = getCurso(req.params.id)
    res.render('curso', {curso: curso})
})

app.get('/novocurso', (req, res)=>{
    dados = {operacao: 'Inclusão', action: 'insertcurso'}
    res.render('formcurso', {dados: dados})
})

app.post('/insertcurso', (req, res)=>{
    res.send(req.body)
})

app.post('/updatecurso', (req, res)=>{
    res.send(req.body)
})

app.get('/alteracurso/:id', (req, res)=>{
    dados = {
        operacao: 'Alteração',
        action: '../updatecurso',
        curso: getCurso(req.params.id)
    }
    res.render('formcurso', {dados: dados})
})

app.use(express.static('public'))

app.listen('3000', () => {
    console.log('Servidor rodando na porta 3000')
})