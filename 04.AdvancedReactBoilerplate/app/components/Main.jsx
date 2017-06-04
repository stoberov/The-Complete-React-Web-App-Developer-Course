var React = require('react');

// Shortcut: create a static component with arrow functions
var Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    <p>Main.jsx Rendered</p>
                    {props.children}
                </div>
            </div>

        </div>
    );
};

module.exports = Main;