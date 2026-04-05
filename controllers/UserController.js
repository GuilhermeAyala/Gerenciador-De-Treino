import Usuario from "../service/UserModel.js"

function criarUsuario(req, res){
    const {id, nome, email, senha} = req.body;
    const caracterEspecial = ['!', '@', '#', '$', '%', '&','*', '?'];
    const hasUppercase = /[A-Z]/.test(senha);
    const hasSpecialChar = senha.split("").some(char => caracterEspecial.includes(char));

    if(typeof id !== "number" || id < 0){
        return res.status(400).json({message: "id deve ser um numero e maior que zero"})
    }
    if(typeof nome !== "string" || typeof email !== "string" || typeof senha !== "string"){
        return res.status(400).json({message: "Nome, email e senha, só podem ser strings"})
    }
    if(id == null || nome == null || email == null || senha == null){
        return res.status(400).json({message: "Nenhum atributo pode ser vazio"})
    }
    if(!email.includes('@')){
        return res.status(400).json({message: "Formato incorreto do email, deve conter @"})
    }
    if(senha.length < 10 || !hasSpecialChar || !hasUppercase){
        return res.status(400).json({message: "Senha deve ter mais de 10 caracteres, pelo menos um caracter especial e uma letra maiuscula"});
    }

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

function deletarUsuario(req, res){
    const { id } = req.params;
    const deletado = Usuario.deletar(id);

    if(!deletado){
        return res.status(404).json({message: "é necessário criar um usuário para que haja exclusão"})
    }

    return res.status(201).json({message: "Usuário deletado"});
}

export default {criarUsuario, listarUsuarios, editarUsuario, deletarUsuario};