<template>
    <div>
        <button @if="this.$accountEngine.Login()" @click='this.$accountEngine.accountLogin()'>Login</button>
        <button @click='this.$accountEngine.Logout()'>Logout</button>
        <button @click='this.$accountEngine.Check()'>Check</button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Account extends Vue {
    
    @Prop() private msg!: string;
    private Login()
    {
        this.$accountEngine
    }
}

</script>

<style scoped lang="less">

</style>
<script src=""></script>