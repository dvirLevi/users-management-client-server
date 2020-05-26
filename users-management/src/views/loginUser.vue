<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col center-all">
          <h1>Login User</h1>
        </div>
      </div>
      <div class="row">
        <div class="col screen-height center-all ">
          <form class="w-100 center-all" @submit.prevent="sendData">
            <div class="w-100 center-all">
              <input type="email" placeholder="Email addres" v-model="data.email" required>
            </div>
            <div class="w-100 center-all">
              <input type="password" placeholder="Password" v-model="data.password" required>
            </div>

            <div class="w-100 center-all">
              <button type="submit" class="btn btn-success">{{textButt}}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swal from 'sweetalert2'

  export default {
    name: 'Home',
    components: {
      // HelloWorld
    },
    data() {
      return {
        data: {
          password: "",
          email: ""
        },
        textButt: "send",
        listOfIps: [{
            ip: "asd.asd.asd",
            password: "asdasd!asd#asd",
            protocol: "asd1"
        },
        {
            ip: "asd1.asd1.asd1",
            password: "asdasd!asd#asd",
            protocol: "asd2"
        },
        {
            ip: "asd2.asd2.asd2",
            password: "asdasd!asd#asd",
            protocol: "asd3"
        }
    ],
      }
    },
    methods: {
      async sendData() {
        try {
          if (this.textButt === "send") {
            this.textButt = "await...";
            let res = await this.$store.dispatch('users/loginUser', this.data);
            // this.data = {
            //   password: "",
            //   email: ""
            // };
            // Swal.fire({
            //   icon: 'success',
            //   title: 'success',
            //   text: 'The login was successful!',
            //   timer: 1500
            // });
            // this.textButt = "send";
            // this.$router.push('/userIps/');
            var strJSON = encodeURIComponent(JSON.stringify(res));
            window.location.replace("http://localhost:8082/asid_war/connect.html?ips=" + strJSON);

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
      },
    }
  }
</script>

<style scoped>
  @media (max-width: 767.98px) {}
</style>