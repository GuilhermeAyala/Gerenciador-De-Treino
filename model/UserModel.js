let usuarios = [];

class Usuario {
    constructor(id, nome, email, senha){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    static listar(){
        return usuarios;
    }

    static adicionar(usuario){
        usuarios.push(usuario);
    }
}

export default Usuario;