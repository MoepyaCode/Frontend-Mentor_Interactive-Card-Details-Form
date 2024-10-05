import { assets } from '@app-assets'
import { Wrapper } from '@app-components'
import React from 'react'

export default function BackCard() {
    return (
        < Wrapper className='flex justify-center items-center max-w-[286px] max-h-[157px] xl:max-w-fit xl:max-h-[245px] self-end' >
            <div className='grid place-items-center relative'>
                <img className='flex-grow object-contain' src={assets.images.bgCardBack} alt="" />
                <p className='absolute right-[32px] font-medium text-[9px] tracking-[1.29px] xl:body-l xl:right-[50px]'>000</p>
            </div>
        </Wrapper >
    )
}
