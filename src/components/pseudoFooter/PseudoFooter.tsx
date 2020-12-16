import React, {Component} from "react";
import styles from './PseudoFooter.module.scss';
import Link from "next/link";

export default class PseudoFooter extends Component<any, any> {
  render() {
    const {children} = this.props

    return (
      <div className={styles.PseudoContainer}>
        {children}
        <div className={styles.PseudoFooter}>
          <div className={styles.PseudoFooter_Container}>
            <Dots/>
          </div>
        </div>
      </div>
    )
  }
}

export const Dots = (): JSX.Element => {
  return (
    <div className={styles.Dots}>
      <Dot active href={'/'}/>
      <Dot href={'/'}/>
      <Dot href={'/'}/>
      <Dot href={'/flow'}/>
      <Dot href={'/profile'}/>
    </div>
  )
}

class Dot extends Component<any, any> {
  props!: {
    active?: boolean;
    href: string;
  };

  render() {
    const {active, href} = this.props
    return (
      <Link href={href}>
        <div className={active ? styles.DotActive : styles.Dot}/>
      </Link>
    )
  }
}
