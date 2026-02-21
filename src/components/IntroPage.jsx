import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ShoppingBag, Zap, Shield } from 'lucide-react';
import oyqkym1 from '../images/okym1.png';
import oyqkym2 from '../images/okym2.png';
import oyqkym3 from '../images/okym3.png';
import oyqkym4 from '../images/okym4.png';
import oyqkym5 from '../images/okym5.png';
import fuqkym1 from '../images/fkym1.png';
import fuqkym2 from '../images/fkym2.png';
import fuqkym3 from '../images/fkym3.png';
import fuqkym4 from '../images/fkym4.png';
import dvkym1 from '../images/dv1.png';
import dvkym2 from '../images/dv2.png';
import dvkym3 from '../images/dv3.png';
import tkyim1 from '../images/tkym1.png';
import tkyim2 from '../images/tkym2.png';
import tkyim3 from '../images/tkym3.png';
import tkyim4 from '../images/tkym4.png';
import tkyim5 from '../images/tkym5.png';
import bkyim1 from '../images/bkym1.png';
import bkyim2 from '../images/bkym2.png';
import bkyim3 from '../images/bkym3.png';
import bkyim4 from '../images/bkym4.png';
import bkyim5 from '../images/bkym5.png';

// Mahsulot kategoriyalari — til bo'yicha nomlar
const PRODUCT_KEYS = [
  { key: 'shoes',  price: '875,000', oldPrice: '', image: oyqkym1 },
  { key: 'shoes',  price: '775,000', oldPrice: '', image: oyqkym2 },
  { key: 'shoes',  price: '795,000', oldPrice: '', image: oyqkym3 },
  { key: 'shoes',  price: '850,000', oldPrice: '', image: oyqkym4 },
  { key: 'shoes',  price: '695,000', oldPrice: '', image: oyqkym5 },
  { key: 'tshirt', price: '495,000', oldPrice: '', image: fuqkym1 },
  { key: 'tshirt', price: '495,000', oldPrice: '', image: fuqkym2 },
  { key: 'tshirt', price: '495,000', oldPrice: '', image: fuqkym3 },
  { key: 'tshirt', price: '350,000', oldPrice: '', image: fuqkym4 },
  { key: 'twopiece', price: '1,795,000', oldPrice: '', image: dvkym1 },
  { key: 'twopiece', price: '1,295,000', oldPrice: '', image: dvkym2 },
  { key: 'twopiece', price: '1,395,000', oldPrice: '', image: dvkym3 },
  { key: 'twopiece', price: '--',        oldPrice: '', image: dvkym2 },
  { key: 'twopiece', price: '--',        oldPrice: '', image: dvkym1 },
  { key: 'outerwear', price: '1,355,000', oldPrice: '', image: tkyim1 },
  { key: 'outerwear', price: '1,090,000', oldPrice: '', image: tkyim2 },
  { key: 'outerwear', price: '1,395,000', oldPrice: '', image: tkyim3 },
  { key: 'outerwear', price: '1,395,000', oldPrice: '', image: tkyim4 },
  { key: 'outerwear', price: '1,350,000', oldPrice: '', image: tkyim5 },
  { key: 'bag', price: '790,000', oldPrice: '', image: bkyim1 },
  { key: 'bag', price: '890,000', oldPrice: '', image: bkyim2 },
  { key: 'bag', price: '430,000', oldPrice: '', image: bkyim3 },
  { key: 'bag', price: '790,000', oldPrice: '', image: bkyim4 },
  { key: 'bag', price: '290,000', oldPrice: '', image: bkyim5 },
];

const translations = {
  uz: {
    title: 'Bizning Mahsulotlarimiz',
    subtitle: 'Premium sifat va zamonaviy texnologiyalar',
    fast: 'Tez',
    safe: 'Sifatli',
    names: {
      shoes:     'Oyoq kiyim',
      tshirt:    'Futbolka',
      twopiece:  'Tepa Pas',
      outerwear: 'Ustki kiyim',
      bag:       'Sumka',
    }
  },
  en: {
    title: 'Our Products',
    subtitle: 'Premium quality and modern technologies',
    fast: 'Fast',
    safe: 'Quality',
    names: {
      shoes:     'Footwear',
      tshirt:    'T-Shirt',
      twopiece:  'Two-Piece Set',
      outerwear: 'Outerwear',
      bag:       'Bag',
    }
  },
  ru: {
    title: 'Наши Товары',
    subtitle: 'Премиум качество и современные технологии',
    fast: 'Быстро',
    safe: 'Качество',
    names: {
      shoes:     'Обувь',
      tshirt:    'Футболка',
      twopiece:  'Двойка',
      outerwear: 'Верхняя одежда',
      bag:       'Барсетка',
    }
  },
};

