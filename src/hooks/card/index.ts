import { errors as validationErrors, validation as formValidation } from "@app-utils";
import { useState } from "react";
import _ from "lodash";


/**
 * Custom hook to handle card validation logic.
 *
 * @returns {CardValidationHookI} An object containing the validation state and the validateCard function.
 */
export function useCardCreate(): CardValidationHookI {
    const [validation, setValidation] = useState<ValidationI>(formValidation);

    const validateCard = (card: CardStateI) => {

        setValidation(() => {
            let errors = validationErrors
            let isValid = true

            for (const key of Object.keys(errors) as Array<keyof Omit<ErrorsI, 'expiration'>>) {
                if (emptyStringCheck(card[key])) {
                    errors = {
                        ...errors,
                        [key]: {
                            message: 'Can’t be blank',
                            hasError: true
                        }
                    }

                    isValid ? isValid = false : null
                }
            }

            const parseMonth = parseInt(card.expiration.month)
            const isMonthNumberInRange = parseMonth >= 1 && parseMonth <= 12
            const monthStringCheck = emptyStringCheck(card.expiration.month)

            if(!isMonthNumberInRange || monthStringCheck) {
                errors = {
                    ...errors,
                    expiration: {
                        ...errors.expiration,
                        month: !isMonthNumberInRange ? {
                            message: 'Invalid month',
                            hasError: true
                        } : {
                            message: 'Can’t be blank',
                            hasError: true
                        }
                    }
                }
                isValid ? isValid = false : null
            }

            const parseYear = parseInt(`20${card.expiration.month}`)
            const isValidYear = new Date().getFullYear() <= parseYear
            const yearStringCheck = emptyStringCheck(card.expiration.year)

            if(isValidYear || yearStringCheck) {
                errors = {
                    ...errors,
                    expiration: {
                        ...errors.expiration,
                        year: !isValidYear ? {
                            message: 'Invalid year',
                            hasError: true
                        } : {
                            message: 'Can’t be blank',
                            hasError: true
                        }
                    }
                }
                isValid ? isValid = false : null
            }

            return {
                errors,
                isValid
            }
        })

    }

    return { validation, validateCard }
}

/**
 * Checks if a given string is empty.
 *
 * @param value - The string to check.
 * @returns `true` if the string is empty, otherwise `false`.
 */
function emptyStringCheck(value: string): boolean {
    return _.isEmpty(value)
}