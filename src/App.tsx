import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incrementar, decrementar, incrementarPorMontos} from './features/counter/counterSlice'

function App() {

  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='bg-white shadow-2xl w-[40dvw] h-[60dvh] flex flex-col justify-center items-center gap-4 rounded-2xl font-sans'>
      <h1 className='m-0 p-0 font-bold'>Contador:</h1>
      <p className='text-2xl p-0 m-0'>{count}</p>

      <div className='flex flex-row gap-4'>
        <button className='bg-gray-700 w-10 h-10 rounded-2xl text-white' onClick={() => dispatch(incrementar())}> +1 </button>

        <button className='bg-gray-700 w-10 h-10 rounded-2xl text-white' onClick={() => dispatch(decrementar())}> -1 </button>

        <button className='bg-gray-700 w-10 h-10 rounded-2xl text-white' onClick={() => dispatch(incrementarPorMonto(5))}> +5 </button>
      </div>
    </div>
  )
}

export default App
