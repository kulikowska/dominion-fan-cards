import { useEffect } from "react";
import './css/App.scss';

function App() {

    useEffect(() => {
        fetch('https://uggwxknpftbwvwpjkmhulir63q0ciubh.lambda-url.us-west-1.on.aws/')
          .then(response => response.json())
          .then(data => {
              console.log('Response from Lambda:', data);
          });
    }, []);

    return (
        <div className="dominion-fan-cards">
            <header>
                Dominion Fan Card Database
            </header>
            <div className="welcome">
                Coming Soon!
            </div>
        </div>
    );
}

export default App;
