import React from 'react';
import food1 from '../images/food1.jpg';

function Home() {
  return (
    <main>
      <div className="jumbotron">
        <p>At China One, our goal is to provide our customers with great tasting Chinese cuisine at an affordable price. With this in mind and our love for cooking, our chefs will provide you with a variety of your favorite dishes. Come join or call us for a great experience!</p>
      </div>
      <div className="content-wrapper">
        <img src={food1} alt="Delicious Chinese food" />
        <div className="overlay">
          <div className="text">Come try our delicious lunch and dinner combinations</div>
        </div>
      </div>
    </main>
  );
}

export default Home;
