import React, {ChangeEvent, Component} from 'react';
import styles from './admin.module.scss';
import {inject, observer} from "mobx-react";
import PostsStore from "../../src/stores/PostsStore";
import redirectTo from "../../src/utils/redirectTo";


@inject('postsStore')
@observer
export default class NewPost extends Component<any, any> {
  props!: {
    postsStore?: PostsStore;
  }

  constructor(props: any) {
    super(props);
    this.state = {
      title: '',
      content: '',
      description: ''
    }
  }

  onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const {target} = event
    const {value, id} = target
    console.log(id, ':', value)
    const newState: any = {}
    newState[id] = value
    this.setState(newState)
  }

  onSubmit = (): void => {
    console.log(this.state)
    this.props.postsStore?.createNewPost(this.state)
      .then(r => {
        redirectTo(`/post/${r.id}`)
      })
  }

  render() {
    const {title, content, description} = this.state
    return (
      <div className={styles.NewPost}>
        <input type="text" onChange={this.onChangeInput} value={title} id={'title'}/>
        <input type="text" onChange={this.onChangeInput} value={content} id={'content'}/>
        <input type="text" onChange={this.onChangeInput} value={description} id={'description'}/>
        <button onClick={this.onSubmit}>submit</button>
      </div>
    )
  }
}