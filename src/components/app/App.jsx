import {Routes, Route} from 'react-router-dom'

import {Header} from "../header/header"
import {NotFoundPage} from '../../pages/NotFoundPage'
import {Home} from "../../pages/Home"

export default function App() {

    return (<>
        <Header/>
        <main>
            <Routes>
                <Route path="/coffee-house" element={<Home/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </main>
    </>)
}
