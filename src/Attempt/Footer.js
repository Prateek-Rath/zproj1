import "../App.css";
export default function Footer({ qno, goNext, goPrev, finish }) {
  return (
    <div className="m-1">
      <div className="flex flex-row justify-between">
        <button
          className="inline-block px-2 py-2 m-1 text-white bg-green-400 hover:bg-[#ddd] hover:text-black rounded"
          onClick={() => {
            goPrev();
          }}
        >
          &laquo; Previous
        </button>
        <button
          className="bg-yellow-500 p-1 rounded text-white hover:bg-black"
          onClick={() => finish()}
        >
          Finish
        </button>
        <button
          className="inline-block px-2 py-2 m-1 text-white bg-green-400 hover:bg-[#ddd] hover:text-black rounded"
          onClick={() => {
            goNext();
          }}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
}
