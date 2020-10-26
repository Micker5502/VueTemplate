<template>
  <v-app>
    <component :is="layout">
      <router-view/>
    </component>
  </v-app>
</template>

<script lang="ts">
  import {Vue,Component,Provide  } from 'vue-property-decorator' 
  import {OpenIdConnectService} from "./services/auth/openIdConnectService";
  
  @Component(
    {
    }
  )
  
  export default class App extends Vue{
    @Provide() private oidc: OpenIdConnectService = OpenIdConnectService.getInstance();
<<<<<<< HEAD
    private asd()
    {
      console.log(this.oidc);
    }

    
  }
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
=======
<<<<<<< HEAD
    default_layout = 'default'; 

    get layout()
    {
       return (this.$route.meta.layout || this.default_layout) + '-layout'
>>>>>>> 2ef15c335b0a42130346b8e95f53f9901b0b8a51
    }
=======

>>>>>>> 039a8b919b18a494d36c300eca3b204a0d55c6bb
  }
</script>




