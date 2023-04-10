import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/Redux/store'
import App from './App'

const MainProvider = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default MainProvider

