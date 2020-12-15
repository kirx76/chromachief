import React, {Component} from 'react';
import styles from '../styles/home.module.scss';
import Inputs from "../src/components/inputs";
import Buttons from "../src/components/buttons";
import PseudoHeader from "../src/components/pseudoHeader";

export default class Login extends Component<any, any> {
  render() {
    return (
      <div className={styles.Login}>
        <PseudoHeader
          center={<div className={styles.Login_Title}>
            <span>Авторизация</span>
          </div>}/>
        <div className={styles.Login_Inputs}>
          <Inputs placeholder={'Email'} type={'email'}/>
          <Inputs placeholder={'Password'} type={'password'}/>
        </div>
        <div className={styles.Login_Btn}>
          <Buttons text={'Войти'}/>
        </div>
      </div>
    )
  }
}