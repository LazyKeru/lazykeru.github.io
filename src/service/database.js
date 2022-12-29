// import ExperienceJson from "../assets/json/experience.json"

class FetcherAPI {
    constructor() {

    }
    
    getExperience () {
        return fetch("../json/experience.json")
            .then( res => {
                if(!res.ok) {
                    throw new Error("Dude")
                }
                return res;
            }
            )
            .then(data => data.json())
            .catch(error => console.error(error))
    }

    getProjects () {
        return fetch("../json/projects.json")
            .then( res => {
                if(!res.ok) {
                    throw new Error("Dude")
                }
                return res;
            }
            )
            .then(data => data.json())
            .catch(error => console.error(error))
    }
}

const singletonInstance = new FetcherAPI();

Object.freeze(singletonInstance);

export default singletonInstance;