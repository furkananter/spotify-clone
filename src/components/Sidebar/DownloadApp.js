import { Icon } from 'Icons';

function DownloadApp(){
    return (
        <div className="h-10 flex flex-shrink-0 text-sm font-semibold text-link gap-x-4 hover:text-white items-center px-6 ">
            <Icon name="download" size={20} />
                Uygulamayı Yükle
        </div>
    );
}

export default DownloadApp