import React, {Component} from 'react';
import styles from './Inputs.module.scss';

export default class Inputs extends Component<any, any> {
  props: {
    type?: string;
    placeholder?: string;
    value?: string;
    name?: string;
    onChangeFunc?: () => any;
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

  getInputByType = (type: string, placeholder?: string, isShowed?: boolean, value?: string, name?: string, onChangeFunc?: () => any): JSX.Element => {
    switch (type) {
      case 'password':
        return <div className={styles.Inputs}>
          {type === 'password' && <span
              onClick={this.toggleShowPassword}
              className={styles.ShowBtn}>Show</span>}
          <input
            type={isShowed ? 'text' : type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChangeFunc}/>
        </div>
      default:
        return <div className={styles.Inputs}>
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChangeFunc}/>
        </div>
    }
  }


  render() {
    const {type, placeholder, value, name, onChangeFunc} = this.props!
    const {isShowed} = this.state
    return (
      <>{this.getInputByType(type, placeholder, isShowed, value, name, onChangeFunc)}</>
    )
  }
}