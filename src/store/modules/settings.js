export default {
    namespaced: true,
    state: {
        theme: 'light',
    },
    mutations: {//функции, которые мемняют наше состояние
        setTheme(state, theme) {
            state.theme = theme;
        },
    },
};
