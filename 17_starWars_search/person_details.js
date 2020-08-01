const PersonDetails = {
    template: 
        `<div id="modal-details" class="modal center">
            <div class="modal-content">
                <h3>{{person.name}}</h3>
                <p>Eye Color: {{person.eye_color}}</p>
                <p>Hair Color: {{person.hair_color}}</p>
                <p>Gender: {{person.gender}}</p>
                <p>Mass: {{person.mass}}</p>
                <p>Skin Color: {{person.skin_color}}</p>
                <p>Height: {{person.height}}</p>
                <a class="modal-close">Close</a>
            </div>
            <div class="modal-footer"></div>
        </div>`,
    props: ['person']
}