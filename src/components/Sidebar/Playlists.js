function Playlists() {
    return (
        <div className="mx-6 mt-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
           <ul>
            {/* 

            //* ENG: 
            new Array(x).filL(<li>...</li>) 
            It works like: we created a new array and x = number of array elements.
            Then we filled the array with <li> elements.
            
            //! TR:
            new Array(x).fill(<li>...</li>)
            Yeni bir dizi oluşturup x = dizi eleman sayısına göre doldurur.

            //? DE:
            new Array(x).fill(<li>...</li>)
            Erstellt ein neues Array und füllt es mit <li> Elementen.

            //? FR:
            new Array(x).fill(<li>...</li>)
            Créé un nouveau tableau et le remplit avec des éléments <li>.

            */}
            {new Array(10).fill(
                <li>
                    <a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
                        22. Playlist
                    </a>
                </li>
            )}
                
           </ul>
        </div>
    )
}

export default Playlists;
