export default function AttemptBox({
  handleChoice,
  data,
  qno,
  selection,
  setSelection,
  responses,
  val,
  setVal,
}) {
  if (data.type === "mcq")
    return (
      <div className="m-2 bg-[#435E74] w-[99%] h-full">
        <div className="block bg-[#141D3A] border-8 border-[#59D4C8]">
          {/* question div */}
          <p className="text-white">
            Q{qno} {data.question}
          </p>
        </div>
        <div className="bg-white h-5"></div>
        <div className="options">
          <div
            className={
              responses[qno - 1] === "a"
                ? "block bg-black border-8 border-[#F1C716] w-full hover:scale-[1.02]"
                : "block bg-[#F9E5B3] border-8 border-[#F1C716] w-full hover:scale-[1.02]"
            }
            id="a"
            onClick={(e) => {
              // console.log("Attempt box says be selected a");
              setSelection("a");
              handleChoice(e, qno, "a");
            }}
          >
            {/* answer div */}
            <p
              className={
                responses[qno - 1] === "a"
                  ? "text-white font-bold"
                  : "text-[#23211A]"
              }
              id="aopt"
            >
              a. {data.options.a}
            </p>
          </div>
          <div
            className={
              responses[qno - 1] === "b"
                ? "block bg-black border-8 border-[#F1C716] w-full hover:scale-[1.02]"
                : "block bg-[#F9E5B3] border-8 border-[#F1C716] w-full hover:scale-[1.02]"
            }
            id="b"
            onClick={(e) => {
              setSelection("b");
              // console.log("Attempt box says be selected b");
              handleChoice(e, qno, "b");
            }}
          >
            {/* answer div */}
            <p
              className={
                responses[qno - 1] === "b"
                  ? "text-white font-bold"
                  : "text-[#23211A]"
              }
              id="bopt"
            >
              b. {data.options.b}
            </p>
          </div>
          <div
            className={
              responses[qno - 1] === "c"
                ? "block bg-black border-8 border-[#F1C716] w-full hover:scale-[1.02]"
                : "block bg-[#F9E5B3] border-8 border-[#F1C716] w-full hover:scale-[1.02]"
            }
            id="c"
            onClick={(e) => {
              // console.log("Attempt box says be selected c");
              setSelection("c");
              handleChoice(e, qno, "c");
            }}
          >
            {/* answer div */}
            <p
              className={
                responses[qno - 1] === "c"
                  ? "text-white font-bold"
                  : "text-[#23211A]"
              }
              id="copt"
            >
              c. {data.options.c}
            </p>
          </div>
          <div
            className={
              responses[qno - 1] === "d"
                ? "block bg-black border-8 border-[#F1C716] w-full hover:scale-[1.02]"
                : "block bg-[#F9E5B3] border-8 border-[#F1C716] w-full hover:scale-[1.02]"
            }
            id="d"
            onClick={(e) => {
              // console.log("Attempt box says be selected d");
              setSelection("d");
              handleChoice(e, qno, "d");
            }}
          >
            {/* answer div */}
            <p
              className={
                responses[qno - 1] === "d"
                  ? "text-white font-bold"
                  : "text-[#23211A]"
              }
              id="dopt"
            >
              d. {data.options.d}
            </p>
          </div>
          <div>
            <button
              className="btn btn-blue m-2"
              onClick={(e) => {
                setSelection("e");
                handleChoice(e, qno, "e");
              }}
            >
              Clear Response
            </button>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="m-2 bg-[#435E74] w-[99%] h-full">
        <div className="block bg-[#141D3A] border-8 border-[#59D4C8]">
          {/* question div */}
          <p className="text-white">
            Q{qno} {data.question}
          </p>
        </div>
        <div className="bg-white h-5">
          <label for="num">Enter a NUMERIC VALUE AS YOUR ANSWER</label>
          <input
            className="rounded m-2"
            name="num"
            onChange={(e) => {
              setVal(Number(e.target.value));
              handleChoice(e, qno, Number(e.target.value));
            }}
            value={val === Infinity ? "" : String(val)}
          ></input>
        </div>
      </div>
    );
}
