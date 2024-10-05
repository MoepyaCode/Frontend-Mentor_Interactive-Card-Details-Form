import { assets } from '@app-assets'
import { Wrapper } from '@app-components'

type Props = {
    [K in keyof Omit<CardStateI, 'cvc'>]: CardStateI[K]
}

export default function FrontCard(props: Props) {
    const { cardHolder, cardNumber, expiration } = props

    const renderCardHolder = () => {
        return cardHolder.toUpperCase() || 'JANE APPLESEED'
    }

    const renderCardnumber = () => {
        return cardNumber || '0000 0000 0000 0000'
    }

    const renderExpiration = () => {
        const { month, year } = expiration

        return `${month.toString().padStart(2, '0')}/${year.toString().padStart(2, '0')}`
    }

    return (
        <Wrapper className='flex justify-center items-center max-w-[286px] max-h-[157px] xl:max-w-[447px] xl:max-h-[245px] absolute -bottom-[89px] md:relative md:bottom-0'>
            <div className='relative flex'>
                <img className='flex-grow object-contain' src={assets.images.bgCardFront} alt="" />

                <div className='absolute w-full flex flex-col justify-between flex-grow px-[20px] py-[18px] h-full xl:w-full  xl:px-8 xl:py-7'>
                    {/* logo */}
                    <img className='object-contain w-[54px] xl:w-[84px]' src={assets.logo} alt="" />

                    <div className='flex flex-col gap-[17px]'>
                        {/* card number */}
                        <p className='font-medium text-[18px] tracking-[2.2px] xl:heading-xl'>{renderCardnumber()}</p>

                        {/* card holder && expiration date */}
                        <div className='font-medium text-[9px] tracking-[1.29px] flex justify-between xl:body-l'>
                            <span>{renderCardHolder()}</span>
                            <span>{renderExpiration()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
