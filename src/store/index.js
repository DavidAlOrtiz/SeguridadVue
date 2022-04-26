import { createStore } from 'vuex'
import router from '@/router'
export default createStore({
  state: {
    tareas : [],
    objForm:{
      id:'',
      nombre : '',
      categorias : [],
      estado : '',
      numero: 0
    }
  },
  getters: {
  },
  mutations: {
    set(stage, payLoad){
      stage.tareas.push(payLoad)
      //console.log(stage.tareas)
      //localStorage.setItem('tareas', JSON.stringify(stage.tareas))
    },
    eliminar(stage, payLoad){
      stage.tareas = stage.tareas.filter(item => item.id !== payLoad)
      //localStorage.setItem('tareas', JSON.stringify(stage.tareas))
    },
    tarea(stage, payLoad){
      if(!stage.tareas.find(item => item.id === payLoad)){
        router.push('/');
        return
      }
      stage.objForm = stage.tareas.find(item => item.id === payLoad)
      
    },
    update(stage, payload){
      stage.tareas = stage.tareas.map(item => item.id === payload.id ? payload : item)
      router.push('/')
      //localStorage.setItem('tareas', JSON.stringify(stage.tareas))
    },
    cargar(stage, payload){
      stage.tareas = payload;
    }
  },
  actions: {
    async cargarLocalStorage({commit}){
      try {
        const res = await fetch('https://tareas-vue-84b53-default-rtdb.firebaseio.com/tareas.json');
        const data = await res.json();
        //Consultar los datos de fire base
        const arregloBd = [];
        for(let i in data){
          arregloBd.push(data[i]);
        }
        console.log(arregloBd)
        commit('cargar', arregloBd)
      } catch (error) {
        console.log(e);
      }

    },
    async setTarea({commit}, objForm){
      try {
        const res = await fetch(`https://tareas-vue-84b53-default-rtdb.firebaseio.com/tareas/${objForm.id}.json`,{
          method: 'PUT',
          body : JSON.stringify(objForm),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error)
      }
      commit('set', objForm)

    },
    async deleteTareas({commit}, id){
      try {
        const res = await fetch(`https://tareas-vue-84b53-default-rtdb.firebaseio.com/tareas/${id}.json`,{
          method: 'DELETE'
        })
      } catch (error) {
        console.log("Error")
      }
      commit('eliminar', id)
    },
    setTareaEditar({commit}, id){
      commit('tarea', id)
    },
    async updateTarea({commit}, tarea){
      try {
        const res = await fetch(`https://tareas-vue-84b53-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`,{
          method: 'PUT',
          body : JSON.stringify(tarea),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await res.json();
        commit('update', data)
      } catch (error) {
        console.log(error)
      }
     
    }
  },
  modules: {
  }
})
