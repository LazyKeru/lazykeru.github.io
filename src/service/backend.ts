import projectJson from "@/assets/data/projects.json"
import experienceJson from "@/assets/data/experiences.json"
import axios from "axios";

const GOLANG_BACKEND_URL = 'https://lazykeru-backend.azurewebsites.net/api/v1/'

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

interface IContributionDay {
    color: string,
    contributionCount: number,
    date: string,
    weekday: number,
}

interface IContributionDays {
    contributionDays: IContributionDay[],
}

class Backend {
    private static instance: Backend;

    private constructor() {}


    private header = () => ({
        'Content-Type': 'application/json',
    })

    public static getInstance(): Backend {
        if (!Backend.instance) {
            Backend.instance = new Backend ();
        }
        return Backend.instance;
    }

    // private getProjectFromJson(): <>(json)
  
    public async getProjects(): Promise<IProject[]> {
        return axios
        .get(
            GOLANG_BACKEND_URL + 'projects',
            { headers: this.header() }
        )
        .then((response) => response.data)
        .catch(() => projectJson.projects);
    }

    public async getExperiences(): Promise<IExperience[]> {
        return axios
        .get(
            GOLANG_BACKEND_URL + 'experiences',
            { headers: this.header() }
        )
        .then((response) => response.data)
        .catch(() => experienceJson.internships);
    }

    public async getContributions(): Promise<IContributionDays[]> {
        return axios
        .get(
            GOLANG_BACKEND_URL + 'contribution',
            { headers: this.header() }
        )
        .then((response) => {
            return response.data.data.viewer.contributionsCollection.contributionCalendar.weeks
        })
        .catch(() => console.error("Error"));
    }
}

export default Backend.getInstance()

export type { IProject, IExperience, ITag, IContributionDay, IContributionDays }