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

const Person = {
    template: '#person',
    props: ['name', 'url'],
    methods: {
        getDetails() {
             this.swapi.getPersonDeatail(this.url)
                        .then(details => Event.$emit('selectPerson', details)) 
        }
    }
}

const PersonList = {
    template: '#person-list',
    props: ['people'],
    components: {
        Person
    }
}

const PersonDetails = {
    template: '#person-details',
    props: ['person'],
    methods: {
        hideDetails() {
            Event.$emit('selectPerson')
        }
    }
}

// vue instanse below
const Event = new Vue();

const app = new Vue({
    el: '#app',
    data: {
        people: [],
        selectedPerson: ''
    },
    components: {
        SearchBar,
        PersonList,
        PersonDetails
    },
    created() {
        this.swapi.searchPeople('d')
                .then(response => this.people = response)
        Event.$on('selectPerson', data => this.updateSelectedPerson(data))
    },
    methods: {
        updateList(data) {
            this.people = data;
        },
        updateSelectedPerson(data) {
            this.selectedPerson = data;
        }
    }
})