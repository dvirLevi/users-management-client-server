<template>
  <div class="row">
    <div class="col">
      <form class="w-100 center-all" @submit.prevent="addIp">
        <div class="w-100 center-all">
          <input type="text" placeholder="Add ip" v-model="objIp.ip" required>
        </div>
        <div class="w-100 center-all">
          <v-select class="vselect" v-model="objIp.protocol" dir="ltr" :searchable="false" :options="['a', 'b', 'c']"
            placeholder="protocols" required>
          </v-select>
        </div>
        <div class="w-100 center-all">
          <input type="password" placeholder="Password" v-model="objIp.password" required>
        </div>
        <div class="w-100 center-all">
          <button class="btn btn-success" type="submit">Add ip</button>
        </div>
        <div class="w-100 center-top ">
          <div v-for="item in data.listOfIps" class="w-25 p-1 center-top" :key="item.ip">
            <p class="w-100 text-left">ip: {{item.ip}}</p>
            <p class="w-100 text-left">protocol: {{item.protocol}}</p>
            <p class="w-100 text-left">password: {{item.password}}</p>
          </div>
        </div>
        <!-- <div class="w-100 center-all">
          <input type="password" placeholder="Password validation" v-model="validationPassword" required>
        </div> -->
      </form>
        <form @submit.prevent="sendData">
        <div class="w-100 center-all">
          <input type="email" placeholder="Email addres" v-model="data.email" required>
        </div>

        <div class="w-100 center-all">
          <button type="submit" class="btn btn-success">{{textButt}}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import vSelect from 'vue-select'
  import 'vue-select/dist/vue-select.css'
  import Swal from 'sweetalert2'

  export default {
    name: 'addUser',
    components: {
      // HelloWorld
      vSelect
    },
    data() {
      return {
        data: {
          email: "",
          listOfIps: [],
          accountId: ""
        },
        objIp: {
          ip: "",
          password: "",
          protocol: ""
        },
        // ip: "",
        textButt: "send"
      }
    },
    methods: {
      addIp() {
        if (this.objIp.protocol) {
          this.data.listOfIps.push(this.objIp);
          this.objIp = {
            ip: "",
            password: "",
            protocol: ""
          }
        }else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'add protocol',
            timer: 1500
          });
        }
      },
      async sendData() {
        if (this.data.listOfIps.length) {
          try {
            if (this.textButt === "send") {
              this.textButt = "await...";
              this.data.accountId = this.accountId;
              console.log(this.data.accountId)
              await this.$store.dispatch('addUser', this.data);
              this.data = {
                email: "",
                password: "",
                listOfIps: [],
                listOfProtocols: "",
                accountId: this.accountId
              };
              Swal.fire({
                icon: 'success',
                title: 'success',
                text: 'The registration was successful!',
                timer: 1500
              });
              this.textButt = "send";
              // this.$router.push('/managementUsers/addUsers');
            }
          } catch (err) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              timer: 1500
            });
            this.textButt = "send";
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'add ips',
            timer: 1500
          });
        }
      },
    },
    computed: {
      accountId() {
        return this.$store.state.userId
      }
    }
  }
</script>

<style scoped>
  @media (max-width: 767.98px) {}
</style>