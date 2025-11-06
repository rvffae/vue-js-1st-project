const app = Vue.createApp({
    data() {
        return {
            showBooks : true,
            title : 'The final empire', 
            author : 'Brandon',
            age : 45 
        }
    },
    methods: {
        toggleShowBooks() {

        this.showBooks = !this.showBooks;

        }
    },

})

app.mount('#app')   