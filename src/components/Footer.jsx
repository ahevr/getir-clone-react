import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
const Footer = () => {
    return (
        <div className='py-6 bg-gray-200'>
            <div className="hidden lg:flex container flex-col items-center lg:flex-row justify-between my-4">
                <div className="flex flex-col space-y-3">
                    <h1 className='text-regal-blue '>Getir'i İndirin</h1>
                    <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                    <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                    <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                </div>
                <div className="flex flex-col space-y-3">
                    <h1 className='text-regal-blue '>Getir'i İndirin</h1>
                    <ul className='space-y-2 text-sm'>
                        <li>Hakkımızda</li>
                        <li>Kariyer</li>
                        <li>Teknoloji Kaynakları</li>
                        <li>İletişim</li>
                        <li>Sosyal Sorumluluk Projeleri</li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-3">
                    <h1 className='text-regal-blue'>Yardımamı ihtiyacınız var ?</h1>
                    <ul className='space-y-2 text-sm'>
                        <li>Sıkça Sorulan Sorular</li>
                        <li>Kişisel Verilerin Korunması</li>
                        <li>Gizlilik Politikası</li>
                        <li>Kullanım Şartları</li>
                        <li>Çerez Politikası</li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-3">
                    <h1 className='text-regal-blue '>Getir'i İndirin</h1>
                    <ul className='space-y-2 text-sm'>
                        <li>Hakkımızda</li>
                        <li>Kariyer</li>
                        <li>Teknoloji Kaynakları</li>
                        <li>İletişim</li>
                        <li>Sosoyal Sorumluluk Projeleri</li>
                    </ul>
                </div>
                <div>
                    <img src="https://cdn.getir.com/getirweb-images/common/etbis.png" width={65} alt="" />
                </div>

            </div>
            <hr className='h-1 bg-gray-300 my-0 lg:my-5' />

            <div className="container flex flex-col gap-5 lg:flex-row justify-between items-center">

                <div className="flex gap-2">
                    <p>© 2023 Getir</p>
                    <a href=".">Bilgi Toplumu Hizmetleri</a>
                </div>
                <div className="flex gap-3">
                    <a href="."><BsFacebook /></a>  
                    <a href="."><BsTwitter /></a> 
                    <a href="."><BsInstagram /></a>
                </div>


            </div>
        </div>
    )
}

export default Footer
