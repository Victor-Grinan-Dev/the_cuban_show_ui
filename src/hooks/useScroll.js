const state = {};

export const saveScroll = (component, object) => {
  state[component] = object;
};

export const getScroll = (component) => {
  return state[component];
};
