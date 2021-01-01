import React, {Component} from "react";
import {Router, withRouter} from "next/router";
import {inject, observer} from "mobx-react";
import PostsStore from "../../../src/stores/PostsStore";
import {NextRouter} from "next/dist/client/router";
import {IPost} from "../../../src/interfaces/post";
import moment from "moment";

@inject('postsStore')
@observer
class DetailPost extends Component<any, any> {
  props!: {
    router: NextRouter;
    postsStore?: PostsStore;
  }

  state: {
    post: IPost | null;
  }

  constructor(props: any) {
    super(props);
    this.state = {
      post: null
    }
  }

  componentDidMount() {
    const id = this.props.router.query.id
    console.log(id)
    if (typeof id === "string") {
      this.props.postsStore?.getPostById(parseInt(id))
        .then(r => {
          console.log(r)
          this.setState({
            post: r
          })
        })
    }
  }

  render() {
    const {post} = this.state
    if (post) {
      const {description, title, id, content, authorId, publicationDate} = post
      return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <span>description: {description}</span>
          <span>title: {title}</span>
          <span>id: {id}</span>
          <span>content: {content}</span>
          <span>authorId: {authorId}</span>
          <span>publicationDate: {moment(publicationDate).startOf('minutes').fromNow()}</span>
        </div>
      )
    } else return null
  }
}

export default withRouter(DetailPost)