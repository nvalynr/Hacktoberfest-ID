const initialState = {
    isLoading: true,
    contributor: [
        {
            name: 'Noval Alyanur',
            name: 'Noval Ganteng'
        },
        {
            name: 'Edytk',
            name: 'et.mk'
        },
    ],
    error: null
}

const user = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_USER':
            return {
                ...state,
                contributor: state.contributor
            }

        default:
            return state
    }
}

export default user
