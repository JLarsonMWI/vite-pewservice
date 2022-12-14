import { defineStore } from "pinia";

export const useSiteStore = defineStore("site", {
  state: () => ({ name: "default name" }),
  getters: {
    getSiteName: (state) => state.name,
  },
});
