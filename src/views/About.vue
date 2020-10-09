<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang='ts'>
import {Vue,Component} from 'vue-property-decorator'

@Component
export default class Login extends Vue
{
  /*login()
  {
    LoginUser.login({email:'test',password:'test'})
  }

  get user(): User | null
  {
    return LoginUser.user
  }*/
}
</script>