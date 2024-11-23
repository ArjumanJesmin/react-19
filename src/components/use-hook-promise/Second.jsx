/* eslint-disable react/prop-types */
import { Suspense, use, useState } from "react";
// 02
const fetchMessage = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🚀 This is my data");
    }, 1000);
  });
};
// 03
const MessageOutput = ({ messagePromise }) => {
  const messageContent = use(messagePromise);

  return <p className="text-xl">Here is the message: {messageContent}</p>;
};

// 04
function MessageContainer({ messagePromise }) {
  return (
    <Suspense fallback={<p className="text-xl">⌛ Downloading message...</p>}>
      <MessageOutput messagePromise={messagePromise} />
    </Suspense>
  );
}
// 01
export default function Message() {
  const [show, setShow] = useState(false);
  const [messagePromise, setMessagePromise] = useState(null);

  const download = () => {
    setMessagePromise(fetchMessage());
    setShow(true);
  };

  return show ? (
    <MessageContainer messagePromise={messagePromise} />
  ) : (
    <button
      onClick={download}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Download message
    </button>
  );
}
