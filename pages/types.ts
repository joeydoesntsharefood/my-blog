import { IPost } from "../source/interfaces/IPost";

export interface IViewProps {
  data: Array<IPost>
  postIndex: number
  nextPost: (index: number) => void
  backPost: (index: number) => void
}