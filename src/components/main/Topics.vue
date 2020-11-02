<template>
    <div>
        <button @click="add()">Add</button>
        <div :is="topic.component" v-for="topic in topics" :key="topic.count"></div>
    </div>    
</template>

<script lang="ts">
import { OpenIdConnectService } from '@/services/auth/openIdConnectService';
import { Component, Inject, Vue } from 'vue-property-decorator';
import Topic from '@/components/card/Topic.vue';



@Component(
  {
      components:
      {
          Topic
      }
  })

export default class Topics extends Vue {
    @Inject() private oidc!: OpenIdConnectService;
    private topics: any = []
    private count = 0
    private add()
    {
        this.count = this.count+1;
        this.topics.push({"component":Topic,"count":this.count});
        console.log(this.topics);
    }
    
}
</script>