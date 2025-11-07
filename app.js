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
    },
    handleEvent(e) {
        console.log('event')
      }
    }
})

app.mount('#app')   
