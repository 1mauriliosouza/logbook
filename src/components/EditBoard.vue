<template>
  <b-row>
    <b-col cols="12">
      <h4 class="my-4">
       Editar Ticket
      </h4>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Data">
            <b-form-input id="data" v-model.trim="board.data" type="date"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Equipa">
            <b-form-select id="equipe" v-model="board.equipe" :options="tecnologias"></b-form-select>
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
            <b-form-input id="tir" v-model.trim="board.tir" type="number"></b-form-input>
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
            <b-form-select id="avisado" v-model="board.avisado" :options="informes"></b-form-select>
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
import DatePicker from 'vue2-datepicker'

export default {
  name: 'EditBoard',
  data () {
    return {
      key: this.$route.params.id,
      board: {},
      selected: null,
      tecnologias: [
        { text:'HFC'}, 
        { text:'AX'}, 
        { text:'EN'}, 
        { text:'FTTH'}
        ],
        informes: [
        { text:'Avisado a CDU (EULEN)'}, 
        { text:'Avisado a CDU (FLM)'}, 
        { text:'Cancelado'}, 
        { text:'Reaberto'}
        ],
      types: [
          'text',
          'number',
          'url',
          'date',
          `time`,
      ],
    }
  },
  created () {
    const ref = firebase.firestore().collection('logs').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.board = doc.data();
      } else {
        alert("Ticket não existente!");
      }
    });
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const updateRef = firebase.firestore().collection('logs').doc(this.$route.params.id);
      updateRef.set(this.board).then(() => {
        this.board.data = ''
        this.board.equipe = ''
        this.board.operador = ''
        this.board.nodo = ''
        this.board.tir = ''
        this.board.titulo = ''
        this.board.avisado = ''
        router.push({ name: 'ShowBoard', params: { id: this.$route.params.id }})
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