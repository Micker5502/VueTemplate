<template>
    <div>
        <v-card class="mx-auto">
            <v-row align="center" >
                <v-card-actions>
                <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                    <v-img
                        class="elevation-6"
                        alt=""
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <v-list-item-title>Evan You</v-list-item-title>
                    <v-list-item-subtitle>@Micker</v-list-item-subtitle>
                    </v-list-item-content>
                    
                </v-list-item>
                </v-card-actions>
                

            </v-row>
            <v-row>
                <v-card-actions>
                    <v-list-item class="grow">
                        <v-card-text>123</v-card-text>
                    </v-list-item>
                    
                </v-card-actions>
            </v-row>

                <v-card-actions v-show="haveImage">
                    <v-list-item class="grow">
                        <v-row>
                            <v-img src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                            <v-img src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                            <v-img src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                        </v-row>
                        
                    </v-list-item>
                    
                </v-card-actions>

                <v-divider class="mx-4" ></v-divider>
                <v-card-actions>
                    <v-list-item class="grow">
                        <v-btn @click="test()">
                            回復
                        </v-btn>
                        <v-divider class="mx-4" vertical></v-divider>
                        <v-btn>
                            <v-icon atl="Page">mdi-file-document-outline</v-icon>
                        </v-btn>
                        <v-row
                        align="center"
                        justify="end"
                        >
                        <v-icon class="mr-1">
                            mdi-heart
                        </v-icon>
                        <span class="subheading mr-2">256</span>
                        <span class="mr-1">·</span>
                        <v-icon class="mr-1">
                            mdi-share-variant
                        </v-icon>
                        <span class="subheading">45</span>
                        </v-row>
                    </v-list-item>
                </v-card-actions>

        </v-card>
    </div>    
</template>

<script lang="ts">
import { OpenIdConnectService } from '@/services/auth/openIdConnectService';
import { Component, Inject, Prop, Vue } from 'vue-property-decorator';

@Component

export default class Topic extends Vue {
    @Inject() private oidc!: OpenIdConnectService;
    @Prop([Boolean])
    haveImage: boolean|undefined;
    
    private isLogin = false;

    private test()
    {
        console.log(this.haveImage);
    }
}
</script>