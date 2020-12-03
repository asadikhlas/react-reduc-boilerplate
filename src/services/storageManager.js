const storageManager = {
  session: {
    get: (key) => JSON.parse(sessionStorage.getItem(key) || '{}'),
    set: (key, data) => sessionStorage.setItem(key, JSON.stringify(data)),
    remove: (key) => sessionStorage.removeItem(key),
    clear: () => sessionStorage.clear()
  },

  local: {
    get: (key) => localStorage.getItem(key),
    set: (key, data) => localStorage.setItem(key, data),
    remove: (key) => localStorage.removeItem(key),
    clear: () => localStorage.clear()
  }
}

export default storageManager
