import Card from "./card";
import {useState, useEffect} from 'react'
export default function CardList(){

    const [transformed, setTransformed] = useState(true)
    const cardStyle = {
        transform: transformed ? 'translateX(-500px)' : 'translateX(0px)',
        opacity: transformed ? '0' : '1',
        transition: 'all 2s ease-in-out'
    }

    useEffect(() =>{
        const handleScroll = () =>{
            const scrollPosotion = window.scrollY
            const element = document.getElementById('cards')

            if(element){
                const elementOffset = element.offsetTop;
                const windowHeight = window.innerHeight;

                if(scrollPosotion < elementOffset - (windowHeight / 2)){
                    setTransformed(true)
                } else {
                    setTransformed(false)
                }

            }
        }


        window.addEventListener('scroll', handleScroll)
        
        return () =>{
            window.removeEventListener('scroll',handleScroll)
            }
    }, [])
    return(
        <div className="grid grid-cols-1 items-center justify-center">
            
        <header className="underline text-3xl font-serif font-bold text-center mt-36">PROJECTS</header>


        <section className="flex items-center justify-evenly mt-24" style={cardStyle} id="cards">
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

