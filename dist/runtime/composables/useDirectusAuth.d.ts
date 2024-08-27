import type { Ref } from 'vue';
import type { DirectusAuthCredentials, DirectusAuthResponse, DirectusAcceptInvite, DirectusInviteCreation, DirectusPasswordForgotCredentials, DirectusPasswordResetCredentials, DirectusRegisterCredentials, DirectusUser } from '../types';
export declare const useDirectusAuth: () => {
    setUser: (value: DirectusUser) => void;
    fetchUser: (useStaticToken?: boolean) => Promise<Ref<DirectusUser>>;
    login: (data: DirectusAuthCredentials, useStaticToken?: boolean) => Promise<DirectusAuthResponse>;
    requestPasswordReset: (data: DirectusPasswordForgotCredentials, useStaticToken?: boolean) => Promise<void>;
    resetPassword: (data: DirectusPasswordResetCredentials, useStaticToken?: boolean) => Promise<void>;
    logout: () => Promise<void>;
    createUser: (data: DirectusRegisterCredentials, useStaticToken?: boolean) => Promise<DirectusUser>;
    register: (data: DirectusRegisterCredentials) => Promise<DirectusUser>;
    inviteUser: (data: DirectusInviteCreation) => Promise<void>;
    acceptInvite: (data: DirectusAcceptInvite) => Promise<void>;
    loginWithProvider: (provider: string, redirectOnLogin?: string) => Promise<void>;
    setAuthCookies: (_token: string, _refreshToken: string, _expires: number) => void;
};
