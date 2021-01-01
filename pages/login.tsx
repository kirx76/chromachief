import React, {Component} from 'react';
import styles from '../styles/home.module.scss';
import Inputs from "../src/components/inputs";
import Buttons from "../src/components/buttons";
import PseudoHeader from "../src/components/pseudoHeader";
import Link from "next/link";
import {ILogin} from "../src/interfaces/login";
import {inject, observer} from "mobx-react";
import AuthStore from "../src/stores/AuthStore";
import axios from 'axios';
import Cookie from "mobx-cookie";
import PostsStore from "../src/stores/PostsStore";
import redirectTo from "../src/utils/redirectTo";


@inject('authStore')
@inject('postsStore')
@observer
export default class Login extends Component<any, any> {
  state: ILogin
  props!: {
    authStore: AuthStore;
    postsStore: PostsStore;
  }

  constructor(props: any) {
    super(props);
    this.state = {
      login: 'e1@localhost',
      password: '123123123',
    }
  }

  inputOnChange = (e: any) => {
    const {name, value} = e.target
    const changes: ILogin | {} | any = {}
    changes[name] = value
    this.setState(changes)
  }

  login = () => {
    this.props.authStore.login(this.state.login, this.state.password).then(() => {
      redirectTo('/posts/')
    })
      .catch(r => {
        console.log(r)
      })
  }

  componentDidMount() {
    console.log(this.props.authStore)
    if (this.props.authStore.user) {
      redirectTo('/profile/')
    }
  }

  render() {
    const {login, password} = this.state
    return (
      <div style={{padding: '0 16px 16px 16px'}}>
        <div className={styles.Login}>
          <PseudoHeader
            center={<div className={styles.Login_Title}>
              <span>Авторизация</span>
            </div>}/>
          <div className={styles.Login_Inputs}>
            <Inputs placeholder={'Email'} type={'email'} value={login} name={'login'}
                    onChangeFunc={this.inputOnChange}/>
            <Inputs placeholder={'Password'} type={'password'} value={password} name={'password'}
                    onChangeFunc={this.inputOnChange}/>
          </div>
          <div className={styles.Login_Btn}>
            <Buttons text={'Войти'} onClick={this.login}/>
          </div>
        </div>
      </div>
    )
  }
}
