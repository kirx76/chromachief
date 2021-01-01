import React, {Component} from "react";
import {inject, observer} from "mobx-react";
import PostsStore from "../src/stores/PostsStore";
import {IPost} from "../src/interfaces/post";
import Post from "../src/components/post";
import PseudoHeader from "../src/components/pseudoHeader";
import styles from '../styles/home.module.scss';


@inject('postsStore')
@observer
export default class Posts extends Component<any, any> {
  props!: {
    postsStore: PostsStore;
  }

  constructor(props: any) {
    super(props);
    this.state = {
      posts: null
    }
  }

  componentDidMount() {
    this.props.postsStore.getLastPosts().then(r => {
      this.setState({
        posts: r
      })
    })
  }

  render() {
    const {posts} = this.state
    if (posts)
      return (
        <div className={styles.News}>
          <PseudoHeader
            center={<span className={styles.News_Title}>Новости</span>}
          />
          <div style={{display: 'flex', flexDirection: 'column', padding: '16px'}}>
            {posts.map((post: IPost) => {
              return <Post key={post.id} data={post}/>
            })}
          </div>
        </div>
      )
    else return null
  }
}
