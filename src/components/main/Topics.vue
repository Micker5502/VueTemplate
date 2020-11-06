<template>
  <div>
      <v-btn @click="add()">Add</v-btn>
    <v-skeleton-loader v-if="false" type="article"> </v-skeleton-loader>

    <!--Topic v-else v-for="topic of topics" :v-bind="topic" :key="topic"> topic </Topic-->

    <div
      v-else
      v-for="(topic) of topics"
      :key="topic.userName"
    >
    <Topic v-bind:topicDetail = topic></Topic>
    </div>
  </div>
</template>

<script lang="ts">
import { OpenIdConnectService } from "@/services/auth/openIdConnectService";
import { Component, Inject, Vue } from "vue-property-decorator";
import { TopicDetailModel } from "@/store/model/topic";
import Topic from "@/components/card/Topic.vue";

@Component({
  components: {
    Topic,
  },
})
export default class Topics extends Vue {
  @Inject() private oidc!: OpenIdConnectService;

  private topics: Array<TopicDetailModel> = [
    {
      userName: "1",
      nickName:  "123",
      content: "123",
      like:     2,
      images:  [
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972443.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972442.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972441.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972002.jpg",
      ]
    },
    {
      userName: "1",
      nickName:  "123",
      content: "123",
      like:     2,
      images:  [
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972443.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972442.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972441.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972002.jpg",
      ]
    },
    {
      userName: "1",
      nickName:  "123",
      content: "123",
      like:     2,
      images:  [
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972443.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972442.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972441.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972002.jpg",
      ]
    },
  ];
  private count = 0;
  private loading = true;

  private add() {
    this.count = this.count + 1;
    this.loading = false;
    //this.topics.push({ component: Topic, count: this.count });
    console.log(this.topics);
  }
}
</script>