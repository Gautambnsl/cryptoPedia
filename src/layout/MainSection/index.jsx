import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import demoData from './demoData';

const MainSection = () => {
  return (
    <div className="main-section">
      {demoData?.map((item, index) => (
        <div className="main-card" key={index}>
          <div className="card-header">
            <div className="card-name">
              <Image
                src={item?.bankLogo}
                alt={item?.fundName}
                loading="lazy"
                width={50}
                height={50}
              />
              <p>{item?.fundName}</p>
            </div>
            <button className="invest-btn">Invest Now</button>
          </div>
          <hr className="card-divider" />
          <div className="card-detail-body">
            <div className="card-detail">
              <div className="invested-amount">
                <p>Fund Size</p>
                <span>{item?.fundSize}</span>
              </div>
              <div className="created-by">
                <p>Created By</p>
                <span>{item?.createdBy}</span>
              </div>
              <div className="token-includes">
                <p>Token Includes</p>
                <Image
                  src={item?.tokenIncludes}
                  alt="Polygon"
                  loading="lazy"
                  width={25}
                  height={25}
                />
              </div>
            </div>

            <button className="add-to-cart-btn">
              <FontAwesomeIcon icon={faShoppingCart} />
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainSection;
