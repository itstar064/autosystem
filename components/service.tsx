import Heading from "./heading";
import ServiceCard from "./service-card";

const Service = () => (
  <div className="self-stretch h-[629px] px-[170px] py-[60px] bg-neutral-50 flex-col justify-center items-center gap-[60px] inline-flex" id="service">
    <div className="self-stretch h-[83px] flex-col justify-center items-start gap-[5px] flex">
      <Heading id="serviceHeading" title="SERVICE" subtitle="サービス"></Heading>
      <div className="w-[110px] h-[0px] border-4 border-black"></div>
    </div>
    <div className="w-[1100px] grow shrink basis-0 justify-center items-center gap-[77px] inline-flex">
      <ServiceCard
        title="Doll House Cosme"
        description="化粧品を中心とした商品紹介とユーザコミュニティ"
        thumbnail="https://cdn.pixabay.com/photo/2020/01/02/17/37/eyeshadow-4736412_1280.jpg"
          url="https://www.dollhousecosme.shop/"
      ></ServiceCard>
      <ServiceCard
        title="Open Market"
        description="いろいろなショッピングサイトの商品を一括で検索＆比較できるWEBアプリです。Vue.jsを使っています。現在、Next.jsに移行中です。"
        thumbnail="https://media.istockphoto.com/id/541854208/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E8%8B%A5%E3%81%84%E3%82%AB%E3%83%83%E3%83%97%E3%83%AB%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E4%B9%B3%E8%A3%BD%E5%93%81%E3%81%AE%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%83%E3%83%88%E3%81%BE%E3%81%99.jpg?s=2048x2048&w=is&k=20&c=sAefQ6MeTcjsdCnGReqirtPS7qZVMyH0-CcKCSPcLdE="
          url="https://openmarket.autosystems.tech/?keyword=%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89&shop%5B%5D=rakuten&order=review-rank"
      ></ServiceCard>
    </div>
  </div>
);

export default Service;
