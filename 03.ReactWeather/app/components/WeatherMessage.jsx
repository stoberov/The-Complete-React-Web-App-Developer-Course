var React = require('react');

var WeatherMessage = ({ temp, location }) => {
    // var { temp, location } = props;

    // Capitalize first letter
    location = location.charAt(0).toUpperCase() + location.slice(1);

    return (
        <h3 className="text-center">It is {temp}° in {location}.</h3>
    );
};

module.exports = WeatherMessage;