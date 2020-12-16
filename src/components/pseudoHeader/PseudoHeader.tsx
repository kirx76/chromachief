import React, {Component} from "react";
import styles from './PseudoHeader.module.scss';

export default class PseudoHeader extends Component<any, any> {
  props: {
    left?: string | JSX.Element | undefined;
    center?: string | undefined;
    right?: string | JSX.Element | undefined;
  } | any;

  render() {
    const {left, center, right} = this.props
    return (
      <div className={styles.PseudoHeader}>
        <div className={styles.PseudoHeader_Left}>{left}</div>
        <div className={styles.PseudoHeader_Center}>{center}</div>
        <div className={styles.PseudoHeader_Right}>{right}</div>
      </div>
    )
  }
}
