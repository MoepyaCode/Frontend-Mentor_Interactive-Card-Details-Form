import { useState } from "react"
import { validation as initValidationState, isError, noError } from '@app-utils'
import _ from "lodash"


export function useFormValidation() {
    const [validation, setValidation] = useState<ValidationI>(initValidationState)

    const validate = (card: CardStateValidatedI) => {
        let { errors, isValid } = _.cloneDeep(initValidationState)

        const cardHolder = validateCardHolder(card.cardHolder)
        const cardNumber = validateCardNumer(card.cardNumber)
        const expiration = validateExpiration(card.expiration)
        const cvc = validateCvc(card.cvc)
        isValid = !cardHolder.hasError && !cardNumber.hasError && !expiration.month.hasError && !expiration.year.hasError && !cvc.hasError

        errors = {
            cardHolder,
            cardNumber,
            expiration,
            cvc
        }

        setValidation({ errors, isValid })
    }

    return { validation, validate }
}

function validateCardHolder(cardHolder: CardStateI['cardHolder']): ErrorI {
    if (_.isEmpty(cardHolder)) return isError

    return noError
}

function validateCardNumer(cardNumber: CardStateI['cardNumber']): ErrorI {
    console.log({ cardNumber })
    if (_.isEmpty(cardNumber)) return isError

    if (cardNumber.length !== 19) return {
        message: 'Invalid card number',
        hasError: true
    }

    return noError
}

function validateExpiration(expiration: CardStateI['expiration']) {
    const { month, year } = expiration
    const currentDate = new Date()
    const expirationYear = parseInt(`20${year}`)

    const validateMonth = (month: number) => {
        if (_.isEmpty(month)) return isError

        if (month < 1 || month > 12) return {
            message: 'Invalid month',
            hasError: true
        }

        return noError
    }

    const validateYear = (year: number) => {
        if (_.isEmpty(year)) return isError

        if (expirationYear < currentDate.getFullYear()) return {
            message: 'Invalid year',
            hasError: true
        }

        return noError
    }

    return {
        month: validateMonth(month),
        year: validateYear(year)
    }
}

function validateCvc(cvc: CardStateI['cvc']): ErrorI {
    if (_.isEmpty(cvc)) return isError

    if(cvc.length !== 3) return {
        message: 'Invalid card cvc',
        hasError: true
    }

    return noError
}