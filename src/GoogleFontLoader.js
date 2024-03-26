import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

const App = () => {
    return (
        <div>
            {/* Load the Google Font */}
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Short Stack',
                        weights: [400]
                    }
                ]}
            />
            {/* Your application content */}
            <h1 style={{ fontFamily: 'Short Stack' }}>Hello, World!</h1>
            {/* Other components and content */}
        </div>
    );
};

export default App;
