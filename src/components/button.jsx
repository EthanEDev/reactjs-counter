import "./../styles/global.css"; // Import global styles for consistent button styling

export default function Button({
  src, // Image source URL, if an image is to be displayed on the button
  alt, // Alt text for the image, for accessibility
  onClick, // Function to be called when the button is clicked
  bgColor = "gold", // Background color of the button, default is "gold"
  children, // Fallback content to be displayed if no image is provided
}) {

  // Determine the button's content: use an image if 'src' is provided, otherwise use 'children'
  const value = src ? <img src={src} alt={alt} width={"40px"} /> : children;

  return (
    <>
      <button
        onClick={onClick}
        style={{
          border: "0",
          margin: "2px",
          backgroundColor: bgColor,
          borderRadius: "5px",
          fontFamily: "Arial",
          fontSize: "30px",
          width: "50px",
          height: "45px",
        }}
      >
        {value}
      </button>
    </>
  );
}
