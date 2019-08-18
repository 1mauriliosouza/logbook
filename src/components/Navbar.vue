<template>
<div id="navbar" class="header">
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#/">
        <img src="./logo.png" alt="logo_vodafone" height="30px">
        ANOC ES - Logbook
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#/add-board">Adicionar Ticket</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Digite o número do ticket"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Pesquisar</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>Autenticação</em></template>
          <b-dropdown-item v-b-modal.modal-1>Login</b-dropdown-item>
          <b-dropdown-item href="#">Logout</b-dropdown-item>
            <b-modal id="modal-1" title="Autenticação de usuários">
                <p class="my-4">Registro ainda não disponível.</p>
            </b-modal>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>


</template>

<script>
export default {
    name: "Navbar",
    props: {
        msg: String
    }
}
</script>

<style>
.header {
  position:fixed;
  left:0;
  top:0;
  width:100vw;
  z-index:200;
  height:100px;
  margin-right: 50px;
}
.btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus {
    outline: none !important;
    box-shadow: none;
}
li {
    list-style-type: none;
}
</style>