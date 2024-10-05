import _ from "lodash"

export const expiration: ExpirationDateType = {
    month: 0,
    year: 0
}

export const error: ErrorI = {
    message: '',
    hasError: false
}

export const noError: ErrorI = _.cloneDeep(error)

export const isError: ErrorI = {
    message: 'Can’t be blank',
    hasError: true
}

export const expirationError = {
    month: error,
    year: error
}

export const errors: ErrorsI = {
    cardHolder: error,
    cardNumber: error,
    expiration: expirationError,
    cvc: error
}

export const validation: ValidationI = {
    errors,
    isValid: false
}

export const formDetails = {
    cardHolder: '',
    cardNumber: '',
    cvc: '',
    expiration
}