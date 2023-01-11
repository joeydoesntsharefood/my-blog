import { createElement } from "react"
import { IViewProps } from "./types"
import View from "./view"

const ActionButtons = ({ backPost, nextPost, index, selectDay }: IViewProps) => {
  return createElement(View, { backPost, nextPost, index, selectDay })
}

export default ActionButtons