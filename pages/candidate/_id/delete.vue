<template>
  <section>
    <h2>Delete candidate {{ candidate.name }}</h2>
    <form v-on:submit.prevent="deleteCandidate">
      <p>The action cannot be undone.</p>
      <button type="submit" class="btn btn-danger">Delete</button>
      <nuxt-link to="/" class="btn btn-default">Cancel</nuxt-link>
    </form>
  </section>
</template>

<script>

export default {
  layout: 'my-layout',
  data () {
    return {"candidate": this.$store.state.candidates.find(candidate => candidate.id === this.$route.params.id)};
  },
  methods: {
    deleteCandidate (e) {
      this.$store.commit('DELETE_CANDIDATE', this.candidate)
      this.$router.push('/')
    }
  }
}
</script>
