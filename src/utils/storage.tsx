const storage = {
  get: (key: any) => {
    let loc = String(window.localStorage.getItem(key));
    if (loc) {
      return JSON.parse(loc);
    } else {
      return null;
    }
  },
  set: (key: any, value: any) =>
    window.localStorage.setItem(key, JSON.stringify(value)),
};

export default storage;
