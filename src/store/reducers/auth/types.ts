import {User} from "../../../shared/constants/interfaces";

export interface AuthState {
  accessToken: string;
  isAuth: boolean;
  currentUser: User | null;
}
