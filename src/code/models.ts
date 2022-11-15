export interface apiResult {
  ok: boolean;
  body?: any;
  errorMsg: string;
  errorCode: number;
}

export interface iLogin {
  token: string;
  user: user;
}

export interface ticket {
  id?: number;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  verifyCode: number;
  password: string;
  repeatPass?: string; // for front
}

export interface user {
  id?: number;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  verifyCode: number;
  password: string;
  repeatPass?: string; // for front
}
