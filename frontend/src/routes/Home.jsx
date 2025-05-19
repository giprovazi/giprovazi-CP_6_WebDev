const Home = () => {
    return (
        <main>
            <section>
                <h1 className="flex justify-center mt-10 text-5xl m-10">Nossas Ofertas</h1>
                <div className="flex flex-col items-center">
                    <div className="flex m-3">
                        <img src="./src/assets/banner.png" alt="Promoção Gta 6" className="bg-gray-200 rounded-lg shadow-md "/>
                    </div>
                    <button 
                    onClick = {() => {
                        const element = document.getElementById('gta6-section');
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                        }}
                    className="bg-purple-900 hover:scale-[1.02] transition-transform  flex items-center justify-center rounded-lg m-2 shadow-lg "
                    > 
                        <p className="text-2xl text-gray-200 m-7 ">
                            Compre Aqui
                        </p>
                    </button>
                </div>
            </section>

            <section>
                <h1 className="flex justify-center m-10 text-5xl">Produtos</h1>
                <div className="flex flex-col justify-center items-center bg-purple-800 m-10 text-2xl text-gray-100 rounded-lg shadow-lg ">
                    <img src="./src/assets/jogo2.png" alt="Jogo Gta 6" className="w-[9rem] p-4"/>
                    <p>EA Sports Fc 25</p>
                    <p>R$189,90</p>
                    <button className="bg-gray-100 text-purple-900 p-3 m-3 text-3xl hover:scale-[1.02] transition-transform rounded-md">Comprar</button>
                </div>  

                <br/>

                <div className="flex flex-col justify-center items-center bg-purple-800 m-10 text-2xl text-gray-100 rounded-lg shadow-lg ">
                    <img src="./src/assets/jogo3.png" alt="Jogo Rainbow Six Siege" className="w-[9rem] p-3"/>
                    <p>Tom Clancy's Rainbow Six Siege</p>
                    <p>R$80,90</p>
                    <button className="bg-gray-100 text-purple-900 p-3 m-3 text-3xl hover:scale-[1.02] transition-transform rounded-md">Comprar</button>
                </div>

                <br/>

                <div className="flex flex-col justify-center items-center bg-purple-800 m-10 text-2xl text-gray-100 rounded-lg shadow-lg ">
                    <img src="./src/assets/jogo4.png" alt=" Jogo Returnal" className="w-[9rem] p-3"/>
                    <p>Returnal</p>
                    <p>R$79,99</p>
                    <button className="bg-gray-100 text-purple-900 p-3 m-3 text-3xl hover:scale-[1.02] transition-transform rounded-md">Comprar</button>
                </div>     

                <br/>

                <div className="flex flex-col justify-center items-center bg-purple-800 m-10 text-2xl text-gray-100 rounded-lg shadow-lg " id="gta6-section">
                    <img src="./src/assets/jogo.png" alt="Jogo Gta 6" className="w-[9rem] p-5"/>
                    <p>Gta 6</p>
                    <p>R$399,99</p>
                    <button className="bg-gray-100 text-purple-900 p-3 m-3 text-3xl hover:scale-[1.02] transition-transform rounded-md">Comprar</button>
                </div>                   

            </section>

        </main>
    )
}

export default Home