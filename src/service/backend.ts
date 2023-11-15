import projectJson from "@/assets/data/projects.json"
import experienceJson from "@/assets/data/experiences.json"

interface IProject {
    type: string,
    title: string,
    description: string,
    link: string,
    image: string,
    tags: ITag[],
}

interface IExperience {
    title: string,
    duration: string,
    description: string,
    tags: ITag[],
}

interface ITag {
    icon: string,
    text: string,
}

class Backend {
    private static instance: Backend;

    private constructor() {}

    public static getInstance(): Backend {
        if (!Backend.instance) {
            Backend.instance = new Backend ();
        }
        return Backend.instance;
    }

    // private getProjectFromJson(): <>(json)

    public getProjects(): IProject [] {
       return projectJson.projects
    }

    public getExperiences(): IExperience [] {
        return experienceJson.internships
     }
}

export default Backend.getInstance()