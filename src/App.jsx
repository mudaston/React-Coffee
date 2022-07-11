import { Route, Routes } from 'react-router-dom'
import { Component, lazy, Suspense } from 'react'

import { coffeeItems } from './common'
import { forYourPleasure, home, ourCoffee } from './helpers/addresses'

import { Footer, Header, Loader } from './components/elements'

const Home = lazy(() => import('./pages/Home/Home'))
const Item = lazy(() => import('./pages/AboutCoffee/AboutCoffee'))
const OurCoffee = lazy(() => import('./pages/OurCoffee/OurCoffee'))
const ForYourPleasure = lazy(() => import('./pages/ForYourPleasure/ForYourPleasure'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      coffeeItems,
      search: '',
      type: '',
    }
  }

  onTypeChange = (value) => {
    this.setState((state) => ({
      ...state,
      type: value === state.type ? '' : value,
    }))
  }

  onButtonChoice = (items, type) => {
    switch (type) {
      case 'brazil':
        return items.filter(({ location }) => location.toLowerCase() === 'brazil')
      case 'kenya':
        return items.filter(({ location }) => location.toLowerCase() === 'kenya')
      case 'columbia':
        return items.filter(({ location }) => location.toLowerCase() === 'columbia')
      default:
        return items
    }
  }

  onInputSearch = (value) => {
    this.setState((state) => ({
      ...state,
      search: value,
    }))
  }

  filterArray = (items, search) => {
    search.toLowerCase()

    return search === ''
      ? items
      : items.filter(({ description }) => description.toLowerCase().indexOf(search) !== -1)
  }

  render() {
    const { coffeeItems, type, search } = this.state
    const filteredArray = this.filterArray(this.onButtonChoice(coffeeItems, type), search)

    return (
      <>
        <Suspense fallback={<Loader />}>
          <div className='page'>
            <Header />
            <main>
              <Routes>
                <Route path={home}>
                  <Route index element={<Home />} />
                </Route>
                <Route path={ourCoffee}>
                  <Route
                    index
                    element={
                      <OurCoffee
                        coffeeItems={filteredArray}
                        onInputSearch={this.onInputSearch}
                        onTypeChange={this.onTypeChange}
                        search={search}
                      />
                    }
                  />
                  <Route path=':id' element={<Item coffeeItems={coffeeItems} />} />
                </Route>
                <Route
                  path={forYourPleasure}
                  element={<ForYourPleasure coffeeItems={coffeeItems} />}
                />
                <Route path='*' element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Suspense>
      </>
    )
  }
}

export { App }
