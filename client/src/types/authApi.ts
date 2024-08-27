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

type Role = "user" | "admin";
export interface LoginResponce {
  userName: string;
  role: Role;
}
