import React, {Component} from 'react';
import styles from '../styles/home.module.scss';
import Inputs from "../src/components/inputs";
import Buttons from "../src/components/buttons";
import PseudoHeader from "../src/components/pseudoHeader";
import ExitButton from "../src/components/exitButton";
import Link from "next/link";
import {ILogin} from "../src/interfaces/login";
import {inject, observer} from "mobx-react";
import AuthStore from "../src/stores/AuthStore";
import redirectTo from "../src/utils/redirectTo";


@inject('authStore')
@observer
export default class Register extends Component<any, any> {
  props!: {
    authStore?: AuthStore;
  }

  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }


  inputOnChange = (e: any) => {
    const {name, value} = e.target
    const changes: ILogin | {} | any = {}
    changes[name] = value
    this.setState(changes)
  }

  register = (): void => {
    const {name, email, password} = this.state
    this.props.authStore?.register(name, password, email)
      .then(r => {
        redirectTo('/login/')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  render() {
    const {
      name,
      email,
      password
    } = this.state
    return (
      <div className={styles.MainBlock}>
        <div className={styles.Register}>
          <PseudoHeader
            left={<LeftBlock/>}
            center={<CenterBlock/>}
            right={<RightBlock/>}
          />
          <div className={styles.Register_Inputs}>
            <Inputs
              onChangeFunc={this.inputOnChange}
              value={name}
              name={'name'}
              placeholder={'Name'}
              type={'text'}/>
            <Inputs
              onChangeFunc={this.inputOnChange}
              value={email}
              name={'email'}
              placeholder={'Email'}
              type={'email'}/>
            <Inputs
              onChangeFunc={this.inputOnChange}
              value={password}
              name={'password'}
              placeholder={'Password'}
              type={'password'}/>
          </div>
          <div className={styles.Register_Btn}>
            <Buttons text={'Зарегестрироваться'} onClick={this.register}/>
          </div>
        </div>
      </div>
    )
  }
}

const LeftBlock = (): JSX.Element => {
  return (
    <div className={styles.Register_Exit}>
      <ExitButton href={'/'}/>
    </div>
  )
}

const CenterBlock = (): JSX.Element => {
  return (
    <div className={styles.Register_Title}>
      <span>Регистрация</span>
    </div>
  )
}

const RightBlock = (): JSX.Element => {
  return (
    <Link href={'/login'}>
      <div className={styles.Register_Login}>
        <span>Логин</span>
      </div>
    </Link>
  )
}
