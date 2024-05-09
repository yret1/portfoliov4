

const Contact = () => {




    return (
        <section className="w-screen h-screen flex flex-col gap-4 justify-center items-center">



            <section>
                <h2 className="text-4xl font-bold text-white text-center">Thanks for stopping by</h2>
            </section>

            <section>
                <p className="text-center">Im happy to hear you want to get in touch!</p>
                <p className="text-center">Sadly, this is not a real portfoliopage. This will only serve as a temporary for a school project.</p>
            </section>


            <section className="flex flex-col justify-center items-center">
                <p className="text-center">However, you can go to my actual portfolio here!</p>

                <a href="https://www.yret1.se/" referrerPolicy="no-referrer" >
                <button className="px-4 py-2 bg-black rounded-md">Go to yret1.se</button>
                </a>
            </section>

        </section>
    )
}


export default Contact