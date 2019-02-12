<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.user" placeholder="Username" />
        <input type="password" name="password" v-model="input.pw" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input:{
                    user : "admin",
                    pw : "secret"
                },
                username : this.$store.getters.USERNAME,
                password : this.$store.getters.PASSWORD
            }
        },
        methods: {
            login() {
                if(this.input.user != "" && this.input.pw != "") {
                    if(this.input.user == "admin" && this.input.pw == "secret") {
                        this.$store.commit("SET_LOG", true)
                        this.$router.push({path: "/stats"});
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>