<template>


    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

        <!-- <button v-if="!isLogin" @click='Login()'>Login</button>
        <button v-else @click='Logout()'>Logout</button> -->


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


