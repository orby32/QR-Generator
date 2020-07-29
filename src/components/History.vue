<template>
    <div>
        <router-link tag="a" class="nav-link" to="/dashboard">Generate another QR</router-link>
        <button class="btn btn-primary" @click="reset">Clear History</button>
        <br><br>
<table class="table" v-show="urlsList.length > 0">
  <thead>
    <tr>
      <th scope="col">Url</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in urlsList" :item="item">
      <td>{{item.url}}</td>
      <td>{{item.date}}</td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
    export default {
        computed: {
            urlsList() {
                return this.$store.state.urlsList
            }
        },
        methods: {
            reset() {
                this.$store.dispatch('resetLinks')
            }
        }
    }
</script>