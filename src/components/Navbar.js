import Navigation from 'components/Navbar/Navigation'
import Auth from 'components/Navbar/Auth'
import Search from 'components/Navbar/Search'
import CollectionNav from 'components/Navbar/CollectionNav'
import { useMatch } from "react-router-dom";

function Navbar(){
    const searchRoute = useMatch("/search")
    const playlistRoute = useMatch("/collection/playlists")  
    const podcastRoute = useMatch("/collection/podcasts")  
    const albumRoute = useMatch("/collection/albums")  
    const artistsRoute = useMatch("/collection/artists")  
    return (    
        <nav className="h-[3.75rem] flex items-center justify-between px-8">
            <Navigation />
            {/* 
                //! PART 1: useRouteMatch doesn't exist anymore on React Router Dom v6.

                //TODO: TR: searchRoute için useRouteMatch Hook'unu kullanmaya çalışıyordunuz diye tahmin ediyorum.
                //TODO: ENG: I think you are trying to using useRouteMatch Hook for searchRoute.
                //TODO: DE: Ich denke, Sie versuchen, die useRouteMatch Hook für searchRoute zu verwenden.

                //! PART 2: HOW WE CAN USE IT?

                //TODO 2: TR: Kullanamayacaksınız çünkü v6'da bu kaldırılmış. Onun yerine useMatch kullanmanız gerekiyor.
                //TODO 2: ENG: You can't use it because it's removed on v6. You have to use useMatch instead.
                //TODO 2: DE: Sie können es nicht verwenden, da es auf v6 entfernt wurde. Sie müssen stattdessen useMatch verwenden.

                //! PART 3: I'll tell you no worries.     

                //TODO: TR: searchRoute = useMatch("/search") şeklinde kullanıyorsunuz.
                //TODO: ENG: You are using searchRoute = useMatch("/search").
                //TODO: DE: Sie verwenden searchRoute = useMatch("/search").
                
                //? Explanation for useMatch:
                //? ENG: useMatch is a Hook that lets you find the current match of a route in your application.
                //? DE: useMatch ist ein Hook, der Ihnen ermöglicht, die aktuelle Übereinstimmung einer Route in Ihrer Anwendung zu finden.
                //? TR: useMatch doğru eşleşmenin yapılabilmesi sağlanan bir hook'tur. Yani searchRoute = useMatch("/search") şeklinde kullanılır.👇🏻
                //? TR: ...Bu kullanımdan sonra aşağıda verildiği gibi searchRoute true döndürüyorsa, yani /search isteği atıyorsa, <Search /> komponentini gösteriyor.
                
                */}
            {(searchRoute && <Search />)}
            {(playlistRoute && <CollectionNav/>)}
            {(podcastRoute && <CollectionNav />)}
            {(albumRoute && <CollectionNav />)}
            {(artistsRoute && <CollectionNav />)}
            <Auth />
        </nav>
    )
}

export default Navbar