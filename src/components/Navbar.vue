<template>
<div id="navbar" class="header">

<b-nav class="m-4" align="right">
<b-button-group>
    <b-button class="btn-danger" size="md" href="#/add-board">Adicionar Ticket</b-button>
    <b-button class="btn-danger active" size="md" aria-label="Close" href="#/">
        <span aria-hidden="true">&times;</span>
    </b-button>
</b-button-group>
</b-nav>
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
</style>