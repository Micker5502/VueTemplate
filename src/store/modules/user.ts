import {VuexModule, Module,getModule,  Mutation, Action } from "vuex-module-decorators"
import store from '@/store'
import { User, UserLogin } from "../model/users"

@Module({
    name: "users",
    store,
    dynamic: true
})

class UsersModule extends VuexModule{
    user: User | null = null
    @Mutation
    setUser(user: User){ 
        this.user = user
    }

    get userDetail()
    {
        return this.user
    }

    @Action({commit: 'setUser'})
    async login(userLogin: UserLogin): Promise<User>
    {
        const tmp: User = {
            username: "test22",
            email: "gg@email.com",
            age: "11",
            token: "22"
        }
        return tmp
    }

}

export default getModule(UsersModule)

