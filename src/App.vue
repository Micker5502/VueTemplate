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
  
<<<<<<< HEAD

=======
>>>>>>> 039a8b919b18a494d36c300eca3b204a0d55c6bb
  @Component(
    {
    }
  )
  
  export default class App extends Vue{
    @Provide() private oidc: OpenIdConnectService = OpenIdConnectService.getInstance();
<<<<<<< HEAD
    default_layout = 'default'; 

    get layout()
    {
       return (this.$route.meta.layout || this.default_layout) + '-layout'
    }
=======

>>>>>>> 039a8b919b18a494d36c300eca3b204a0d55c6bb
  }
</script>




