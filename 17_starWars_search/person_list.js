const PersonList = {
    template: `<ul>
                <person v-for="p in people"
                    :name="p.name"
                    :url="p.url"
                    :key="p.url">
                </person>
               </ul>`,
    props: ['people'],
    components: {
        Person
    }
}