<template>
    <div>
        <v-row >
            <v-col>
                <v-card >
                    <v-row >
                        <v-card-actions>
                            <v-list-item >
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
                    <v-row >
                        <v-card-actions>
                            
                                <v-card-text>123</v-card-text>

                        </v-card-actions>
                    </v-row>

                        <v-card-actions v-show="haveImage">
                            <v-container fluid>
                                <v-row no-gutters>
                                    <v-col > 
                                        <v-img contain max-height="500px" max-width="250px" src="data:image/jpeg;base64,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"></v-img>
                                    </v-col>
                                    <v-col > 
                                        <v-img contain max-height="500px" max-width="250px" src="https://n.sinaimg.cn/sinacn10123/654/w2000h1054/20200106/ec62-imrkkfy4735074.jpg"></v-img>
                                    </v-col>
                                    <v-col > 
                                        <v-img contain max-height="500px" max-width="250px" src="https://lh3.googleusercontent.com/proxy/gBAYkMIGZMO4ifQeNLudyzfshSeLfHbjAcChiAO905BWe-2FWtlb_eKbEJWQlrl-yAompxlAG7Tman01Ni4lsZBAtbez5bnwN9JuJ9UIOtA70u0KPdfgxV_lHahB"></v-img>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-actions>

                        <v-divider class="mx-4" ></v-divider>

                        <v-card-actions>
                            <v-list-item> 
                                <v-btn @click="test2()">
                                    回復
                                </v-btn>
                                <v-divider class="mx-4" vertical></v-divider>
                                <v-btn @click="show()">
                                    <v-icon atl="Page">mdi-file-document-outline</v-icon>
                                </v-btn>
                                <v-row
                                align="center"
                                justify="end"
                                >
                                <v-btn icon>
                                    <v-icon class="mr-1">
                                        mdi-heart
                                    </v-icon>
                                </v-btn>
                                <span class="subheading mr-2">256</span>
                                <span class="mr-1">·</span>
                                <v-btn icon>
                                <v-icon class="mr-1">
                                    mdi-share-variant
                                </v-icon>
                                </v-btn>
                                <span class="subheading">45</span>
                                </v-row>

                            </v-list-item>
                        </v-card-actions>

                        <v-divider class="mx-4" ></v-divider>

                        <v-container fluid>
                            <Comments></Comments>
                        </v-container>
                </v-card>
            </v-col>
        </v-row>
    </div>    
    
</template>

<script lang="ts">
import { OpenIdConnectService } from '@/services/auth/openIdConnectService';
import { BaseModelResp } from '@/store/model/baseModel';
import { User } from "@/store/model/users"
import {test2Module, userModule} from '@/store'
import Comments from '@/components/main/Comments.vue'
import { Component, Inject, Prop, Vue } from 'vue-property-decorator';


@Component(
{
    components:{
        Comments
    }
})

export default class Topic extends Vue {
    @Inject() private oidc!: OpenIdConnectService;
    @Prop([Boolean])
    haveImage: boolean|undefined;
    
    private isLogin = false;

    private async test()
    {
        
        this.$https.defaults.headers.common['Authorization'] =  this.$oidc.user.token_type + " " + this.$oidc.user.access_token;
        const res: any = await this.$https.post(
        this.$urls.version+ this.$urls.getAccount).then(Response => 
        {
            const result: BaseModelResp<User> = Response.data;
            
            userModule.getAccount(result);
        });
        
    }

    private async test2()
    {
        test2Module.setUserNames2(1,"1");
        console.log(this.$store.hasModule("test2"));
    }

    private show()
    {
        console.log(userModule.userDetail);
    }
    
}
</script>