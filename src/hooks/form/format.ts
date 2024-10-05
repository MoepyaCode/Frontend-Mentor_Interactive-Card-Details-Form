import { formDetails } from "@app-utils";
import React from "react";

/**
 * This focuses mainly on when the user add their credentials and not submitting
 */
export function useFormFormat() {
    const [details, setDetails] = React.useState<CardStateI>(formDetails)

    const format = (currentDetails: FormFormatI) => {
        setDetails(state => {
            let currentState = { ...state }
            const {
                cardHolder,
                cardNumber,
                month,
                year,
                cvc
            } = currentDetails

            if (cardHolder || cardHolder === '') {
                currentState = {
                    ...currentState,
                    cardHolder: formatCardHolder(cardHolder)
                }
            }

            if (cardNumber || cardNumber === '') {
                currentState = {
                    ...currentState,
                    cardNumber: formatCardNumber(cardNumber?.toString())
                }
            }

            if (month || year) {
                currentState = {
                    ...currentState,
                    expiration: formatExpirationDate(month, year, currentState.expiration)
                }
            }

            if (cvc) {
                currentState = {
                    ...currentState,
                    cvc
                }
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
    if (cardNumber === undefined) return ''
    return cardNumber.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
}

function formatExpirationDate(month: FormFormatI['month'], year: FormFormatI['year'], prevExpiration: CardStateI['expiration']): ExpirationDateType {
    let currentExpiration = { ...prevExpiration }
    if (month) {
        currentExpiration = {
            ...currentExpiration,
            month
        }
    }

    if (year) {
        currentExpiration = {
            ...currentExpiration,
            year
        }
    }

    return currentExpiration
}