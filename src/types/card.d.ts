
declare interface ExpirationDateType {
    month: string;
    year: string;
}

declare interface CardFormI {
    cardNumber: string;
    cardHolder: string;
    expiration: ExpirationDateType;
    cvv: string;
}

declare interface CardStateI extends CardFormI {
    validation: ValidationI;
}

declare interface ValidationI {
    errors: ErrorsType
    isValid: boolean
}

declare type ErrorsType = Record<keyof CardFormI, ErrorI>

declare interface ErrorI {
    message: string
    hasError: boolean
}

declare interface CardValidationHookI {
    details: CardFormI;
    validation: ValidationI;
    validateCard: (card: CardFormI) => void;
}