const css = `
  .intro-page { transition: background-color 0.4s ease, color 0.4s ease; }
  .intro-page.dark { background: #000000; color: #ffffff; }
  .intro-page.light { background: #ffffff; color: #000000; }
  .products-section { padding: 6rem 2rem; }
  .products-container { max-width: 1600px; margin: 0 auto; }
  .section-header { text-align: center; margin-bottom: 5rem; }
  .section-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 300; letter-spacing: -0.02em; margin-bottom: 1rem; }
  .section-subtitle { font-size: 1.2rem; opacity: 0.6; font-weight: 300; }
  .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; }
  .product-card { display: flex; flex-direction: column; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; position: relative; }
  .product-card:hover { transform: translateY(-10px); }
  .product-image-wrapper { position: relative; width: 100%; padding-top: 100%; overflow: hidden; margin-bottom: 1.5rem; }
  .dark .product-image-wrapper { background: #0a0a0a; }
  .light .product-image-wrapper { background: #f5f5f5; }
  .product-image { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-size: cover; background-position: center; transition: transform 0.6s ease; }
  .product-card:hover .product-image { transform: scale(1.1); }
  .product-badge { position: absolute; top: 1rem; right: 1rem; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; }
  .dark .product-badge { background: rgba(255,255,255,0.1); color: #ffffff; border: 1px solid rgba(255,255,255,0.2); }
  .light .product-badge { background: rgba(0,0,0,0.05); color: #000000; border: 1px solid rgba(0,0,0,0.1); }
  .product-card:hover .product-badge { transform: scale(1.1) rotate(10deg); }
  .product-content { flex: 1; display: flex; flex-direction: column; }
  .product-name { font-size: 1.15rem; font-weight: 600; margin-bottom: 1rem; line-height: 1.4; min-height: 2.8rem; }
  .product-features { display: flex; gap: 1rem; margin-bottom: 1.2rem; }
  .feature-item { display: flex; align-items: center; gap: 0.4rem; padding: 0.4rem 0.8rem; font-size: 0.75rem; font-weight: 500; border-radius: 4px; }
  .dark .feature-item { background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.8); }
  .light .feature-item { background: rgba(0,0,0,0.03); color: rgba(0,0,0,0.7); }
  .product-price-section { margin-top: auto; padding-top: 1rem; border-top: 1px solid; }
  .dark .product-price-section { border-color: rgba(255,255,255,0.1); }
  .light .product-price-section { border-color: rgba(0,0,0,0.1); }
  .price-main { display: flex; align-items: baseline; gap: 0.5rem; margin-bottom: 0.5rem; }
  .current-price { font-size: 1.8rem; font-weight: 700; }
  .currency { font-size: 0.9rem; opacity: 0.6; font-weight: 500; }
  .old-price { font-size: 1rem; text-decoration: line-through; opacity: 0.4; }
  @media (max-width: 1400px) { .products-grid { grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.8rem; } }
  @media (max-width: 1024px) { .products-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem; } }
  @media (max-width: 768px) { .products-section { padding: 4rem 1.5rem; } .section-header { margin-bottom: 3rem; } .products-grid { grid-template-columns: repeat(2, 1fr); gap: 1.2rem; } .product-name { font-size: 1rem; min-height: 2.5rem; } .current-price { font-size: 1.5rem; } }
  @media (max-width: 480px) { .products-section { padding: 3rem 1rem; } .products-grid { gap: 1rem; } .product-image-wrapper { margin-bottom: 1rem; } .product-name { font-size: 0.95rem; margin-bottom: 0.8rem; } .product-features { gap: 0.5rem; } .feature-item { padding: 0.3rem 0.6rem; font-size: 0.7rem; } .current-price { font-size: 1.4rem; } .old-price { font-size: 0.9rem; } }
`;

const IntroPage = ({ isDark = true, language = 'uz' }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-in-out' });
  }, []);

  const t = translations[language];

  return (
    <div className={`intro-page ${isDark ? 'dark' : 'light'}`}>
      <style>{css}</style>
      <section className="products-section">
        <div className="products-container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">{t.title}</h2>
            <p className="section-subtitle">{t.subtitle}</p>
          </div>

          <div className="products-grid">
            {PRODUCT_KEYS.map((product, idx) => (
              <div
                key={idx}
                className="product-card"
                data-aos="fade-up"
                data-aos-delay={Math.min(idx * 50, 500)}
              >
                <div className="product-image-wrapper">
                  <div className="product-image" style={{ backgroundImage: `url(${product.image})` }} />
                  <div className="product-badge">
                    <ShoppingBag size={16} />
                  </div>
                </div>

                <div className="product-content">
                  <h3 className="product-name">{t.names[product.key]}</h3>

                  <div className="product-features">
                    <div className="feature-item">
                      <Zap size={14} />
                      <span>{t.fast}</span>
                    </div>
                    <div className="feature-item">
                      <Shield size={14} />
                      <span>{t.safe}</span>
                    </div>
                  </div>

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
    </div>
  );
};

export default IntroPage;