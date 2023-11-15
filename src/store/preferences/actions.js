export function changeTheme({ state, dispatch }) {
  const theme = (state.ui.theme.choosed === 'light') ? 'dark' : 'light';

  dispatch('setTheme', theme);
}

export function loadTheme({ commit, state }) {
  let theme = localStorage.getItem('theme');

  if (!theme) {
    theme = state.ui.theme.choosed;
    localStorage.setItem('theme', theme);
  }

  commit('SET_THEME', theme);
}

export function setTheme({ commit }, theme) {
  localStorage.setItem('theme', theme);

  commit('SET_THEME', theme);
}