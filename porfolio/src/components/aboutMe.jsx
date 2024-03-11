export default function AboutMe(){

    const desciption = "My name is Winner 1st year Computer Sciene major. Currently learnig Javascriot & React. Aspiring full stack web and app developer."
    return (
        <section className="flex gap-x-24 items-center justify-evenly mt-36 " >
        <div className="grid gap-y-8">
        <p className="text-1xl font-Arial italic">My Portfolio</p>
        <h1 className="text-3xl font-serif font-bold">Hey, I am <span>Winner</span></h1>
        </div>
        <div>
        <p className="w-80 italic">{desciption}</p>
        </div>


        </section>
    )
}