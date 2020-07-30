const PersonList = {
    template: `<div class="row">
                <person v-for="p in people"
                    :name="p.name"
                    :url="p.url"
                    :key="p.url">
                </person>
               </div>`,
    props: ['people'],
    components: {
        Person
    }
}