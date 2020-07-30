const Person = {
    template: `<li>
                    {{name}}
                    <slot></slot>
                    <button @click="getDetails">Details</button>
               </li>`,
    props: ['name', 'url'],
    methods: {
        getDetails() {
             this.swapi.getPersonDeatail(this.url)
                        .then(details => Event.$emit('selectPerson', details)) 
        }
    }
}