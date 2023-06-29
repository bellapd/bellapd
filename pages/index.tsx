import Main from "../components/Main";
export default function Home() {
  return (
    <div>
      <div className="flex">
        <div className="w-2/4 h-screen fixed overflow-y-auto">
          <Main />
        </div>
        <div className="w-2/4 h-screen ml-auto overflow-y-auto">
          WORK ON PROGRESS
        </div>
      </div>
    </div>
  );
}
