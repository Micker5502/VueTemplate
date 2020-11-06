<template>
  <div>
    <v-skeleton-loader :loading="false" height="94" type="list-item-two-line">
      <v-row>
        <v-col>
          <v-card>
            <v-row>
              <v-card-actions>
                <v-list-item>
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      alt=""
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{
                      topicDetail.userName
                    }}</v-list-item-title>
                    <v-list-item-subtitle
                      >@{{ topicDetail.nickName }}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-card-actions>
            </v-row>

            <v-card-text class="text--primary">{{
              topicDetail.content
            }}</v-card-text>

            <v-card-actions>
              <v-container fluid>
                <v-row no-gutters>
                  <v-col
                    v-for="(image, index) of topicDetail.images"
                    :key="image"
                    cols="auto"
                    child-flex
                  >
                    <v-card
                      v-if="index != Object.keys(topicDetail.images).length - 1"
                      flat
                      tile
                      class="d-flex"
                    >
                      <v-img
                        max-height="500px"
                        max-width="250px"
                        :src="image"
                        :lazy-src="image"
                        @click="test2()"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-card>

                    <v-card v-else flat tile class="d-flex" v-ripple>
                      <v-img
                        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                        contain
                        max-height="500px"
                        max-width="250px"
                        :src="image"
                        :lazy-src="image"
                        @click="test2()"
                      >
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-icon color="white">mdi-dots-horizontal</v-icon>
                        </v-row>
                        <template v-slot:placeholder> </template>
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-actions>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions style="padding: 0px">
              <v-list-item>
                <v-btn small text @click="showCommentBox()"> 回復 </v-btn>
                <v-divider class="mx-4" vertical></v-divider>
                <v-btn small text @click="show()">
                  <v-icon atl="Page">mdi-file-document-outline</v-icon>
                </v-btn>
                <v-row align="center" justify="end">
                  <v-btn small icon>
                    <v-icon class="mx-2"> mdi-heart </v-icon>
                  </v-btn>
                  <span class="subheading mr-2">{{ topicDetail.like }}</span>

                  <v-btn small icon>
                    <v-icon class="mr-1"> mdi-share-variant </v-icon>
                  </v-btn>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>

            <v-divider class="mx-4"></v-divider>

            <v-container fluid v-if="commentBox">
              <!--<v-row no-gutters>
                <v-col class="col-1" style="padding-left: 0px">
                  <v-avatar size="32" color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      alt=""
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col>
                  <v-textarea
                    value=""
                    auto-grow
                    solo
                    outlined
                    rows="1"
                    style="padding-top: 0px"
                    class="rounded-xl"
                  ></v-textarea>
                </v-col>
              </v-row>-->

              <v-row no-gutters>
                <v-flex>
                  <v-list three-line style="padding: 3px">
                    <v-list-item>
                      <v-list-item-avatar size="32" color="grey darken-3">
                        <v-img
                          class="elevation-6"
                          alt=""
                          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                        ></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content style="padding: 0px">
                        <v-card class="rounded-xl" color=" darken-4" outlined>
                          <v-list three-line style="padding: 0px">
                            <v-list-item style="padding: 3px">
                              <v-list-item-content>
                                <v-textarea
                                  value=""
                                  auto-grow
                                  solo
                                  flat
                                  hide-details
                                  rows="1"
                                  style="padding-top: 0px"
                                  class="rounded-xl"
                                ></v-textarea>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </v-card>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-flex>
              </v-row>
            </v-container>

            <v-container fluid>
              <Comments></Comments>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-skeleton-loader>
  </div>
</template>

<script lang="ts">
import { OpenIdConnectService } from "@/services/auth/openIdConnectService";
import { BaseModelResp } from "@/store/model/baseModel";
import { User } from "@/store/model/users";
import { test2Module, userModule } from "@/store";
import Comments from "@/components/main/Comments.vue";
import { TopicDetailModel } from "@/store/model/topic";
import { Component, Inject, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    Comments,
  },
})
export default class Topic extends Vue {
  @Inject() private oidc!: OpenIdConnectService;

  @Prop({ required: true })
  topicDetail: TopicDetailModel;

  private isLogin = false;
  private commentBox = false;

  private async test() {
    this.$https.defaults.headers.common["Authorization"] =
      this.$oidc.user.token_type + " " + this.$oidc.user.access_token;
    const res: any = await this.$https
      .post(this.$urls.version + this.$urls.getAccount)
      .then((Response) => {
        const result: BaseModelResp<User> = Response.data;

        userModule.getAccount(result);
      });
  }

  private async test2() {
    test2Module.setUserNames2(1, "1");
    console.log(this.$store.hasModule("test2"));
  }

  private show() {
    console.log(userModule.userDetail);
  }

  private showCommentBox() {
    this.commentBox = true;
  }
}
</script>