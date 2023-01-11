import format from "../../utils/format"
import { IViewProps } from "./types"

const View = ({ backPost, nextPost, index, selectDay }: IViewProps) => {
  return (
    <>
      <button onClick={() => backPost(index)}>Back</button>
      <button onClick={() => nextPost(index)}>Next</button>
      <input type='date' onChange={event => selectDay(format.date(event.target.value))} />
    </>
  )
}

export default View
