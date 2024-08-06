import api from '../api/axiosConfig';
import axios, { CancelTokenSource } from 'axios';

export interface User {
    login: string;
    id: string;
    html_url: string;
    avatar_url: string;
    profile_url: string;
    created_at: string;
}

export interface Repo {
    id: number;
    name: string;
    html_url: string;
}

class GitHubService {
    private cancelTokenSources: { [key: string]: CancelTokenSource | null } = {
        getUsers: null,
        getUserDetails: null,
        getUserRepos: null
    };

    private createCancelToken(requestType: string) {
        if (this.cancelTokenSources[requestType]) {
            this.cancelTokenSources[requestType]!.cancel(`Operation canceled due to new ${requestType} request.`);
        }
        this.cancelTokenSources[requestType] = axios.CancelToken.source();
        return this.cancelTokenSources[requestType]!.token;
    }

    async getUsers(since: number): Promise<{ users: User[]; next: string }> {
        const response = await api.get(`/users?since=${since}`, {
            cancelToken: this.createCancelToken('getUsers'),
        });
        return response.data;
    }

    async getUserDetails(username: string): Promise<User> {
        const response = await api.get(`/users/${username}/details`, {
            cancelToken: this.createCancelToken('getUserDetails'),
        });
        return response.data;
    }

    async getUserRepos(username: string): Promise<Repo[]> {
        const response = await api.get(`/users/${username}/repos`, {
            cancelToken: this.createCancelToken('getUserRepos'),
        });
        return response.data;
    }
}

export default new GitHubService();
