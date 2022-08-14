//* TR: FavCategory Fonksiyonuna bu komponent içerisinden ulaşabilirsiniz.
//* DE: Sie können diese Komponente in diesem Verzeichnis finden.
//* ENG: You can find this component (FavCategory) in this directory.

/*
 <div style={{'background': favCategory.color}
    Burada bunu kullanmamızın sebebi, arka plan rengine direkt olarak favCategory.color değerini vermek.
    Diğer türlü, tailwind.config.js dosyasında "variants" kısmında "bg" değişkeni oluşturduk.
    Bu değişkeni "bg" değişkeni içinde "favCategory.color" değerini verirdik.
    Bu değişkeni kullanarak, arka plan rengi değiştirirdik.
    Bunu kullanmadık, çünkü bu yolla da kısaca arka plan rengi değiştirilebilir. Çünkü o div ile başka bir işimiz yok.
*/

function FavCategory({ favCategory }) {
    return (
        
        <div style={{'background': favCategory.color}}
            className="w-[27.375rem] flex-shrink-0 h-[13.75rem] relative rounded-lg">
            <div className='absolute inset-0 overflow-hidden'>
                <h3 className='p-4 text-[2.5rem] tracking-tighter font-semibold'>
                    {favCategory.title}
                </h3>
                <img src={favCategory.cover} className="shadow-spotify w-32 h-32 rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0" alt="mus" />
            </div>
        </div>
    )
}
export default FavCategory;