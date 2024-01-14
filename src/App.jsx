import { useState } from 'react';

export default function App() {

    const [secondSection, setSecondSection] = useState(0)
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    console.log(secondSection)

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

    function handleChange(e) {
        setInputValue(e.target.value)
    }


    function handleButton(e) {
        e.preventDefault();
        inputValue.includes('@gmail.com') ? setError(false) : setError(true);
    }

    function hamburgerClicked(e) {
        e.preventDefault();
        setMobileMenu(prevState => !prevState);

    }

    console.log(mobileMenu)

    return (
        <>
            <div className={mobileMenu === true ? 'show navMobile' : 'navMobile'}>
                <ul>
                    <li><a>ÖZELLİKLER</a></li>
                    <li><a>FİYATLANDIRMA</a></li>
                    <li><a>İLETİŞİM</a></li>
                    <li><a>GİRİŞ</a></li>
                </ul>

                <div className="socialsNavMobile">
                    <a><i className="fa-brands fa-square-facebook"></i></a>
                    <a><i className="fa-brands fa-twitter"></i></a>
                </div>
            </div>
            <header className="header">

                <a href="/"><img src="./img/logo.svg" alt="" /></a>
                
                <ul className="nav">
                    <li><a>ÖZELLİKLER</a></li>
                    <li><a>FİYATLANDIRMA</a></li>
                    <li><a>İLETİŞİM</a></li>
                    <li><a className="active">GİRİŞ</a></li>
                </ul>

                <label onClick={hamburgerClicked} className="hamburger">
                    <input type="checkbox" name=""/><span class="line"></span><span className="line"></span><span className="line"></span>
                </label>

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

                    <h3>Özellikler</h3>

                    <p>Amacımız, favori web sitelerinize hızlı ve kolay bir şekilde erişmenizi sağlamaktır. Yer imleriniz cihazlarınız arasında senkronize olur, böylece onlara hareket halindeyken de erişebilirsiniz.</p>

                    <header>
                        <a className={secondSection === 0 ? 'active' : ''} onClick={() => setSecondSection(0)}>Basit Yer İmleri</a>
                        <a className={secondSection === 1 ? 'active' : ''} onClick={() => setSecondSection(1)}>Hızlı Arama</a>
                        <a className={secondSection === 2 ? 'active' : ''} onClick={() => setSecondSection(2)}>Kolay Paylaşım</a>
                    </header>

                    <div className="secondSectionContents">

                        <img src={secondSectionData[secondSection].img} alt="" />

                        <div className="secondSectionContent">

                            <h3>{secondSectionData[secondSection].title}</h3>
                            <p>{secondSectionData[secondSection].description}</p>

                            <a>Daha Fazla Bilgi</a>

                            <img id='seconSectionBg' src="./img/secondSectionImages/background.png" alt="" />
                        </div>

                    </div>

                </div>

                <div className="thirdSection">
                    <header>
                        <h3>Uzantıyı indirin</h3>
                        <p>Sırada daha fazla tarayıcı var. Öncelik vermemizi istediğiniz bir favoriniz varsa lütfen bize bildirin.</p>
                    </header>

                    <div className="browsers">

                        <div className="browserItem">
                            <img src="./img/thirdSectionImages/chrome.png" alt="" />
                            <h4>Chrome'a Ekle</h4>
                            <p>Minimum versiyon 62</p>
                            <a>İndir ve Kaydet</a>
                        </div>

                        <div className="browserItem">
                            <img src="./img/thirdSectionImages/firefox.png" alt="" />
                            <h4>Firefox'a Ekle</h4>
                            <p>Minimum versiyon 55</p>
                            <a>İndir ve Kaydet</a>
                        </div>

                        <div className="browserItem">
                            <img src="./img/thirdSectionImages/opera.png" alt="" />
                            <h4>Opera'ya Ekle</h4>
                            <p>Minimum versiyon 46</p>
                            <a>İndir ve Kaydet</a>
                        </div>

                    </div>
                </div>

                <div className="faq">
                    <header>
                        <h3>Sıkça Sorulan Sorular</h3>
                        <p>İşte SSS'lerimizden bazıları. Yanıtlanmasını istediğiniz başka sorularınız varsa lütfen bize <strong>e-posta</strong> göndermekten çekinmeyin.</p>
                    </header>

                    <div className="faqContents">

                        <details>
                            <summary>Bookmark nedir? <i className="fa-solid fa-angle-down"></i></summary>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatibus porro quis debitis consectetur suscipit perspiciatis voluptatum recusandae, consequuntur quaerat repellat odio pariatur accusamus cum aspernatur illum fugiat nemo perferendis error illo in minima ea! Dignissimos voluptates maiores corrupti autem reprehenderit iure, magnam aspernatur a veritatis molestias, numquam nihil quasi.</p>
                        </details>

                        <details>
                            <summary>Nasıl yeni bir tarayıcı talep edebilirim? <i className="fa-solid fa-angle-down"></i> </summary>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatibus porro quis debitis consectetur suscipit perspiciatis voluptatum recusandae, consequuntur quaerat repellat odio pariatur accusamus cum aspernatur illum fugiat nemo perferendis error illo in minima ea! Dignissimos voluptates maiores corrupti autem reprehenderit iure, magnam aspernatur a veritatis molestias, numquam nihil quasi.</p>
                        </details>

                        <details>
                            <summary>Mobil uygulama var mı? <i className="fa-solid fa-angle-down"></i></summary>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatibus porro quis debitis consectetur suscipit perspiciatis voluptatum recusandae, consequuntur quaerat repellat odio pariatur accusamus cum aspernatur illum fugiat nemo perferendis error illo in minima ea! Dignissimos voluptates maiores corrupti autem reprehenderit iure, magnam aspernatur a veritatis molestias, numquam nihil quasi.</p>
                        </details>

                        <details>
                            <summary>Peki ya diğer Chromium tarayıcıları? <i className="fa-solid fa-angle-down"></i></summary>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatibus porro quis debitis consectetur suscipit perspiciatis voluptatum recusandae, consequuntur quaerat repellat odio pariatur accusamus cum aspernatur illum fugiat nemo perferendis error illo in minima ea! Dignissimos voluptates maiores corrupti autem reprehenderit iure, magnam aspernatur a veritatis molestias, numquam nihil quasi.</p>
                        </details>

                    </div>

                    <a >Daha Fazla Bilgi</a>
                </div>
            </main>

            <footer className="footer">

                <div className="footerTop">
                    <p>35.000 + katılımcı</p>
                    <h3>Bize katılın, yeniliklerden haberdar olun</h3>

                    <form>
                        <div className="input">
                            <input onChange={handleChange} type="text" placeholder='E-mail adresinizi giriniz...'/>
                            <div className={error === true ? 'error' : 'hidden'}>e-posta adresini kontrol et!</div>
                        </div>
                        <button onClick={handleButton}>İletişime geç</button>
                    </form>
                </div>

                <div className="footerBottom">
                        <nav>
                            <img src="./img/logo-small.png" alt="" />
                            <li><a>Özellikler</a></li>
                            <li><a>Fiyatlandırma</a></li>
                            <li><a>İletişim</a></li>
                        </nav>

                        <div className="socials">
                            <a><i className="fa-brands fa-square-facebook"></i></a>
                            <a><i className="fa-brands fa-twitter"></i></a>
                        </div>
                </div>
            </footer>
        </>
    )
}