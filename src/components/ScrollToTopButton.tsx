import ArrowIcon from 'assets/images/icon-arrow-up.png';

const ScrollToTopButton = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      onClick={handleScrollTop}
      className="flex fixed z-[10] bottom-5 right-5 bg-light rounded-full w-12 h-12 border border-solid border-1 border-gray-400 justify-center items-center xl:right-[calc((100vw-960px)/2-85px)] cursor-pointer hover:opacity-75"
    >
      <img src={ArrowIcon} alt="" />
    </button>
  );
};

export default ScrollToTopButton;
