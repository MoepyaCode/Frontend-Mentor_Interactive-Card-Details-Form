import {AppDispatch, AppSelector} from '@app-store'
import {useDispatch, useSelector} from 'react-redux'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<AppSelector>()
