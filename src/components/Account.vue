<template>
<div>
   <button v-if="!isLogin" @click='Login()'>Login</button>
        <button v-else @click='Logout()'>Logout</button>
<<<<<<< HEAD
</div>
=======
        <button @click='Test()'>Test</button>
    </div>
>>>>>>> 039a8b919b18a494d36c300eca3b204a0d55c6bb
</template>

<script lang="ts">
import { OpenIdConnectService } from '@/services/auth/openIdConnectService';
import { User } from 'oidc-client';
import { Component, Inject, Vue } from 'vue-property-decorator';

@Component
export default class Account extends Vue {
    
    @Inject() private oidc!: OpenIdConnectService;
    private isLogin = false;
    private user = this.oidc.getUser();
    private gg: User | null = null;
    
    get User()
    {
        return this.user;
    }
    
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

    private Register()
    {
      console.log("Register");
      window.location.href = "https://localhost:5001/Account/Register"
      this.oidc.triggerSignOut();
    }
<<<<<<< HEAD

=======
    private async Test()
    {
        console.log(this.oidc.user.token_type + this.oidc.user.access_token);
        this.$https.defaults.headers.common['Authorization'] =  this.oidc.user.token_type + " " + this.oidc.user.access_token;
        const res: any = await this.$https.post(
         this.$urls.version+ this.$urls.test);
        console.log(res);
    }
>>>>>>> 039a8b919b18a494d36c300eca3b204a0d55c6bb
    public mounted() 
    {
        
        this.oidc.getUser().then((user)=>
        {
            this.isLogin = user!==null;
            this.gg = user;
            console.log(user);
        });
    }
}

</script>

<style scoped lang="less">

</style>
