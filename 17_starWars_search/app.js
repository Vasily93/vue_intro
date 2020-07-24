const swapi = (function(axios) {
    const baseUrl = 'https://swapi.dev/api/';

    const searchPeople = (person) => {
        const url = `${baseUrl}people/?search=${person}&format=json`;
        return axios.get(url)
                    .then(response => response.data.results);
    };
    const getPersonDeatail = (url) => {
        return axios.get(url)
                    .then(response => response.data);
    };

    return {
        searchPeople,
        getPersonDeatail
    }
})(axios);

Vue.prototype.swapi = swapi; //enables access to sawpi everywhere

// compomnents are here
const SearchBar = {
    template: '#search-bar',
    data() {
        return {
            character: ''
        }
    },
    methods: {
        updateSearch: _.debounce(function() {
            this.swapi.searchPeople(this.character)
                      .then(response => this.$emit('search', response))
        }, 300)
    }
}

// vue instanse below

const app = new Vue({
    el: '#app',
    data: {
        people: []
    },
    components: {
        SearchBar
    },
    methods: {
        updateList(data) {
            this.people = data;
            console.log(this.people, 'updated')
        }
    }
})