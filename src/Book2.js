import { useParams } from "react-router-dom"

export function Book2() {
  const { id } = useParams()

  return (
    <h1>Book22222 {id}</h1>
  )
}