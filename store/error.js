export const state = () => ({
  errors: [],
});

export const mutations = {
  setErrors(state, errors) {
    state.errors = errors;
  },
  addError(state, error) {
    state.errors.push({message: error});
  },
  clearErrors(state) {
    state.errors = [];
  }
};

export const getters = {
  errors: state => {
    return state.errors
  },
  firstError: state => {
    if (state.errors.length > 0) {
      return state.errors[0].message
    }
  },
  hasError: state => {
    return state.errors.length > 0
  }
};
