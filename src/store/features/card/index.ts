import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const expiration: ExpirationDateType = {
    month: '',
    year: ''
}

const error: ErrorI = {
    message: '',
    hasError: false
}

const errors = {
    cardHolder: error,
    cardNumber: error,
    expiration: error,
    cvv: error
}

const validation: ValidationI = {
    errors,
    isValid: false
}

const initialState: CardStateI = {
    cardHolder: '',
    cardNumber: '',
    cvv: '',
    expiration: expiration,
    validation: validation
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setCardHolder(state, action: PayloadAction<string>) {
            state.cardHolder = action.payload
        },
        setCardNumber(state, action: PayloadAction<string>) {
            state.cardNumber = action.payload
        },
        setExpiration(state, action: PayloadAction<ExpirationDateType>) {
            state.expiration = action.payload
        },
        setCvv(state, action: PayloadAction<string>) {
            state.cvv = action.payload
        },
        setValidation(state, action: PayloadAction<ValidationI>) {
            state.validation = action.payload
        }
    }
})

export const {
    setCardHolder,
    setCardNumber,
    setCvv,
    setExpiration,
    setValidation
} = cardSlice.actions

export default cardSlice.reducer