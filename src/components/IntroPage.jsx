import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ShoppingBag, Zap, Shield, ChevronLeft, ChevronRight, Info, X } from 'lucide-react';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  RASMLARNI SHU YERDA IMPORT QILING
//  1-rasm = asosiy ko'rinadigan rasm
//  2-rasm = strelka bosib o'tilganda ko'rinadigan rasm
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 👟 OYOQ KIYIM rasmlari
import oyqkym1 from '../images/okym1.png';
import oyqkym2 from '../images/okym2.png';
import oyqkym3 from '../images/okym3.png';
import oyqkym4 from '../images/okym4.png';
import oyqkym5 from '../images/okym5.png';

import oyqkymm1 from '../images/okymm1.png';
import oyqkymm2 from '../images/okymm2.png';
import oyqkymm3 from '../images/okymm3.png';
import oyqkymm4 from '../images/okymm4.png';
import oyqkymm5 from '../images/okymm5.png';

// 👕 FUTBOLKA rasmlari
import fuqkym1 from '../images/fkym1.png';
import fuqkym2 from '../images/fkym2.png';
import fuqkym3 from '../images/fkym3.png';
import fuqkym4 from '../images/fkym4.png';

import fuqkymm1 from '../images/fkymm1.png';
import fuqkymm2 from '../images/fkymm2.png';
import fuqkymm3 from '../images/fkymm3.png';
import fuqkymm4 from '../images/fkymm4.png';

// 👗 TEPA-PAS rasmlari
import dvkym1 from '../images/dv1.png';
import dvkym2 from '../images/dv2.png';
import dvkym3 from '../images/dv3.png';

import dvkymm1 from '../images/dvv1.png';
import dvkymm2 from '../images/dvv2.png';
import dvkymm3 from '../images/dvv3.png';

// 🧥 USTKI KIYIM rasmlari
import tkyim1 from '../images/tkym1.png';
import tkyim2 from '../images/tkym2.png';
import tkyim3 from '../images/tkym3.png';
import tkyim4 from '../images/tkym4.png';
import tkyim5 from '../images/tkym5.png';

import tkyimm1 from '../images/tkymm1.png';
import tkyimm2 from '../images/tkymm2.png';
import tkyimm3 from '../images/tkymm3.png';
import tkyimm4 from '../images/tkymm4.png';
import tkyimm5 from '../images/tkymm5.png';

// 👜 SUMKA rasmlari
import bkyim1 from '../images/bkym1.png';
import bkyim2 from '../images/bkym2.png';
import bkyim3 from '../images/bkym3.png';
import bkyim4 from '../images/bkym4.png';
import bkyim5 from '../images/bkym5.png';

