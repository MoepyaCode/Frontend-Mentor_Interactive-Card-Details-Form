
declare interface ExpirationDateType {
    month: number;
    year: number;
}

declare interface CardFormI {
    cardNumber: string;
    cardHolder: string;
    month: number;
    year: number;
    cvc: string;
}

declare type FormFormatI = {
    [K in keyof CardFormI]?: CardFormI[K]
}

declare interface CardStateI extends Omit<CardFormI, 'month' | 'year'> {
    expiration: ExpirationDateType;
}

declare interface CardStateValidatedI extends CardStateI {
    validation: ValidationI;
}

declare interface ValidationI {
    errors: ErrorsI
    isValid: boolean
}

declare type ErrorsType = Record<keyof Omit<CardStateI, 'expiration'>, ErrorI>

declare interface ErrorsI extends ErrorsType {
    expiration: {
        month: ErrorI
        year: ErrorI
    }
}

declare interface ErrorI {
    message: string
    hasError: boolean
}

declare interface CardValidationHookI {
    validation: ValidationI;
    validateCard: (card: CardStateI) => void;
}