//* TR: Category Fonksiyonuna bu komponent içerisinden ulaşabilirsiniz.
//* DE: Sie können diese Komponente in diesem Verzeichnis finden. (Category)
//* ENG: You can find this component (Category) in this directory.

function Category({ category }) {
    return (
        <div style={{ 'background': category.color }}
            className="before:pt-[100%] before:block relative rounded-md">
            <div className='absolute inset-0 overflow-hidden'>
                <h3 className='p-4 text-2xl tracking-tighter font-semibold'>
                    {category.title}
                </h3>
                <img src={category.cover} className="shadow-spotify w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0" />
            </div>
        </div>
    )
}
export default Category