import bkyimm1 from '../images/bkymm1.png';
import bkyimm2 from '../images/bkymm2.png';
import bkyimm3 from '../images/bkymm3.png';
import bkyimm4 from '../images/bkymm4.png';
import bkyimm5 from '../images/bkymm5.png';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  MAHSULOTLAR RO'YXATI
//
//  Har bir mahsulotda:
//    images: [BIRINCHI_RASM, IKKINCHI_RASM]
//
//  ✅ IKKINCHI RASMNI QO'YISH — 3 qadam:
//    1) Rasmni  src/images/  papkasiga nusxalang
//    2) Yuqorida import qiling:
//         import yangiRasm from '../images/yangi_rasm.png';
//    3) Quyida tegishli mahsulotda  // ← 2-rasm — O'ZGARTIRING
//       degan joyni o'zingizning import nomingizga almashtiring
//
//  ⏳ Hozircha 2-rasm yo'q bo'lsa — birinchi rasmni ikki marta yozing:
//         images: [oyqkym1, oyqkym1]
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const PRODUCT_KEYS = [

  // ──────────── 👟 OYOQ KIYIM (5 ta) ────────────
  { key: 'shoes', price: '875,000', oldPrice: '', images: [oyqkym1, oyqkymm1 /* ← 2-rasm O'ZGARTIRING */] },
  { key: 'shoes', price: '775,000', oldPrice: '', images: [oyqkym2, oyqkymm2 /* ← 2-rasm O'ZGARTIRING */] },
  { key: 'shoes', price: '795,000', oldPrice: '', images: [oyqkym3, oyqkymm3 /* ← 2-rasm O'ZGARTIRING */] },
  { key: 'shoes', price: '850,000', oldPrice: '', images: [oyqkym4, oyqkymm4 /* ← 2-rasm O'ZGARTIRING */] },
  { key: 'shoes', price: '695,000', oldPrice: '', images: [oyqkym5, oyqkymm5 /* ← 2-rasm O'ZGARTIRING */] },

  // ──────────── 👕 FUTBOLKA (4 ta) ────────────
  { key: 'tshirt', price: '495,000', oldPrice: '', images: [fuqkym1, fuqkymm1 /* ← 2-rasm O'ZGARTIRING */] },
  { key: 'tshirt', price: '495,000', oldPrice: '', images: [fuqkym2, fuqkymm2 /* ← 2-rasm O'ZGARTIRING */] },
  { key: 'tshirt', price: '495,000', oldPrice: '', images: [fuqkym3, fuqkymm3 /* ← 2-rasm O'ZGARTIRING */] },
  { key: 'tshirt', price: '350,000', oldPrice: '', images: [fuqkym4, fuqkymm4 /* ← 2-rasm O'ZGARTIRING */] },

  // ──────────── 👗 TEPA-PAS (5 ta) ────────────
  { key: 'twopiece', price: '1,795,000', oldPrice: '', images: [dvkym1, dvkymm1 /* ← 2-rasm O'ZGARTIRING */] },
  { key: 'twopiece', price: '1,295,000', oldPrice: '', images: [dvkym2, dvkymm2 /* ← 2-rasm O'ZGARTIRING */] },
  { key: 'twopiece', price: '1,395,000', oldPrice: '', images: [dvkym3, dvkymm3 /* ← 2-rasm O'ZGARTIRING */] },
  // { key: 'twopiece', price: '--',         oldPrice: '', images: [dvkym2, dvkymm1 /* ← 2-rasm O'ZGARTIRING */] },
  // { key: 'twopiece', price: '--',         oldPrice: '', images: [dvkym1, dvkymm2 /* ← 2-rasm O'ZGARTIRING */] },

  // ──────────── 🧥 USTKI KIYIM (5 ta) ────────────
  { key: 'outerwear', price: '1,355,000', oldPrice: '', images: [tkyim1, tkyimm1 /* ← 2-rasm O'ZGARTIRING */] },
  { key: 'outerwear', price: '1,090,000', oldPrice: '', images: [tkyim2, tkyimm2 /* ← 2-rasm O'ZGARTIRING */] },
  { key: 'outerwear', price: '1,395,000', oldPrice: '', images: [tkyim3, tkyimm3 /* ← 2-rasm O'ZGARTIRING */] },
  { key: 'outerwear', price: '1,395,000', oldPrice: '', images: [tkyim4, tkyimm4 /* ← 2-rasm O'ZGARTIRING */] },
  { key: 'outerwear', price: '1,350,000', oldPrice: '', images: [tkyim5, tkyimm5 /* ← 2-rasm O'ZGARTIRING */] },

  // ──────────── 👜 SUMKA (5 ta) ────────────
  { key: 'bag', price: '790,000', oldPrice: '', images: [bkyim1, bkyimm1 /* ← 2-rasm O'ZGARTIRING */] },
  { key: 'bag', price: '890,000', oldPrice: '', images: [bkyim2, bkyimm2 /* ← 2-rasm O'ZGARTIRING */] },
  { key: 'bag', price: '430,000', oldPrice: '', images: [bkyim3, bkyimm3 /* ← 2-rasm O'ZGARTIRING */] },
  { key: 'bag', price: '790,000', oldPrice: '', images: [bkyim4, bkyimm4 /* ← 2-rasm O'ZGARTIRING */] },
  { key: 'bag', price: '290,000', oldPrice: '', images: [bkyim5, bkyimm5 /* ← 2-rasm O'ZGARTIRING */] },

];

