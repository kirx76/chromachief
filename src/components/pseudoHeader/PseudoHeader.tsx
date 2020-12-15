import React, {Component} from "react";

export default class PseudoHeader extends Component<any, any> {
  props: {
    left?: string | JSX.Element | undefined;
    center?: string | undefined;
    right?: string | JSX.Element | undefined;
  } | any;

  render() {
    const {left, center, right} = this.props
    return (
      <div>
        {left}
        {center}
        {right}
      </div>
    )
  }
}