import {AxiosInstance, AxiosResponse} from "axios";
import {action, IAction} from "mobx";
import {IPost} from "../interfaces/post";

export default class PostsStore {
  url: string;
  client: AxiosInstance;
  getPostById: ((id: number) => Promise<AxiosResponse<IPost>>) & IAction;
  getLastPosts: (() => Promise<AxiosResponse<IPost[]>>) & IAction;
  createNewPost: ((data: IPost) => Promise<IPost>) & IAction;

  // load: ((id) => Promise<AxiosResponse<any>>) & IAction;

  constructor(url: string, client: AxiosInstance) {
    this.url = url;
    this.client = client;

    this.getPostById = action((id: number) => {
      return this.client
        .get(this.url + id.toString())
        .then(response => response.data)
    })

    this.getLastPosts = action(() => {
      return this.client
        .get(this.url)
        .then(response => response.data)
    })

    this.createNewPost = action((data: IPost) => {
      return this.client
        .post(this.url, data)
        .then(r => r.data)
    })

    // this.load = action((id) => {
    //   return this.client
    //     .get(this.url + `?city_id=${id}`)
    //     .then(response => {
    //       return response.data;
    //     })
    // });

  }

}
