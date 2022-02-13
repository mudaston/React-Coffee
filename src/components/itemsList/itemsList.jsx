import {ItemListStyle} from '../../styles/itemListStyle'

import {Link} from "react-router-dom"

import GoodItem from "../goodItem/goodItem"

const ItemsList = ({coffeeItems, ...props}) => {
    const Items = coffeeItems.map(({id, img, description, location, price}) => (
        <Link key={id} to={`/item/${id}`}>
            <GoodItem
                img={img}
                descr={description}
                location={location}
                price={price}/>
        </Link>
    ))

    return (
        <ItemListStyle>
            {Items}
        </ItemListStyle>
    )
}

export {ItemsList}
