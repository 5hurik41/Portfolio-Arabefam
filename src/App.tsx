import Background from "./components/ui/Background";
import NavigationBar from "./features/landing/ui/NavigationBar";

function App() {
  return (
    <>
      <Background />
      <main className="w-full py-8 px-16">
        <NavigationBar />
      </main>
    </>
  );
}

export default App;
