const swapi = (function(axios) {
    const baseApi = 'https://swapi.dev/api/';

    const searchPeople = (person) => {
        const url = `${baseUrl}people/?search=${person}&format=json`;
        return axios.get(url)
                    .then(responce => console.log(responce));
    };
    const getPersonDeatail = (url) => {
        return axios.get(url)
                    .then(responce => console.log(responce));
    };

    return {
        searchPeople,
        getPersonDeatail
    }
})(axios='axios');

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