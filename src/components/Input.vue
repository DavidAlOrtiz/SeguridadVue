<template>
  <input type="text"
    class="form-control my-2 " placeholder="ingresa tu nombre" 
     v-model.trim="objForm.nombre"/>

    <div class="form-check form-check-inline">
      <input type="checkbox" 
        id="chek"
        class="form-check-input"
        v-model="objForm.categorias"
        value="node JS"
      />
      <label for="chek" class="form-check-label">Node js</label>
    </div>

    <div class="form-check form-check-inline">
      <input type="checkbox" 
        id="chek2"
        class="form-check-input"
        v-model="objForm.categorias"
        value="Java"
      />
      <label for="chek2" class="form-check-label">Java</label>
    </div>

    <div class="mt-3">
      <div class="form-check form-check-inline">
          <input type="radio" 
          id="radio1"
          class="form-check-input"
          v-model="objForm.estado"
          value="Urgente"
        />
      <label for="radio1" class="form-check-label">Urgente</label>
      </div>
      <div class="form-check form-check-inline">
          <input type="radio" 
          id="radio2"
          class="form-check-input"
          v-model="objForm.estado"
          value="Relajado"
        />
      <label for="radio2" class="form-check-label">Relajado</label>
      </div>
      <div class="mt-2">
          <input type=number class="form-control" 
          v-model.number="objForm.numero"/>
      </div>
    </div>
    <input type="submit" :disabled="desavilitar" class="btn btn-primary mt-2 w-100" value="Enviar" />
</template>

<script>

export default {
    props:{
        objForm: Object,
    },
    computed:{
    desavilitar(){
      return this.objForm.nombre.trim() === "" ? true : false
    }
  },
}
</script>

<style>

</style>