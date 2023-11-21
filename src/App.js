import ImageSlider from "./components/ImageSlider";
const App = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "nature-1" },
    { url: "http://localhost:3000/image-2.jpg", title: "nature-2" },
    { url: "http://localhost:3000/image-3.jpg", title: "nature-3" },
    { url: "http://localhost:3000/image-4.jpg", title: "nature-4" },
    { url: "http://localhost:3000/image-5.jpg", title: "nature-5" },
    { url: "http://localhost:3000/image-6.jpg", title: "nature-6" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Bharadwaj Image Slider</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;
