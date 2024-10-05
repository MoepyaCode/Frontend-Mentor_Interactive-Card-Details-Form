import { Container, Main } from "@app-components"
import { CardWrapper, CardForm } from "./components"

export default function Home() {
  return (
    <Main className="bg-white">
      <Container className="min-h-screen flex flex-col md:flex-row gap-[91px] md:gap-0 items-center">
        <CardWrapper />
        <CardForm />
      </Container>
    </Main>
  )
}