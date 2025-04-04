export default {
  useFastest (state, value) {
    state.useFastest = value
  },

  toggle (state, payload) {
    const node = state.list[payload.url]
    if (node) {
      node.active = payload.active
    }
  },

  status (state, status) {
    state.list[status.url] = status
  }
}
