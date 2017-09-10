var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};

var reducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            };

        default:
            return state;
    }
    return state;
};

var store = redux.createStore(reducer, redux.compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

// Subscribe to changes
store.subscribe(() => {
    var state = store.getState();

    document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();

console.log('currentState', currentState)

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Dog'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Cat'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Donkey'
});

