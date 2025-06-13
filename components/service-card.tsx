const ServiceCard = ({
  title,
  description,
  thumbnail,
  url, // URLを追加
}: {
  title: string;
  description: string;
  thumbnail: string;
  url: string; // URL型を指定
}) => (
  <a
    href={url} // URLを指定
    target="_blank" // 新しいタブで開く
    rel="noopener noreferrer" // セキュリティのために追加
    className="block w-[351px] h-[326px] relative drop-shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
  >
    <img className="w-[351px] h-[204px] absolute" src={thumbnail} alt={title} />
    
    <div className="w-[351px] h-[122px] left-0 top-[204px] absolute bg-zinc-600 shadow">
      <div className="left-[21px] top-[15px] absolute text-gray-200 text-[19px] font-bold font-['Inter'] leading-7">
        {title}
      </div>
      <div className="w-56 h-[68px] left-[21px] top-[43px] absolute text-gray-200 text-[13px] font-bold font-['Inter'] leading-7">
        {description}
      </div>
      <div className="w-4 h-4 left-[311px] top-[20px] absolute" />
    </div>
  </a>
);

export default ServiceCard;