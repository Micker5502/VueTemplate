<template>
    <div>
        <button v-if="!isLogin" @click='Login()'>Login</button>
        <button v-else @click='Logout()'>Logout</button>
    </div>
</template>

<script lang="ts">
import { OpenIdConnectService } from '@/services/auth/openIdConnectService';
import { Component, Inject, Vue } from 'vue-property-decorator';

@Component
export default class Account extends Vue {
    
    @Inject() private oidc!: OpenIdConnectService;
    private isLogin = false;
    private async Login()
    {
      console.log("Login");
      await this.oidc.triggerSignIn();
    }
    private async Logout()
    {
      console.log("Logout");
      await this.oidc.triggerSignOut();
    }

    private async UserAvailable() 
    { 
        return !this.oidc.userAvailable;
    }
    
    public mounted() 
    {
        this.oidc.getUser().then((user)=>
        {
            this.isLogin = user!==null;
        });
    }
}

</script>

<style scoped lang="less">

</style>
