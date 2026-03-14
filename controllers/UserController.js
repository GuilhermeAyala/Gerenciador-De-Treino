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

function editarUsuario(req, res){
    const { id } = req.params;
    const {nome, email, senha} = req.body;

    const atualizado = Usuario.editar(id, nome, email, senha);

    if(!atualizado){
        return res.status(404).json({message: "Usuário não encontrado"})
    }

    return res.json(atualizado);

}

function excluirUsuario(){}

export default {criarUsuario, listarUsuarios, editarUsuario, excluirUsuario};