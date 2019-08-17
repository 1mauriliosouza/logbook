<template>
  <b-row>
    <b-col cols="12">
      <h3>
        Adicionar Ticket
      </h3>
      <b-jumbotron>
        <template slot="lead">
          Data: {{board.data}}<br>
          Equipe: {{board.equipe}}<br>
          Operador: {{board.operador}}<br>
          Nodo: {{board.nodo}}<br>
          TIR: {{board.TIR}}<br>
          Titulo: {{board.titulo}}<br>
          Avisado: {{board.avisado}}<br>
        </template>
        <hr class="my-4">
        <b-btn class="edit-btn" variant="success" @click.stop="editboard(key)">Editar</b-btn>
        <b-btn variant="danger" @click.stop="deleteboard(key)">Deletar</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router/index'

export default {
  name: 'ShowBoard',
  data () {
    return {
      key: '',
      board: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('logs').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.board = doc.data();
      } else {
        alert("Ticket não existente!");
      }
    });
  },
  methods: {
    editboard (id) {
      router.push({
        name: 'EditBoard',
        params: { id: id }
      })
    },
    deleteboard (id) {
      firebase.firestore().collection('logs').doc(id).delete().then(() => {
        router.push({
          name: 'BoardList'
        })
      }).catch((error) => {
        alert("Erro ao remover documento: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
  .edit-btn {
    margin-right: 20px;
    width: 70px;
  }
</style>