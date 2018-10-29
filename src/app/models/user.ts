export interface Roles {
  subscriber?: boolean;
  editor?: boolean;
  admin?: boolean;
}


export interface User {
    uid?: string;
    displayName?: string;
    email?: string;
    photoURL?:string;
    isAdmin?: boolean;
    roles?: Roles;
  }
