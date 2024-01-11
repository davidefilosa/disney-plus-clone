const getImagePath = (imagePath?: string, fullSize?: boolean) => {
  return imagePath
    ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
    : "https://images.unsplash.com/photo-1616530940355-351fabd9524b";
};

export default getImagePath;
