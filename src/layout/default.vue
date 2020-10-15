<template>
  <div>
    <NavBar/>
    <router-view/>
  </div>  
</template>
<script lang="ts">
  import NavBar from '@/components/NavBar.vue';
  import { OpenIdConnectService } from '@/services/auth/openIdConnectService';
  import {Vue,Component, Inject  } from 'vue-property-decorator' 

  

  @Component(
    {
      components:
      {
          NavBar
      }
    }
  )
  
  export default class Default extends Vue{
    @Inject() private oidc!: OpenIdConnectService;
 
  }
</script>
<style>

  
</style>