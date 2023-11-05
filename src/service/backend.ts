import projectJson from "@/assets/data/projects.json"

interface IProject {
    type: string,
    title: string,
    description: string,
    link: string,
    image: string,
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

    public getProject(): IProject [] {
       return projectJson.projects
    }
}

export default Backend.getInstance()