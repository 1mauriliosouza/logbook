<template>
  <b-row>
    <b-col cols="12">
      <h3>
        Adicionar Ticket
      </h3>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Data">
            <b-form-input id="data" v-model.trim="board.data"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Equipe">
            <b-form-input id="equipe" v-model.trim="board.equipe"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Operador">
            <b-form-input id="operador" v-model.trim="board.operador"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Nodo">
            <b-form-input id="nodo" v-model.trim="board.nodo"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="TIR">
            <b-form-input id="tir" v-model.trim="board.tir"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Título">
            <b-form-input id="titulo" v-model.trim="board.titulo"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Avisado">
            <b-form-input id="avisado" v-model.trim="board.avisado"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Salvar</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router/index'

export default {
  name: 'AddBoard',
  data () {
    return {
      ref: firebase.firestore().collection('logs'),
      board: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      this.ref.add(this.board).then(() => {
        this.board.data = ''
        this.board.equipe = ''
        this.board.operador = ''
        this.board.nodo = ''
        this.board.tir = ''
        this.board.titulo = ''
        this.board.avisado = ''
        router.push({
          name: 'BoardList'
        })
      })
      .catch((error) => {
        alert("Erro ao adicionar ticket: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>