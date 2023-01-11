import { IPost } from "../../interfaces/IPost"
import { WrapperContent, WrapperDate, WrapperPost, WrapperTitle } from "./styles"
import { IViewProps } from "./types"

const View = ({ _id, content, createAt, title, updateAt, handleEdit }: IViewProps) => {
  return (
    <WrapperPost onClick={() => handleEdit(_id)}>
      <WrapperTitle>{title}</WrapperTitle>
      <WrapperContent>{content}</WrapperContent>
      { updateAt && <>Edit in:</> }
      <WrapperDate>{updateAt ?? createAt}</WrapperDate>
    </WrapperPost>
  )
}

export default View