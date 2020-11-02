<template>
    <div>
        <button @click="add()">Add</button>
        <div :is="comment.component" v-for="comment in comments" :key="comment.count"></div>
    </div>    
</template>

<script lang="ts">
import { OpenIdConnectService } from '@/services/auth/openIdConnectService';
import { Component, Inject, Vue } from 'vue-property-decorator';
import Comment from '@/components/card/Comment.vue';



@Component(
  {
      components:
      {
          Comment
      }
  })

export default class Comments extends Vue {
    @Inject() private oidc!: OpenIdConnectService;
    private comments: any = []
    private count = 0
    private commentAll = false

    private add()
    {
        this.count = this.count+1;
        this.comments.push({"component":Comment,"count":this.count});
        console.log(this.comments);
    }
    
}
</script>