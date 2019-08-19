<template>
    <section>
    <h2>Add new candidate</h2>
    <form v-on:submit.prevent="createCandidate">
      <candidate-form :the-candidate="candidate"></candidate-form>
      <button type="submit" class="btn btn-primary">Create</button>
      <nuxt-link to="/" class="btn btn-default">Cancel</nuxt-link>
    </form>
  </section>
</template>

<script>
 import CandidateForm from '../components/candidate-form.vue'

export default {
  components: { CandidateForm },
  layout: 'my-layout',
  data () {
    return {"candidate": {id: null, name: '', occupation: '', salary: '', skills: []}}
  },
  methods: {
    createCandidate (e) {
      this.$store.dispatch('addCandidate', this.candidate)
      this.$router.push('/')
    }
  }
}
</script>

