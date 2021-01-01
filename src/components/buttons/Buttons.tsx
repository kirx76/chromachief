import React, {Component} from "react";
import styles from './Buttons.module.scss';

export default class Buttons extends Component<any, any> {
  props: {
    type?: string;
    text?: string;
    onClick?: ()=>any;
  } | any;

  render() {
    const {text, onClick} = this.props
    return (
      <div className={styles.Buttons}>
        <button onClick={onClick}>{text}</button>
      </div>
    )
  }
}