<template>
  <div>
    <v-row justify="space-around">
      <v-card >
        <v-img
          height="250px"
          max-width ="1250px"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >
          <v-card-title class=" mt-8 d-flex justify-center" >
            <v-avatar size="80px" >
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
      </v-card>
    </v-row>
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
