import React from 'react';
import './App.css';
import Heading from './Heading/Heading';
import Footer from './Footer/Footer';
import CalcErrorBoundary from './CalcErrorBoundary';

const Calc = React.lazy(() => import('./Calc'));

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <CalcErrorBoundary>
                    <Heading></Heading>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Calc></Calc>
                    </React.Suspense>
                    <Footer></Footer>
                </CalcErrorBoundary>
            </header>
        </div>
    );
}

export default App;
