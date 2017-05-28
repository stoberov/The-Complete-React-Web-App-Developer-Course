var React = require('react');

// var Examples = React.createClass({
//     render: function () {
//         return (
//             <h3>Examples Component</h3>
//         );
//     }
// });

var Examples = (props) => {
    return (
        <div>
            <h3>Examples</h3>
            <p>Welcome to Examples page!</p>
        </div>
    );
};

module.exports = Examples;