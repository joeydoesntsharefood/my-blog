import { createElement, useEffect, useState } from "react";
import { posts } from "../source/constants/mockData";
import { IPost } from "../source/interfaces/IPost";
import View from "./view";

const Home = () => {
  const [data, setData] = useState<Array<IPost>>([])

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

  return createElement(View, { data })
}

export default Home