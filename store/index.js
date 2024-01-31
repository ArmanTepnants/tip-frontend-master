import cookieparser from 'cookieparser'

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let smsTime = null;

    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      smsTime = (parsed.smsTime && JSON.parse(parsed.smsTime)) || null;
    }

    commit('sms/setSmsTime', smsTime);
  }
};
