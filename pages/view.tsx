import ActionButtons from "../source/components/ActionButtons"
import Post from "../source/components/Post"
import { WrapperPosts } from "./styles"
import { IViewProps } from "./types"

const View = ({ data, postIndex, backPost, nextPost }: IViewProps) => {
  return (
    <WrapperPosts>
      <Post
        _id={data[postIndex]?._id}
        content={data[postIndex]?.content}
        createAt={data[postIndex]?.createAt}
        title={data[postIndex]?.title}
        updateAt={data[postIndex]?.updateAt}
      />
      <ActionButtons
        index={postIndex}
        backPost={backPost}
        nextPost={nextPost}
        selectDay={console.log}
      />
    </WrapperPosts>
  )
}

export default View