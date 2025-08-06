import { User } from '@/type/user';
import {create} from 'zustand';

export type UserState = {
    user: User | null;
    setUser: (user: User | null) => void;
    sidebarOpen: boolean;
    setSidebar: (open: boolean) => void;

    // open category
    openCategory: string;
    setOpenCategory: (open: string) => void;
}

export const useUserStore =  create<UserState>(
    (set) => ({
        user: null,
        sidebarOpen: false,
        openCategory: '16789',
        setOpenCategory: (open) => set({openCategory: open}),
        setUser: (user) => set({user}),
        setSidebar: (open) => set({sidebarOpen: open}),
    })
)