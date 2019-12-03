/**
 * Interface implemented by versioned storage objects.
 */
export interface HasVersion {
  timeModified: Date;
  userId: string;
}

/**
 * A page of data.
 */
export interface DataPage<T> {
  pageNumber: number;
  pageSize: number;
  pageCount: number;
  total: number;
  items: T[];
}

/**
 * Item's properties, excluding its parts.
 */
export interface Item extends HasVersion {
  id: string;
  title: string;
  description: string;
  facetId: string;
  sortKey: string;
  flags: number;
}

/**
 * Filter for items.
 */
export interface ItemFilter {
  pageNumber: number;
  pageSize: number;
  title?: string;
  description?: string;
  facetId?: string;
  flags?: number;
  minModified?: Date;
  maxModified?: Date;
  userId?: string;
}

/**
 * Essential information about an item.
 */
export interface ItemInfo {
  id: string;
  title: string;
  description: string;
  facet: string;
  sortKey: string;
  flags: number;
  timeModified: Date;
  userId: string;
}

/**
 * Part. This is the minimal set of properties present in all the
 * parts. Each part then adds its own properties, extending this interface.
 */
export interface Part extends HasVersion {
  id: string;
  itemId: string;
  typeId: string;
  roleId: string;
}

/**
 * Text layer fragment. This is the minimal set of properties present in all the
 * fragments. Each fragment then adds its own properties, extending this
 * interface.
 * Every fragment has a location, and can be enriched with the corresponding
 * base text when used in views.
 */
export interface Fragment {
  location: string;
  baseText?: string;
}

/**
 * Token-based text layer part. This represents a special type of part,
 * whose only content is a collection of fragments.
 */
export interface TokenTextLayerPart extends Part {
  fragments: Fragment[];
}

/**
 * A text line in a base text part.
 */
export interface TextLine {
  y: number;
  tokens: string[];
}

/**
 * Token-based text coordinates.
 */
export interface TextCoords {
  y: number;
  x: number;
  at?: number;
  run?: number;
}

/**
 * A single entry in a thesaurus.
 */
export interface ThesaurusEntry {
  id: string;
  value: string;
}

/**
 * A set of thesaurus entries.
 */
export interface Thesaurus {
  id: string;
  language: string;
  entries: ThesaurusEntry[];
}

/**
 * Part definition in a facet.
 */
export interface PartDefinition {
  typeId: string;
  roleId: string;
  name: string;
  description: string;
  isRequired: boolean;
  colorKey: string;
  groupKey: string;
  sortKey: string;
}

/**
 * Fragment definition in a facet.
 */
export interface FragmentDefinition {
  typeId: string;
  name: string;
  description: string;
  colorKey: string;
  groupKey: string;
  sortKey: string;
}

/**
 * Facet definition.
 */
export interface FacetDefinition {
  id: string;
  label: string;
  description: string;
  partDefinitions: PartDefinition[];
  fragmentDefinitions: FragmentDefinition[];
}

/**
 * Flag definition.
 */
export interface FlagDefinition {
  id: number;
  label: string;
  description: string;
  colorKey: string;
}

/**
 * Essential information about a user.
 */
export interface UserInfo {
  userName: string;
  firstName: string;
  lastName: string;
}

/**
 * Login credentials.
 */
export interface LoginCredentials {
  name: string;
  password: string;
}

/**
 * Login result.
 */
export interface LoginResult {
  token: string;
  expiration: Date;
}

export interface ExistResult {
  entry: string;
  isExisting: boolean;
}

export interface RegistrationModel {
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  password: string;
}

/**
 * Authenticated user data.
 */
export interface User {
  userName: string;
  email: string;
  roles: string[];
  isVerified?: boolean;
  firstName: string;
  lastName: string;
}

/**
 * An editable user.
 */
export interface EditableUser {
  userName: string;
  email: string;
  emailConfirmed: boolean;
  lockoutEnabled: boolean;
  lockoutEnd?: Date;
  firstName: string;
  lastName: string;
  roles: string[];
}

/**
 * User filter parameters.
 */
export interface UserFilter {
  pageNumber: number;
  pageSize: number;
  name?: string;
}

/**
 * Password change data.
 */
export interface PasswordChange {
  email: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
