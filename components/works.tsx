import ScrollContainer from "react-indiana-drag-scroll";
import WorksCard from "./works-card";
import Heading from "./heading";

const Works = () => {
  return (
    <div className="self-stretch h-[629px] px-[170px] py-[60px] bg-neutral-50 flex-col justify-center items-center gap-[60px] inline-flex" id="works">
    <div className="self-stretch h-[83px] flex-col justify-center items-start gap-[5px] flex">
        <Heading id="worksHeading" title="WORKS" subtitle="制作実績"></Heading>
        <div className="w-28 h-px border-4 border-black"></div>
      </div>

      <div className="w-[1140px] text-black">
        <ScrollContainer>
          <div className="flex gap-x-10">
            <WorksCard
              url="https://replit.com/@Amplil/next-blog-editor#README.md"
              thumbnail="https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_1280.jpg"
              title="next.jsブログエディタ"
            ></WorksCard>

            <WorksCard
              url="https://github.com/Amplil/np4g"
              thumbnail="https://media.istockphoto.com/id/888477728/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E6%8A%BD%E8%B1%A1%E7%9A%84%E3%81%AA%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3.jpg?s=2048x2048&w=is&k=20&c=AdmNweWyQsbUvferKBPohx4Tu7HDhcFJ5Hh3ldEC-GE="
              title="NP4G【一般化のためのネットワークプログラミング】"
            ></WorksCard>
          </div>
        </ScrollContainer>
      </div>
    </div>
  );
};

export default Works;
