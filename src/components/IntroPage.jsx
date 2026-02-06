import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ShoppingBag, Zap, Shield } from 'lucide-react';

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
      'Premium Wireless Pro',
      'Smart Watch Ultra',
      'Portable Speaker Max',
      'Gaming Headset Pro',
      'Wireless Earbuds Elite',
      'Smart Camera 4K',
      'Laptop Stand Premium',
      'Mechanical Keyboard RGB',
      'Gaming Mouse Wireless',
      'USB-C Hub Pro',
      'Webcam HD 1080p',
      'Monitor 27" 4K',
      'Desk Lamp Smart',
      'Phone Holder Auto',
      'Power Bank 20000mAh',
      'Cable Organizer Set',
      'Screen Protector Glass',
      'Wireless Charger Fast',
      'Bluetooth Adapter 5.0',
      'HDMI Cable 4K',
      'External SSD 1TB',
      'Microphone Studio',
      'Tablet Stand Adjustable',
      'Smart Plug WiFi',
      'Air Purifier Mini',
      'Ring Light LED',
      'Tripod Professional',
      'Gimbal Stabilizer',
      'Action Camera 4K',
      'Drone Mini Pro'
    ][i],
    price: `${Math.floor(Math.random() * 3000 + 500)},000`,
    oldPrice: `${Math.floor(Math.random() * 4000 + 1500)},000`,
    image: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&q=80',
      'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=600&q=80',
      'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=600&q=80',
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&q=80',
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80',
      'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&q=80',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80',
      'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600&q=80',
      'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=600&q=80',
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80',
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80',
      'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=600&q=80',
      'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&q=80',
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
      'https://images.unsplash.com/photo-1573047620407-9b5d9ab4ccc4?w=600&q=80',
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