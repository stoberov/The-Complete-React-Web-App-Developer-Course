var React = require('react');

var { Link } = require('react-router');

// Shortcut: create a static component with arrow functions
var Examples = () => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to try out:</p>

            <ol>
                <li>
                    <Link to="/?location=Sofia">Sofia, BG</Link>
                </li>
                <li>
                    <Link to="/?location=London">London, UK</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;