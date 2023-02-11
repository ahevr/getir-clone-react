import React from 'react'

const Campain = () => {
    return (
        <div className='container mx-auto py-4'>
            <h2 className='text-bold my-5'>Kampanyalar</h2>

            <div className="flex justify-between gap-6 ">
                <div className='group'>
                    <a href=".">
                        <img className='group-hover:scale-110 duration-500 rounded-lg' width={500} src="https://cdn.getir.com/misc/promo_tr_eea9be93-21fc-49a0-bd6c-53577ddeb3e2.jpg" alt="" />
                    </a>
                </div>
                <div className='group'>
                    <a href=".">
                        <img className='group-hover:scale-110 duration-500 rounded-lg' width={500} src="https://cdn.getir.com/misc/promo_tr_aeaccd69-2776-4ef7-b4c4-d62f4bf75f8a.jpg" alt="" />
                    </a>
                </div>
                <div className='group'>
                    <a href=".">
                        <img className='group-hover:scale-110 duration-500 rounded-lg' width={500} src="https://cdn.getir.com/misc/promo_tr_60115eef-d17c-49e0-9c51-28eb963af239.jpg" alt="" />
                    </a>
                </div>
            </div>

            <div className="mt-10 relative flex">
                <img className='rounded-lg h-[300px] bg-brand-color' src="https://cdn.getir.com/getirweb-images/common/illustration/doodle.png" alt="" />
                <div className="flex flex-col absolute justify-between top-10 p-6 space-y-5 w-1/2">
                    <h1 className='text-white text-2xl'>Getir'i indirin!</h1>
                    <h1 className='text-white text-sm'>İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</h1>
                    <div className="flex justify-between gap-3 pt-5 w-1/2">
                        <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                        <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                        <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                    </div>
                </div>
                <div className="flex absolute top-1 right-0">
                    <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Campain
