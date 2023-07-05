import { Component } from "react";
import Main from "../templates/Main";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir!",
};

class UserCrud extends Component {
  render() {
    return <Main {...headerProps}>Cadastro de Usuário</Main>;
  }
}

export default UserCrud;
