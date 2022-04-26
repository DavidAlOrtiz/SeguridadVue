<template>
 <h1>Tarea a Editar: {{objForm.nombre}}</h1>
  
  <form @submit.prevent="updateTarea(objForm)">
      <Input :objForm="objForm" />
  </form>
  
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Input from '../components/Input.vue'
export default {
    components:{
        Input
    },
    computed:{
        ...mapState(['objForm'])
    },
    methods:{
        ...mapActions(['setTareaEditar', 'updateTarea'])
    },
    created(){
        this.setTareaEditar(this.$route.params.id);
    }
}
</script>

<style>

</style>