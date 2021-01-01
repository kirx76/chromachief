import {User} from "../entities/user";
import {action, observable} from "mobx";
import {AxiosInstance, AxiosResponse} from "axios";
import TokenStore from "./TokenStore";
import {ILogin} from "../interfaces/login";

class AuthStore {
  client: AxiosInstance;
  @observable user: User | undefined;
  tokenStore: TokenStore;

  constructor(client: AxiosInstance, initialData: AuthStore | undefined, tokenStore: TokenStore) {
    this.client = client;
    this.user = initialData?.user
    this.tokenStore = tokenStore
  }

  fetchCurrentUser(): Promise<User | undefined> {
    if (this.tokenStore.get()) {
      return this.client.get<User | undefined>(
        '/auth/me/',
      ).then((response) => {
        this.setUser(response.data)
        return this.user
      }).catch((err) => {
        if (err.response?.status === 401) {
          this.tokenStore.remove()
          this.setUser(undefined)
        }
        return new Promise((resolve, reject) => {
          this.setUser(undefined)
          resolve(undefined as unknown as User);
        });
      })
    }

    return new Promise((resolve, reject) => {
      this.setUser(undefined)
      resolve(undefined as unknown as User);
    });
  }

  // update(user: User) {
  //   return this.client.patch<User>(
  //     '/api/auth/me/',
  //     user,
  //   ).then((response) => {
  //     this.setUser(response.data)
  //     return this.user
  //   })
  // }

  login(username: string, password: string): Promise<User | undefined> {
    const data = {
      email: username,
      password: password
    }
    return this.client.post<User | undefined>(
      '/auth/login', data
    ).then((response) => {
      console.log(response)
      this.handleAuth(response);
      this.setUser(response.data)
      return this.user
    })
  };

  // registration(phone: string, password: string, first_name: string): Promise<any> {
  //   return this.client.post<User>(
  //     '/api/auth/registration/',
  //     JSON.stringify({phone, password, first_name})
  //   )
  // };

  // change_email(email: string): Promise<any> {
  //   return this.client.post<User>(
  //     '/api/auth/change_email/', {'email': email}
  //   ).then((response) => {
  //     return response
  //   })
  // }

  // confirm_email(email: string, code: number): Promise<any> {
  //   return this.client.post<User>(
  //     '/api/auth/confirm_email/', {'email': email, 'code': code}
  //   ).then((response) => {
  //     return response
  //   })
  // }

  // change_phone(phone: string): Promise<any> {
  //   return this.client.post<User>(
  //     '/api/auth/change_phone/', {'phone': phone}
  //   ).then((response) => {
  //     return response
  //   })
  // }

  // confirm_phone(phone: string, code: number): Promise<any> {
  //   return this.client.post<User>(
  //     '/api/auth/confirm_phone/', {'phone': phone, 'code': code}
  //   ).then((response) => {
  //     return response
  //   })
  // }

  // confirm_phone_reg(user_id: number, phone: string, code: string): Promise<any> {
  //   return this.client.post<User>(
  //     '/api/auth/confirm_phone_reg/',
  //     JSON.stringify({user_id, phone, code})
  //   ).then((response) => {
  //     this.handleAuth(response);
  //     this.setUser(response.data);
  //     return this.user
  //   })
  // };

  // resend_code(user_id: number): Promise<any> {
  //   return this.client.post<User>(
  //     '/api/auth/resend_code/',
  //     JSON.stringify({user_id})
  //   )
  // };

  // changePassword(user: User) {
  //   return this.client.post<User>(
  //     '/api/auth/change_password/',
  //     user,
  //   ).then((response) => {
  //     this.setUser(response.data);
  //     return this.user
  //   })
  // }

  // recoverPassword(username: string) {
  //   return this.client.post(
  //     '/api/auth/recover/',
  //     {username: username}
  //   ).then(response => {
  //     return response
  //   })
  // }

  // getTokenFromCode(code: string) {
  //   return this.client.post(
  //     '/api/auth/check_sms_code/',
  //     {code: code}
  //   )
  // }

  // recoverPasswordPhone(token: string, password: string) {
  //   return this.client.post(
  //     '/api/auth/set_password/',
  //     {
  //       token: token,
  //       password: password
  //     }
  //   ).then((response) => {
  //     this.handleAuth(response);
  //     this.setUser(response.data);
  //     return this.user
  //   })
  // }

  handleAuth(response: AxiosResponse) {
    this.setToken(response.headers.authorization);
  };

  // deleteSocial(id: number) {
  //   return this.client.delete(
  //     `/api/socials/${id}/`
  //   )
  // }

  // getSocial() {
  //   return this.client.get(
  //     '/api/socials/'
  //   )
  // }

  @action setToken(token: string) {
    this.tokenStore.set(token);
  };

  @action setUser(user: User | undefined) {
    this.user = user
  }

  @action logOut() {
    this.user = undefined;
    this.tokenStore.remove()
  }
}

export default AuthStore;
