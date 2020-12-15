import React, {Component} from "react";
import styles from './PseudoFooter.module.scss';

export default class PseudoFooter extends Component<any, any> {
  render() {

    return (
      <div className={styles.PseudoFooter}>
        <div className={styles.PseudoFooter_Container}>
          <Dots/>
        </div>
      </div>
    )
  }
}

export const Dots = (): JSX.Element => {
  return (
    <div className={styles.Dots}>
      <Dot active/>
      <Dot/>
      <Dot/>
      <Dot/>
      <Dot/>
    </div>
  )
}

class Dot extends Component<any, any> {
  props!: {
    active?: boolean;
  };

  render() {
    const {active} = this.props
    return (
      <div className={active ? styles.DotActive : styles.Dot}/>
    )
  }
}