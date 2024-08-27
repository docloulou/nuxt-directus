import * as _nuxt_schema from '@nuxt/schema';

type DirectusUser = {
  auth_data?: unknown | null;
  description?: string | null;
  email?: string | null;
  email_notifications?: boolean | null;
  external_identifier?: string | null;
  first_name?: string | null;
  id: string;
  language?: string | null;
  last_access?: string | null;
  last_name?: string | null;
  last_page?: string | null;
  location?: string | null;
  password?: string | null;
  provider: string;
  status: string;
  tags?: unknown | null;
  tfa_secret?: string | null;
  theme?: string | null;
  title?: string | null;
  token?: string | null;
  [key: string]: any;
} | null;

interface DirectusAuthCredentials {
  email: string;
  password: string;
  otp?: string;
}

interface DirectusAuthResponse {
  user: DirectusUser;
  access_token: string;
  expires: number;
  refresh_token: string;
}

interface DirectusPasswordForgotCredentials {
  email: string;
  reset_url?: string;
}

interface DirectusPasswordResetCredentials {
  token: string;
  password: string;
}

interface DirectusQueryParams {
  fields?: Array<string>;
  sort?: string | Array<string>;
  filter?: Record<string, unknown>;
  limit?: number;
  offset?: number;
  page?: number;
  alias?: string | Array<string>;
  deep?: Record<string, unknown>;
  search?: string;
}

interface DirectusMetaQueryParams extends DirectusQueryParams {
  meta?: 'total_count' | 'filter_count' | '*';
}

interface DirectusItemRequest {
  collection: string;
  id?: string;
  params?: DirectusQueryParams;
}

interface DirectusItemMetaRequest extends DirectusItemRequest {
  params?: DirectusMetaQueryParams;
}

interface DirectusItemCreation {
  collection: string;
  items: Array<Object> | Object;
  params?: DirectusQueryParams;
}

interface DirectusItemUpdate {
  collection: string;
  id: string;
  item: Object;
  params?: DirectusQueryParams;
}
interface DirectusItemDeletion {
  collection: string;
  items: Array<string> | string;
  params?: DirectusQueryParams;
}

// User Interfaces
interface DirectusUserRequest {
  id?: string;
  params?: DirectusQueryParams;
}

interface DirectusUserCreation {
  users: Array<Object> | Object;
}

interface DirectusUserUpdate {
  id: string;
  user: Object;
}

interface DirectusUserDeletion {
  users: Array<string> | string;
}

type DirectusThumbnailFormat = 'jpg' | 'png' | 'webp' | 'tiff' | 'avif';

type DirectusThumbnailFit = 'cover' | 'contain' | 'inside' | 'outside';

interface DirectusThumbnailOptions {
  width?: number;
  height?: number;
  quality?: number;
  fit?: DirectusThumbnailFit;
  format?: DirectusThumbnailFormat;
  withoutEnlargement?: boolean;
  key?: string;
}

interface DirectusRegisterCredentials {
  email: string;
  password: string;
}

type DirectusFile = {
  charset?: string | null;
  description?: string | null;
  duration?: number | null;
  embed?: string | null;
  filename_disk?: string | null;
  filename_download: string;
  filesize?: number | null;
  folder?: string | DirectusFolders | null;
  height?: number | null;
  id: string;
  location?: string | null;
  metadata?: unknown | null;
  modified_by?: string | DirectusUser | null;
  modified_on: string;
  storage: string;
  tags?: unknown | null;
  title?: string | null;
  type?: string | null;
  uploaded_by?: string | DirectusUser | null;
  uploaded_on: string;
  width?: number | null;
  [key: string]: any;
} | null;

type DirectusFolders = {
  id: string;
  name: string;
  parent?: string | DirectusFolders | null;
};

interface DirectusFileRequest {
  id?: string;
  params?: DirectusQueryParams;
}

interface DirectusNotificationObject {
  id?: number;
  timestamp?: string;
  status?: 'inbox' | 'archived';
  recipient: Array<string> | string;
  sender?: Array<string> | string;
  subject: string;
  message?: string;
  collection?: string;
  item?: string;
}

interface DirectusCollectionRequest {
  collection?: string;
}

