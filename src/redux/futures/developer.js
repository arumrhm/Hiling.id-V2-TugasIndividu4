import { createSlice } from '@reduxjs/toolkit'

const developerInit = {
    name: "Arum",
    nim: 120140085,
}

export const developer = createSlice({
    name: "developer",
    initialState: {...developerInit},
    reducers: {
        //
    }
})

export default developer.reducer;