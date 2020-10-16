<template>
  <div>
    <v-row>
      <v-col>
        <v-card elevation="2">
          Home1
        </v-card>
      </v-col> 
    </v-row>
    <v-row>
      <v-col>
        <v-card elevation="2">
          Home2
        </v-card>
      </v-col> 
    </v-row>
    <v-row>
      <v-col>
        <v-card elevation="2">
          Home3
        </v-card>
      </v-col> 
    </v-row>
    <v-row>
      <v-col>
        <v-card elevation="2">
          Home4
        </v-card>
      </v-col> 
    </v-row>
  </div>
</template>

<script lang="ts">

import {OpenIdConnectService} from "../services/auth/openIdConnectService";
import {Vue,Component,Inject  } from 'vue-property-decorator' ;

@Component(
  {

  })
export default class Home extends Vue {
   @Inject() private oidc!: OpenIdConnectService;

}
</script>
