import { useSelector, useDispatch } from 'react-redux'
import { incrementar, decrementar, incrementarPorMonto } from './features/counter/counterSlice'
import type { RootState, AppDispatch } from './Redux/store'

function App() {


  // Usamos `RootState` (definido en `src/Redux/store.ts`) para tipar el estado
  // y así obtener autocompletado y seguridad de tipos en `useSelector`.
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className='bg-white shadow-2xl w-[40dvw] h-[60dvh] flex flex-col justify-center items-center gap-4 rounded-2xl font-sans min-w-90'>
      <h1 className='m-0 p-0 font-bold'>Contador:</h1>
      <p className='text-2xl p-0 m-0'>{count}</p>

      <div className='flex flex-row gap-4'>
        <button className='bg-gray-700 w-10 h-10 rounded-2xl text-white hover:bg-gray-900' onClick={() => dispatch(incrementar())}> +1 </button>

        <button className='bg-gray-700 w-10 h-10 rounded-2xl text-white hover:bg-gray-900' onClick={() => dispatch(decrementar())}> -1 </button>

        <button className='bg-gray-700 w-10 h-10 rounded-2xl text-white hover:bg-gray-900' onClick={() => dispatch(incrementarPorMonto(5))}> +5 </button>
      </div>
    </div>
  )
}

export default App
