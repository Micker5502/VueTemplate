<template>
  <div>
    
    <ProfileCard/>
      <router-view/>
  </div>
</template>

<script lang="ts">

import {OpenIdConnectService} from "../services/auth/openIdConnectService";
import {Vue,Component,Inject  } from 'vue-property-decorator' ;
import Topic from '@/components/card/Topic.vue';
import ProfileCard from '@/components/card/ProfileCard.vue'

@Component(
  {
      components:
      {
          Topic,
          ProfileCard
      }
  })
export default class Home extends Vue {
  @Inject() private oidc!: OpenIdConnectService;

  private add()
  {
    console.log(this.$refs.Topic);
  }
    
}
</script>
