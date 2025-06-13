import Heading from "./heading";

const AboutUs = () => (
  <div
    style={{
      backgroundImage: "url('/images/background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "911px",
      padding: "60px 170px",
    }}
    className="flex-col justify-center items-center gap-[60px] inline-flex"
    id="about"
  >
    <div className="self-stretch h-[83px] flex-col justify-center items-start gap-[5px] flex">
      <Heading id="aboutUsHeading" title="ABOUT US" subtitle="会社概要"></Heading>
      <div className="w-[110px] h-[0px] border-4 border-black"></div>
    </div>
    <div className="w-[1087px] flex flex-col gap-6 text-left">
      {/* Purpose, Vision, Mission */}
      <div>
        <span className="text-black text-[35px] font-bold font-['Inter'] leading-[40px]">
          PURPOSE
          <br />
        </span>
        <span className="text-neutral-500 text-[25px] font-bold font-['Inter'] leading-[40px]">
          世界中の人々が最先端のシステムをアクセスし、利用することのできる環境を構築すること
          <br />
        </span>
        <span className="text-black text-[35px] font-bold font-['Inter'] leading-[40px]">
          <br />
          VISION
          <br />
        </span>
        <span className="text-neutral-500 text-[25px] font-bold font-['Inter'] leading-[40px]">
          日常生活やビジネスの多くの側面での自動化を実現し、人々がより便利で効率的な生活を送れるようにする
          <br />
        </span>
        <span className="text-black text-[35px] font-bold font-['Inter'] leading-[40px]">
          <br />
          MISSION
          <br />
        </span>
        <span className="text-neutral-500 text-[25px] font-bold font-['Inter'] leading-[40px]">
          革新的なシステムを提供し、クライアントのビジネス成長をサポートし、ユーザーにとって価値ある経験を提供する
        </span>
      </div>

      {/* Company Information */}
      <div className="text-neutral-500 text-[20px] font-bold font-['Inter'] leading-[29px]">
        <p className="text-black text-[25px] font-bold">会社情報</p>
        <p>会社名: AutoSystems株式会社</p>
        <p>代表取締役: 原匠一郎</p>
        <p>資本金: 1,500,000円</p>
        <p>所在地: 〒101-0021 東京都千代田区外神田２丁目１０番６号ＬａＭａｉｓｏｎ神田３Ａ号室</p>
        <p>設立: 2023年4月12日</p>
        <p>事業内容: ハードウェアおよびソフトウェアの研究・開発</p>
        <p>
          URL:{" "}
          <a
            href="https://autosystems.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://autosystems.tech/
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;

