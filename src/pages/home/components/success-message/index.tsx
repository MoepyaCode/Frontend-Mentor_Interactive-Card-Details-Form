
import { assets } from '@app-assets'
import { Wrapper } from '@app-components'
import { useAppDispatch } from '@app-hooks'
import { resetCard } from '@app-store/features/card'

export function SuccessMessage() {
    const dispatch = useAppDispatch()

    const handleResetForm = () => {
        console.log('reset')
        dispatch(resetCard())
    }

    return (
        <Wrapper className='grid place-items-center gap-[35px] w-full px-6'>
            <Wrapper className='max-w-[380px] w-full flex flex-col items-center gap-[35px]'>
                <img className='object-contain max-w-[80px] aspect-square' src={assets.icons.complete} alt="" />

                <Wrapper className='flex flex-col gap-[45px] w-full'>
                    <div className='flex flex-col items-center gap-4'>
                        <h1 className='heading-xl text-violet-deep'>THANK YOU!</h1>
                        <h2 className='heading-l text-grey-purpulish'>We’ve added your card details</h2>
                    </div>

                    <button onClick={handleResetForm} className='h-[53px] rounded-lg bg-violet-deep text-white '>Continue</button>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}
