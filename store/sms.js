import Cookies from 'js-cookie'

export const state = () => ({
  smsTime: null,
});

export const mutations = {
  setSmsTime(state, smsTime) {
    state.smsTime = smsTime;
    Cookies.set('smsTime', state.smsTime);
  },
};

export const getters = {
  smsTime: state => {
    return state.smsTime
  },
};
