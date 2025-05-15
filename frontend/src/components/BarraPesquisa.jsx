import { Search } from 'lucide-react';

const BarraPesquisa = () => {
  return (
    <div className="flex items-center bg-gray-200 rounded-md px-5 py-4 mt-4 w-80 md:w-96 lg:w-[18rem] h-[5rem]">
      <input
        type="text"
        placeholder="Busque por jogos..."
        className="bg-transparent w-full focus:outline-none placeholder-gray-500 text-gray-800"
      />
      <button className="ml-2 text-gray-600 hover:text-gray-800">
        <Search size={20} />
      </button>
    </div>
  );
};

export default BarraPesquisa;
