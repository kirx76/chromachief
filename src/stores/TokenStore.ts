import Cookie from "mobx-cookie";
import {action, extendObservable, observable} from "mobx";

class TokenStore {
  token: Cookie | undefined;
  @observable server_token: string | null

  constructor(initialData: TokenStore | undefined) {
    extendObservable(this, {
      token: new Cookie('token'),
    });
    this.server_token = initialData?.server_token || null;
  }

  @action get() {
    return this.server_token || this.token?.value
  }

  @action set(token: string, server = false) {
    if (server) {
      this.server_token = token
    } else {
      this.token?.set(token, {expires: 7});
    }
  }

  @action remove() {
    this.token?.remove()
    this.server_token = null
  }
}

export default TokenStore;
