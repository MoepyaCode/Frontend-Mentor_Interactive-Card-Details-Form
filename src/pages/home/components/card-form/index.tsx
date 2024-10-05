import { Wrapper } from '@app-components'
import React, { useEffect } from 'react'
import { Input } from './input'
import { useAppDispatch, useAppSelector, useFormValidation, } from '@app-hooks'
import _ from 'lodash'
import { setValidation } from '@app-store/features/card'

export function CardForm() {
  const card = useAppSelector(state => state.card)
  const dispatch = useAppDispatch()
  const { validate, validation } = useFormValidation()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Form Submitted')
    validate(card)
  }

  useEffect(() => {

    if (!_.isEqual(validation, card.validation)) {
      dispatch(setValidation(validation))
    }

  }, [validate, card.validation, validation, dispatch])


  return (
    <Wrapper className='flex-grow grid place-items-center'>
      <form onSubmit={handleSubmit} className='px-6 flex flex-col gap-[26px] mb-[45px] max-w-[380px] md:min-w-[380px]'>
        <Input
          title='Cardholder Name'
          name='cardHolder'
          placeholder='e.g. Jane Appleseed'
          type='text'
          charsLimit={-1}
          error={validation.errors.cardHolder}
        />

        <Input
          title='Card Number'
          name='cardNumber'
          placeholder='e.g. 1234 5678 1234 5678'
          type='text'
          charsLimit={19}
          error={validation.errors.cardNumber}
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
                hasError={validation.errors.expiration.month.hasError}
                className='max-w-[72px]'
              />

              <Input
                name='year'
                placeholder='YY'
                type='number'
                charsLimit={2}
                hasError={validation.errors.expiration.year.hasError}
                className='max-w-[72px]'
              />
            </div>
            {
              (validation.errors.expiration.month.hasError || validation.errors.expiration.year.hasError)
              && <p className='body-s text-red mt-2'>{validation.errors.expiration.month.message || validation.errors.expiration.year.message}</p>
            }
          </Wrapper>

          {/* CVC */}
          <Input
            title='CVC'
            name='cvc'
            placeholder='e.g. 123'
            type='number'
            charsLimit={3}
            error={validation.errors.cvc}
            className='max-w-[164px]'
          />
        </Wrapper>

        <button className='bg-violet-deep text-white min-h-[53px] rounded-lg' type="submit">Confirm</button>
      </form>
    </Wrapper>
  )
}
