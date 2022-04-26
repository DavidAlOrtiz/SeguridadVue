<template>
  <form @submit.prevent="procesarDatos">
   <Input :objForm="objForm"/>
  </form>
  <ListaTarea />
</template>

<script>
// @ is an alias to /src
import Input from '../components/Input.vue'
import {mapActions} from 'vuex'
import shortid from 'shortid'
import ListaTarea  from '../components/ListaTarea.vue'

export default {
  name: 'HomeView',
  components: {
    Input,
    ListaTarea
  },
  data(){
    return {
      objForm:{
        id:'',
        nombre : '',
        categorias : [],
        estado : '',
        numero: 0
      }
    }
  },
  methods:{
    ...mapActions(['setTarea']),
     procesarDatos(){
       console.log(this.objForm)
       if(this.objForm.nombre.trim() === ""){
         console.log("algo esta vacio");
         return;
       }
      console.log("No esta vacio");
      //Generando el id
      this.objForm.id = shortid.generate();
      this.setTarea( this.objForm)
      this.objForm = {
        id:'',
        nombre : '',
        categorias : [],
        estado : '',
        numero: 0
      }
     }
  }
}
</script>
