import Usuario from "../model/UserModel.js"

function criarUsuario(req, res){
    const {id, nome, email, senha} = req.body;

    const usuario = new Usuario(
        id,
        nome,
        email, 
        senha
    );
    
    Usuario.adicionar(usuario);
    res.status(201).json({message: "Usuario criado"});
}

function listarUsuarios(req, res) {
    let listaUsuarios = Usuario.listar();

    if(listaUsuarios.length === 0){
        return res.status(404).json({message: "Nenhum usuário listado"})
    }

    res.json(listaUsuarios);
}

function editarUsuario(){
    const {id, nome, email, senha} = req.body;
    const usuario = Usuario.find(usuario => Usuario.id === id)
    if(!usuario){
        return res.status(404).json({message: "Usuário não encontrado"})
    }

    Usuario.update({nome, email, senha})
    return res.json(usuario);

}

function excluirUsuario(){}

export default {criarUsuario, listarUsuarios, editarUsuario, excluirUsuario};