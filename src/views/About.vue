<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="login()"> test </button>
    {{user.age}} 
  </div>
</template>
<script lang='ts'>
import {Vue,Component} from 'vue-property-decorator'
import LoginUser from '@/store/modules/user'
import {User} from '@/store/model/users'

@Component
export default class Login extends Vue
{
  login()
  {
    LoginUser.login({email:'test',password:'test'})
  }

  get user(): User | null
  {
    return LoginUser.user
  }
}
</script>