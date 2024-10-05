const App = () => {
  return (
    <main class="bg-orange-100 w-80 mx-auto text-center mt-5 p-5">
    <h1 class="text-3xl ">
        Calculadora
      </h1>
      <section class="flex flex-col gap-4">
        <input class="border px-3 py2 text-right text-xl"
        type="text" 
        readonly value="0"/>
        <div class="grid grid-cols-3 gap-2">
            <button class="bg-red-300 p-2 hover:bg-red-400">+</button>
            <button class="bg-red-300 p-2 hover:bg-red-400">-</button>
            <button class="bg-red-300 p-2 hover:bg-red-400">*</button>

            <button class="bg-blue-300 p-2 hover:bg-blue-400">9</button>
            <button class="bg-blue-300 p-2 hover:bg-blue-400">8</button>
            <button class="bg-blue-300 p-2 hover:bg-blue-400">7</button>

            <button class="bg-blue-300 p-2 hover:bg-blue-400">6</button>
            <button class="bg-blue-300 p-2 hover:bg-blue-400">5</button>
            <button class="bg-blue-300 p-2 hover:bg-blue-400">4</button>

            <button class="bg-blue-300 p-2 hover:bg-blue-400">3</button>
            <button class="bg-blue-300 p-2 hover:bg-blue-400">2</button>
            <button class="bg-blue-300 p-2 hover:bg-blue-400">1</button>

            <button class="bg-blue-300 p-2 hover:bg-blue-400">0</button>
            <button class="bg-green-300 p-2 hover:bg-green-400">CE</button>
            <button class="bg-green-300 p-2 hover:bg-green-400">=</button>
        </div>
    </section>
    </main>
  )
}

export default App