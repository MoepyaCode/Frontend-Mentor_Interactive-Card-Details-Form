import { Wrapper } from '@app-components'
import React, { FormEvent } from 'react'
import { Input } from './input'
import { useAppDispatch, useFormFormat } from '@app-hooks'

export function CardForm() {
  const { details, format } = useFormFormat()
  const [inputChange, setInputChange] = React.useState<FormFormatI>()
  const dispatch = useAppDispatch()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)

    let data = Object.fromEntries(formData.entries()) as unknown as CardFormI
    const { month, year, ...rest } = data
    const expiration: ExpirationDateType = {
      month: month,
      year: year
    }
    const cardState = { ...rest, expiration }
    format(cardState)
  }

 

  return (
    <Wrapper className='flex-grow grid place-items-center'>
      <form onSubmit={handleSubmit} className='px-6 flex flex-col gap-[26px] mb-[45px] max-w-[380px] md:min-w-[380px]'>
        <Input
          title='Cardholder Name'
          name='cardHolder'
          placeholder='e.g. Jane Appleseed'
          type='text'
          charsLimit={-1}
        />

        <Input
          title='Card Number'
          name='cardNumber'
          placeholder='e.g. 1234 5678 1234 5678'
          type='text'
          charsLimit={19}
        />

        {/* Expiration Date & CVC */}
        <Wrapper className='flex gap-[11px]'>

          {/* Expiration Month & Year */}
          <Wrapper>
            <h2 className='body-m text-violet-deep'>Exp. Date (MM/YY)</h2>

            <div className='flex gap-2'>
              <Input
                name='month'
                placeholder='MM'
                type='number'
                charsLimit={2}
                className='max-w-[72px]'
              />

              <Input
                name='year'
                placeholder='YY'
                type='number'
                charsLimit={2}
                className='max-w-[72px]'
              />
            </div>
          </Wrapper>

          {/* CVC */}
          <Input
            title='CVC'
            name='cvc'
            placeholder='e.g. 123'
            type='number'
            charsLimit={3}
            className='max-w-[164px]'
          />
        </Wrapper>

        <button className='bg-violet-deep text-white min-h-[53px] rounded-lg' type="submit">Confirm</button>
      </form>
    </Wrapper>
  )
}
