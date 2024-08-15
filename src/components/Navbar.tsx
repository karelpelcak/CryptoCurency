"use client";

import { useState } from "react";
import { CryptoList } from "@/lib/store";

const Navbar = ({ onSelectionChange }: { onSelectionChange: (list: string[]) => void }) => {
  const [selected, setSelected] = useState<string[]>(CryptoList);

  function handleChange(e: any) {
    const { checked } = e.target;
    const value = e.target.value;

    let updatedList = [...selected];

    if (checked) {
      updatedList.push(value);
    } else {
      updatedList = updatedList.filter((item) => item !== value);
    }

    setSelected(updatedList);
    onSelectionChange(updatedList); // Informuje rodiče o změně
  }

  return (
    <div className="flex flex-row gap-10">
      <div>
        <label htmlFor="btc">Bitcoin </label>
        <input
          type="checkbox"
          id="btc"
          onChange={handleChange}
          value={"bitcoin"}
        />
      </div>
      <div>
        <label htmlFor="eth">Ethereum </label>
        <input
          type="checkbox"
          id="eth"
          onChange={handleChange}
          value={"ethereum"}
        />
      </div>
      <div>
        <label htmlFor="doge">Dogecoin </label>
        <input
          type="checkbox"
          id="doge"
          onChange={handleChange}
          value={"dogecoin"}
        />
      </div>
      <div>
        <label htmlFor="mon">Monero </label>
        <input
          type="checkbox"
          id="mon"
          onChange={handleChange}
          value={"monero"}
        />
      </div>
      <div>
        <label htmlFor="ltc">Litecoin </label>
        <input
          type="checkbox"
          id="ltc"
          onChange={handleChange}
          value={"litecoin"}
        />
      </div>
    </div>
  );
};

export default Navbar;
