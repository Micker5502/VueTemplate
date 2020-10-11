<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Account/>
  </div>
</template>

<script lang="ts">
import Account from '@/components/Account.vue'
import {OpenIdConnectService} from "../services/auth/openIdConnectService";
import {Vue,Component,Inject  } from 'vue-property-decorator' ;

@Component(
  {
      components:
      {
          Account
      }
  })
export default class Home extends Vue {
   @Inject() private oidc!: OpenIdConnectService;

    
}
</script>
