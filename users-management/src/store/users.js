import postService from '../middleware/postService.js'

const users = {
    namespaced: true,
    state: () => ({
        userIps: ""
    }),
    mutations: {
        pushuserIps(state, res) {
            state.userIps = res
        },
    },
    actions: {
        loginUser(store, obj) {
            return new Promise(async (resolve, reject) => {
                try {
                    let res = await postService.post(obj, `/loginUser`);
                    // let json = JSON.parse(res)
                    store.commit('pushuserIps', res);
                    resolve(res)
                } catch (err) {
                    reject(err)
                }
            })
        },
        connectIp(store, obj) {
            return new Promise(async (resolve, reject) => {
                try {
                    let res = await postService.post(obj, `/connectIp`);
                    // store.commit('pushuserIps', json);
                    resolve(res)
                } catch (err) {
                    reject(err)
                }
            })
        },
    },
}

export default users