import { Container, Main } from "@app-components"
import { CardWrapper, CardForm, SuccessMessage } from "./components"
import { useAppSelector } from "@app-hooks"

export default function Home() {
  const card = useAppSelector(state => state.card)

  return (
    <Main className="bg-white">
      <Container className="min-h-screen flex flex-col md:flex-row gap-[91px] md:gap-0 items-center">
        <CardWrapper />
        {
          !card.validation.isValid ?
            <CardForm /> :
            <SuccessMessage />
        }
      </Container>
    </Main>
  )
}