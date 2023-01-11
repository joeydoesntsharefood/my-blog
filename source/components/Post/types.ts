import { IPost } from "../../interfaces/IPost";

export interface IViewProps extends IPost {
  handleEdit: (_id: number) => void
}