import React, {Component} from 'react';
import styles from '../styles/home.module.scss';
import PseudoFooter from "../src/components/pseudoFooter";
import {inject, observer} from "mobx-react";
import {User} from "../src/entities/user";
import AuthStore from "../src/stores/AuthStore";
import {UserModel} from "../src/models/user";
import redirectTo from "../src/utils/redirectTo";

@inject('authStore')
@observer
export default class Login extends Component<any, any> {
  props!: {
    authStore: AuthStore;
  }

  componentDidMount() {
    console.log(this.props.authStore.user)
    if (!this.props.authStore.user) {
      redirectTo('/login')
    }
  }

  render() {
    const {email, fullName, address, id}: User = new UserModel(this.props.authStore.user!);
    return (
      <PseudoFooter>
        <div className={styles.Profile}>
          <h1>USER INFO:</h1>
          <div>
            <span>email: </span>
            <span>{email}</span>
          </div>
          <div>
            <span>fullName: </span>
            <span>{fullName}</span>
          </div>
          <div>
            <span>id: </span>
            <span>{id}</span>
          </div>
          <br/>
          <h2>ADDRESS</h2>
          <div>
            <span>city: </span>
            <span>{address.city}</span>
          </div>
          <div>
            <span>country: </span>
            <span>{address.country}</span>
          </div>
          <div>
            <span>street: </span>
            <span>{address.street}</span>
          </div>
        </div>
      </PseudoFooter>
    )
  }
}
