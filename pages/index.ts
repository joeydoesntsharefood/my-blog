import { createElement, useEffect, useState } from "react";
import { posts } from "../source/constants/mockData";
import { IPost } from "../source/interfaces/IPost";
import { IViewProps } from "./types";
import View from "./view";

const Home = () => {
  const [data, setData] = useState<Array<IPost>>([])
  const [postIndex, setPostIndex] = useState<number>(0)

  useEffect(() => {
    const getValues = async () => {
      try {
        const response = posts
        setData(response)
      } catch (err: any) {
        console.log(err)
      }
    }

    getValues()
  }, [])

  const viewProps: IViewProps = {
    data,
    postIndex,
    backPost: index => setPostIndex(index - 1),
    nextPost: index => setPostIndex(index + 1)
  }

  return createElement(View, viewProps)
}

export default Home