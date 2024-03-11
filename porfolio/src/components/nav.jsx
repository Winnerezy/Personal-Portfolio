export default function Nav(){
    const profileImage = {image: "src/assets/photo_2023-06-21_21-00-28.jpg"}
    return(
        <nav className="text-white text-1xl flex gap-12 font-Arial mt-6 items-center justify-evenly">
            <div>
            <img className="rounded-2xl w-8 transition ease-in-out hover:scale-125" src={profileImage.image} alt="Profile Image" />
            </div>

            <div className="text-white text-1xl flex gap-24 font-Arial mt-6 ml-80">
            <span className="text-white transition delay-200 ease-in-out hover:text-blue-300 hover:decoration-solid hover:underline hover:-translate-y-1">Home</span>
            <span className="text-white transition delay-200 ease-in-out hover:text-blue-300 hover:decoration-solid hover:underline hover:-translate-y-1">Projects</span>
            <span className="text-white transition delay-200 ease-in-out hover:text-blue-300 hover:decoration-solid hover:underline hover:-translate-y-1">About Me</span>
            <span className="text-white transition delay-200 ease-in-out hover:text-blue-300 hover:decoration-solid hover:underline hover:-translate-y-1">Contact Me</span>
            </div>
           
        </nav>

    )
}

