var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function () {
//         var { temp, location } = this.props;

//         return (
//             <h3>It is {temp} in {location}.</h3>
//         );
//     }
// });

var WeatherMessage = ({temp, location}) => {
    // var { temp, location } = props;

    return (
        <h3>It is {temp} in {location}.</h3>
    );
};

module.exports = WeatherMessage;