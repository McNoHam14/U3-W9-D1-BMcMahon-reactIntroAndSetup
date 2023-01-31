import React from "react";

class ImageComponent extends React.Component {
  render() {
    const { src, alt } = this.props;
    return <img src={src} alt={alt} />;
  }
}

export default ImageComponent;

// function
// const ImageComponent = function () {
//   return <img src="https://picsum.photos/200"></img>;
// };

// arrow function
// const ImageComponent = () => {
//   return (
//     <div>
//       <img src="https://picsum.photos/200"></img>
//     </div>
//   );
// };
