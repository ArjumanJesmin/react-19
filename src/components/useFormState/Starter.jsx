import { useState } from "react";

/* eslint-disable react/prop-types */
const AddToCartForm = ({ itemID, itemTitle }) => {
  const [message, setMessage] = useState(null);

  const formAction = (formData) => {
    const id = formData.get("itemID");
    if (id === "1") {
      setMessage("Some message here");
    }
    setMessage("Some message here");
  };
  return (
    <form
      action={formAction}
      className="bg-white border border-gray-300 rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-xl font-bold mb-4">{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add to Cart
      </button>
      <div className="mt-4 text-sm text-gray-700">{message}</div>
    </form>
  );
};

export default AddToCartForm;
