import Container from './components/Container';
import Header from './components/Header';

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <div className="my-6 border-1 border-gray-300 w-full"></div>
      <Container>
        <main>main</main>
      </Container>
    </>
  )
}

export default App;
