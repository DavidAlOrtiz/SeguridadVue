<template>
    <h1 class="my-5">Registro de usuarios</h1>
    <form >
        <input type="email" placeholder="Email" 
        class="form-control my-3" v-model.trim="email">
        <input type="password" placeholder="Password"
         class="form-control my-3" v-model.trim="password"> 
        <input type="password" placeholder="Password" 
        class="form-control my-3" v-model.trim="password2"> 
        <button class="btn btn-primary" type="submit" :disabled='bloquear' >Registrar</button>
    </form>
    
</template>

<script >

export default {
    data() {
        return {
            email: '',
            password: '',
            password2: ''
        }
    },
    computed:{
        bloquear(){
            if(!this.email.includes('@')){
                return true;
            }
            if(this.password.length > 5 && this.password === this.password2 ){
                return false;
            }
            return true;
        }
    }
}

</script>

<style scoped>

</style>