import { Wrapper } from '@app-components'
import BackCard from './back-card'
import FrontCard from './front-card'
import { useAppSelector } from '@app-hooks'

export function CardWrapper() {
    const card = useAppSelector(state => state.card)

    return (
        <Wrapper className='relative text-white min-w-full md:max-w-[483px] md:min-w-fit md:w-full max-h-[240px] min-h-[240px] md:min-h-screen md:grid md:place-items-center bg-main-mobile md:bg-main-desktop bg-no-repeat bg-center bg-cover  px-4 pt-8 shadow-[0_39px_60px_0_rgba(0,0,0,0.1425)]'>
            <Wrapper className='relative flex flex-col md:flex-col-reverse md:gap-[37px] md:max-w-[541px] md:w-full lg:absolute lg:-right-[111px] xl:-right-[222px]'>
                <BackCard cvc={card.cvc} />
                <FrontCard 
                    cardHolder={card.cardHolder} 
                    cardNumber={card.cardNumber} 
                    expiration={card.expiration}
                />
            </Wrapper>
        </Wrapper>
    )
}