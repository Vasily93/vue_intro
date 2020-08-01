

Vue.prototype.swapi = swapi;

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
        this.swapi.searchPeople('vader')
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