import React from 'react';
import frontstore from '../images/frontstore.jpg';
import cook from '../images/cook.jpg';

function About() {
  return (
    <main>
      <div className="jumbotron">
        <h1>About China One</h1>
        <p>Ever since Xing and Shelley moved to America, they both had a vision of opening a successful chinese restaurant. In 1998, their dream became a reality and with the combination of hard work and their passion for food, China One has been packing customers ever since.</p>
      </div>
      <div className="content-wrapper">
        <img src={frontstore} alt="China One storefront" />
        <div className="overlay">
          <div className="text">On the corner of Schaefer Highway and 7 Mile</div>
        </div>
      </div>
      <div className="jumbotron">
        <h1>Our Services</h1>
        <p>Our main goal is to serve our customers healthy and delicious chinese food ready for take out. All of our steak, beef, chicken and egg rolls are made freshly by hand and then fried or cooked to perfection.</p>
        <p>Our most popular dishes include: Sesame Chicken, Sweet and Sour Chicken, Egg Foo Young, Pepper Steak, Cabbage Egg Rolls and many more.</p>
        <p>You can visit us for a fast and easy order or give us a call for an order ready for pickup. We do NOT deliver.</p>
      </div>
      <div className="content-wrapper">
        <img src={cook} alt="Chef cooking" />
        <div className="overlay">
          <div className="text">You order, we'll cook it. It's that easy</div>
        </div>
      </div>
    </main>
  );
}

export default About;
