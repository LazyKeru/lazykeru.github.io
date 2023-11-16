import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/graphql';

class GithubApi {
    bearerToken: string;
    username: string;

    constructor(bearerToken: string, username: string) {
        this.bearerToken = bearerToken;
        this.username = username;
    }

    header = () => ({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${this.bearerToken}`,
    })

    data = () => ({
        "query": `query {
            user(login: "${this.username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                }
              }
            }
          }`
    })

    getContributions = async () => {
        axios
        .post(
            GITHUB_API_URL,
            this.data(),
            { headers: this.header() }
        )
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    }
}

export default GithubApi;