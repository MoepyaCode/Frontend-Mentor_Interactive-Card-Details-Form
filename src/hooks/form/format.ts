import { formDetails } from "@app-utils";
import { isUndefined } from "lodash";
import React from "react";

/**
 * This focuses mainly on when the user add their credentials and not submitting
 */
export function useFormFormat() {
    const [details, setDetails] = React.useState<CardStateI>(formDetails)

    const format = (detailChange: FormFormatI, prevDetails: CardStateI) => {
        setDetails(() => {
            let currentState = { ...prevDetails }
            const {
                cardHolder,
                cardNumber,
                month,
                year,
                cvc
            } = detailChange

            if (cardHolder || cardHolder === '') currentState = {
                ...currentState,
                cardHolder: formatCardHolder(cardHolder)
            }

            if (cardNumber || cardNumber === '') {
                currentState = {
                    ...currentState,
                    cardNumber: formatCardNumber(cardNumber?.toString())
                }
            }

            const undefinedObject = (value: number | string | undefined) => ({
                value: value ? value.toString() : undefined,
                isUndefined: isUndefined(value)
            })

            if ((month || year) || (isUndefined(month) || isUndefined(year))) currentState = {
                ...currentState,
                expiration: formatExpirationDate(
                    undefinedObject(month),
                    undefinedObject(year),
                    currentState.expiration,
                    detailChange
                )
            }

            if (cvc || cvc === '') currentState = {
                ...currentState,
                cvc: formatCvc(cvc)
            }
            return currentState
        })
    }

    return { format, details }
}




function formatCardHolder(cardHolder: string | undefined) {
    if (cardHolder === undefined) return ''
    return cardHolder.replace(/[^a-zA-Z\s]/g, '').split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ')
}

function formatCardNumber(cardNumber: string | undefined) {
    if (cardNumber === '' || isUndefined(cardNumber)) return ''
    return cardNumber.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
}

type ExpirationCheckType = {
    value: string | number | undefined
    isUndefined: boolean
}

function formatExpirationDate(month: ExpirationCheckType, year: ExpirationCheckType, prevExpiration: CardStateI['expiration'], detailChange: FormFormatI): ExpirationDateType {
    let currentExpiration = { ...prevExpiration }

    switch (Object.keys(detailChange)[0]) {
        case 'month':
            currentExpiration = {
                ...currentExpiration,
                month: isUndefined(month.value) ? 0 : parseInt(month.value as string)
            }
            break
        case 'year':
            currentExpiration = {
                ...currentExpiration,
                year: isUndefined(year.value) ? 0 : parseInt(year.value as string)
            }
            break
    }

    return currentExpiration
}

function formatCvc(cvc: string | undefined) {
    if (cvc === undefined) return ''
    return cvc.replace(/\D/g, '')
}