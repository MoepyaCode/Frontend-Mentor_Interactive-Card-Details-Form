import { Wrapper } from '@app-components'
import React, { ChangeEvent, forwardRef } from 'react'
import { setCardHolder, setCardNumber, setCvc, setExpiration } from '@app-store/features/card'
import { useAppDispatch, useFormFormat } from '@app-hooks'

type Props = {
  title?: string
  name: string
  type: React.HTMLInputTypeAttribute
  placeholder: string
  className?: string
  charsLimit: number
}

export const Input = forwardRef<HTMLInputElement, Props>(function Input(props, ref) {
  const [value, setValue] = React.useState('')
  const { details, format } = useFormFormat()
  const [inputChange, setInputChange] = React.useState<FormFormatI>()
  const dispatch = useAppDispatch()
  const error = false

  const onChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement

    if (target.value.length > props?.charsLimit && props.charsLimit !== -1) return setValue(value)

    setValue(target.value)
    format({ [target.name]: target.value })
    setInputChange({ [target.name]: target.value })
  }

  React.useEffect(() => {
    const { cardHolder, cardNumber, expiration, cvc } = details

    switch (inputChange && Object.keys(inputChange)[0]) {
      case 'cardHolder':
        setValue(cardHolder)
        cardHolder && dispatch(setCardHolder(cardHolder))
        break
      case 'cardNumber':
        setValue(cardNumber)
        cardHolder && dispatch(setCardNumber(cardNumber))
        break
      case 'month':
      case 'year':
        const { month, year } = inputChange as FormFormatI
        month ? setValue(month.toString()) : year && setValue(year.toString())
        dispatch(setExpiration(expiration))
        break
      case 'cvc':
        cvc && dispatch(setCvc(cvc))
        break
    }

  }, [details, inputChange])

  return (
    <Wrapper className={`${props.className} flex flex-col gap-[9px]`}>
      <h2 className='body-m text-violet-deep'>{props.title}</h2>

      <label className='relative flex' htmlFor={props.name}>
        <input value={value} onChange={onChange} ref={ref} className={`w-full flex-grow outline-none border ${error ? '' : 'border-grey-light '} rounded-lg pl-4 heading-l min-h-[45px] placeholder-violet-deep placeholder:opacity-25`} type={props.type} name={props.name} id={props.name} placeholder={props.placeholder} />
      </label>
      <p className={`${error ? 'flex' : 'hidden'}`}>{error}</p>
    </Wrapper>
  );
});