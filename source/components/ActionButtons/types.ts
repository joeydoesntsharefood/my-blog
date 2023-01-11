export interface IViewProps {
  nextPost: (index: number) => void
  backPost: (index: number) => void
  index: number
  selectDay: (day: string) => void
}