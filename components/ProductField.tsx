import React from "react";

import CategoriDisplay from "./CategoriDisplay";

const ProductField = () => {
  const kategorier = ["ring", "necklace", "watch", "bracelet", "earring"];

  return (
    <div className="flex items-center justify-center w-[80%] p-8">
      <div>
        {kategorier.map((kategori, index) => (
          <CategoriDisplay key={index} kategori={kategori} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductField;
