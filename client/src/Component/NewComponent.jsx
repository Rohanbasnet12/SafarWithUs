import React from "react";
import aboutImg from "../assets/images/agarzar-banner2.jpg";

const NewComponent = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">NewComponent</h1>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="w-1/3">
          <img src={aboutImg} alt="" />
        </div>
        <div className="co-span-2">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis illum quis explicabo natus ab cupiditate ipsam
            reprehenderit aperiam. Accusamus asperiores dolores ducimus, esse
            reprehenderit natus neque. Eveniet, illo asperiores! Id!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewComponent;
