<template>
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
                    <v-list-item-title> Micker </v-list-item-title>
                    <v-list-item-subtitle class="wrap-text">
                      大家好我是變態老大家好我是變態老大家好我是變態老大家好我是變態老大大家好我是變態老大家好我是變態老大家好我是變態老大家好我是變態老大大家好我是變態老大家好我是變態老大家好我是變態老大家好我是變態老大
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-flex>
  </v-row>
</template>

<script lang="ts">
import { OpenIdConnectService } from "@/services/auth/openIdConnectService";
import { Component, Inject, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Comment extends Vue {
  @Inject() private oidc!: OpenIdConnectService;
}
</script>

<style >
.wrap-text {
  -webkit-line-clamp: unset !important;
}
</style>