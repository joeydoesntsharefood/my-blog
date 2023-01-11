import Post from "../source/components/Post"
import { WrapperPosts } from "./styles"
import { IViewProps } from "./types"

const View = ({ data }: IViewProps) => {
  return (
    <WrapperPosts>
      { data && (
        data.map((value, index) => <Post {...value} key={`post-${index}`} />)
      )}
    </WrapperPosts>
  )
}

export default View