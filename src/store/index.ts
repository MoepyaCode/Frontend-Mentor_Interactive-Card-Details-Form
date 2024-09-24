import { configureStore } from '@reduxjs/toolkit'
import CardReducer from './features/card'
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        card: CardReducer
    },
    middleware: (getMiddleware) => getMiddleware().concat(logger)
})

type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
export type AppSelector = ReturnType<AppStore['getState']>