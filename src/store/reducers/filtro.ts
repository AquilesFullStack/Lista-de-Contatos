import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as enums from '../../utils/enums/Contato'

type FiltroState = {
    termo?: string,
    criterio: 'favoritos' | 'todas'
    valor?: enums.ListaFavorito
}

const initialState: FiltroState ={
    termo:'',
    criterio: 'todas'
}

const filtroSlice = createSlice({
    name:'filtro',
    initialState,
    reducers: {
        alteraTermo: (state, action: PayloadAction<string>) => {
            state.termo = action.payload
        },
        alterarFiltro: (state,action: PayloadAction<FiltroState>) =>{
            state.criterio = action.payload.criterio
            state.valor = action.payload.valor
        }
    }
})

export const { alteraTermo, alterarFiltro} = filtroSlice.actions

export default filtroSlice.reducer