// ─────────────────────────────────────────────────────────────────────────────
// Tarjimalar
// ─────────────────────────────────────────────────────────────────────────────
const translations = {
  uz: {
    title: 'Bizning Mahsulotlarimiz',
    subtitle: 'Premium sifat va zamonaviy texnologiyalar',
    fast: 'Tez',
    safe: 'Sifatli',
    descLabel: 'Tavsif',
    names: {
      shoes:     'Oyoq kiyim',
      tshirt:    'Futbolka',
      twopiece:  'Tepa Pas',
      outerwear: 'Ustki kiyim',
      bag:       'Sumka',
    },
    descriptions: {
      shoes:     'Yuqori sifatli charm va zamonaviy dizayn. Har bir qadam uchun chidamlilik va qulaylik kafolatlangan.',
      tshirt:    '100% paxta. Nafas oladigan material, ranglar solmaydi. Har kuni kiyish uchun ideal tanlov.',
      twopiece:  'Ikki qismli to\'plam — tepa va pastki. Bayramlar va chiqishlar uchun mukammal kombinatsiya.',
      outerwear: 'Issiq saqlash va ko\'rinish. Qish fasli uchun mo\'ljallangan premium ustki kiyim.',
      bag:       'Keng hajmli va chidamli. Har kuni va sayohatda ishonchli hamroh.',
    },
  },
  en: {
    title: 'Our Products',
    subtitle: 'Premium quality and modern technologies',
    fast: 'Fast',
    safe: 'Quality',
    descLabel: 'Description',
    names: {
      shoes:     'Footwear',
      tshirt:    'T-Shirt',
      twopiece:  'Two-Piece Set',
      outerwear: 'Outerwear',
      bag:       'Bag',
    },
    descriptions: {
      shoes:     'Premium leather with modern design. Guaranteed durability and comfort for every step.',
      tshirt:    '100% cotton. Breathable material, fade-resistant colours. Ideal choice for everyday wear.',
      twopiece:  'Two-piece set — top & bottom. Perfect combination for celebrations and outings.',
      outerwear: 'Warmth meets style. Premium outerwear designed for the cold season.',
      bag:       'Spacious and durable. A reliable companion for daily use and travel.',
    },
  },
  ru: {
    title: 'Наши Товары',
    subtitle: 'Премиум качество и современные технологии',
    fast: 'Быстро',
    safe: 'Качество',
    descLabel: 'Описание',
    names: {
      shoes:     'Обувь',
      tshirt:    'Футболка',
      twopiece:  'Двойка',
      outerwear: 'Верхняя одежда',
      bag:       'Барсетка',
    },
    descriptions: {
      shoes:     'Премиум кожа и современный дизайн. Гарантированная прочность и комфорт на каждый шаг.',
      tshirt:    '100% хлопок. Дышащий материал, стойкие цвета. Идеальный выбор для ежедневной носки.',
      twopiece:  'Комплект из двух частей — верх и низ. Идеальное сочетание для праздников и прогулок.',
      outerwear: 'Тепло и стиль. Премиум верхняя одежда для холодного сезона.',
      bag:       'Вместительная и прочная. Надёжный спутник на каждый день и в путешествиях.',
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// CSS
// ─────────────────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;500;700&family=DM+Sans:wght@300;400;500&display=swap');

  .intro-page { transition: background-color 0.4s ease, color 0.4s ease; }
  .intro-page.dark  { background: #000000; color: #ffffff; }
  .intro-page.light { background: #ffffff; color: #000000; }

  .products-section   { padding: 6rem 2rem; }
  .products-container { max-width: 1600px; margin: 0 auto; }
  .section-header     { text-align: center; margin-bottom: 5rem; }
  .section-title      { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 300; letter-spacing: -0.02em; margin-bottom: 1rem; }
  .section-subtitle   { font-size: 1.2rem; opacity: 0.6; font-weight: 300; }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }

  .product-card {
    display: flex; flex-direction: column;
    transition: transform 0.45s cubic-bezier(.22,.68,0,1.2);
    cursor: pointer; position: relative;
  }
  .product-card:hover { transform: translateY(-12px); }

  .product-image-wrapper {
    position: relative; width: 100%; padding-top: 100%; overflow: hidden; margin-bottom: 1.5rem;
    border-radius: 2px;
  }
  .dark  .product-image-wrapper { background: #0a0a0a; }
  .light .product-image-wrapper { background: #f4f4f2; }

  .product-image {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background-size: cover; background-position: center;
    transition: opacity 0.55s ease, transform 0.65s ease;
  }
  .product-image.img-hidden  { opacity: 0; pointer-events: none; }
  .product-image.img-visible { opacity: 1; }
  .product-card:hover .product-image.img-visible { transform: scale(1.08); }

  .pc-nav {
    position: absolute; bottom: 0.9rem; left: 50%; transform: translateX(-50%);
    display: flex; align-items: center; gap: 0.5rem; z-index: 10;
    background: rgba(0,0,0,0.38); backdrop-filter: blur(8px);
    border-radius: 100px; padding: 0.3rem 0.6rem;
    opacity: 0; transition: opacity 0.3s ease;
  }
  .product-card:hover .pc-nav { opacity: 1; }

  .pc-nav-btn {
    background: none; border: none; cursor: pointer; padding: 0.2rem;
    display: flex; align-items: center; color: rgba(255,255,255,0.9);
    transition: color 0.2s, transform 0.2s;
  }
  .pc-nav-btn:hover { color: #fff; transform: scale(1.2); }

  .pc-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: rgba(255,255,255,0.4); border: none; cursor: pointer;
    padding: 0; transition: background 0.25s, transform 0.25s;
  }
  .pc-dot.active { background: #fff; transform: scale(1.35); }

  .pc-counter {
    position: absolute; top: 1rem; left: 50%; transform: translateX(-50%);
    font-size: 0.68rem; letter-spacing: 0.12em;
    background: rgba(0,0,0,0.4); color: rgba(255,255,255,0.85);
    padding: 0.2rem 0.6rem; border-radius: 100px;
    pointer-events: none; backdrop-filter: blur(4px);
    opacity: 0; transition: opacity 0.3s;
    white-space: nowrap;
  }
  .product-card:hover .pc-counter { opacity: 1; }

  .product-badge {
    position: absolute; top: 1rem; right: 1rem;
    width: 38px; height: 38px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    transition: transform 0.3s ease; backdrop-filter: blur(6px);
  }
  .dark  .product-badge { background: rgba(255,255,255,0.08); color: #fff; border: 1px solid rgba(255,255,255,0.18); }
  .light .product-badge { background: rgba(0,0,0,0.06);       color: #000; border: 1px solid rgba(0,0,0,0.12); }
  .product-card:hover .product-badge { transform: scale(1.12) rotate(8deg); }

  .pc-info-btn {
    position: absolute; top: 1rem; left: 1rem;
    width: 38px; height: 38px; border-radius: 50%; border: none; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    backdrop-filter: blur(6px); transition: transform 0.3s ease, background 0.3s;
    z-index: 12;
  }
  .dark  .pc-info-btn       { background: rgba(255,255,255,0.08); color: #fff; border: 1px solid rgba(255,255,255,0.18); }
  .light .pc-info-btn       { background: rgba(0,0,0,0.06);       color: #000; border: 1px solid rgba(0,0,0,0.12); }
  .dark  .pc-info-btn.open  { background: rgba(255,255,255,0.22); }
  .light .pc-info-btn.open  { background: rgba(0,0,0,0.18); color: #fff; }
  .pc-info-btn:hover { transform: scale(1.12); }

  .pc-desc-overlay {
    position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 8;
    display: flex; align-items: center; justify-content: center; padding: 1.8rem;
    transition: opacity 0.38s ease;
  }
  .dark  .pc-desc-overlay { background: rgba(0,0,0,0.84); }
  .light .pc-desc-overlay { background: rgba(255,255,255,0.9); }
  .pc-desc-overlay.desc-hidden  { opacity: 0; pointer-events: none; }
  .pc-desc-overlay.desc-visible { opacity: 1; }

  .pc-desc-inner { text-align: center; }
  .pc-desc-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.65rem; letter-spacing: 0.24em; text-transform: uppercase;
    opacity: 0.45; margin-bottom: 0.6rem;
  }
  .pc-desc-divider { width: 28px; height: 1px; margin: 0.7rem auto 0.9rem; }
  .dark  .pc-desc-divider { background: rgba(255,255,255,0.28); }
  .light .pc-desc-divider { background: rgba(0,0,0,0.22); }
  .pc-desc-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem; font-weight: 300; line-height: 1.65;
  }
  .dark  .pc-desc-text { color: rgba(255,255,255,0.9); }
  .light .pc-desc-text { color: rgba(0,0,0,0.88); }

  .product-content { flex: 1; display: flex; flex-direction: column; }
  .product-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem; font-weight: 500; margin-bottom: 1rem;
    line-height: 1.35; min-height: 2.8rem; letter-spacing: 0.01em;
  }
  .product-features { display: flex; gap: 0.8rem; margin-bottom: 1.2rem; flex-wrap: wrap; }
  .feature-item {
    display: flex; align-items: center; gap: 0.4rem;
    padding: 0.38rem 0.8rem; font-size: 0.72rem; font-weight: 500;
    border-radius: 3px; letter-spacing: 0.06em; text-transform: uppercase;
  }
  .dark  .feature-item { background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.78); }
  .light .feature-item { background: rgba(0,0,0,0.04);       color: rgba(0,0,0,0.68); }

  .product-price-section { margin-top: auto; padding-top: 1rem; border-top: 1px solid; }
  .dark  .product-price-section { border-color: rgba(255,255,255,0.1); }
  .light .product-price-section { border-color: rgba(0,0,0,0.1); }
  .price-main { display: flex; align-items: baseline; gap: 0.5rem; margin-bottom: 0.4rem; }
  .current-price {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.85rem; font-weight: 700; letter-spacing: -0.02em;
  }
  .currency  { font-size: 0.88rem; opacity: 0.55; font-weight: 400; }
  .old-price { font-size: 0.95rem; text-decoration: line-through; opacity: 0.38; }

  @media (max-width: 1400px) { .products-grid { grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.8rem; } }
  @media (max-width: 1024px) { .products-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem; } }
  @media (max-width: 768px) {
    .products-section { padding: 4rem 1.5rem; }
    .section-header   { margin-bottom: 3rem; }
    .products-grid    { grid-template-columns: repeat(2, 1fr); gap: 1.2rem; }
    .product-name     { font-size: 1rem; min-height: 2.5rem; }
    .current-price    { font-size: 1.5rem; }
  }
  @media (max-width: 480px) {
    .products-section     { padding: 3rem 1rem; }
    .products-grid        { gap: 1rem; }
    .product-image-wrapper{ margin-bottom: 1rem; }
    .product-name         { font-size: 0.95rem; margin-bottom: 0.8rem; }
    .product-features     { gap: 0.5rem; }
    .feature-item         { padding: 0.3rem 0.6rem; font-size: 0.7rem; }
    .current-price        { font-size: 1.4rem; }
    .old-price            { font-size: 0.9rem; }
    .pc-desc-text         { font-size: 1.05rem; }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// ProductCard
// ─────────────────────────────────────────────────────────────────────────────
const ProductCard = ({ images = [], name, price, oldPrice, fast, safe, isDark, productKey, t, index }) => {
  const [imgIdx,   setImgIdx]   = useState(0);
  const [showDesc, setShowDesc] = useState(false);

  const safeImages = images.length > 0 ? images : [''];
  const total = safeImages.length;
  const theme = isDark ? 'dark' : 'light';

  const prev = (e) => { e.stopPropagation(); setImgIdx((i) => (i - 1 + total) % total); };
  const next = (e) => { e.stopPropagation(); setImgIdx((i) => (i + 1) % total); };
  const toggleDesc = (e) => { e.stopPropagation(); setShowDesc((s) => !s); };

  const desc = t.descriptions?.[productKey] || '';

  return (
    <div
      className={`product-card ${theme}`}
      data-aos="fade-up"
      data-aos-delay={Math.min(index * 50, 500)}
    >
      <div className="product-image-wrapper">
        {safeImages.map((src, i) => (
          <div
            key={i}
            className={`product-image ${i === imgIdx ? 'img-visible' : 'img-hidden'}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}

        <div className={`pc-desc-overlay ${showDesc ? 'desc-visible' : 'desc-hidden'}`}>
          <div className="pc-desc-inner">
            <p className="pc-desc-label">{t.descLabel}</p>
            <div className="pc-desc-divider" />
            <p className="pc-desc-text">{desc}</p>
          </div>
        </div>

        <button
          className={`pc-info-btn ${showDesc ? 'open' : ''}`}
          onClick={toggleDesc}
          title={t.descLabel}
        >
          {showDesc ? <X size={15} /> : <Info size={15} />}
        </button>

        <div className="product-badge">
          <ShoppingBag size={15} />
        </div>

        {total > 1 && (
          <span className="pc-counter">{imgIdx + 1} / {total}</span>
        )}

        {total > 1 && (
          <div className="pc-nav">
            <button className="pc-nav-btn" onClick={prev}>
              <ChevronLeft size={14} />
            </button>
            {safeImages.map((_, i) => (
              <button
                key={i}
                className={`pc-dot ${i === imgIdx ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setImgIdx(i); }}
              />
            ))}
            <button className="pc-nav-btn" onClick={next}>
              <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>

      <div className="product-content">
        <h3 className="product-name">{name}</h3>
        <div className="product-features">
          <div className="feature-item"><Zap size={13} /><span>{fast}</span></div>
          <div className="feature-item"><Shield size={13} /><span>{safe}</span></div>
        </div>
        <div className="product-price-section">
          <div className="price-main">
            <span className="current-price">{price}</span>
            <span className="currency">UZS</span>
          </div>
          {oldPrice ? <span className="old-price">{oldPrice} UZS</span> : null}
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// IntroPage
// ─────────────────────────────────────────────────────────────────────────────
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
              <ProductCard
                key={idx}
                index={idx}
                images={product.images}
                productKey={product.key}
                name={t.names[product.key]}
                price={product.price}
                oldPrice={product.oldPrice}
                fast={t.fast}
                safe={t.safe}
                isDark={isDark}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroPage;