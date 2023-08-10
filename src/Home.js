import HomeCard from "./HomeCard";
import "./abstract.jpg";
// import "./index.css";
import "./App.css";

export default function Home() {
  return (
    <div
      className="flex flex-col h-full "
      style={{
        // backgroundImage: `url("https://gallerist.in/cdn/shop/products/abstract-art-30_3000x.jpg?v=1664390968")`,
        backgroundColor: "red",
      }}
    >
      <div className="flex flex-row justify-evenly align-middle place-items-middle w-auto h-full m-10 sm:flex-wrap sm:min-h-max sm:m-5 sm:shrink-2">
        <HomeCard title="Attempt / Create Quiz" path="/quiz" />
        <HomeCard title="Attempt A Random Quiz" path="/quiz" />
        <HomeCard title="Results and Analysis" path="/results" />
      </div>
      <div className="flex flex-row justify-evenly align-middle place-items-middle w-auto h-full m-10 sm:flex-wrap sm:min-h-max sm:m-5 sm:shrink-2">
        <HomeCard
          title={
            <a href="https://github.com/Prateek-Rath/zproj1">
              github Link to this project
            </a>
          }
        />
      </div>
    </div>
  );
}
