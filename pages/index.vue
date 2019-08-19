<template>
  <section>
    <div class="actions">
      <nuxt-link class="btn btn-primary" :to="{path: '/add-candidate'}">
        <span class="glyphicon glyphicon-plus"></span>
        Add candidate
      </nuxt-link>
    </div>
    <div class="filters row">
      <div class="form-group col-sm-3">
        <label for="search-element">Search candidate by name</label>
        <input v-model="searchKey" class="form-control" id="search-element" requred/>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Occupation</th>
          <th scope="col">Expected Salary</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="candidate in filteredCandidates">
          <td>
            <nuxt-link :to="{name: 'candidate-id-edit', params: {id: candidate.id}}">{{ candidate.name }}</nuxt-link>
          </td>
          <td>{{ candidate.occupation }}</td>
          <td>
            {{ candidate.salary }}
            <span class="glyphicon glyphicon-euro" aria-hidden="true"></span>
          </td>
          <td>
            <nuxt-link class="btn btn-warning btn-xs" :to="{name: 'candidate-id-edit', params: {id: candidate.id}}">Edit</nuxt-link>
            <nuxt-link class="btn btn-danger btn-xs" :to="{name: 'candidate-id-delete', params: {id: candidate.id}}">Delete</nuxt-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>

export default {
  layout: 'my-layout',
  data () {
    return { searchKey: '', candidates: this.$store.state.candidates }
  },
  computed : {
    filteredCandidates () {
      return this.candidates.filter(candidate => candidate.name.toLowerCase().indexOf(this.searchKey.toLowerCase()) !== -1)
    }
  }
}
</script>

<style>
.form-group {
  max-width: 500px;
}

.actions {
  padding: 10px 0;
}

.glyphicon-euro {
  font-size: 12px;
}
</style>
