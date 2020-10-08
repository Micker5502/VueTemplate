
import { OpenIdConnectService } from '@/services/auth/openIdConnectService';
import {Vue,Inject  } from 'vue-property-decorator' ;

export default class accountEngine{
   
    private oidc: OpenIdConnectService = OpenIdConnectService.getInstance();

    public async Login()
    {
        await this.oidc.triggerSignIn();
    }
    public async Logout()
    {
        await this.oidc.triggerSignOut();
    }
    public async Check()
    {
        console.log(this.oidc.user);
        console.log(this.oidc.userAvailavle);
    }
    public UserAvailable(): boolean|undefined
    {
        return this.oidc.userAvailavle;
    }
}