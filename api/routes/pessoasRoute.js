const { Router } = require("express")
const pessoaController = require("../controllers/PessoaController")

const router = Router();

router.get('/pessoas', pessoaController.pegaTodasPessoas);
router.get('/pessoas/:id', pessoaController.pegaUmaPessoa);
router.post('/pessoas', pessoaController.criarPessoa);
router.put('/pessoas/:id', pessoaController.atualizaPessoa)
router.delete('/pessoas/:id', pessoaController.apagaPessoa)
router.get('/pessoas/:estudanteID/matricula/:matriculaID', pessoaController.pegaUmaMatricula)
router.post('/pessoas/:estudanteID/matricula', pessoaController.criarMatricula)
router.put('/pessoas/:estudanteID/matricula/:matriculaID', pessoaController.atualizaMatricula)
router.delete('/pessoas/matricula/:matriculaID', pessoaController.apagaMatricula)


module.exports = router;

