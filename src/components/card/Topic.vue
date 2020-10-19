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
                <v-card-text >123</v-card-text>
                <v-card-actions>
                <v-list-item class="grow">

                </v-list-item>
                </v-card-actions>
            </v-row>
        </v-card>
    </div>    
</template>

<script lang="ts">
import { OpenIdConnectService } from '@/services/auth/openIdConnectService';
import { Component, Inject, Vue } from 'vue-property-decorator';

@Component

export default class Topic extends Vue {
    @Inject() private oidc!: OpenIdConnectService;
    private isLogin = false;


}
</script>