import "./App.css";
import navLogo from "./images/logo.svg";
import hamburger from "./images/hamburger-png.png";
import image1 from "./images/Image1.svg";
import image2 from "./images/Image2.svg";
import section1Img from "./images/section1Image.svg";
import section2Img from "./images/section2Image.svg";
import section3Img from "./images/section3Image.svg";
import section4Img from "./images/section4Image.svg";
import footerLogo from "./images/logo.svg";


function App() {
  return (
    <div class="w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto bg-white mx-auto">
      <div id="wrapper" class="w-full min-h-screen bg-white">
        {/* navbar */}
        <div id="nav" class="flex justify-around items-center p-6 bg-blue-600">
          <img src={navLogo} alt="Logo" class="h-[2.25rem]" />

          <ul class="w-[40%] flex justify-center gap-10 items-center max-lg:hidden">
            <li>
              <a
                href="#"
                class="font-Whitney font-semibold text-white hover:underline"
              >
                Download
              </a>
            </li>
            <li>
              <a
                href="#"
                class="font-Whitney font-semibold text-white hover:underline"
              >
                Nitro
              </a>
            </li>
            <li>
              <a
                href="#"
                class="font-Whitney font-semibold text-white hover:underline"
              >
                Discover
              </a>
            </li>
            <li>
              <a
                href="#"
                class="font-Whitney font-semibold text-white hover:underline"
              >
                Safety
              </a>
            </li>
            <li>
              <a
                href="#"
                class="font-Whitney font-semibold text-white hover:underline"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                class="font-Whitney font-semibold text-white hover:underline"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                class="font-Whitney font-semibold text-white hover:underline"
              >
                Careers
              </a>
            </li>
          </ul>

          <img
            src={hamburger}
            width="50px"
            height="50px"
            class="hidden max-lg:block"
          />

          <div class="w-[4rem] font-Whitney border-none outline-none bg-white text-center p-2 rounded-full hover:shadow-2xl shadow-black text-blue-700 cursor-pointer">
            Login
          </div>
        </div>

        {/* hero section */}
        <div
        id="hero"
        class="relative w-full bg-[url(./images/Image0.svg)] bg-no-repeat py-20 bg-blue-600 flex flex-col justify-between items-center"
      >
        <div class="flex-col justify-center w-[60%] mx-auto mt-12">
          <h1
            class="uppercase font-Ginto font-bold text-white text-[3.6rem] space-x-1 text-center"
          >
            imagine a place...
          </h1>
          <p class="lowercase font-Whitney text-center text-xl text-white p-3 w-[70%] mx-auto">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>

          <div class="flex justify-center m-10 align-middle">
            <div
              class="bg-white text-lg flex justify-evenly items-center rounded-full m-2 px-4 py-1 hover:shadow-2xl shadow-black text-blue-700 cursor-pointer"
            >
            <i class='bx bxs-download'></i>
            <div>Download for Windows</div>
            </div>

            <div
              class="bg-black text-white text-lg text-center align-middle rounded-full m-2 p-4 transition-all transition-0.2s hover:bg-slate-800 cursor-pointer"
            >
              Open Discord in your browser
            </div>
          </div>
        </div>

        <div class="w-full flex justify-between items-center absolute bottom-0">
          <img src={image1} class="w-[500px] -z-4 max-lg:hidden" alt="image 1"/>
          <img src={image2} class="w-[500px] -z-4 max-lg:hidden" alt="image 2"/>
        </div>
        </div>
        
        {/* section 1 */}
      <section
        id="section1"
        class="bg-white h-full w-full my-32 mx-auto flex max-lg:flex-col justify-center items-center"
      >
        <img src={section1Img} alt="section 1 image" class="w-[600px]"/>

        <div id="section1_text" class="w-[400px] flex flex-col justify-center">
          <h2 class="font-black text-[2.5rem] font-Ginto max-lg:text-center">
            Create an invite-only place where you belong
          </h2>
          <p class="lowercase font-Whitney text-left text-xl text-black mt-5 max-lg:text-center">
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </div>
      </section>
        {/* section 2 */}
        <section
        id="section2"
        class="bg-gray-300 h-full w-full my-32 mx-auto flex max-lg:flex-col justify-center items-center py-10"
      >
        <div id="section2_text" class="w-[400px] flex flex-col justify-center">
          <h2 class="font-black text-[2.5rem] font-Ginto max-lg:text-center">
            Where hanging out is easy
          </h2>
          <p class="lowercase font-Whitney text-left text-xl text-black mt-5 max-lg:text-center">
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </p>
        </div>
        <img src={section2Img} alt="section 2 image" class="max-lg:mx-auto w-[600px]"/>
      </section>
        {/* section 3 */}
        <section
        id="section3"
        class="bg-white h-full w-full my-32 flex max-lg:flex-col justify-center items-center"
      >
        <img src={section3Img} alt="section 3 image" class="w-[600px] " />

        <div id="section3_text" class="w-[400px] flex flex-col justify-center max-lg:text-center">
          <h2 class="font-black text-[2.5rem] font-Ginto">
            From few to a fandom
          </h2>
          <p class="lowercase font-Whitney text-left text-xl text-black mt-5 max-lg:text-center">
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </p>
        </div>
      </section>

        {/* section 4 */}
        <section
        id="section4"
        class="bg-gray-200 flex flex-col justify-center items-center mx-auto text-center py-32"
      >
        <div class="w-[60%] flex-col justify-center items-center">
          <h2 class="text-center font-Ginto font-bold text-[3.0rem]">
            RELIABLE TECH FOR STAYING CLOSE
          </h2>
          <p class="lowercase font-Whitney text-center text-xl text-black mt-5">
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
        </div>

        <img
          src={section4Img}
          alt=""
          class="w-[80%] mx-auto my-10"
        />

        <div
          class="relative w-[50%] h-[30%] text-center flex flex-col justify-center items-center"
        >
          <img src="./images/section5Image.svg" alt="" class="absolute top-0" />
          <p class="font-Whitney font-semibold text-[2.0rem] mt-8">
            Ready To Start Your Journey ?
          </p>
          <div
            class="text-white text-lg bg-blue-600 flex justify-between rounded-full m-2 py-4 px-6 hover:bg-blue-400 shadow-xl cursor-pointer"
          >
            <div class="font-Whitney">Download for Windows</div>
          </div>
        </div>
      </section>
        {/* section 5 footer */}
        <section id="section5" class="bg-black text-white w-full">
        <div id="content" class="mx-auto py-24 w-11/12 flex justify-center items-center gap-10">
          <div id="links" class="flex flex-wrap justify-center items-start">
            <div id="region" className="p-4 flex flex-col justify-center items-start gap-10">
              <div class="flex flex-wrap max-md:flex-col justify-center gap-20 items-start">
              <p class="mr-3">English, USA</p>
              <i class='bx bx-down-arrow'></i>
            </div>

              <div id="social-links" class="mt-12 flex justify-between">
                <i class='bx bxl-twitter bx-md'></i>
                <i class='bx bxl-instagram bx-md'></i>
                <i class='bx bxl-facebook bx-md'></i>
                <i class='bx bxl-youtube bx-md'></i>
                <i class='bx bxl-tiktok bx-md'></i>
              </div>
            </div>

            <div
              id="quick-links"
              class="max-lg:w-full max-lg:mt-20 flex justify-center items-start flex-wrap font-Whitney text-[1.1rem] gap-20"
            >
              <div className="mx-auto">
                <p class="text-blue-600">Product</p>

                <ul className="mx-auto">
                  <li class="hover:underline underline-offset-1 my-3">Download</li>
                  <li class="hover:underline underline-offset-1 my-3">Nitro</li>
                  <li class="hover:underline underline-offset-1 my-3">Status</li>
                </ul>
              </div>
              <div className="mx-auto">
                <p class="text-blue-600">Company</p>

                <ul class="mx-auto">
                  <li class="hover:underline underline-offset-1 my-3">About</li>
                  <li class="hover:underline underline-offset-1 my-3">Jobs</li>
                  <li class="hover:underline underline-offset-1 my-3">Brand</li>
                  <li class="hover:underline underline-offset-1 my-3">Newsroom</li>
                </ul>
              </div>
              <div className="mx-auto">
                <p class="text-blue-600">Resources</p>

                <ul class="mx-auto">
                  <li class="hover:underline underline-offset-1 my-3">College</li>
                  <li class="hover:underline underline-offset-1 my-3">Support</li>
                  <li class="hover:underline underline-offset-1 my-3">Safety</li>
                  <li class="hover:underline underline-offset-1 my-3">Blog</li>
                  <li class="hover:underline underline-offset-1 my-3">Feedback</li>
                  <li class="hover:underline underline-offset-1 my-3">Build</li>
                  <li class="hover:underline underline-offset-1 my-3">StreamKit</li>
                  <li class="hover:underline underline-offset-1 my-3">Creators</li>
                  <li class="hover:underline underline-offset-1 my-3">Community</li>
                  <li class="hover:underline underline-offset-1 my-3">
                    Official 3rd Party Merch
                  </li>
                </ul>
              </div>
              <div className="mx-auto">
                <p class="text-blue-600">Policies</p>

                <ul class="mt-[1.75rem] space-y-3">
                  <li class="hover:underline underline-offset-1 my-3">Terms</li>
                  <li class="hover:underline underline-offset-1 my-3">Privacy</li>
                  <li class="hover:underline underline-offset-1 my-3">
                    Cookie Settings
                  </li>
                  <li class="hover:underline underline-offset-1 my-3">
                    Acknowledgements
                  </li>
                  <li class="hover:underline underline-offset-1 my-3">Licenses</li>
                  <li class="hover:underline underline-offset-1 my-3">Moderation</li>
                  <li class="hover:underline underline-offset-1 my-3">
                    Company Information
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div class="h-[2px] bg-blue-600 my-4"></div>

        <div id="footer" class="w-11/12 mx-auto flex flex-row justify-between py-9">
            <img src={footerLogo} alt="" class="hover:cursor-pointer"/>
            <div
              class="rounded-full bg-blue-700 text-white py-2 px-3 text-sm font-Whitney text-center font-semibold hover:bg-blue-500 cursor-pointer"
            >
              Sign up
            </div>
          </div>
      </section>
      </div>
    </div>
  );
}

export default App;
