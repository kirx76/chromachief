import React, {Component} from 'react';
import styles from './Inputs.module.scss';

export default class Inputs extends Component<any, any> {
  props: {
    type?: string;
    placeholder?: string;
  } | any;

  state: {
    isShowed: boolean
  }

  constructor(props: any) {
    super(props);
    this.state = {
      isShowed: false
    }
  }

  toggleShowPassword = (): void => {
    this.setState({
      isShowed: !this.state.isShowed
    })
  }

  getInputByType = (type: string, placeholder?: string, isShowed?: boolean): JSX.Element => {
    switch (type) {
      case 'password':
        return <div className={styles.Inputs}>
          {type === 'password' && <span
              onClick={this.toggleShowPassword}
              className={styles.ShowBtn}>Show</span>}
          <input type={isShowed ? 'text' : type} placeholder={placeholder}/>
        </div>
      default:
        return <div className={styles.Inputs}>
          <input type={type} placeholder={placeholder}/>
        </div>
    }
  }


  render() {
    const {type, placeholder} = this.props!
    const {isShowed} = this.state
    return (
      <>{this.getInputByType(type, placeholder, isShowed)}</>
    )
  }
}