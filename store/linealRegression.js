export const state = () => ({
  xTrain: [],
  yTrain: [],
  current_xTrain: [],
  current_yTrain: [],
  regression: null
});

export const mutations = {
  set_xTrain(state, data) {
    state.xTrain = data;
  },
  set_yTrain(state, data) {
    state.yTrain = data;
  },
  set_current_xTrain(state, data) {
    state.current_xTrain = data;
  },
  set_current_yTrain(state, data) {
    state.current_yTrain = data;
  },
  set_regression(state, data) {
    state.regression = data;
  }
};
