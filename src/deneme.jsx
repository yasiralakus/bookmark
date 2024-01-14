export default function App() {

    const secondSectionData = [
        {
            img: './img/secondSectionImages/pc.png',
            title: 'Tek tıkla yer imi',
            description: 'Yer imlerinizi istediğiniz gibi düzenleyin. Basit sürükle ve bırak arayüzümüz, favori sitelerinizi nasıl yöneteceğiniz konusunda size tam kontrol sağlar.'
        },

        {
            img: './img/secondSectionImages/search.png',
            title: 'Akıllı arama',
            description: 'Güçlü arama özelliğimiz, kayıtlı siteleri hiç vakit kaybetmeden bulmanıza yardımcı olacaktır. Tüm yer imlerinizi taramanıza gerek yok.'
        },

        {
            img: './img/secondSectionImages/share.png',
            title: 'Yer imlerinizi paylaşın',
            description: 'Yer imlerinizi ve koleksiyonlarınızı başkalarıyla kolayca paylaşın. Tek bir düğmeye tıklayarak gönderebileceğiniz paylaşılabilir bir bağlantı oluşturun.'
        },
    ]


    return (
        <>
            <header className="header">

                <a href="/"><img src="./img/logo.svg" alt="" /></a>
                
                <ul className="nav">
                    <li><a>ÖZELLİKLER</a></li>
                    <li><a>FİYATLANDIRMA</a></li>
                    <li><a>İLETİŞİM</a></li>
                    <li><a className="active">GİRİŞ</a></li>
                </ul>

            </header>

            <main className="main">

                <div className="firstSection">

                    <div className="firstSectionContent">
                        <h3>Basit Bir BookmarkManager</h3>
                        <p>Favori web sitelerinizi düzenlemek için temiz ve basit bir arayüz. Yeni bir tarayıcı sekmesi açın ve sitelerinizin anında yüklendiğini görün. Ücretsiz deneyin.</p>

                        <div className="firstSectionButtons">
                            <a>Chrome'da edinin</a>
                            <a>Firefox'da edinin</a>
                        </div>
                    </div>

                    <img id="pc" src="./img/firstSectionImages/pc.png" alt="" />
                    <img id="pcbg" src="./img/firstSectionImages/pc-background.png" alt="" />


                </div>

                <div className="secondSection">

                    <h3>ÖZELLİKLER</h3>

                    <p>Amacımız, favori web sitelerinize hızlı ve kolay bir şekilde erişmenizi sağlamaktır. Yer imleriniz cihazlarınız arasında senkronize olur, böylece onlara hareket halindeyken de erişebilirsiniz.</p>

                    <div className="secondSectionNav">
                        <button>Basit Yer İmleri</button>
                        <button>Hızlı Arama</button>
                        <button>Kolay Paylaşım</button>
                    </div>

                    <div className="secondSectionContent">

                        <img id="contentImg" src={secondSectionData[0].img} alt="" />
                        <img id="secondBg" src="./img/secondSectionImages/background.png" alt="" />

                        <div className="contentRight">
                            <h4>{secondSectionData[0].title}</h4>
                            <p>{secondSectionData[0].description}</p>
                            <a>Daha Fazla Bilgi</a>
                        </div>

                    </div>

                </div>


            </main>
        </>
    )

}
