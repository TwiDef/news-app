import React from 'react';

type NewsBannerImageProps = {
  bannerImg: string | undefined
  newsId: string | undefined
}

const NewsBannerImage: React.FC<NewsBannerImageProps> = ({ bannerImg, newsId }) => {
  let [img, setImg] = React.useState<string>("https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg")

  React.useEffect(() => {
    if (bannerImg) {
      setImg(bannerImg)
    }
  }, [newsId])

  return (
    <img
      className="w-full h-auto"
      src={img}
      alt="err-img" />
  );
};

export default NewsBannerImage;