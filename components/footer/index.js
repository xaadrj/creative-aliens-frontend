
import Image from "next/image";


export default function Footer() {
    return (
        <div className="px-4 md:px-20 py-12 bg-stone-950 w-full xl:px-40 ">
            <div className="xl:container lg:flex-row flex-col flex justify-center md:justify-start items-start w-full gap-24 2xl:gap-40 pb-12 border-b border-stone-700">
                <div className="text-center w-full items-center md:items-start md:w-auto md:text-left text-stone-300 tracking-wide flex flex-col justify-center md:justify-start gap-2">
                    <h1 className="text-2xl font-bold uppercase flex">
                        Creative Al{" "}
                        <Image
                            width={35}
                            height={5}
                            className="-mt-1 -rotate-12 "
                            src="/icons/light-bulb.png"
                            alt="blub"
                        />
                        ens
                    </h1>
                    <p className="font-light text-stone-400 text-sm">World no.1 design agency</p>
                </div>
                <div className="flex-wrap w-full md:w-auto md:flex md:flex-nowrap md:justify-start items-center justify-center  md:items-start md:gap-40 lg:gap-20 xl:gap-40">
                    <div className="flex md:justify-start md:text-left justify-center items-center w-full md:w-auto md:items-start gap-2 flex-col">
                        <h6 className="uppercase text-stone-600 text-xs font-bold mb-2 md:mb-4">support</h6>
                        <a className="text-stone-400 font-light text-sm" href="#">Privacy Policy</a>
                        <a className="text-stone-400 font-light text-sm" href="#">Accessories</a>
                        <a className="text-stone-400 font-light text-sm" href="#">Documentations</a>
                        <a className="text-stone-400 font-light text-sm" href="#">Terms & Conditions</a>
                    </div>
                    <div className="flex md:justify-start md:text-left justify-center items-center w-full md:w-auto mt-10 md:mt-0 md:items-start gap-2 flex-col">
                        <h6 className="uppercase text-stone-600 text-xs font-bold mb-2 md:mb-4">about</h6>
                        <a className="text-stone-400 font-light text-sm" href="#">Feature</a>
                        <a className="text-stone-400 font-light text-sm" href="#">FAQ</a>
                        <a className="text-stone-400 font-light text-sm" href="#">Contact</a>
                        <a className="text-stone-400 font-light text-sm" href="#">News</a>
                    </div>
                    <div className="flex md:justify-start md:text-left justify-center items-center w-full md:w-auto mt-10 md:mt-0 md:items-start gap-2 flex-col">
                        <h6 className="uppercase text-stone-600 text-xs font-bold mb-2 md:mb-4">Connected on</h6>
                        <a className="text-stone-400 font-light text-sm" href="#">Facebook</a>
                        <a className="text-stone-400 font-light text-sm" href="#">Instagram</a>
                        <a className="text-stone-400 font-light text-sm" href="#">Twitter</a>
                        <a className="text-stone-400 font-light text-sm" href="#">Youtube</a>
                    </div>
                </div>

            </div>
            <div className="flex w-full text-stone-700 font-light mt-8 text-sm justify-center">
                <span>Copyright@ creativealiens2022. All Right Reserves</span>
            </div>

        </div>
    )
}
