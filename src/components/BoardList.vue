<template>
  <b-row>
    <b-col cols="12">
      <h4 class="my-4">
        ANOC Logbook
      </h4>
      <b-table Borderless Striped Small Bordered responsive hover :items="logs" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Detalhes</b-btn>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router/index'

export default {
  name: 'BoardList',
  data () {
    return {
      fields: {
        data: { label: 'Data', sortable: true, 'class': 'text-left' },
        equipe: { label: 'Equipe', sortable: true, 'class': 'text-left' },
        operador: { label: 'Operador', sortable: true, 'class': 'text-left' },
        nodo: { label: 'Nodo', sortable: true, 'class': 'text-left' },
        tir: { label: 'TIR', sortable: true, 'class': 'text-left' },
        titulo: { label: 'Título', sortable: true, 'class': 'text-left' },
        avisado: { label: 'Avisado', sortable: true, 'class': 'text-left' },
        actions: { label: 'Ações', 'class': 'text-center' }
      },
      logs: [],
      errors: [],
      ref: firebase.firestore().collection('logs'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.logs = [];
      querySnapshot.forEach((doc) => {
        this.logs.push({
          key: doc.id,
          data: doc.data().data,
          equipe: doc.data().equipe,
          operador: doc.data().operador,
          nodo: doc.data().nodo,
          tir: doc.data().tir,
          titulo: doc.data().titulo,
          avisado: doc.data().avisado,
        });
      });
    });
  },
  methods: {
    details (board) {
      router.push({ name: 'ShowBoard', params: { id: board.key }})
    }
  }
}
</script>

<style>
  .table {
    font: 100px;
    width: 96%;
    margin: 0 auto;
  }
</style>