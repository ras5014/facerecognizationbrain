import "./FaceRecognition.css";

const FaceRecognition = ({ imageURL, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          src={imageURL}
          alt=""
          width={"500px"}
          height={"auto"}
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            bottom: box.bottomRow,
            left: box.leftcol,
            right: box.rightcol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
