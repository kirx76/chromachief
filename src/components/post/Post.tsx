import React, {Component} from "react";
import styles from './Post.module.scss';
import {IPost} from "../../interfaces/post";
import Link from "next/link";

export default class Post extends Component<any, any> {
  props!: {
    data: IPost;
  }

  render() {
    const {authorId, description, id, title} = this.props.data
    return (
      <Link href={`/post/${id}`}>
        <div className={styles.Post}>
          <div className={styles.Post_Left}>
            <div className={styles.Post_Left_Image}>
              <img src="/static/test/Plain.svg" alt=""/>
            </div>
          </div>
          <div className={styles.Post_Right}>
            <div className={styles.Post_Right_Head}>
              <div className={styles.Post_Right_Head_Title}>
                <span>{title}</span>
              </div>
              <div className={styles.Post_Right_Head_Time}>
                <span>8m ago</span>
              </div>
            </div>
            <div className={styles.Post_Right_Body}>
              <span>{description}</span>
            </div>
            <div className={styles.Post_Right_Divider}/>
          </div>
        </div>
      </Link>
    )
  }
}