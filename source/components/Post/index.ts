import { createElement } from "react"
import { IPost } from "../../interfaces/IPost"
import { IViewProps } from "./types"
import View from "./view"

const Post = ({ _id, content,createAt, title, updateAt }: IPost) => {
  const viewProps: IViewProps = {
    _id,
    content,
    createAt,
    title,
    updateAt,
    handleEdit: console.log
  }

  return createElement(View, viewProps)
}

export default Post