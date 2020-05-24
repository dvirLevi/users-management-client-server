<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col center-all">
          <h1>Login User</h1>
        </div>
      </div>
      <div class="row">
        <div class="col screen-height center-all">
          <div class="w-100 center-all">
            <div class="w-100 center-all">
              <div class="wrap-select">
                <selectOption :items="userIps" @mySelect="mySelect" themeColor="#cacaca" class="m-2" />
              </div>
            </div>
            <div class="w-100 center-all">
              <button type="button" class="btn btn-success" @click="sendData">{{textButt}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import selectOption from '@/components/selectOption.vue'
  // import vSelect from 'vue-select'
  // import 'vue-select/dist/vue-select.css'
  import Swal from 'sweetalert2'

  export default {
    name: 'addUser',
    components: {
      // HelloWorld
      selectOption
    },
    data() {
      return {
        data: null,
        textButt: "connect"
      }
    },
    methods: {
      mySelect(item) {
        this.data = item
      },
      async sendData() {
        if (this.data) {
          try {
            if (this.textButt === "connect") {
              this.textButt = "await...";
              console.log(this.data)
              let res = await this.$store.dispatch('users/connectIp', this.data);
              if (res) {
                this.data = {};
                Swal.fire({
                  icon: 'success',
                  title: 'success',
                  text: 'The registration was successful!',
                  timer: 1500
                });
                this.textButt = "connect";
                window.location.href = "replace with your url";
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!',
                  timer: 1500
                });
                this.textButt = "connect";
              }

              // this.$router.push('/managementUsers/addUsers');
            }
          } catch (err) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              timer: 1500
            });
            this.textButt = "connect";
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select ip',
            timer: 1500
          });
        }
      },
    },
    computed: {
      userIps() {
        return this.$store.state.users.userIps
      }
    }
  }
</script>

<style scoped>
  .wrap-select {
    width: 30%;
  }

  @media (max-width: 767.98px) {}
</style>