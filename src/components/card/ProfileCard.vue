<template>
    <v-row justify="space-around">
        <v-col>
        <v-card class="mx-auto">
            <v-img
            height="250px" 
            src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
            >
            <v-card-title class=" mt-8 d-flex justify-center" >
                <v-avatar size="160px" >
                <img
                    alt="user"
                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                >
                </v-avatar>
            </v-card-title>
            </v-img>

            <p class="ml-3">
            John Doe
            </p>
            <v-divider class="mx-auto" ></v-divider>
            <v-app-bar>
                <template v-slot:extension>
                    <v-tabs align-with-title>
                    <v-tab to='/Profile'>Post</v-tab>
                    <v-tab to='/Profile/Detail'>Detail</v-tab>
                    <v-tab to='/Profile/Other'>Other</v-tab>
                    </v-tabs>
                </template>
            </v-app-bar>
        
        </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts">

import {OpenIdConnectService} from "@/services/auth/openIdConnectService";
import {Vue,Component,Inject  } from 'vue-property-decorator' ;

@Component(
  {
  })
export default class ProfileCard extends Vue {
   @Inject() private oidc!: OpenIdConnectService;

    
}
</script>
