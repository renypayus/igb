
export const state = () => ({
      candidates: [
          {
            id: 1, 
            name: 'A Reny Khairini', 
            occupation: 'Talent Acquisition Manager', 
            salary: 5000000, 
            skills: [
              {
                id: 14, 
                name: 'Recruitment'
              }, 
              {
                id:15, 
                name: 'Human Resource'
              }
            ]
          }, 
          {
            id: 1, 
            name: 'Reny Khaireny', 
            occupation: 'Wordpress Developer', 
            salary: 6000000, 
            skills: [
              {
                id: 11, 
                name: 'JavaScript'
              }, 
              {
                id:16, 
                name: 'CMS'
              }
            ]
          }, 
      ]
})

export const mutations = {
      ADD_CANDIDATE (state, candidate) {
        console.log('add ' + candidate.name);
        // get the id's of all candidates
        let ids = state.candidates.map( (prod) => prod.id );
        // when there are no id's yet, 0 is the max.
        ids.push(0);  
        // calculate new id
        let newId = Math.max(...ids) + 1;
        state.candidates.push({
            id: newId
          , name: candidate.name
          , occupation: candidate.occupation
          , salary: candidate.salary
        });
      },
      UPDATE_CANDIDATE (state, candidate) {
        let found = state.candidates.find(p => p.id === candidate.id);
        console.log('update '  + found.name);
        found.name = candidate.name
        found.occupation = candidate.occupation
        found.salary = candidate.salary
      },
      DELETE_CANDIDATE (state, candidate) {
        let foundIndex = state.candidates.findIndex(p => p.id === candidate.id);
        console.log('delete ' + candidate.name);
        if (foundIndex !== -1) state.candidates.splice(foundIndex, 1);
      }
}

export const actions = {
      addCandidate({commit}, candidate) {
        new Promise((resolve) => setTimeout(resolve, 2000)).then( () => {
        console.log('add1')
        commit('ADD_CANDIDATE', candidate) 
        })
      },
      // just for the demo of nuxtServerInit
      nuxtServerInit ({ commit }, { req }) {
        commit('ADD_CANDIDATE', {name: 'Khaireny', occupation: 'Front-End Developer', salary: 10000000, skills: [{id: 12, name: 'HTML'}, {id:13, name: 'CSS'}]})
      }
}

