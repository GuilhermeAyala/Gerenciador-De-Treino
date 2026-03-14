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

    static editar(id, nome, email, senha){
        const index = usuarios.findIndex(u => String(u.id) === String(id));
        if(index === -1){ return null};

        usuarios[index] = {...usuarios[index], nome, email, senha};
        return usuarios[index];
    }
}

export default Usuario;