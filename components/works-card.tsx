const WorksCard = ({
  url,
  title,
  thumbnail,
}: {
  url: string;
  title: string;
  thumbnail: string;
}) => (
  <a className="flex-col transition hover:opacity-50" href={url}>
    <img className="w-96 h-72  drop-shadow-md" src={thumbnail} />
    <div className="w-96 text-black text-xl font-bold font-['Inter'] leading-7">
      {title}
    </div>
  </a>
);

export default WorksCard;
