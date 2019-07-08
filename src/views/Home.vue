<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { GalaxyApi } from '../../node_modules/galaxy-client/lib/galaxyApi';
import { ApiKeyCredentials, ApiKeyCredentialOptions } from '@azure/ms-rest-js'
import store from '../store/store'
import { mapActions } from 'vuex';

@Component({
  components: {
    HelloWorld,
  },

})
export default class Home extends Vue {
  message: string = 'Hello!';
  //creds: ApiKeyCredentialOptions = { inHeader:{"apiKey":"6U2GCUYO81128PGBSRX3MHNYPL70T0TZ"} };
  get apiKey(): string{
    return store.getters.
  }

  get creds(): ApiKeyCredentialOptions {
    return { inHeader:{"apiKey":"6U2GCUYO81128PGBSRX3MHNYPL70T0TZ"} }; 
  }
  

  testClient: GalaxyApi = new GalaxyApi(new ApiKeyCredentials(this.creds));
  mounted (): void {
    console.log("here")
    this.$store.dispatch('query/addApiKey', this.apiKey);
    this.testClient.pointOfSales.basics().then(x => this.message = x._response.bodyAsText)
    window.alert(this.message)
  };
  // ready (): void{
  //   console.log("here")
  //   this.testClient.pointOfSales.basics().then(x => this.message = x._response.bodyAsText)
  //   window.alert(this.message)
  // };
}
</script>
