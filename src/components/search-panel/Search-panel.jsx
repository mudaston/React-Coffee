import {SearchPanelStyle} from "../../styles/Search-panel"

import {Component} from "react"

class SearchPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }
    }

    onSearchChange = (e) => {
        const value = e.target.value.toLowerCase()

        this.setState((state) => ({
            ...state,
            search: value
        }), this.props.onInputSearch(value))
    }

    render() {
        const {onTypeChange} = this.props

        const buttonsData = [
            {name: 'brazil', value: 'Brazil'},
            {name: 'kenya', value: 'Kenya'},
            {name: 'columbia', value: 'Columbia'},
        ]

        const Buttons = buttonsData.map(({name, value}) => (
            <button
                key={name}
                onClick={() => onTypeChange(name)}>
                {value}
            </button>
        ))

        return (
            <SearchPanelStyle onSubmit={e => e.preventDefault()}>
                <label>
                    Looking for
                    <input
                        type="search"
                        placeholder="start typing here..."
                        onChange={this.onSearchChange}
                        value={this.state.search}/>
                </label>
                <div>
                    <span>Or filter</span>
                    <div>
                        {Buttons}
                    </div>
                </div>
            </SearchPanelStyle>
        )
    }

}

export {SearchPanel}
