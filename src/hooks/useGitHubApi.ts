import { useState, useEffect } from 'react';
import GitHubService, {Repo, User} from '../services/GitHubService';
import axios from "axios";

export const useUsers = (since: number) => {
    const [users, setUsers] = useState<User[]>([]);
    const [next, setNext] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const { users, next } = await GitHubService.getUsers(since);
                setUsers(users);
                setNext(next);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled:', error.message);
                } else {
                    console.error('Error fetching users:', error);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, [since]);

    return { users, next, loading };
};

export const useUserDetails = (username: string) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchUserDetails = async () => {
            setLoading(true);
            try {
                const userDetails = await GitHubService.getUserDetails(username);
                setUser(userDetails);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled:', error.message);
                } else {
                    console.error('Error fetching user details:', error);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchUserDetails();
    }, [username]);

    return { user, loading };
};

export const useUserRepos = (username: string) => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchUserRepos = async () => {
            setLoading(true);
            try {
                const userRepos = await GitHubService.getUserRepos(username);
                setRepos(userRepos);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled:', error.message);
                } else {
                    console.error('Error fetching user repos:', error);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchUserRepos();
    }, [username]);

    return { repos, loading };
};
