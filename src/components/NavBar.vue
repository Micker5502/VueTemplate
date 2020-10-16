<template>

  <div>
  </div>
</template>

<script lang="ts">
import { OpenIdConnectService } from '@/services/auth/openIdConnectService';
import { Component, Inject, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
    
    @Inject() private oidc!: OpenIdConnectService;
    private isLogin = false;
    private user = this.oidc.getUser();


    public mounted() 
    {
        
        this.oidc.getUser().then((user)=>
        {
            this.isLogin = user!==null;
            console.log(user);
        });
    }
}

</script>


