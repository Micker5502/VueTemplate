<template>
  <div>


    <v-row>
      <v-col>
        <Topic v-bind:haveImage='false'/>
      </v-col> 
    </v-row>
    <v-row>
      <v-col>
        <Topic v-bind:haveImage='true'/>
      </v-col> 
    </v-row>
    <v-row>
      <v-col>
        <Topic v-bind:haveImage='true'/>
      </v-col> 
    </v-row>
    <v-row>
      <v-col>
        <Topic/>
      </v-col> 
    </v-row>

    
  </div>
</template>

<script lang="ts">

import {OpenIdConnectService} from "../services/auth/openIdConnectService";
import {Vue,Component,Inject  } from 'vue-property-decorator' ;
import Topic from '@/components/card/Topic.vue';

@Component(
  {
      components:
      {
          Topic
      }
  })
export default class Home extends Vue {
   @Inject() private oidc!: OpenIdConnectService;

    
}
</script>
