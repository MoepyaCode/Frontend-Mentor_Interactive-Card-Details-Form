import { expiration, formDetails, validation } from "@app-utils"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: CardStateValidatedI = {
    ...formDetails,
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
        setCvc(state, action: PayloadAction<string>) {
            state.cvc = action.payload
        },
        setValidation(state, action: PayloadAction<ValidationI>) {
            state.validation = action.payload
        },
        resetCard(state) {
            state.cardHolder = ''
            state.cardNumber = ''
            state.cvc = ''
            state.expiration = expiration
            state.validation = validation
        }
    }
})

export const {
    setCardHolder,
    setCardNumber,
    setCvc,
    setExpiration,
    setValidation,
    resetCard
} = cardSlice.actions

export default cardSlice.reducer