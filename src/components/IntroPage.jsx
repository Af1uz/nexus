import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ShoppingBag, Zap, Shield } from 'lucide-react';
import oyqkym1 from '../images/okym1.png'
import oyqkym2 from '../images/okym2.png'
import oyqkym3 from '../images/okym3.png'
import oyqkym4 from '../images/okym4.png'
import oyqkym5 from '../images/okym5.png'

import fuqkym1 from '../images/fkym1.png'
import fuqkym2 from '../images/fkym2.png'
import fuqkym3 from '../images/fkym3.png'
import fuqkym4 from '../images/fkym4.png'
// import fuqkym5 from '-------------------'

import dvkym1 from '../images/dv1.png'
import dvkym2 from '../images/dv2.png'
import dvkym3 from '../images/dv3.png'
// import dvkym4 from '-----------------'
// import dvkym5 from '-----------------'

import tkyim1 from '../images/tkym1.png'
import tkyim2 from '../images/tkym2.png'
import tkyim3 from '../images/tkym3.png'
import tkyim4 from '../images/tkym4.png'
import tkyim5 from '../images/tkym5.png'

import bkyim1 from '../images/bkym1.png'
import bkyim2 from '../images/bkym2.png'
import bkyim3 from '../images/bkym3.png'
import bkyim4 from '../images/bkym4.png'
import bkyim5 from '../images/bkym5.png'

