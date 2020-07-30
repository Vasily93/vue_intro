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