import {VuexModule, Module,getModule,  Mutation, Action } from "vuex-module-decorators"
import store from '@/store'
import { Test } from "../model/test"


@Module({
    namespaced: true,
    name: "test",
    store,
    dynamic: true

})

class TestModule extends VuexModule{
    test: Test | null  = null
    polo: number | null = null
    @Mutation
    setTest(test: Test){ 
        this.polo = 1
        this.test = test;
    }

    get testDetail()
    {
        return this.test
    }
    get poloDetail()
    {
        return this.polo
    }

    @Action({commit: 'setTest',rawError: true})
    async getTest()
    {

        const user: Test = {
            userName: "123",
            email: "asd",
            nickName: "321",
        }

        return user
    }

}

export default TestModule


