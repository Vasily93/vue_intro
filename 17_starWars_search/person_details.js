const PersonDetails = {
    template: 
        `<div>
            <h3>{{person.name}}</h3>
            <p>Eye Color: {{person.eye_color}}</p>
            <p>Hair Color: {{person.hair_color}}</p>
            <p>Height: {{person.height}}</p>
            <button @click="hideDetails">X</button>
        </div>`,
    props: ['person'],
    methods: {
        hideDetails() {
            Event.$emit('selectPerson')
        }
    }
}