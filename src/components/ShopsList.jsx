import ShopsPhotoCloth from '../assets/shops_unitedtokyo.jpg';
import ShopsPhotoSouvenir from '../assets/shops_souvenirshop.jpg';
import ShopsPhotoCraft from '../assets/shop_craftshop.webp';

import ShopsComponent from './ShopsComponent';

const shops = [
    {
      name: "United Tokyo (Ginza)",
      image: ShopsPhotoCloth,
      type: "Clothing Store",
      description:
        "United Tokyo is a contemporary Japanese fashion brand offering minimalist and elegant clothing, entirely made in Japan. Their flagship store in Ginza highlights premium quality and local craftsmanship.",
      link: "https://rakutenfashionweektokyo.com/en/brands/detail/united-tokyo/",
    },
    {
      name: "Souvenir From Tokyo",
      image: ShopsPhotoSouvenir,
      type: "Souvenir Shop",
      description:
        "Located inside The National Art Center, this stylish store offers curated Japanese souvenirs—from fashion accessories to designer stationery and modern craft items.",
      link: "https://www.gltjp.com/en/directory/item/11149/",
    },
    {
      name: "Yamakichi",
      image: ShopsPhotoCraft,
      type: "Craft Shop",
      description:
        "Yamakichi is a traditional crafts store in Asakusa, specializing in Japanese ceramics and lacquerware. A perfect spot to discover handcrafted goods rooted in local heritage.",
      link: "https://asakusayamakichi.co.jp/",
    },
  ];
  

function ShopsList(){
    return (
    <>
    <h2>Our recommandations !</h2>
    <div className="activity-list">
        {shops.map((shop, index) => (
            <ShopsComponent
                key={index}
                name={shop.name}
                type={shop.type}
                description={shop.description}
                image={shop.image}
                link={shop.link}
                className=""
            />
        ))}

    </div>
    </>
    
)
}

export default ShopsList;