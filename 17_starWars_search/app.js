// compomnents are here
const SearchBar = {
    template: '#search-bar',
    data() {
        return {
            charavter: ''
        }
    },
    methods: {
        updateSearch() {
            console.log('update search')
        }
    }
}







// vue instanve below

const app = new Vue({
    el: '#app',
    data: {
        message: 'lets start!'
    },
    components: {
        SearchBar
    }
})