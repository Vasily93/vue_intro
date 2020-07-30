const SearchBar = {
    template: `<input type="text" class="form-control" id="search-bar"
                @input="updateSearch"
                v-model="character"
                placeholder="Search Character by Name" style="width: 98%"/>`,
    data() {
        return {
            character: ''
        }
    },
    methods: {
        updateSearch: _.debounce(function() {
            console.log(this.character)
            this.swapi.searchPeople(this.character)
                      .then(response => this.$emit('search', response))
        }, 300)
    }
}