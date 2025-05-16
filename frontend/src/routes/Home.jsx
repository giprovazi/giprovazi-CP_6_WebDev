const Home = () => {
    return (
        <main>
            <section>
                <h1 className="flex justify-center mt-10 text-5xl">Nossas Ofertas</h1>
                <div className="bg-gray-200 m-5 p-1 rounded-lg shadow-md flex flex-col items-center">
                    <div className="flex m-3">
                        <img src="./src/assets/banner.png" alt="Promoção Gta 6" className="box-border shadow-lg"/>
                    </div>
                    <button 
                    // onClick {() => {
                    //     const element = document.getElementById('gta6-section');
                    //     if (element) {
                    //         element.scrollIntoView({ behavior: 'smooth' });
                    //     }
                    //     }}
                    className="bg-purple-900 hover:scale-[1.02] transition-transform  flex items-center justify-center rounded-lg m-3 shadow-lg "
                    > 
                        <p className="text-3xl text-gray-200 m-7 ">
                            Compre Aqui
                        </p>
                    </button>
                </div>
            </section>

            <section>
                <h1 className="flex justify-center mt-10 text-5xl">Produtos</h1>


            </section>

        </main>
    )
}

export default Home