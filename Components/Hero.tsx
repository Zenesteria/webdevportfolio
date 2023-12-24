import parser from "html-react-parser";

interface ComProps {
  title: string;
  subtitle: string;
  content: string;
  img: string;
}

export default function Hero({ title, subtitle, content, img }: ComProps) {
  return (
    <div className="" id="cont">
      <h1
        className="text-center font-[cinzel] tracking-wider uppercase leading-[4rem]"
        style={{ fontSize: "calc(1.5rem + 1vw)" }}
      >
        FULL STACK DEVELOPER <br />
        Abdurrahman Adebisi Aderinto <br />
        Bred in Nigeria
      </h1>
      <div className="flex justify-between flex-wrap p-4 items-center w-full min-w-[330px] dark:text-orange-400 text-black">
        <div className="flex-[0.8] h-[55vh] max-w-[500px] flex flex-col justify-between">
          <div className="">
            <h1
              className="mb-2 text-slate-400 uppercase tracking-wider"
              style={{ fontSize: "calc(0.4rem + 0.5vw)" }}
            >
              Biography
            </h1>
            <div>{parser(content)}</div>
          </div>

          <br />

          <div className="">
            <h1
              className="mb-2 text-slate-400 uppercase tracking-wider"
              style={{ fontSize: "calc(0.4rem + 0.5vw)" }}
            >
              Contact
            </h1>
            <p>Abuja, Nigeria</p>
            <p>abdurrahman.aderinto@gmail.com</p>
            <p>+234 9061 443 128</p>
          </div>
          <br />

          <div className="">
            <h1
              className="mb-2 text-slate-400 uppercase tracking-wider"
              style={{ fontSize: "calc(0.4rem + 0.5vw)" }}
            >
              Services
            </h1>
            <p>Web Development</p>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 min-w-[250px] mx-10 aspect-square rounded-full my-5 overflow-hidden animate-blobslower shadow-orange-200 shadow-xl dark:shadow-white border-[0.5px] dark:border-white bg-transparent border-dashed">
          <div
            className="w-full min-w-[250px] mx-auto h-full animate-blobslower rounded-full bg-[-40px] bg-no-repeat bg-cover"

            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </div>


        <div className="flex-[0.8] text-right h-[55vh] max-w-[500px] flex flex-col justify-between">
          <div className="">
            <h1
              data-aos='fade-right'
            data-aos-delay='300'
              className="mb-2 text-slate-400 uppercase tracking-wider"
              style={{ fontSize: "calc(0.4rem + 0.5vw)" }}
            >
              Years of Experience
            </h1>
            <h1
              className="font-bold my-2"
              style={{ fontSize: "calc(1rem + 1vw)" }}
            >
              3
            </h1>
          </div>

          <br />

          <div className="">
            <h1
              className="mb-2 text-slate-400 uppercase tracking-wider"
              style={{ fontSize: "calc(0.4rem + 0.5vw)" }}
            >
              Clients
            </h1>
            <h1 className="font-bold" style={{ fontSize: "calc(1rem + 1vw)" }}>
              <span className="mx-1" style={{fontSize:'calc(0.5rem + 1vw)'}}>+</span>40
            </h1>
          </div>
          <br />

          <div className="">
            <h1
              className="mb-2 text-slate-400 uppercase tracking-wider"
              style={{ fontSize: "calc(0.4rem + 0.5vw)" }}
            >
              Projects Concluded
            </h1>
            <h1 className="font-bold" style={{ fontSize: "calc(1rem + 1vw)" }}>
              132
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
