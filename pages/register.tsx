import React, {Component} from 'react';
import styles from '../styles/home.module.scss';
import Inputs from "../src/components/inputs";
import Buttons from "../src/components/buttons";
import PseudoHeader from "../src/components/pseudoHeader";
import ExitButton from "../src/components/exitButton";
import Link from "next/link";

export default class Register extends Component<any, any> {
  render() {
    return (
      <div className={styles.Register}>
        <PseudoHeader
          left={<LeftBlock/>}
          center={<CenterBlock/>}
          right={<RightBlock/>}
        />
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
