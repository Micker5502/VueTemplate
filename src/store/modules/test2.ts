import {VuexModule, Module,getModule,  Mutation, Action } from "vuex-module-decorators"
import { Test } from "../model/test"


@Module({
    namespaced: true,
    name: "test2"
})

class Test2Module extends VuexModule{
    test: Test | null  = null
    polo: number | null = null
    @Mutation
    setUserNames2(polo: number,payload: string){ 
        this.polo = 2
    }

    get testDetail()
    {
        return this.test
    }
    get poloDetail()
    {
        return this.polo
    }

    @Action({commit: 'setUserNames2',rawError: true})
    async getTest()
    {

        const user: Test = {
            userName: "1234",
            email: "asd4",
            nickName: "3214",
        }

        return user
    }

}

export default Test2Module


