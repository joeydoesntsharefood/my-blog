const format = {
  date: (value: string) => {
    const [year, month, day] = value.split('-')
    return `${day}-${month}-${year}`
  }
}

export default format