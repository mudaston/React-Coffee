import {Navigate, Route, Routes} from 'react-router-dom'
import {Component, lazy, Suspense} from "react"
import styled from "styled-components"

import {Loader} from "../../pages/Loader"
import {Header} from "../header/header"
import {Footer} from "../footer/footer"

import img from '../../img/1.jpg'
import fullImg from '../../img/full-image.jpg'

const Home            = lazy(() => import('../../pages/Home'))
const Item            = lazy(() => import('../../pages/Item'))
const OurCoffee       = lazy(() => import('../../pages/OurCoffee'))
const ForYourPleasure = lazy(() => import('../../pages/ForYourPleasure'))
const NotFoundPage    = lazy(() => import('../../pages/NotFoundPage'))

const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            coffeeItems: [
                {
                    id: 0,
                    img: img,
                    fullImg: fullImg,
                    description: 'AROMISTICO Coffee 1 kg',
                    fullDescr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    location: 'Brazil',
                    price: 6.99
                },
                {
                    id: 1,
                    img: img,
                    fullImg: fullImg,
                    description: 'Special coffee 1 kg',
                    fullDescr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    location: 'Brazil',
                    price: 6.99
                },
                {
                    id: 2,
                    img: img,
                    fullImg: fullImg,
                    description: 'Some Coffee 1 kg',
                    fullDescr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    location: 'Columbia',
                    price: 6.99
                },
                {
                    id: 3,
                    img: img,
                    fullImg: fullImg,
                    description: 'AROMISTICO Coffee 1 kg',
                    fullDescr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    location: 'Columbia',
                    price: 6.99
                },
                {
                    id: 4,
                    img: img,
                    fullImg: fullImg,
                    description: 'AROMISTICO Coffee 1 kg',
                    fullDescr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    location: 'Kenya',
                    price: 6.99
                },
                {
                    id: 5,
                    img: img,
                    fullImg: fullImg,
                    description: 'AROMISTICO Coffee 1 kg',
                    fullDescr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    location: 'Brazil',
                    price: 6.99
                },
            ],
            search: '',
            type: ''
        }
    }

    onTypeChange = (value) => {
        this.setState((state) => ({
            ...state,
            type: value === state.type ? '' : value
        }))
    }

    onButtonChoice = (items, type) => {
        switch (type) {
            case 'brazil':
                return items.filter(({location}) => location.toLowerCase() === 'brazil')
            case 'kenya':
                return items.filter(({location}) => location.toLowerCase() === 'kenya')
            case 'columbia':
                return items.filter(({location}) => location.toLowerCase() === 'columbia')
            default:
                return items
        }
    }

    onInputSearch = (value) => {
        this.setState((state) => ({
            ...state,
            search: value
        }))
    }

    filterArray = (items, search) => {
        search.toLowerCase()

        return search === '' ? items : items.filter(({description}) => description.toLowerCase().indexOf(search) !== -1)
    }

    render() {

        const {coffeeItems, type, search} = this.state
        const filteredArray               = this.filterArray(this.onButtonChoice(coffeeItems, type), search)

        return (<>
            <Suspense fallback={<Loader/>}>
                <Page>
                    <Header/>
                    <main>
                        <Routes>
                            <Route path="/" element={<Navigate to="/coffee-house"/>}/>
                            <Route path="/coffee-house" element={<Home/>}/>
                            <Route path="/our-coffee" element={<OurCoffee
                                coffeeItems={filteredArray}
                                onInputSearch={this.onInputSearch}
                                onTypeChange={this.onTypeChange}
                                search={search}/>}/>
                            <Route path="/for-your-pleasure"
                                   element={
                                       <ForYourPleasure
                                           coffeeItems={coffeeItems}/>}/>
                            <Route
                                path="/item/:id"
                                element={
                                    <Item coffeeItems={coffeeItems}/>
                                }/>
                            <Route path="*" element={<NotFoundPage/>}/>
                        </Routes>
                    </main>
                    <Footer/>
                </Page>
            </Suspense>
        </>)
    }
}

export {App}
