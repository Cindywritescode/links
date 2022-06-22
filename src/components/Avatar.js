export const Avatar = ({
    url, alt
  }) => (
    <img className="w-28 h-28 md:w-48 md:h-auto rounded-full ring-2 ring-white mx-auto"
         src={url}
         alt={alt}/>
  )