var redux = require('redux');

console.log('Starting Redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('New state', state);

    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map.url) {
        document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>';
    }
});

// unsubscribe();

var currentState = store.getState();

console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Jon Snow'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Swimming'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Tyrion Lannister'));

store.dispatch(actions.addMovie('The Matrix', 'Sci-fi'));
store.dispatch(actions.addMovie('Kill Bill', 'Action'));
store.dispatch(actions.removeMovie(1));