import Container from './components/Container';
import Header from './components/Header';
import NewsBanner from './components/NewsBanner';

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <div className="my-6 border-1 border-gray-300 w-full"></div>
      <Container>
        <main>
          <NewsBanner />
        </main>
      </Container>
    </>
  )
}

export default App;
