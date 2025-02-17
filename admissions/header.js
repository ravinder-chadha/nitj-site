document.write(`
<<<<<<< HEAD
<header class="fixed bg-white top-0 right-0 left-0 z-50">
<!-- TOP NAV BAR stats -->
<div id="top_bar"
  class="absolute top-0 right-0 left-0 transition-transform delay-200 z-50 flex h-7 flex-row bg-accent py-0.5 px-12 text-sm font-bold text-white">
  <div class="basis-1/2">
    <div class="flex flex-row justify-center">
      <div class="flex items-center pr-8" href="">
        <span class="material-symbols-outlined"> engineering </span>
        <a href="" class="pl-1.5 text-sm">Jobs</a>
      </div>
      <div class="flex items-center pr-8" href="">
        <span class="material-symbols-outlined"> add_business </span>
        <a href="" class="pl-1.5 text-sm">Tenders</a>
      </div>
      <div class="flex items-center pr-8" href="">
        <span class="material-symbols-outlined"> badge </span>
        <a href="" class="pl-1.5 text-sm">Placements</a>
      </div>
      <div class="flex items-center pr-8" href="">
        <span class="material-symbols-outlined"> event_note </span>
        <a href="" class="pl-1.5 text-sm">Resources</a>
      </div>
      <div class="flex items-center" href="">
        <span class="material-symbols-outlined"> psychology_alt </span>
        <a href="" class="pl-1.5 text-sm">Help</a>
      </div>
    </div>
  </div>
  <div class="basis-1/2 pl-8">
    <div class="flex flex-row justify-between">
      <div class="flex basis-1/6 flex-row items-center">
        <img src="img/facebook-icon.svg" class="h-5 px-1" style="height: 20px" />
        <img src="img/facebook-icon.svg" class="h-5 px-1" style="height: 20px" />
        <img src="img/facebook-icon.svg" class="h-5 px-1" style="height: 20px" />
      </div>
      <div class="flex basis-1/3 items-center">
        <span class="material-symbols-outlined"> g_translate </span>
        <a href="" class="pl-1">हिन्दी / <span class="text-lg">A</span>+A-</a>
      </div>
      <div class="flex basis-1/3 items-center">
        <span class="material-symbols-outlined"> contacts </span>
        <a href="" class="pl-1.5 text-sm">ERP</a>
=======
<div class="form-backdrop" id="nav-menu" style="display: none">
<div id="menu" onclick="z=0;close_menu();">
  <div class="menu-content w3-animate-left" onclick="keep_menu_open();z=1;">
    <div class="top-bar">
      <div class="menu-btn" onclick="z=0;close_menu();">
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <ul class="w3-animate-left">
      <li class="menu-link selected"><a href="/">Home</a></li>
      <li class="menu-link"><a href="/contact">Contact Us</a></li>
      <li class="menu-link"><a href="/about">About Us</a></li>
    </ul>

    <div class="extra-links w3-animate-left">
      <!-- google sign in -->
      <!-- <div class="google_signin">
        <div id="my-signin2"></div>
        <script>
          function onSuccess(googleUser) {
            console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
          }
          function onFailure(error) {
            console.log(error);
          }
          function renderButton() {
            gapi.signin2.render('my-signin2', {
              'scope': 'profile email',
              'width': 240,
              'height': 50,
              'longtitle': true,
              'theme': 'dark',
              'onsuccess': onSuccess,
              'onfailure': onFailure
            });
          }
        </script>
      </div> -->
      <!-- end of google sign in -->
      <a href="/privacy">Privacy Policy</a>

      <a href="/terms">Terms & conditions</a>
    </div>
  </div>
</div>
</div>
<!-- Menu for mobile ends-->
<header class="fixed bg-white top-0 right-0 left-0 z-50 mb-[35%]">
<!-- TOP NAV BAR stats -->
<div id="top_bar"
  class="absolute top-0 right-0 left-0 transition-transform delay-200 z-50 h-7 bg-accent py-0.5 px-2 sm:px-12 text-xs uppercase text-white shadow-md">
  <div class="container mx-auto flex flex-row justify-between">
    <div class="basis-1/2">
      <div class="flex flex-row justify-center gap-4 sm:gap-6">
        <div class="flex items-center">
          <span class="material-symbols-outlined"
            style='font-variation-settings: "FILL" 0, "wght" 200, "grad" 0, "opzs" 40;'> engineering </span>
          <a href="" class="hidden sm:block pl-1.5 text-xs">Jobs</a>
        </div>
        <div class="flex items-center">
          <span class="material-symbols-outlined"
            style='font-variation-settings: "FILL" 0, "wght" 200, "grad" 0, "opzs" 40;'> add_business </span>
          <a href="" class="hidden sm:block pl-1.5 text-xs">Tenders</a>
        </div>
        <div class="flex items-center">
          <span class="material-symbols-outlined"
            style='font-variation-settings: "FILL" 0, "wght" 200, "grad" 0, "opzs" 40;'> badge </span>
          <a href="" class="hidden sm:block pl-1.5 text-xs">Placements</a>
        </div>
        <div class="flex items-center">
          <span class="material-symbols-outlined"
            style='font-variation-settings: "FILL" 0, "wght" 200, "grad" 0, "opzs" 40;'> event_note </span>
          <a href="" class="hidden sm:block pl-1.5 text-xs">Resources</a>
        </div>
        <div class="flex items-center">
          <span class="material-symbols-outlined"
            style='font-variation-settings: "FILL" 0, "wght" 200, "grad" 0, "opzs" 40;'> psychology_alt </span>
          <a href="" class="hidden sm:block pl-1.5 text-xs">Help</a>
        </div>
      </div>
    </div>
    <div class="basis-1/2 pl-8">
      <div class="flex flex-row gap-4 justify-between">
        <div class="flex basis-1/6 gap-4 flex-row items-center">
          <a href='https://www.facebook.com/NITJofficial'><i class="fa-brands fa-facebook text-lg"></i></a>
          <a href='https://www.instagram.com/nitjofficial/'><i class="fa-brands fa-instagram text-lg"></i></a>
          <a href='https://twitter.com/NITJofficial'><i class="fa-brands fa-twitter text-lg"></i></a>
        </div>
        <div class="flex basis-1/3 items-center">
          <span class="material-symbols-outlined"
            style='font-variation-settings: "FILL" 0, "wght" 200, "grad" 0, "opzs" 40;'> g_translate </span>
          <a href="" class="hidden sm:block pl-1">हिन्दी / <span class="text-lg">A</span>+A-</a>
        </div>
        <div class="flex basis-1/3 items-center">
          <span class="material-symbols-outlined"
            style='font-variation-settings: "FILL" 0, "wght" 200, "grad" 0, "opzs" 40;'> contacts </span>
          <a href="" class="hidden sm:block pl-1.5 text-xs">ERP</a>
        </div>
>>>>>>> e259f77c7eff1738cf6d00dabee248aebca00e7a
      </div>
    </div>
  </div>
</div>
<!-- top nav bar ends -->
<!-- INSTITUTE LOGO & NAME starts -->
<<<<<<< HEAD
<div class="mySlides mt-7 z-50">
  <div class="align-center flex flex-row justify-between bg-white py-2.5 px-16">
    <div class="institute_name flex max-w-lg basis-1/2 justify-center text-center text-lg font-bold uppercase">
      <p>Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR</p>
    </div>
    <div
      class="institute_name flex max-w-lg basis-1/2 justify-center px-16 text-center text-xl font-bold uppercase">
      <p>डॉ बी आर अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर</p>
    </div>
  </div>
</div>
<div class="mySlides mt-7 z-50">
  <div class="align-center flex flex-row justify-between bg-white py-2.5 px-16">
    <div
      class="institute_name flex max-w-lg basis-1/2 justify-center px-16 text-center text-xl font-bold uppercase">
      <p>डॉ बी आर अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर</p>
    </div>
    <div class="institute_name flex max-w-lg basis-1/2 justify-center px-8 text-center text-xl font-bold uppercase">
      <p>ਡਾ ਬੀ ਆਰ ਅੰਬੇਡਕਰ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਟੈਕਨਾਲੋਜੀ ਜਲੰਧਰ</p>
    </div>
  </div>
</div>
<div class="mySlides mt-7 z-50">
  <div class="align-center flex flex-row justify-between bg-white py-2.5 px-16">
    <div class="institute_name flex max-w-lg basis-1/2 justify-center px-8 text-center text-xl font-bold uppercase">
      <p>ਡਾ ਬੀ ਆਰ ਅੰਬੇਡਕਰ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਟੈਕਨਾਲੋਜੀ ਜਲੰਧਰ</p>
    </div>
    <div class="institute_name flex max-w-lg basis-1/2 justify-center text-center text-lg font-bold uppercase">
      <p>Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR</p>
=======
<div class="relative w-3/5 sm:w-full container p-0 left-[10px] sm:left-0 h-14 max-h-14 sm:h-max sm:max-h-max">
  <div class="mySlides mt-7 z-50">
    <div class="align-center flex flex-row justify-end sm:justify-between bg-white py-2.5">
      <div
        class="institute_name sm:max-w-lg sm:basis-1/2 justify-start text-center sm:text-lg font-semibold uppercase hidden sm:block">
        <p>Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR</p>
      </div>
      <div
        class="institute_name flex sm:max-w-lg sm:basis-1/2 justify-end sm:px-16 text-center text-sm sm:text-xl font-bold uppercase">
        <p>डॉ बी आर अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर</p>
      </div>
    </div>
  </div>
  <div class="mySlides mt-7 z-50">
    <div class="align-center flex flex-row justify-end sm:justify-between bg-white py-2.5">
      <div
        class="institute_name sm:max-w-lg sm:basis-1/2 justify-center px-16 text-center sm:text-xl font-bold uppercase hidden sm:block">
        <p>डॉ बी आर अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर</p>
      </div>
      <div
        class="institute_name flex sm:max-w-lg sm:basis-1/2 justify-center sm:px-8 text-center text-sm sm:text-xl font-bold uppercase">
        <p>ਡਾ ਬੀ ਆਰ ਅੰਬੇਡਕਰ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਟੈਕਨਾਲੋਜੀ ਜਲੰਧਰ</p>
      </div>
    </div>
  </div>
  <div class="mySlides mt-7 z-50">
    <div class="align-center flex flex-row justify-end sm:justify-between bg-white py-2.5">
      <div
        class="institute_name sm:max-w-lg sm:basis-1/2 justify-center px-8 text-center sm:text-xl font-bold uppercase hidden sm:block">
        <p>ਡਾ ਬੀ ਆਰ ਅੰਬੇਡਕਰ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਟੈਕਨਾਲੋਜੀ ਜਲੰਧਰ</p>
      </div>
      <div
        class="institute_name flex sm:max-w-lg sm:basis-1/2 justify-center text-center text-xs sm:text-lg font-semibold uppercase">
        <p>Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR</p>
      </div>
>>>>>>> e259f77c7eff1738cf6d00dabee248aebca00e7a
    </div>
  </div>
</div>
<!-- INSTITUTE LOGO & NAME ends -->
<!-- Logo CONTAINER starts -->
<<<<<<< HEAD
<div class="absolute left-1/2 z-50 mx-auto -translate-x-1/2" style="width: 230px">
  <img src="img/Rectangle 47 (1).png" alt="" />
</div>
<div id="logo_250" class="absolute h-[120px] aspect-square left-1/2 top-8 z-50 -translate-x-1/2">
=======
<div
  class="absolute hidden sm:block left-[50px] z-50 mx-auto -translate-x-1/2 -translate-y-1/3 sm:translate-y-0 scale-75 sm:scale-100 sm:left-1/2"
  style="width: 230px">
  <img src="img/Rectangle 47 (1).png" alt="" />
</div>
<div id="logo_250"
  class="absolute h-[120px] aspect-square left-[50px] sm:left-1/2 scale-[0.40] sm:scale-100 -translate-y-1/3 top-9 sm:top-7 sm:translate-y-0 z-50 -translate-x-1/2 sm:py-0">
>>>>>>> e259f77c7eff1738cf6d00dabee248aebca00e7a
  <img src="img/logo_250.png" alt="" />
</div>
<!-- Logo CONTAINER ends -->
<!-- NAV BAR starts-->
<<<<<<< HEAD
<div
  class="z-50 flex h-10 max-w-full flex-row justify-between bg-accent text-xl font-bold text-white drop-shadow-lg">
  <div class="basis-2/5">
    <div class="flex w-full flex-row justify-between px-10">
      <div class="group cursor-default hover:bg-blue-800">
        <div class="p-1.5">Administration</div>
        <div id="drop-down"
          class="absolute mt-0.5 hidden gap-5 rounded-b-xl bg-white p-5 text-sm shadow-sm group-hover:flex">
          <div id="col"
            class="flex flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500 hover:bg-orange-500">
            <div id="block" class="h-full">
              <div id="head" class="h-full overflow-clip rounded-b-2xl bg-accent capitalize hover:bg-orange-500">
                <div class="p-2 text-center"><a href="https://dev-bhavya.github.io/nitj/">ABOUT US</a></div>
                <div class="h-full bg-white">
                  <ul class="flex flex-col gap-1 rounded-b-xl px-2 font-normal text-black">
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      <a href="https://dev-bhavya.github.io/nitj/#vision-mission">Vision, Mission & Quality Policy</a>
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Virtual tour
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      <a href="https://dev-bhavya.github.io/nitj/#history">Institute History</a>
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Explore NITJ
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      NITJ Rankings & Awards
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Institute Prospectus Location
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="col" class="flex flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
            <div id="block">
              <div id="head" class="rounded-b-2xl bg-accent capitalize hover:bg-orange-500">
                <div class="p-2 text-center">LEADERSHIP</div>
                <ul class="flex flex-col gap-1 rounded-b-xl bg-white px-2 font-normal text-black">
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Organisational Chart
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Chariperson
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    <a href="https://dev-bhavya.github.io/nitj/director">Director</a>
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Registrar
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Academic administration
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Student Welfare
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Faculty Welfare
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Planning and Development
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Research and Consultancy
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    International Affairs
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Hostel administration
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="col" class="flex flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
            <div id="block">
              <div id="head" class="rounded-b-2xl bg-accent capitalize hover:bg-orange-500">
                <div class="p-2 text-center">GOVERNING BODIES</div>
                <ul class="flex flex-col gap-1 rounded-b-xl bg-white px-2 font-normal text-black">
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    NIT council
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    <a href="https://dev-bhavya.github.io/nitj/governors">Board of Governors</a>
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Senate
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Standing committee of the senate
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Finance committee
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Building and works committee
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="col" class="flex flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
            <div id="block">
              <div id="head" class="rounded-b-2xl bg-accent capitalize hover:bg-orange-500">
                <div class="p-2 text-center">CELLS</div>
                <ul class="flex flex-col gap-1 rounded-b-xl bg-white px-2 font-normal text-black">
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    E-Cell
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Equal opportunities and
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    SC/ST/OBC/PWD cell
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Rajbhasha cell
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    RTI Cell
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Student grievences cell
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Faculty grievences cell
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Staff grievences cell
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Public grievences
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Women cell
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="col" class="flex flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
            <div id="block">
              <div id="head" class="rounded-b-2xl bg-accent capitalize hover:bg-orange-500">
                <div class="p-2 text-center">COMMITTEES</div>
                <ul class="flex flex-col gap-1 rounded-b-xl bg-white px-2 font-normal text-black">
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    <a href="https://dev-bhavya.github.io/nitj/committees">Institute Development Committee</a>
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Internal complaint committee
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Print, Digital Media and Newsletter
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Social Media
                  </li>
                  <li class="hover:font-semibold hover:text-[#FF6600]">
                    Website Development and Management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="group relative cursor-default hover:bg-blue-800">
        <div class="p-1.5">Academics</div>
        <div id="drop-down"
          class="absolute left-1/4 mt-0.5 hidden -translate-x-60 gap-5 rounded-b-xl bg-white p-5 text-sm shadow-sm group-hover:flex">
          <div id="col"
            class="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
            <div id="block">
              <div id="head" class="mb-3 bg-accent py-2 capitalize hover:bg-orange-500">
                <div class="p-2 text-center">DEPARTMENTS</div>
              </div>
              <ul class="flex flex-col gap-1 rounded-b-xl bg-white px-2 font-normal text-black">
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Biotechnology
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Chemistry
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Chemical Engineering
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Civil Engineering
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Computer Science and Engineering
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Electronics and Communication Engineering
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Electrical Engineering
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Humanities and Management
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Industrial and Production Engineering
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Information Technology
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Instrumentation and Control Engineering
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Mathematics
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Mechanical Engineering
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Physics
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Textile Technology
                </li>
              </ul>
            </div>
          </div>
          <div id="col"
            class="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
            <div id="block">
              <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                CENTERS
              </div>
              <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Center for Energy and Environment
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Center for Artificial Intelligence
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Center for Continuing Education
                </li>
              </ul>
            </div>
            <div id="block">
              <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                ACADEMIC SYSTEM
              </div>
              <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Academic circulars & Notices
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Academic calender
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Academic regulations
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Curriculum
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Fee structure
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  System of Evaluation and Grant of divsion
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Standard Operationg Procedures (SOP)
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  UMC rules
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  General FAQs
                </li>
              </ul>
            </div>
          </div>
          <div id="col"
            class="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
            <div id="block">
              <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                ACADEMIC SERVICES
              </div>
              <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Student Portal LOGIN
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Grade sheets
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Timetable
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Upcoming examination schedules
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Results
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Online application for Transcripts and certificates
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Online application for Verification of Degree
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  CGPA Criteria and Medium of Education
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Other Proformas
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Contact details
                </li>
              </ul>
            </div>
            <div id="block">
              <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                ACADEMIC FACILITIES
              </div>
              <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Central Library
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Computer Center
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Central Workshop
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Institute Instrumentation center
                </li>
              </ul>
            </div>
          </div>
          <div id="col"
            class="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
            <div id="block">
              <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                PROGRAMMERS OF STUDY
              </div>
              <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Bachelor of Technology
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Master of Technology
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Master of Business Administration
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Master of Science
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Post Graduate Diploma
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Doctor of Philosophy
                </li>
              </ul>
            </div>
            <div id="block">
              <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                CONVOCATION
              </div>
              <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Convocation 2022
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Past convocations
                </li>
              </ul>
            </div>
            <div id="block">
              <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                OTHER LINKS
              </div>
              <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  UGC Act- Rules and Regulations
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  NIT Act and Statutes
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Ministry of Education Notifications
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  National Education Policy 2020
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="group relative cursor-default rounded-b-xl hover:bg-blue-800">
        <div class="p-2">Admissions</div>
        <div id="drop-down"
          class="absolute left-1/2 mt-0.5 hidden -translate-x-1/3 gap-5 rounded-b-xl bg-white p-5 text-sm shadow-sm group-hover:flex">
          <div id="col"
            class="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
            <div id="block">
              <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                PROSPECTIVE STUDENTS
              </div>
              <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Why NITJ?
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  <a href="https://dev-bhavya.github.io/nitj/explore">Explore NITJ</a>
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Discover Student Life
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                 
                <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/index/9" target="_blank">Courses Offered</a>
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  How to Apply
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Admissions Process
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Virtual tour
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  International Students
                </li>
              </ul>
            </div>
            <div id="block">
              <ul class="flex flex-col gap-1 px-2 font-normal text-black md:font-bold">
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Contact details for admission
                </li>
              </ul>
            </div>
            <div id="block">
              <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                ANTI RAGGING
              </div>
              <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Anti ragging act
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Anti ragging affadvit
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Institute Anti-ragging rules
                </li>
              </ul>
            </div>
          </div>
          <div id="col"
            class="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
            <div id="block">
              <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                JOIN NITJ
              </div>
              <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  B.Tech Admission
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  M.Tech Admission
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Msc Admission
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  MBA Admission
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                  Ph.D Admission
                </li>
              </ul>
            </div>
            <div id="block">
              <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                &ThinSpace; INSTITUTE PROSPECTUS &ThinSpace;
              </div>
              <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                <li class="hover:font-semibold hover:text-[#FF6600]">
                <a href="https://www.nitj.ac.in/nitj_files/links/B_10610.pdf" target="_blank">B.Tech</a>
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                <a href="https://www.nitj.ac.in/nitj_files/links/M_8600.pdf" target="_blank">M.Tech</a>
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                <a href="https://www.nitj.ac.in/nitj_files/links/M_65503.pdf" target="_blank">Msc</a>
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                <a href="https://www.nitj.ac.in/nitj_files/links/MBA_Regulations_57981.pdf" target="_blank">MBA</a>
                </li>
                <li class="hover:font-semibold hover:text-[#FF6600]">
                <a href="https://www.nitj.ac.in/nitj_files/links/Ph_26826.pdf" target="_blank">Ph.D</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="basis-2/5">
    <div class="flex w-full flex-row justify-between">
      <div class="basis-4/5">
        <div class="flex flex-row justify-between">
          <div class="group relative cursor-default rounded-b-xl hover:bg-blue-800">
            <div class="p-2">Research</div>
            <div id="drop-down"
              class="absolute left-1/2 mt-0.5 hidden -translate-x-1/2 gap-5 rounded-b-xl bg-white p-5 text-sm shadow-sm group-hover:flex">
              <div id="col"
                class="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                <div id="block">
                  <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                    RESEARCH @ NITJ
                  </div>
                  <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      VIDWAN (IRINS Instance)
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Research Publications
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Research Jobs
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Internships
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Sponsored Research Projects
                    </li>
                  </ul>
                </div>
                <div id="block">
                  <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                    INCUBATION @ NITJ
                  </div>
                  <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      STI Hub
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      E-Cell
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Innovation club
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Institute Innovation council
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Technology Business Incubator
                    </li>
                  </ul>
                </div>
              </div>
              <div id="col"
                class="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                <div id="block">
                  <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                    CONSULTANCY @ NITJ
                  </div>
                  <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Consultancy works
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      MoUs
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      IPRs
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Find an expert
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Central Research facilities
                    </li>
                  </ul>
                </div>
                <div id="block">
                  <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                    UPCOMING EVENTS
                  </div>
                  <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Conferences
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Seminars
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      STC/ FDP
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Workshops
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="group relative cursor-default rounded-b-xl hover:bg-blue-800">
            <div class="p-2">Alumni</div>
            <div id="drop-down"
              class="absolute left-1/2 mt-0.5 hidden -translate-x-1/2 gap-5 rounded-b-xl bg-white p-5 text-sm shadow-sm group-hover:flex">
              <div id="col"
                class="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                <div id="block">
                  <ul class="flex flex-col gap-1 px-2 py-2 font-normal text-black">
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Alumni portal
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Alumni Registration
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Chapters
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Donation statistics and reports
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      GIve back
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Impact
                    </li>
                  </ul>
                </div>
                <div id="block">
                  <ul class="flex flex-col gap-1 px-2 font-normal text-black md:font-bold">
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Alumni affairs contact details
                    </li>
                  </ul>
=======


<div class="bg-accent drop-shadow-lg">
  <div class="container">
    <div class="z-50 flex h-7 sm:h-10 max-w-full flex-row justify-between bg-accent text-lg text-white">
      <div class="flex items-center sm:hidden" onclick="open_menu();">
        <span class="material-symbols-outlined"
          style='font-variation-settings: "FILL" 0, "wght" 200, "grad" 0, "opzs" 40;'> menu </span>
      </div>
      <div class="sm:hidden block">
        <button type="button"
          class="block material-symbols-outlined duration-50 cursor-pointer text-center transition ease-in-out hover:box-border sm:hover:h-10 sm:hover:w-10 hover:rounded-full hover:border-2 hover:border-accent"
          data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tap to search" onclick="showSearchPage(event)">
          search
        </button>
      </div>
      <div class="basis-2/5 hidden sm:block">
        <div class="flex w-full flex-row justify-between px-10">
          <div class="group cursor-default hover:bg-blue-800">
            <div class="p-1.5 font-medium uppercase">Administration</div>
            <div id="drop-down"
              class="absolute mt-0.5 hidden gap-5 bg-white p-5 text-sm shadow-sm group-hover:flex">
              <div class="flex flex-col gap-5 items-center">
                <div id="col"
                  class="flex flex-col w-52 gap-5 border-2 rounded-b-xl border-accent hover:bg-orange-500 hover:border-orange-500 ">
                  <div id="block" class="h-full">
                    <div id="head"
                      class="h-full rounded-b-xl overflow-clip capitalize bg-accent hover:bg-orange-500">
                      <div class="p-2 text-center"><a href='about.html'>ABOUT US</a></div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Vision, Mission & Quality Policy
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Virtual tour
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Institute History
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Explore NITJ
                          </li>
                          <li class="hover:text-[#FF6600]">
                            NITJ Rankings & Awards
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Institute Prospectus Location
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <img src="img/logo_250.png" alt="" style="width: 100px;" />
              </div>
              <div id="col"
                class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:border-orange-500 hover:bg-orange-500">
                <div id="block" class="h-full">
                  <div id="head"
                    class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                    <div class="p-2 text-center">LEADERSHIP</div>
                    <div class="h-full rounded-b-xl bg-white">
                      <ul class="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                        <li class="hover:text-[#FF6600]">
                          Organisational Chart
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Chariperson
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Director
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Registrar
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Academic administration
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Student Welfare
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Faculty Welfare
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Planning and Development
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Research and Consultancy
                        </li>
                        <li class="hover:text-[#FF6600]">
                          International Affairs
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Hostel administration
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="col"
                class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:border-orange-500 hover:bg-orange-500">
                <div id="block" class="h-full">
                  <div id="head"
                    class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                    <div class="p-2 text-center">GOVERNING BODIES</div>
                    <div class="h-full rounded-b-xl bg-white">
                      <ul class="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                        <li class="hover:text-[#FF6600]">
                          NIT council
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Board of Governors
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Senate
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Standing committee of the senate
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Finance committee
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Building and works committee
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="col"
                class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                <div id="block" class="h-full">
                  <div id="head"
                    class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                    <div class="p-2 text-center">CELLS</div>
                    <div class="h-full rounded-b-xl bg-white">
                      <ul class="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                        <li class="hover:text-[#FF6600]">
                          E-Cell
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Equal opportunities and
                        </li>
                        <li class="hover:text-[#FF6600]">
                          SC/ST/OBC/PWD cell
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Rajbhasha cell
                        </li>
                        <li class="hover:text-[#FF6600]">
                          RTI Cell
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Student grievences cell
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Faculty grievences cell
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Staff grievences cell
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Public grievences
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Women cell
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="col"
                class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                <div id="block" class="h-full">
                  <div id="head"
                    class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                    <div class="p-2 text-center">COMMITTEES</div>
                    <div class="h-full rounded-b-xl bg-white">
                      <ul class="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                        <li class="hover:text-[#FF6600]">
                          Institute Development Committee
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Internal complaint committee
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Print, Digital Media and Newsletter
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Social Media
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Website Development and Management
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="group cursor-default hover:bg-blue-800">
            <div class="p-1.5 font-medium uppercase">Academics</div>
            <div id="drop-down"
              class="absolute mt-0.5 hidden -translate-x-28 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex">
              <div id="col"
                class="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                <div id="block" class="h-full">
                  <div id="head"
                    class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                    <div class="p-2 text-center">DEPARTMENTS</div>
                    <div class="h-full rounded-b-xl bg-white">
                      <ul class="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                        <li class="hover:text-[#FF6600]">
                          Biotechnology
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Chemistry
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Chemical Engineering
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Civil Engineering
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Computer Science and Engineering
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Electronics and Communication Engineering
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Electrical Engineering
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Humanities and Management
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Industrial and Production Engineering
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Information Technology
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Instrumentation and Control Engineering
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Mathematics
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Mechanical Engineering
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Physics
                        </li>
                        <li class="hover:text-[#FF6600]">
                          Textile Technology
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-5">
                <div id="col"
                  class="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head"
                      class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                      <div class="p-2 text-center">CENTERS</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Center for Energy and Environment
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Center for Artificial Intelligence
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Center for Continuing Education
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="col"
                  class="h-full flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head"
                      class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                      <div class="p-2 text-center">ACADEMIC SYSTEM</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Academic circulars & Notices
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Academic calender
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Academic regulations
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Curriculum
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Fee structure
                          </li>
                          <li class="hover:text-[#FF6600]">
                            System of Evaluation and Grant of divsion
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Standard Operationg Procedures (SOP)
                          </li>
                          <li class="hover:text-[#FF6600]">
                            UMC rules
                          </li>
                          <li class="hover:text-[#FF6600]">
                            General FAQs
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-5">
                <div id="col"
                  class="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head"
                      class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                      <div class="p-2 text-center">ACADEMIC SERVICES</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Student Portal LOGIN
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Grade sheets
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Timetable
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Upcoming examination schedules
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Results
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Online application for Transcripts and certificates
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Online application for Verification of Degree
                          </li>
                          <li class="hover:text-[#FF6600]">
                            CGPA Criteria and Medium of Education
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Other Proformas
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Contact details
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="col"
                  class="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head"
                      class="h-full rounded-b-xl overflow-clip bg-accent capitalize hover:bg-orange-500">
                      <div class="p-2 text-center">ACADEMIC FACILITIES</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Central Library
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Computer Center
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Central Workshop
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Institute Instrumentation center
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-5">
                <div id="col"
                  class="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head"
                      class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                      <div class="p-2 text-center">PROGRAMMERS OF STUDY</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Bachelor of Technology
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Master of Technology
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Master of Business Administration
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Master of Science
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Post Graduate Diploma
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Doctor of Philosophy
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="col"
                  class="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head"
                      class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                      <div class="p-2 text-center">CONVOCATION</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Convocation 2022
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Past convocations
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="col"
                  class="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head"
                      class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                      <div class="p-2 text-center">OTHER LINKS</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            UGC Act- Rules and Regulations
                          </li>
                          <li class="hover:text-[#FF6600]">
                            NIT Act and Statutes
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Ministry of Education Notifications
                          </li>
                          <li class="hover:text-[#FF6600]">
                            National Education Policy 2020
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
>>>>>>> e259f77c7eff1738cf6d00dabee248aebca00e7a
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div class="group relative cursor-default rounded-b-xl hover:bg-blue-800">
            <div class="p-2">Life at NITJ</div>
            <div id="drop-down"
              class="absolute right-0 mt-0.5 hidden gap-5 rounded-b-xl bg-white p-5 text-sm shadow-sm group-hover:flex">
              <div id="col"
                class="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                <div id="block">
                  <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                    CLUB & SOCITITES
                  </div>
                  <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Vision, Mission & Quality Policy
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Heartfulness Mediation club
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Prayaas - A campaign for smile
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      R-Tist Robotics Club
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      SPIC MACAY
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      “We Can” Club
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Yoga club
                    </li>
                    <li class="flex justify-between hover:font-semibold hover:text-[#FF6600]">
                      Zeal Society
                      <div>View all</div>
                    </li>
                  </ul>
                </div>
                <div id="block">
                  <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                    SCHOLARSHIPS
                  </div>
                  <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Dr. Pratap Singh Memorial Scholarhsip
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      MCM Scholarship
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Post Matric Scholarship
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Siemens India Scholarship
                    </li>
                    <br />
                    <li class="font-semibold hover:font-bold hover:text-[#FF6600]">
                      View all
                    </li>
                  </ul>
                </div>
              </div>
              <div id="col"
                class="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                <div id="block">
                  <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                    LEADERSHIP
                  </div>
                  <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Organisational Chart
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Chariperson
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      <a href="https://dev-bhavya.github.io/nitj/director">Director</a>
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Registrar
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Academic administration
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Student Welfare
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Faculty Welfare
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Planning and Development
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Research and Consultancy
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      International Affairs
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Hostel administration
                    </li>
                  </ul>
                </div>
              </div>
              <div id="col"
                class="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                <div id="block">
                  <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                    GOVERNING BODIES
                  </div>
                  <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      NIT council
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      <a href="https://dev-bhavya.github.io/nitj/governors">Board of Governors</a>
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Senate
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Standing committee of the senate
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Finance committee
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Building and works committee
                    </li>
                  </ul>
                </div>
              </div>
              <div id="col"
                class="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                <div id="block">
                  <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                    CELLS
                  </div>
                  <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      E-Cell
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Equal opportunities and
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      SC/ST/OBC/PWD cell
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Rajbhasha cell
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      RTI Cell
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Student grievences cell
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Faculty grievences cell
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Staff grievences cell
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Public grievences
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Women cell
                    </li>
                  </ul>
                </div>
                <div id="block">
                  <div id="head" class="mb-3 bg-accent py-2 text-center capitalize hover:bg-orange-500">
                    <a href="https://dev-bhavya.github.io/nitj/committees">COMMITTEES</a>
                  </div>
                  <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      <a href="https://dev-bhavya.github.io/nitj/committees">Institute Development Committee</a>
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Internal complaint committee
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Print, Digital Media and Newsletter
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Social Media
                    </li>
                    <li class="hover:font-semibold hover:text-[#FF6600]">
                      Website Development and Management
                    </li>
                  </ul>
=======
          <div class="group cursor-default hover:bg-blue-800">
            <div class="p-1.5 font-medium uppercase">Admissions</div>
            <div id="drop-down"
              class="absolute mt-0.5 hidden -translate-x-1/3 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex">
              <div class="flex flex-col gap-5">
                <div id="col"
                  class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head"
                      class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                      <div class="p-2 text-center">PROSPECTIVE STUDENTS</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Why NITJ?
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Explore NITJ
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Discover Student Life
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Courses Offered
                          </li>
                          <li class="hover:text-[#FF6600]">
                            How to Apply
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Admissions Process
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Virtual tour
                          </li>
                          <li class="hover:text-[#FF6600]">
                            International Students
                          </li>
                          <li class="hover:text-[#FF6600] md:font-bold py-2">
                            Contact details for admission
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="col"
                  class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head"
                      class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                      <div class="p-2 text-center">ANTI RAGGING</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Anti ragging act
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Anti ragging affadvit
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Institute Anti-ragging rules
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-5">
                <div id="col"
                  class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head"
                      class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                      <div class="p-2 text-center">JOIN NITJ</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            B.Tech Admission
                          </li>
                          <li class="hover:text-[#FF6600]">
                            M.Tech Admission
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Msc Admission
                          </li>
                          <li class="hover:text-[#FF6600]">
                            MBA Admission
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Ph.D Admission
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="col"
                  class="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                  <div id="block" class="h-full">
                    <div id="head"
                      class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                      <div class="p-2 text-center">&ThinSpace; INSTITUTE PROSPECTUS &ThinSpace;</div>
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            B.Tech
                          </li>
                          <li class="hover:text-[#FF6600]">
                            M.Tech
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Msc
                          </li>
                          <li class="hover:text-[#FF6600]">
                            MBA
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Ph.D
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="basis-2/5 hidden sm:block w-full">
        <div class="flex w-full flex-row justify-between">
          <div class="basis-4/5">
            <div class="flex flex-row justify-between">
              <div class="group cursor-default hover:bg-blue-800">
                <div class="p-1.5 font-medium uppercase">Research</div>
                <div id="drop-down"
                  class="absolute mt-0.5 hidden -translate-x-1/2 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex">
                  <div class="flex flex-col gap-5">
                    <div id="col"
                      class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head"
                          class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                          <div class="p-2 text-center">RESEARCH @ NITJ</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <li class="hover:text-[#FF6600]">
                                VIDWAN (IRINS Instance)
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Research Publications
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Research Jobs
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Internships
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Sponsored Research Projects
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="col"
                      class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head"
                          class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                          <div class="p-2 text-center">INCUBATION @ NITJ</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <li class="hover:text-[#FF6600]">
                                STI Hub
                              </li>
                              <li class="hover:text-[#FF6600]">
                                E-Cell
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Innovation club
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Institute Innovation council
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Technology Business Incubator
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col gap-5">
                    <div id="col"
                      class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head"
                          class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                          <div class="p-2 text-center">CONSULTANCY @ NITJ</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <li class="hover:text-[#FF6600]">
                                Consultancy works
                              </li>
                              <li class="hover:text-[#FF6600]">
                                MoUs
                              </li>
                              <li class="hover:text-[#FF6600]">
                                IPRs
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Find an expert
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Central Research facilities
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="col"
                      class="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head"
                          class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                          <div class="p-2 text-center">UPCOMING EVENTS</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <li class="hover:text-[#FF6600]">
                                Conferences
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Seminars
                              </li>
                              <li class="hover:text-[#FF6600]">
                                STC/ FDP
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Workshops
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="group cursor-default hover:bg-blue-800">
                <div class="p-1.5 font-medium uppercase">Alumni</div>
                <div id="drop-down"
                  class="absolute mt-0.5 hidden -translate-x-1/2 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex">
                  <div id="col"
                    class="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                    <div id="block" class="h-full">
                      <div class="h-full rounded-b-xl bg-white">
                        <ul class="flex flex-col gap-1 px-2 py-2 font-normal text-black">
                          <li class="hover:text-[#FF6600]">
                            Alumni portal
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Alumni Registration
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Chapters
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Donation statistics and reports
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Give back
                          </li>
                          <li class="hover:text-[#FF6600]">
                            Impact
                          </li>
                          <li class="hover:text-[#FF6600] py-2 md:font-bold">
                            Alumni affairs contact details
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="group relative cursor-default hover:bg-blue-800">
                <div class="p-1.5 font-medium uppercase">Life at NITJ</div>
                <div id="drop-down"
                  class="absolute mt-0.5 hidden gap-5 self-center  bg-white p-5 text-sm shadow-sm group-hover:flex right-0">
                  <div class="flex flex-col gap-5">
                    <div id="col"
                      class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head"
                          class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                          <div class="p-2 text-center">CLUBS & SOCITIES</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <li class="hover:text-[#FF6600]">
                                Heartfulness Mediation club
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Prayaas - A campaign for smile
                              </li>
                              <li class="hover:text-[#FF6600]">
                                R-Tist Robotics Club
                              </li>
                              <li class="hover:text-[#FF6600]">
                                SPIC MACAY
                              </li>
                              <li class="hover:text-[#FF6600]">
                                “We Can” Club
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Yoga club
                              </li>
                            </ul>
                            <ul class="flex flex-row px-2 font-normal text-black justify-between">
                              <li class="hover:text-[#FF6600]">
                                Zeal Society
                              </li>
                              <li class="hover:text-[#FF6600] font-bold">
                                View all
                              </li>
                            </ul>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="col"
                      class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head"
                          class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                          <div class="p-2 text-center">SCHOLARSHIPS</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <li class="hover:text-[#FF6600]">
                                Dr. Pratap Singh Memorial Scholarhsip
                              </li>
                              <li class="hover:text-[#FF6600]">
                                MCM Scholarship
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Post Matric Scholarship
                              </li>
                            </ul>
                            <ul class="flex flex-row px-2 font-normal text-black justify-between">
                              <li class="hover:text-[#FF6600]">
                                Siemens India Scholarship
                              </li>
                              <li class="hover:text-[#FF6600] font-bold whitespace-nowrap self-end">
                                View all
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col gap-5">
                    <div id="col"
                      class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head"
                          class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                          <div class="p-2 text-center">CAMPUS AMENITIES</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <li class="hover:text-[#FF6600]">
                                Banks & ATMs
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Canteens & Shops
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Central Seminar Hall
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Daily Commute
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Open air theater
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Post office
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Students Actvity Center
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Wi-Fi Campus
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="col"
                      class="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head"
                          class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                          <div class="p-2 text-center">HEALTH AND WELNESS</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <li class="hover:text-[#FF6600]">
                                Counselling services
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Fit India Movement Campaign
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Gymnasium center and Open gyms
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Health care center
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Empanaelled hospitals
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Sports and Recreation
                              </li>
                              <li class="hover:text-[#FF6600] font-bold">
                                Student Grievence cell
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col gap-5 items-center">
                    <div id="col"
                      class="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head"
                          class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                          <div class="p-2 text-center">NITJ FESTIVALS</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <li class="hover:text-[#FF6600]">
                                Foundation Day
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Annual cultural Fest
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Annual technical Fest
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Athletic Fest
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Sports Tournaments
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="col"
                      class="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                      <div id="block" class="h-full">
                        <div id="head"
                          class="h-full rounded-b-xl overflow-clip  bg-accent capitalize hover:bg-orange-500">
                          <div class="p-2 text-center">ACCOMODATION</div>
                          <div class="h-full rounded-b-xl bg-white">
                            <ul class="flex flex-col gap-1 px-2 font-normal text-black">
                              <li class="hover:text-[#FF6600]">
                                Boys Hostel
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Girls Hostel
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Hostel Guest House
                              </li>
                              <li class="hover:text-[#FF6600]">
                                Institute Guest House
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img src="img/logo_250.png" alt="" style="width: 100px;" />
                  </div>
>>>>>>> e259f77c7eff1738cf6d00dabee248aebca00e7a
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </div>
      <div class="flex basis-1/5 flex-row justify-center">
        <button type="button"
          class="material-symbols-outlined duration-50 cursor-pointer text-center transition ease-in-out hover:box-border hover:h-10 hover:w-10 hover:rounded-full hover:border-2 hover:border-white"
          data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tap to search" onclick="showSearchPage(event)">
          search
        </button>
      </div>
=======
          <div class="flex basis-1/5 flex-row justify-center">
            <button type="button"
              class="material-symbols-outlined duration-50 cursor-pointer text-center transition ease-in-out hover:box-border hover:h-10 hover:w-10 hover:rounded-full hover:border-2 hover:border-accent"
              data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tap to search"
              onclick="showSearchPage(event)">
              search
            </button>
          </div>
        </div>
      </div>
>>>>>>> e259f77c7eff1738cf6d00dabee248aebca00e7a
    </div>
  </div>
</div>
<!-- NAV BAR ends-->
</header>
<<<<<<< HEAD
<div id="search_page" class="absolute top-0 z-50 hidden h-full w-full content-center bg-transparent backdrop-blur-2xl"
    onclick="showSearchPage(event)">
    <form id="search_form" onclick="showSearchPage(event)">
      <div class="flex px-28">
        <label for="search-dropdown" class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
          Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown"
          class="z-10 inline-flex flex-shrink-0 items-center rounded-l-lg border border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          type="button" onclick="openDropdown()">
          All categories
          <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        <div id="dropdown"
          class="absolute z-10 hidden w-44 translate-y-11 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
          data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
          <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
              <button type="button"
                class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Faculty
              </button>
            </li>
            <li>
              <button type="button"
                class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Links
              </button>
            </li>
            <li>
              <button type="button"
                class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Library
              </button>
            </li>
            <li>
              <button type="button"
                class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Research
              </button>
            </li>
            <li>
              <button type="button"
                class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Everything
              </button>
            </li>
          </ul>
        </div>
        <div class="relative w-full">
          <input type="search" id="search-dropdown"
            class="z-20 block w-full rounded-r-lg border border-l-2 border-gray-300 border-l-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
            placeholder="Search Faculty, Books, Events, Researches..." required="" />
          <button type="submit"
            class="absolute top-0 right-0 rounded-r-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </form>
  </div>
=======
>>>>>>> e259f77c7eff1738cf6d00dabee248aebca00e7a
`)