interface DirectusCollectionMeta {
  collection?: string;
  icon?: string;
  note?: string;
  display_template?: string;
  hidden?: boolean;
  singleton?: boolean;
  translations?: [
    {
      language?: string;
      translation?: string;
    }
  ];
  archive_field?: string;
  archive_value?: string;
  unarchive_value?: string;
  archive_app_filter?: boolean;
  sort_field?: string;
  item_duplication_fields?: string[];
  sort?: number;
  collapse?: 'open' | 'closed' | 'locked';
}

interface DirectusCollectionCreation {
  collection: string;
  meta?: DirectusCollectionMeta;
  schema?: {
    name?: string;
    comment?: string;
  };
}

interface DirectusCollectionUpdate {
  collection: string;
  meta: DirectusCollectionMeta;
}

interface DirectusRevision {
  id: number;
  activity?: any;
  collection: string;
  item?: string;
  data?: Object;
  delta?: Object;
  parent?: any;
}

interface DirectusItemMetadata {
  total_count?: number;
  filter_count?: number;
}

interface DirectusItems<T> {
  data: NonNullable<T[]>;
  meta?: DirectusItemMetadata;
}

interface DirectusItem<T> {
  data: NonNullable<T>;
}

interface DirectusInviteCreation {
  email: string;
  role: string;
  invite_url?: string
}

interface DirectusAcceptInvite {
  token: string;
  password: string
}

interface ModuleOptions {
    /**
     * Directus API URL
     * @default process.env.NUXT_PUBLIC_DIRECTUS_URL
     * @type string
     */
    url?: string;
    /**
     * Auto fetch user
     * @default true
     * @type boolean
     */
    autoFetch?: boolean;
    /**
     * Auto refesh tokens
     * @default true
     * @type boolean
     */
    autoRefresh?: boolean;
    /**
     * Auto refesh tokens
     * @default true
     * @type boolean
     */
    onAutoRefreshFailure?: () => Promise<void>;
    /**
     * fetch user params
     * @type boolean
     */
    fetchUserParams?: DirectusQueryParams;
    /**
     * Auth Token
     * @type string
     */
    token?: string;
    /**
     * Add Directus Admin Dashboard in Nuxt Devtools
     *
     * @default false
     */
    devtools?: boolean;
    /**
     * Token Cookie Name
     * @type string
     * @ default 'directus_token'
     */
    cookieNameToken?: string;
    /**
     * Refresh Token Cookie Name
     * @type string
     * @default 'directus_refresh_token'
     */
    cookieNameRefreshToken?: string;
    /**
     * The max age for auth cookies in milliseconds.
     * This should match your directus env key REFRESH_TOKEN_TTL
     * @type string
     * @default 604800000
     */
    cookieMaxAge?: number;
    /**
     * The max age for auth cookies in milliseconds.
     * This should match your directus env key REFRESH_TOKEN_TTL
     * @type string
     * @default 604800000
     */
    maxAgeRefreshToken?: number;
    /**
     * The SameSite attribute for auth cookies.
     * @type string
     * @default 'lax'
     */
    cookieSameSite?: 'strict' | 'lax' | 'none' | undefined;
    /**
     * The Secure attribute for auth cookies.
     * @type boolean
     * @default false
     */
    cookieSecure?: boolean;
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions>;

declare module '@nuxt/schema' {
    interface ConfigSchema {
        directus?: ModuleOptions;
        publicRuntimeConfig?: {
            directus?: ModuleOptions;
        };
    }
}

export { DirectusAcceptInvite, DirectusAuthCredentials, DirectusAuthResponse, DirectusCollectionCreation, DirectusCollectionMeta, DirectusCollectionRequest, DirectusCollectionUpdate, DirectusFile, DirectusFileRequest, DirectusFolders, DirectusInviteCreation, DirectusItem, DirectusItemCreation, DirectusItemDeletion, DirectusItemMetaRequest, DirectusItemMetadata, DirectusItemRequest, DirectusItemUpdate, DirectusItems, DirectusMetaQueryParams, DirectusNotificationObject, DirectusPasswordForgotCredentials, DirectusPasswordResetCredentials, DirectusQueryParams, DirectusRegisterCredentials, DirectusRevision, DirectusThumbnailFit, DirectusThumbnailFormat, DirectusThumbnailOptions, DirectusUser, DirectusUserCreation, DirectusUserDeletion, DirectusUserRequest, DirectusUserUpdate, ModuleOptions, _default as default };
