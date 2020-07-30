const Person = {
    template: `<div class="card col s12 m6 l3 center">
                    <h5>{{name}}</h5>
                    <br>
                    <button
                        class="waves-effect waves-light btn modal-trigger" 
                        data-target="modal-details"
                        @click="getDetails">Details
                    </button>
               </div>`,
    props: ['name', 'url'],
    methods: {
        getDetails() {
            console.log("clicked")
             this.swapi.getPersonDeatail(this.url)
                        .then(details => Event.$emit('selectPerson', details)) 
        }
    }
}