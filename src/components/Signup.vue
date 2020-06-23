<template>
    <div class="vue-tempalte" >
        <form method="post" @submit.prevent="register" >
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Username</label>
                <input type="text" v-model="username" name="username" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" name="password" class="form-control form-control-lg" />
            </div>

            <button type="submit"  class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs'
    export default {
        data() {
            return {
                username : '',
                password : ''
            };
        }
        ,
        methods:{
             register() {
                const data = {
                      username: this.username,
                      password: this.password
                        }
                const options = {
                      method: 'POST',
                      withCredentials: false,
                      headers: { 'content-type': 'application/x-www-form-urlencoded'},
                      data: qs.stringify(data),
                      url:'http://localhost:3000/authentication/register'
                      };
                       axios(options)
                      .then(res => alert(res.data.message))
                      .catch(e => {
                            alert('Error: ' + e)
                            })
                          }
                     }
                                
                }
                    
</script>