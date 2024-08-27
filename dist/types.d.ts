
import { ModuleOptions } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['directus']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['directus']?: ModuleOptions }
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['directus']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['directus']?: ModuleOptions }
}


export { DirectusAcceptInvite, DirectusAuthCredentials, DirectusAuthResponse, DirectusCollectionCreation, DirectusCollectionMeta, DirectusCollectionRequest, DirectusCollectionUpdate, DirectusFile, DirectusFileRequest, DirectusFolders, DirectusInviteCreation, DirectusItem, DirectusItemCreation, DirectusItemDeletion, DirectusItemMetaRequest, DirectusItemMetadata, DirectusItemRequest, DirectusItemUpdate, DirectusItems, DirectusMetaQueryParams, DirectusNotificationObject, DirectusPasswordForgotCredentials, DirectusPasswordResetCredentials, DirectusQueryParams, DirectusRegisterCredentials, DirectusRevision, DirectusThumbnailFit, DirectusThumbnailFormat, DirectusThumbnailOptions, DirectusUser, DirectusUserCreation, DirectusUserDeletion, DirectusUserRequest, DirectusUserUpdate, ModuleOptions, default } from './module'
