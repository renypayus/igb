<template>
  <section>
    <h2>Edit candidate</h2>
    <form v-on:submit.prevent="updateCandidate">
      <candidate-form :the-candidate="candidate"></candidate-form>
      <button type="submit" class="btn btn-primary">Save</button>
      <nuxt-link to="/" class="btn btn-default">Cancel</nuxt-link>
    </form>
  </section>
</template>

<script>
 import CandidateForm from '../../../components/candidate-form.vue'

export default {
  components: { CandidateForm },
  layout: 'my-layout',
  data () {
    return {"candidate": JSON.parse(JSON.stringify(this.$store.state.candidates.find(candidate => candidate.id === this.$route.params.id)))};
  },
  methods: {
    updateCandidate (e) {
      this.$store.commit('UPDATE_CANDIDATE', this.candidate)
      this.$router.push('/')
    }
  }
}
</script>

