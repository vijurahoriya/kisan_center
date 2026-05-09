
// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import InnerImageZoom from 'react-inner-image-zoom';
// import 'react-inner-image-zoom/lib/styles.min.css';
// function ProductSyncSlider({ images }) {
//     const [nav1, setNav1] = useState();
//     const [nav2, setNav2] = useState();
//     return (
//         <>
//             <div className="product-details-lft">
//                 <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>

//                     <div className="product-main">
//                         <InnerImageZoom
//                             src={images}
//                             zoomSrc={images}
//                             zoomType="hover"
//                             zoomScale={1.5}
//                             alt="Product"
//                             className="zoom-img"
//                         />
//                     </div>
//                     <div className="product-main">
//                         <img src={images} alt="image" />
//                     </div>
//                     <div className="product-main">
//                         <img src={images} alt="image" />
//                     </div>
//                     <div className="product-main">
//                         <img src={images} alt="image" />
//                     </div>
//                 </Slider >

//                 <Slider asNavFor={nav1} ref={(slider2) => setNav2(slider2)} slidesToShow={3} swipeToSlide={true} focusOnSelect={true} className="product-thumb-slide">
//                     <div>
//                         <div className="product-thumb">
//                             <img src={images} alt="image" />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="product-thumb">
//                             <img src={images} alt="image" />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="product-thumb">
//                             <img src={images} alt="image" />
//                         </div>
//                     </div>

//                 </Slider>
//             </div >
//         </ >
//     )
// }

// export default ProductSyncSlider

// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import InnerImageZoom from 'react-inner-image-zoom';
// import 'react-inner-image-zoom/lib/styles.min.css';

// function ProductSyncSlider({ images }) {
//     const [nav1, setNav1] = useState();
//     const [nav2, setNav2] = useState();

//     // If images is a string, wrap it in array for map convenience
//     const imageList = Array.isArray(images) ? images : [images];

//     return (
//         <div className="product-details-lft">
//             {/* Main Slider - only one slide if one image */}
//              {imageList.length > 1 ? (
//             <Slider asNavFor={nav2} ref={setNav1} arrows={false} slidesToShow={1} slidesToScroll={1}>
//                 {imageList.map((img, idx) => (
//                     <div key={idx} className="product-main">
//                         <InnerImageZoom
//                             src={img}
//                             zoomSrc={img}
//                             zoomType="hover"
//                             zoomScale={1.5}
//                             alt={`Product Image ${idx + 1}`}
//                             className="zoom-img"
//                         />
//                     </div>
//                 ))}
//             </Slider>)

//             {/* Thumbnails only if multiple images */}
//             {imageList.length > 1 ? (
//                 <Slider
//                     asNavFor={nav1}
//                     ref={setNav2}
//                     slidesToShow={Math.min(3, imageList.length)}
//                     swipeToSlide={true}
//                     focusOnSelect={true}
//                     arrows={false}
//                     infinite={imageList.length > 1}
//                     className="product-thumb-slide mt-3"
//                 >
//                     {imageList.map((img, idx) => (
//                         <div key={idx}>
//                             <div className="product-thumb">
//                                 <img src={img} alt={`Thumbnail ${idx + 1}`} />
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             ) : (
//                 // Single thumbnail, no slider
//                 <div className="product-thumb-slide mt-3">
//                     <div className="product-thumb">
//                         <img src={imageList[0]} alt="Thumbnail" />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ProductSyncSlider;


import React, { useState } from 'react';
import Slider from 'react-slick';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';

function ProductSyncSlider({ images }) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  // Normalize images: always an array
  const imageList = Array.isArray(images) ? images : [images];
  const isMultiple = imageList.length > 1;

  const thumbSettings = {
    slidesToShow: Math.min(3, imageList.length),
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: imageList.length > 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: Math.min(2, imageList.length) },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="product-details-lft">
      {/* MAIN SLIDER */}
      {isMultiple ? (
        <Slider
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          arrows={false}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {imageList.map((img, idx) => (
            <div key={idx} className="product-main">
              <InnerImageZoom
                src={img}
                zoomSrc={img}
                zoomType="hover"
                zoomScale={1.5}
                alt={`Product Image ${idx + 1}`}
                className="zoom-img"
              />
            </div>
          ))}
        </Slider>
      ) : (
        // Only one image – no slider
        <div className="product-main">
          <InnerImageZoom
            src={imageList[0]}
            zoomSrc={imageList[0]}
            zoomType="hover"
            zoomScale={1.5}
            alt="Product"
            className="zoom-img"
          />
        </div>
      )}

      {/* THUMBNAIL SLIDER */}
      {isMultiple ? (
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          {...thumbSettings}
          className="product-thumb-slide mt-3"
        >
          {imageList.map((img, idx) => (
            <div key={idx}>
              <div className="product-thumb">
                <img src={img} alt={`Thumbnail ${idx + 1}`} />
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        // Single thumbnail without slider
        <div className="product-thumb-slide mt-3">
          <div className="product-thumb">
            <img src={imageList[0]} alt="Thumbnail" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductSyncSlider;



