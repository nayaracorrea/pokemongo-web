import React, { useState, useEffect } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
// import 'normalize.css/normalize.css';

import api from '../services/api';

import './styles.css';
import './menu.css';
import './slider-animation.css';

import logo from '../assets/png/logo2.png';

function Main() {
  const [teste, setTeste] = useState([]);

  const content = [
    {
      title: 'Vulputate Mollis Ultricies Fermentum Parturient',
      description:
        'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
      button: 'Read More',
      image: 'https://images5.alphacoders.com/613/thumb-1920-613927.jpg',
      user: 'Luan Gjokaj',
      userProfile: 'https://i.imgur.com/JSW6mEk.png'
    },
    {
      title: 'Tortor Dapibus Commodo Aenean Quam',
      description:
        'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
      button: 'Discover',
      image: 'https://images5.alphacoders.com/717/thumb-1920-717083.jpg',
      user: 'Erich Behrens',
      userProfile: 'https://i.imgur.com/0Clfnu7.png'
    },
    {
      title: 'Phasellus volutpat metus',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
      button: 'Buy now',
      image: 'https://images3.alphacoders.com/675/thumb-1920-675509.jpg',
      user: 'Bruno Vizovskyy',
      userProfile: 'https://i.imgur.com/4KeKvtH.png'
    }
  ];

  useEffect(() => {
    async function loadTeste() {
      const response = await api.get('/pokemon_stats.json');

      setTeste(response.data);
    }

    loadTeste();
  }, []);

  return (
    <div id="main">
      <aside>
        <img src={logo} alt="teste" id="logo" />
        <div className="menu">
          <nav>
            <a href="#Home">Início</a>
            <a href="#About">Tipos</a>
            <a href="#Blog">Raros</a>
            <a href="#Prot">Estatísticas</a>
            <a href="#Contact">Blog</a>
            <div className="animation start-home"></div>
          </nav>
        </div>
      </aside>
      <main>
        <div className="panel">
          <Slider className="slider-wrapper" autoplay={3000}>
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button>{item.button}</button>
                </div>
                <section>
                  <img src={item.userProfile} alt={item.user} />
                  <span>
                    Posted by <strong>{item.user}</strong>
                  </span>
                </section>
              </div>
            ))}
          </Slider>
        </div>
      </main>
    </div>
  )
}

export default Main;