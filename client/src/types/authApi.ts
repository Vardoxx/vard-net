export interface RegisterRequare {
  password: string;
  email: string;
  userName: string;
}

export interface RegisterResponce {
  data: Date;
}

export interface LoginRequare {
  email: string;
  password: string;
}

export interface LoginResponce {
  id: string;
  email: string;
  userName: string;
  role: string;
  token: string;
  user: string;
}

export interface UserResponse {
  id: number;
  email: string;
  password: string;
  userName: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
