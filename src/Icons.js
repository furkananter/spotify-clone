 

//TODO: This File contains whole of the Icons in our Spotify Clone Web App.
//TODO: TR: Spotify Clone Uygulamamız için klasör içerisinde tüm Icon'ların bulunduğu yer bu dosyadır.
//TODO: DE: In dieser Datei befinden sich alle Icons in unserem Spotify-Clone-Web-App.


const HomeIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
        fill="currentColor"
      />
    </svg>
  );
};
const SearchIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const CollectionIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
        fill="currentColor"
      />
    </svg>
  );
};

const PlusIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"
        fill="currentColor"
      />
    </svg>
  );
};

const HeartIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"
        fill="currentColor"
      />
    </svg>
  );
};

const DownloadIcon = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor"
			      d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"/>
		</svg>
	)
}

const PreviousButton = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor"
			      d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"/>
		</svg>
	)
}

const ForwardButton = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor"
			      d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"/>
		</svg>
	)
}
const DownDirIcon = ({size}) => {
    return (
        <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor"
                    d="M14 6l-6 6-6-6h12z"/>
        </svg>
    )
}

const ExternalIcon = ({size}) => {
  return (
      <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor"
                  d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"/>
          <path fill="currentColor"
                  d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"/>                  
      </svg>
  )
}

const Icon = ({ name, size = 24 }) => {
  const icons = {
    home: HomeIcon,
    search: SearchIcon,
    collection: CollectionIcon,
    plus: PlusIcon,
    heart: HeartIcon,
    download: DownloadIcon,
    previous: PreviousButton,
    forward: ForwardButton,
    downDir : DownDirIcon,
    external: ExternalIcon,

  };
  const Component = icons[name];
  return <Component size={size} />;
};

export { Icon };
