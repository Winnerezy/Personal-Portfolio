import Card from "./card";

export default function CardList(){
    return(
        <div className="grid grid-cols-1 items-center justify-center">
            
        <header className="underline text-3xl font-serif font-bold text-center mt-36">PROJECTS</header>


        <section className="flex items-center justify-evenly mt-24">
        <div>
            <Card title= "Cali" description= "Cali a simplistic calculator made with HTML, CSS and Javascript. Implementing the knowledge of basic arithmetic to solve problems" image=""/>
        </div>

        <div>
            <Card title= "Weather Me" description=""/>
        </div>

        <div>
            <Card title= "Pomi" description= ""/>
        </div>

        </section>
        </div>


    )
}

