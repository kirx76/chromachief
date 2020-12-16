import React, {Component} from "react";
import styles from './ExitButton.module.scss';
import Link from "next/link";

export default class ExitButton extends Component<any, any> {
  props!: {
    href: string
  }

  render() {
    const {href} = this.props
    return (
      <Link href={href}>
        <div className={styles.ExitButton}>
          <img src="/static/icons/X.svg" alt=""/>
        </div>
      </Link>
    )
  }
}
