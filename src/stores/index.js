import { defineStore } from 'pinia'

export const useDefaultStore = defineStore('default', {
    state: () => {
        return {
            token: '',
            goal: ''
        }
    },
    // 也可以这样定义
    // state: () => ({ count: 0 })
    actions: {
        setToken(val) {
            this.token = val
        },
        setGoal(val) {
            this.goal = val
        },
    },
})