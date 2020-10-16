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
    default_layout = 'default'; 

    get layout()
    {
       return (this.$route.meta.layout || this.default_layout) + '-layout'
    }
  }
</script>




