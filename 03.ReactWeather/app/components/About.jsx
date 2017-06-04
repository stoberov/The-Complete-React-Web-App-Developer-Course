var React = require('react');

// Shortcut: create a static component with arrow functions
var About = () => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather application built on React as part of The Complete React Web App Developer Course.</p>
            <p>
                Hera are some of the tools used:
            </p>

            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - JavaScript framework used
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - API used to fetch weather data by city
                </li>
            </ul>
        </div>
    );
};

module.exports = About;