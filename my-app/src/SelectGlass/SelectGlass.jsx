import React, { useState } from "react";
import dataGlasses from "./dataGlasses.json";

console.log("data:", dataGlasses);
function SelectGlass() {
  // State dùng để lưu trữ đường dẫn hình ảnh của xe sẽ được hiển thị ra UI
  const [carUrl, setCarUrl] = useState("./glassesImage/v1.png");

  return (
    <div className="background">
      <div className="text-center">
        <h3 className="p-5 top">TRY GLASSES APP ONLINE</h3>
      </div>
      <div className="container">
        <div className="model">
          <div className="text-center model">
            <img
              src="./glassesImage/model.jpg"
              alt="model"
              width="25%"
              height="auto"
            />
          </div>
          <div className="model-glass">
            <img src={carUrl} alt="model" width="35%" height="auto" />
          </div>
        </div>

        <div className="glass text-center">
          <div className="row">
            <div
              className="col-md-2 mt-5"
              onClick={() => setCarUrl("./glassesImage/v1.png")}
            >
              <img
                src="./glassesImage/g1.jpg"
                alt="icon-black"
                border="1px"
                width="100%"
              />
            </div>
            <div
              className="col-md-2 mt-5"
              onClick={() => setCarUrl("./glassesImage/v2.png")}
            >
              <img
                src="./glassesImage/g2.jpg"
                alt="icon-black"
                border="1px"
                width="100%"
                height="80%"
              />
            </div>
            <div
              className="col-md-2 mt-5"
              onClick={() => setCarUrl("./glassesImage/v3.png")}
            >
              <img
                src="./glassesImage/g3.jpg"
                alt="icon-black"
                border="1px"
                width="100%"
              />
            </div>
            <div
              className="col-md-2 mt-5"
              onClick={() => setCarUrl("./glassesImage/v4.png")}
            >
              <img
                src="./glassesImage/g4.jpg"
                alt="icon-black"
                border="1px"
                width="100%"
              />
            </div>
            <div
              className="col-md-2 mt-5"
              onClick={() => setCarUrl("./glassesImage/v5.png")}
            >
              <img
                src="./glassesImage/g5.jpg"
                alt="icon-black"
                border="1px"
                width="100%"
              />
            </div>
            <div
              className="col-md-2 mt-5"
              onClick={() => setCarUrl("./glassesImage/v6.png")}
            >
              <img
                src="./glassesImage/g6.jpg"
                alt="icon-black"
                border="1px"
                width="100%"
              />
            </div>
            <div
              className="col-md-2 mt-3"
              onClick={() => setCarUrl("./glassesImage/v7.png")}
            >
              <img
                src="./glassesImage/g7.jpg"
                alt="icon-black"
                border="1px"
                width="100%"
              />
            </div>
            <div
              className="col-md-2 mt-3"
              onClick={() => setCarUrl("./glassesImage/v8.png")}
            >
              <img
                src="./glassesImage/g8.jpg"
                alt="icon-black"
                border="1px"
                width="100%"
              />
            </div>
            <div
              className="col-md-2 mt-3"
              onClick={() => setCarUrl("./glassesImage/v9.png")}
            >
              <img
                src="./glassesImage/g9.jpg"
                alt="icon-black"
                border="1px"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectGlass;
