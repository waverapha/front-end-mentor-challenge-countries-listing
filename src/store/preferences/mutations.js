export function SET_THEME(state, theme){
  document.body.dataset.theme = theme;
  
  state.ui.theme.choosed = theme;
}