const IntroPage = ({ isDark = true, language = 'uz' }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  const translations = {
    uz: {
      title: 'Bizning Mahsulotlarimiz',
      subtitle: 'Premium sifat va zamonaviy texnologiyalar'
    },
    en: {
      title: 'Our Products',
      subtitle: 'Premium quality and modern technology'
    },
    ru: {
      title: 'Наши Продукты',
      subtitle: 'Премиум качество и современные технологии'
    }
  };

  const t = translations[language];

  // 30 ta mahsulot
  const products = Array(30).fill(null).map((_, i) => ({
    id: i + 1,
    name: [
      'Oyoq kiyim',
      'Oyoq kiyim',
      'Oyoq kiyim',
      'Oyoq kiyim',
      'Oyoq kiyim',
      'Futbolka',
      'Futbolka',
      'Futbolka',
      'Futbolka',
      'Futbolka',
      'Dvoyka',
      'Dvoyka',
      'Dvoyka',
      'Dvoyka',
      'Dvoyka',
      'Ustki Kiyim',
      'Ustki Kiyim',
      'Ustki Kiyim',
      'Ustki Kiyim',
      'Ustki Kiyim',
      'Barsetka',
      'Barsetka',
      'Barsetka',
      'Barsetka',
      'Barsetka',
      'Shim',
      'Shim',
      'Shim',
      'Shim',
      'Shim'
    ][i],
    price: `${Math.floor(Math.random() * 3000 + 500)},000`,
    oldPrice: `${Math.floor(Math.random() * 4000 + 1500)},000`,
    image: [
      oyqkym1,
      oyqkym2,
      oyqkym3,
      oyqkym4,
      oyqkym5,

      fuqkym1,
      fuqkym2,
      fuqkym3,
      fuqkym4,
      fuqkym1,

      dvkym1,
      dvkym2,
      dvkym3,
      dvkym2,
      dvkym1,
      
      tkyim1,
      tkyim2,
      tkyim3,
      tkyim4,
      tkyim4,
      tkyim5,

      bkyim1,
      bkyim2,
      bkyim3,
      bkyim4,
      bkyim5,
      
      'https://images.unsplash.com/photo-1606986628253-e1a39f4ec40b?w=600&q=80',
      'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=600&q=80',
      'https://images.unsplash.com/photo-1473396413399-6717ef7c4093?w=600&q=80',
      'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=600&q=80'
    ][i],
    features: [
      { icon: <Zap size={14} />, text: 'Fast' },
      { icon: <Shield size={14} />, text: 'Safe' }
    ]
  }));

  return (
    <div className={`intro-page ${isDark ? 'dark' : 'light'}`}>
      {/* Products Section */}
      <section className="products-section">
        <div className="products-container">
          {/* Header */}
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">{t.title}</h2>
            <p className="section-subtitle">{t.subtitle}</p>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {products.map((product, idx) => (
              <div 
                key={product.id} 
                className="product-card"
                data-aos="fade-up"
                data-aos-delay={Math.min(idx * 50, 500)}
              >
                {/* Image */}
                <div className="product-image-wrapper">
                  <div 
                    className="product-image"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="product-badge">
                    <ShoppingBag size={16} />
                  </div>
                </div>

                {/* Content */}
                <div className="product-content">
                  <h3 className="product-name">{product.name}</h3>

                  {/* Features */}
                  <div className="product-features">
                    {product.features.map((feature, i) => (
                      <div key={i} className="feature-item">
                        {feature.icon}
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="product-price-section">
                    <div className="price-main">
                      <span className="current-price">{product.price}</span>
                      <span className="currency">UZS</span>
                    </div>
                    <span className="old-price">{product.oldPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .intro-page {
          transition: background-color 0.4s ease, color 0.4s ease;
        }

        .intro-page.dark {
          background: #000000;
          color: #ffffff;
        }

        .intro-page.light {
          background: #ffffff;
          color: #000000;
        }

        /* Products Section */
        .products-section {
          padding: 6rem 2rem;
        }

        .products-container {
          max-width: 1600px;
          margin: 0 auto;
        }

        /* Header */
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          opacity: 0.6;
          font-weight: 300;
        }

        /* Products Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }

        .product-card {
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
        }

        .product-card:hover {
          transform: translateY(-10px);
        }

        /* Image */
        .product-image-wrapper {
          position: relative;
          width: 100%;
          padding-top: 100%;
          overflow: hidden;
          margin-bottom: 1.5rem;
          border: 1px solid;
        }

        .dark .product-image-wrapper {
          background: #0a0a0a;
          border-color: #1a1a1a;
        }

        .light .product-image-wrapper {
          background: #f5f5f5;
          border-color: #e5e5e5;
        }

        .product-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.1);
        }

        /* Badge */
        .product-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .dark .product-badge {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .light .product-badge {
          background: rgba(0, 0, 0, 0.05);
          color: #000000;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .product-card:hover .product-badge {
          transform: scale(1.1) rotate(10deg);
        }

        /* Content */
        .product-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .product-name {
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.4;
          min-height: 2.8rem;
        }

        /* Features */
        .product-features {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.2rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.8rem;
          font-size: 0.75rem;
          font-weight: 500;
          border-radius: 4px;
        }

        .dark .feature-item {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.8);
        }

        .light .feature-item {
          background: rgba(0, 0, 0, 0.03);
          color: rgba(0, 0, 0, 0.7);
        }

        /* Price */
        .product-price-section {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid;
        }

        .dark .product-price-section {
          border-color: rgba(255, 255, 255, 0.1);
        }

        .light .product-price-section {
          border-color: rgba(0, 0, 0, 0.1);
        }

        .price-main {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .current-price {
          font-size: 1.8rem;
          font-weight: 700;
        }

        .currency {
          font-size: 0.9rem;
          opacity: 0.6;
          font-weight: 500;
        }

        .old-price {
          font-size: 1rem;
          text-decoration: line-through;
          opacity: 0.4;
        }

        /* Responsive */
        @media (max-width: 1400px) {
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 1.8rem;
          }
        }

        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .products-section {
            padding: 4rem 1.5rem;
          }

          .section-header {
            margin-bottom: 3rem;
          }

          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.2rem;
          }

          .product-name {
            font-size: 1rem;
            min-height: 2.5rem;
          }

          .current-price {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .products-section {
            padding: 3rem 1rem;
          }

          .products-grid {
            gap: 1rem;
          }

          .product-image-wrapper {
            margin-bottom: 1rem;
          }

          .product-name {
            font-size: 0.95rem;
            margin-bottom: 0.8rem;
          }

          .product-features {
            gap: 0.5rem;
          }

          .feature-item {
            padding: 0.3rem 0.6rem;
            font-size: 0.7rem;
          }

          .current-price {
            font-size: 1.4rem;
          }

          .old-price {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default IntroPage;