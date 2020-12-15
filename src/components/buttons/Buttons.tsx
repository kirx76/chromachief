import React, {Component} from "react";
import styles from './Buttons.module.scss';

export default class Buttons extends Component<any, any> {
  props: {
    type?: string;
    text?: string;
  } | any;

  render() {
    const {text} = this.props
    return (
      <div className={styles.Buttons}>
        <button>{text}</button>
      </div>
    )
  }
}