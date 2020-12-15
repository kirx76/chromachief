import React, {Component} from 'react';
import styles from '../styles/home.module.scss';
import Inputs from "../src/components/inputs";
import Buttons from "../src/components/buttons";
import PseudoHeader from "../src/components/pseudoHeader";

export default class Register extends Component<any, any> {
  render() {
    return (
      <div className={styles.Register}>
        <PseudoHeader
          center={<div className={styles.Register_Title}>
            <span>Регистрация</span>
          </div>}/>
        <div className={styles.Register_Inputs}>
          <Inputs placeholder={'Name'} type={'text'}/>
          <Inputs placeholder={'Email'} type={'email'}/>
          <Inputs placeholder={'Password'} type={'password'}/>
        </div>
        <div className={styles.Register_Btn}>
          <Buttons text={'Зарегестрироваться'}/>
        </div>
      </div>
    )
  }
}