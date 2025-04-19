import Container from './components/Container';
import Header from './components/Header';
import NewsBanner from './components/NewsBanner';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import { increment } from './redux/slices/newsSlice';

function App() {
  const { value } = useAppSelector(state => state.news)
  const dispatch = useAppDispatch()
  /* https://api.currentsapi.services/v1/ */

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

      <button onClick={() => dispatch(increment())}>+</button>
      <h2>{value}</h2>
    </>
  )
}

export default App;
