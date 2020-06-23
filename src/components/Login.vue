<template>
    <div class="vue-tempalte">
        <form @submit.prevent="login" method="POST" > 
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Username</label>
                <input type="text" name="username" v-model="username" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" v-model="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

            <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>

        </form>
    </div>
</template>

<script>
 import qs from 'qs'
 import axios from 'axios'
 
    export default {
        data() {
            return {
                username: '',
                password : ''
            }
        }
        ,
        methods:
        { 
            login(){
                const data = {
                      username: this.username,
                      password: this.password
                        }
                const options = {
                      method: 'POST',
                      withCredentials: false,
                      headers: { 'content-type': 'application/x-www-form-urlencoded'},
                      data: qs.stringify(data),
                      url:'http://localhost:3000/authentication/login'
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