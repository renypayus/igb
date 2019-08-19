<template>
  <span>
    <div class="form-group">
      <label for="edit-name">Name</label>
      <input class="form-control" id="edit-name" v-model="theCandidate.name" required/>
    </div>
    <div class="form-group">
      <label for="edit-occupation">Occupation</label>
      <input class="form-control" id="edit-occupation" v-model="theCandidate.occupation"></input>
    </div>
    <div class="form-group">
      <label for="edit-salary">Expected Salary<span class="glyphicon glyphicon-euro"></span></label>
      <input type="number" class="form-control" id="edit-salary" v-model="theCandidate.salary"/>
    </div>
  </span>
</template>

<script>
  export default {
    name: 'CandidateForm',
    props: ['theCandidate']
  }
</script>
