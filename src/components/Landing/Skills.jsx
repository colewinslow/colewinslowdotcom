import React from "react";

function Skills() {
  return (
    <div className=" h-full w-full flex justify-center items-center sm:mt-0 ">
      <div className="bg-white dark:bg-[#131313] rounded-[40px] flex flex-col  shadow-sm w-full  p-5  md:p-14  ">
        <div className=" p-6">
          <h2 className="md:text-[38px] text-[25px] flex sm:mt-[-20px] w-full font-bold text-[#484848] dark:text-white  ">
            Technical Skills
          </h2>
          <p className="my-4 leading-8 dark:text-[#8C8C8C] md:text-[16px] text-[14px]">
            By using popular front-end frameworks such as React, Vue or Next.js
            I can develop interactive and dynamic websites. I also have
            experience integrating back-end frameworks like Node.js to create
            full-stack web applications with SQL or NoSQL backends.
          </p>
        </div>
        <div className="flex flex-col items-center lg:flex-row space-evenly">
          <div className="bg-[#f3f3f3] dark:bg-[#040404] rounded-[40px] flex  flex-col  shadow-sm w-full  p-5 m-4 ">
            <div className="p-2">
              {" "}
              <h3 className="my-2">Languages</h3>
              <p className="text-sm text-[#8C8C8C]">
                HTML, CSS, Javascript, TypeScript, Python
              </p>
            </div>
            <div className="bg-white  p-5 rounded-md my-4 flex items-center">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7776 40.455L14.2821 12.4445H41.718L39.2224 40.4399L27.9773 43.5556"
                  fill="#E44D26"
                />
                <path
                  d="M27.9999 41.1737V14.7437H39.2148L37.0746 38.6404"
                  fill="#F16529"
                />
                <path
                  d="M19.379 18.1692H28V21.6025H23.145L23.4626 25.1189H28V28.5446H20.3167L19.379 18.1692ZM20.468 30.2688H23.9164L24.1584 33.0139L28 34.0424V37.6269L20.952 35.6607"
                  fill="#EBEBEB"
                />
                <path
                  d="M36.5906 18.1692H27.9847V21.6025H36.273L36.5906 18.1692ZM35.9629 25.1189H27.9847V28.5522H32.2196L31.8188 33.0139L27.9847 34.0424V37.6117L35.0176 35.6607"
                  fill="white"
                />
              </svg>
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.7161 12.4445L39.2169 40.4412L27.9832 43.5556L16.7804 40.4456L14.2839 12.4445H41.7161Z"
                  fill="#264DE4"
                />
                <path
                  d="M37.0774 38.6585L39.2131 14.734H28V41.1751L37.0774 38.6585Z"
                  fill="#2965F1"
                />
                <path
                  d="M20.007 25.1191L20.3148 28.5533H28V25.1191H20.007Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M28 18.1682H27.9881H19.3885L19.7007 21.6025H28V18.1682Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M28 37.6112V34.0382L27.9849 34.0422L24.1602 33.0095L23.9157 30.2705H22.0572H20.4683L20.9494 35.6627L27.9842 37.6156L28 37.6112Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M32.217 28.5534L31.8183 33.0073L27.9881 34.0411V37.614L35.0284 35.6627L35.0801 35.0825L35.8871 26.0414L35.9709 25.1192L36.5909 18.1682H27.9881V21.6025H32.8273L32.5148 25.1192H27.9881V28.5534H32.217Z"
                  fill="white"
                />
              </svg>
              <svg
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.7989 12.4445H12.514V43.5556H43.7989V12.4445Z"
                  fill="#F7DF1E"
                />
                <path
                  d="M33.5295 36.7502C34.1597 37.7734 34.9795 38.5255 36.4296 38.5255C37.6477 38.5255 38.4258 37.92 38.4258 37.0835C38.4258 36.081 37.6263 35.726 36.2855 35.1427L35.5506 34.8292C33.4292 33.9304 32.0199 32.8045 32.0199 30.4242C32.0199 28.2316 33.6998 26.5625 36.3253 26.5625C38.1944 26.5625 39.5382 27.2094 40.5065 28.9032L38.2173 30.365C37.7132 29.4662 37.1695 29.1121 36.3253 29.1121C35.4642 29.1121 34.9184 29.6553 34.9184 30.365C34.9184 31.242 35.4647 31.5971 36.726 32.1403L37.461 32.4534C39.9588 33.5185 41.3691 34.6045 41.3691 37.046C41.3691 39.6781 39.2899 41.12 36.4976 41.12C33.7674 41.12 32.0035 39.8262 31.1404 38.1304L33.5295 36.7502ZM23.1444 37.0035C23.6062 37.8183 24.0263 38.5072 25.0364 38.5072C26.0022 38.5072 26.6116 38.1314 26.6116 36.6702V26.7294H29.5513V36.7097C29.5513 39.7368 27.7666 41.1146 25.1615 41.1146C22.8077 41.1146 21.4446 39.9032 20.7513 38.4442L23.1444 37.0035Z"
                  fill="black"
                />
              </svg>
              <svg
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7573 12.4445H43.8684V43.5556H12.7573V12.4445Z"
                  fill="#017ACB"
                />
                <path
                  d="M27.6955 23.9653H29.1879V26.5417H25.1532V38.0042L25.0462 38.0334C24.9004 38.0723 22.9803 38.0723 22.5671 38.0285L22.2365 37.9994V26.5417H18.2018V23.9653L19.4803 23.9508C20.1803 23.941 21.9789 23.941 23.4761 23.9508C24.9733 23.9605 26.8692 23.9653 27.6955 23.9653ZM39.0851 36.7889C38.4921 37.416 37.8553 37.766 36.7956 38.0528C36.3338 38.1792 36.256 38.1841 35.2157 38.1792C34.1754 38.1744 34.0928 38.1744 33.5872 38.0431C32.2796 37.7077 31.2247 37.0515 30.5053 36.123C30.3011 35.8605 29.9657 35.316 29.9657 35.248C29.9657 35.2285 30.0143 35.1848 30.0775 35.1556C30.1407 35.1265 30.2719 35.0438 30.3789 34.9806C30.4858 34.9174 30.6803 34.8008 30.8115 34.7327C30.9428 34.6646 31.3219 34.441 31.6525 34.2417C31.9831 34.0424 32.2844 33.882 32.3185 33.882C32.3525 33.882 32.4157 33.9501 32.4643 34.0327C32.756 34.5237 33.4365 35.1508 33.9178 35.3646C34.2143 35.491 34.8706 35.632 35.1865 35.632C35.4782 35.632 36.0129 35.5056 36.2997 35.3744C36.606 35.2334 36.7615 35.0924 36.9463 34.8105C37.0726 34.6112 37.0872 34.5577 37.0824 34.1785C37.0824 33.8285 37.0629 33.7313 36.9657 33.5709C36.6935 33.1237 36.324 32.8903 34.8268 32.2292C33.281 31.5438 32.5858 31.1355 32.0219 30.5862C31.6039 30.1778 31.5212 30.066 31.2587 29.5556C30.9185 28.8994 30.8747 28.6855 30.8699 27.7084C30.865 27.023 30.8796 26.7994 30.9525 26.566C31.0546 26.216 31.3851 25.5403 31.5358 25.3702C31.8469 25.0056 31.9587 24.8938 32.1775 24.714C32.8386 24.1695 33.8692 23.8098 34.856 23.7758C34.9678 23.7758 35.3372 23.7952 35.6824 23.8195C36.674 23.9021 37.3497 24.1452 38.0011 24.6653C38.4921 25.0542 39.2358 25.9681 39.1629 26.0896C39.1143 26.1626 37.1747 27.4556 37.0483 27.4945C36.9706 27.5188 36.9171 27.4896 36.8101 27.3633C36.149 26.5709 35.8817 26.4008 35.24 26.3619C34.7831 26.3327 34.54 26.3862 34.2338 26.5903C33.9129 26.8042 33.7574 27.1299 33.7574 27.582C33.7622 28.2431 34.015 28.5542 34.9483 29.016C35.5511 29.3126 36.0664 29.5556 36.1053 29.5556C36.1636 29.5556 37.4129 30.1778 37.7386 30.3723C39.2553 31.2619 39.8727 32.1758 40.0331 33.7508C40.1497 34.9369 39.8143 36.0209 39.0851 36.7889Z"
                  fill="white"
                />
              </svg>
              <svg
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.3566 12.5254C20.4145 12.5254 20.9104 15.9504 20.9104 15.9504L20.9192 19.4988H28.4982V20.5642H17.909C17.909 20.5642 12.8268 19.991 12.8268 27.96C12.8268 35.9292 17.2627 35.6465 17.2627 35.6465H19.9099V31.9485C19.9099 31.9485 19.7672 27.5374 24.2749 27.5374H31.7919C31.7919 27.5374 36.0152 27.6052 36.0152 23.4784V16.6549C36.0152 16.6549 36.6566 12.5254 28.3566 12.5254ZM24.1775 14.9116C24.3566 14.9115 24.534 14.9464 24.6995 15.0145C24.865 15.0826 25.0154 15.1825 25.142 15.3084C25.2687 15.4343 25.3691 15.5839 25.4375 15.7484C25.506 15.913 25.5412 16.0894 25.541 16.2675C25.5412 16.4456 25.506 16.622 25.4375 16.7866C25.3691 16.9511 25.2687 17.1007 25.142 17.2266C25.0154 17.3526 24.865 17.4524 24.6995 17.5205C24.534 17.5886 24.3566 17.6235 24.1775 17.6234C23.9984 17.6235 23.8211 17.5886 23.6556 17.5205C23.4901 17.4524 23.3397 17.3526 23.2131 17.2266C23.0864 17.1007 22.986 16.9511 22.9176 16.7866C22.8491 16.622 22.8139 16.4456 22.8141 16.2675C22.8139 16.0894 22.8491 15.913 22.9176 15.7484C22.986 15.5839 23.0864 15.4343 23.2131 15.3084C23.3397 15.1825 23.4901 15.0826 23.6556 15.0145C23.8211 14.9464 23.9984 14.9115 24.1775 14.9116Z"
                  fill="url(#paint0_linear_241_5014)"
                />
                <path
                  d="M28.5821 43.4747C36.5242 43.4747 36.0283 40.0497 36.0283 40.0497L36.0195 36.5014H28.4404V35.4361H39.0296C39.0296 35.4361 44.1118 36.0092 44.1118 28.04C44.1118 20.0709 39.676 20.3535 39.676 20.3535H37.0287V24.0514C37.0287 24.0514 37.1714 28.4626 32.6637 28.4626H25.1467C25.1467 28.4626 20.9234 28.3948 20.9234 32.5217V39.3453C20.9234 39.3453 20.2821 43.4747 28.582 43.4747H28.5821ZM32.7612 41.0887C32.5821 41.0889 32.4047 41.0539 32.2392 40.9858C32.0737 40.9178 31.9234 40.8179 31.7967 40.692C31.6701 40.566 31.5697 40.4165 31.5012 40.2519C31.4327 40.0873 31.3976 39.9109 31.3977 39.7328C31.3976 39.5547 31.4327 39.3783 31.5012 39.2137C31.5696 39.0492 31.67 38.8996 31.7967 38.7737C31.9233 38.6477 32.0737 38.5478 32.2392 38.4797C32.4047 38.4117 32.5821 38.3767 32.7612 38.3768C32.9403 38.3767 33.1177 38.4116 33.2831 38.4797C33.4486 38.5478 33.599 38.6477 33.7257 38.7736C33.8523 38.8996 33.9527 39.0491 34.0212 39.2137C34.0896 39.3782 34.1248 39.5546 34.1246 39.7327C34.1248 39.9108 34.0896 40.0872 34.0212 40.2518C33.9527 40.4164 33.8523 40.5659 33.7257 40.6918C33.599 40.8178 33.4486 40.9176 33.2831 40.9857C33.1177 41.0538 32.9403 41.0888 32.7612 41.0886V41.0887Z"
                  fill="url(#paint1_linear_241_5014)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_241_5014"
                    x1="15.8333"
                    y1="15.3091"
                    x2="31.2516"
                    y2="30.6589"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#387EB8" />
                    <stop offset="1" stop-color="#366994" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_241_5014"
                    x1="25.3496"
                    y1="25.1107"
                    x2="41.9114"
                    y2="40.8545"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFE052" />
                    <stop offset="1" stop-color="#FFC331" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="bg-[#f3f3f3] dark:bg-[#040404] rounded-[40px] flex  flex-col  shadow-sm w-full  p-5  m-4 ">
            <div className="p-2">
              {" "}
              <h3 className="my-2">Frameworks</h3>
              <p className="text-sm text-[#8C8C8C]">
                React, NEXT.JS, Vue, Gatsby
              </p>
            </div>
            <div className="bg-white p-5 rounded-md my-4 flex items-center">
              <svg
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.1565 30.7429C29.6797 30.7429 30.9146 29.5149 30.9146 28C30.9146 26.4852 29.6797 25.2572 28.1565 25.2572C26.6332 25.2572 25.3983 26.4852 25.3983 28C25.3983 29.5149 26.6332 30.7429 28.1565 30.7429Z"
                  fill="#61DAFB"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.1877 26.5567C14.5622 27.1182 14.3566 27.6078 14.3566 27.9999C14.3566 28.3921 14.5622 28.8817 15.1877 29.4431C15.8127 30.0043 16.7736 30.5554 18.0463 31.0386C20.5848 32.0024 24.1589 32.6194 28.1564 32.6194C32.1539 32.6194 35.7281 32.0024 38.2665 31.0386C39.5393 30.5554 40.5002 30.0043 41.1252 29.4431C41.7507 28.8817 41.9563 28.3921 41.9563 27.9999C41.9563 27.6078 41.7507 27.1182 41.1252 26.5567C40.5002 25.9956 39.5393 25.4445 38.2665 24.9613C35.7281 23.9974 32.1539 23.3805 28.1564 23.3805C24.1589 23.3805 20.5848 23.9974 18.0463 24.9613C16.7736 25.4445 15.8127 25.9956 15.1877 26.5567ZM17.3364 23.0915C20.1545 22.0215 23.9802 21.3805 28.1564 21.3805C32.3327 21.3805 36.1584 22.0215 38.9765 23.0915C40.382 23.6252 41.5885 24.285 42.4612 25.0685C43.3336 25.8516 43.9563 26.8403 43.9563 27.9999C43.9563 29.1596 43.3336 30.1483 42.4612 30.9314C41.5885 31.7149 40.382 32.3747 38.9765 32.9084C36.1584 33.9784 32.3327 34.6194 28.1564 34.6194C23.9802 34.6194 20.1545 33.9784 17.3364 32.9084C15.9309 32.3747 14.7244 31.7149 13.8516 30.9314C12.9793 30.1483 12.3566 29.1596 12.3566 27.9999C12.3566 26.8403 12.9793 25.8516 13.8516 25.0685C14.7244 24.285 15.9309 23.6252 17.3364 23.0915Z"
                  fill="#61DAFB"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.9369 16.1116C22.1362 15.854 21.6043 15.9204 21.2586 16.1189C20.9128 16.3174 20.589 16.7423 20.413 17.5607C20.237 18.3791 20.2375 19.4814 20.4529 20.8183C20.8825 23.4848 22.1317 26.8701 24.1299 30.3118C26.128 33.7534 28.4515 36.5219 30.5589 38.2252C31.6154 39.0791 32.5751 39.6307 33.3759 39.8883C34.1766 40.1459 34.7085 40.0795 35.0542 39.881C35.4 39.6824 35.7238 39.2576 35.8998 38.4392C36.0758 37.6208 36.0753 36.5185 35.8599 35.1816C35.4303 32.515 34.1811 29.1298 32.183 25.6881C30.1848 22.2465 27.8613 19.478 25.7539 17.7747C24.6974 16.9208 23.7377 16.3692 22.9369 16.1116ZM27.0147 16.2263C29.3567 18.1192 31.8287 21.0946 33.9174 24.6923C36.0061 28.29 37.3614 31.9066 37.8388 34.8701C38.0769 36.3482 38.1056 37.7179 37.8596 38.8617C37.6135 40.0056 37.064 41.0332 36.0584 41.6106C35.0528 42.188 33.8831 42.1474 32.764 41.7873C31.6448 41.4273 30.4664 40.7178 29.2982 39.7736C26.9561 37.8807 24.4841 34.9053 22.3954 31.3076C20.3067 27.7099 18.9515 24.0933 18.474 21.1298C18.2359 19.6517 18.2072 18.282 18.4533 17.1382C18.6993 15.9943 19.2488 14.9667 20.2544 14.3893C21.26 13.8119 22.4297 13.8525 23.5489 14.2126C24.668 14.5726 25.8465 15.2821 27.0147 16.2263Z"
                  fill="#61DAFB"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M35.8998 17.5606C35.7238 16.7423 35.4 16.3174 35.0543 16.1189C34.7085 15.9204 34.1766 15.854 33.3759 16.1115C32.5752 16.3692 31.6154 16.9208 30.5589 17.7747C28.4515 19.4779 26.128 22.2464 24.1299 25.6881C22.1317 29.1297 20.8825 32.515 20.4529 35.1815C20.2375 36.5184 20.237 37.6207 20.413 38.4392C20.5891 39.2576 20.9128 39.6824 21.2586 39.8809C21.6044 40.0794 22.1362 40.1459 22.9369 39.8883C23.7377 39.6306 24.6974 39.079 25.754 38.2251C27.8614 36.5219 30.1848 33.7534 32.183 30.3117C34.1811 26.8701 35.4304 23.4848 35.86 20.8183C36.0753 19.4814 36.0759 18.3791 35.8998 17.5606ZM37.8388 21.1298C37.3614 24.0932 36.0062 27.7099 33.9174 31.3075C31.8287 34.9052 29.3567 37.8807 27.0147 39.7736C25.8465 40.7177 24.668 41.4273 23.5489 41.7873C22.4297 42.1473 21.26 42.1879 20.2544 41.6105C19.2488 41.0332 18.6993 40.0056 18.4533 38.8617C18.2073 37.7179 18.2359 36.3482 18.4741 34.87C18.9515 31.9066 20.3067 28.2899 22.3954 24.6923C24.4841 21.0946 26.9561 18.1191 29.2982 16.2262C30.4664 15.2821 31.6449 14.5725 32.764 14.2125C33.8832 13.8525 35.0528 13.8119 36.0584 14.3893C37.0641 14.9666 37.6136 15.9943 37.8596 17.1381C38.1056 18.2819 38.077 19.6516 37.8388 21.1298Z"
                  fill="#61DAFB"
                />
              </svg>
              <svg
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0982 23.5323H25.966V23.9965H20.6361V27.4898H25.6482V27.9539H20.6361V31.7892H26.0272V32.2534H20.0982V23.5323ZM26.4917 23.5323H27.1152L29.8779 27.3676L32.7018 23.5323L36.5428 18.6606L30.2324 27.7707L33.4842 32.2534H32.8363L29.8779 28.1738L26.9073 32.2534H26.2717L29.5479 27.7707L26.4917 23.5323ZM33.7165 23.9965V23.5323H40.4034V23.9965H37.3228V32.2534H36.7849V23.9965H33.7165Z"
                  fill="black"
                />
                <path
                  d="M12.7573 23.5323H13.4297L22.7011 37.3395L18.8696 32.2534L13.3196 24.1919L13.2952 32.2534H12.7573V23.5323Z"
                  fill="black"
                />
                <path
                  d="M40.3492 31.6492C40.4604 31.6492 40.5415 31.5644 40.5415 31.4549C40.5415 31.3454 40.4604 31.2607 40.3492 31.2607C40.2393 31.2607 40.1569 31.3454 40.1569 31.4549C40.1569 31.5644 40.2393 31.6492 40.3492 31.6492ZM40.8777 31.1381C40.8777 31.4615 41.1119 31.6727 41.4534 31.6727C41.8171 31.6727 42.0368 31.4549 42.0368 31.0769V29.7458H41.7438V31.0756C41.7438 31.2855 41.6378 31.3976 41.4507 31.3976C41.2833 31.3976 41.1695 31.2933 41.1655 31.1381H40.8777ZM42.4202 31.1212C42.4411 31.4575 42.7224 31.6727 43.141 31.6727C43.5884 31.6727 43.8684 31.4471 43.8684 31.0873C43.8684 30.8044 43.7088 30.648 43.3215 30.558L43.1135 30.5072C42.8676 30.4498 42.7682 30.3729 42.7682 30.2386C42.7682 30.0691 42.9225 29.9583 43.1541 29.9583C43.3739 29.9583 43.5256 30.0665 43.5531 30.2399H43.8383C43.8213 29.9231 43.5413 29.7002 43.158 29.7002C42.7459 29.7002 42.4712 29.9231 42.4712 30.2582C42.4712 30.5345 42.6269 30.6988 42.9683 30.7783L43.2117 30.837C43.4615 30.8957 43.5714 30.9817 43.5714 31.1251C43.5714 31.292 43.3987 31.4132 43.1632 31.4132C42.9108 31.4132 42.7354 31.2998 42.7106 31.1212H42.4202Z"
                  fill="black"
                />
              </svg>
              <svg
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.8548 14.5834H44.1117L28.4693 41.4167L12.8268 14.5834H24.7933L28.4693 20.8056L32.067 14.5834H37.8548Z"
                  fill="#41B883"
                />
                <path
                  d="M12.8268 14.5834L28.4693 41.4167L44.1117 14.5834H37.8548L28.4693 30.6834L19.0056 14.5834H12.8268Z"
                  fill="#41B883"
                />
                <path
                  d="M19.0056 14.5834L28.4693 30.7612L37.8548 14.5834H32.067L28.4693 20.8056L24.7933 14.5834H19.0056Z"
                  fill="#35495E"
                />
              </svg>
              <svg
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.6257 12.4445C20.0341 12.4445 13.0701 19.4084 13.0701 28C13.0701 36.5917 20.0341 43.5556 28.6257 43.5556C37.2173 43.5556 44.1813 36.5917 44.1813 28C44.1813 19.4084 37.2173 12.4445 28.6257 12.4445ZM16.4127 28.1618L28.4639 40.213C21.846 40.1271 16.4986 34.7797 16.4127 28.1618ZM31.3597 39.9081L16.7176 25.266C17.9596 19.8365 22.8191 15.7845 28.6257 15.7845C32.6838 15.7845 36.2803 17.7645 38.5016 20.8109L36.8104 22.3029C35.0085 19.7195 32.0143 18.0283 28.6257 18.0283C24.3112 18.0283 20.6364 20.7685 19.2476 24.6039L32.0218 37.3769C35.1242 36.2532 37.5098 33.6349 38.3087 30.3918H33.0149V28H40.8424C40.8412 33.8066 36.7893 38.6661 31.3597 39.9081Z"
                  fill="#744C9E"
                />
              </svg>
            </div>
          </div>
          <div className="bg-[#f3f3f3] dark:bg-[#040404] rounded-[40px] flex  flex-col  shadow-sm w-full  p-5   m-4">
            <div className="p-2">
              {" "}
              <h3 className="my-2">Backend Technologies</h3>
              <p className="text-sm text-[#8C8C8C]">
                Mysql, GraphQL, MongoDB, Node
              </p>
            </div>
            <div className="bg-white  p-5 rounded-md my-4 flex items-center">
              <svg
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.3306 36.4763C39.6285 36.4335 38.3092 36.6053 37.2028 37.0778C36.8836 37.2065 36.3729 37.2067 36.3303 37.6148C36.5005 37.7866 36.5218 38.0659 36.6708 38.3021C36.9264 38.7316 37.3729 39.3115 37.7772 39.6124C38.224 39.956 38.671 40.2995 39.1389 40.6003C39.9688 41.1158 40.9052 41.4164 41.7137 41.932C42.182 42.2325 42.6498 42.6194 43.1179 42.9415C43.352 43.1131 43.5008 43.3926 43.7989 43.4998V43.4355C43.6498 43.2421 43.6073 42.9629 43.4584 42.7481C43.2459 42.5333 43.0328 42.34 42.82 42.1252C42.203 41.2877 41.437 40.5573 40.6072 39.956C39.9264 39.4834 38.4368 38.8391 38.1603 38.0443C38.1603 38.0443 38.1389 38.0229 38.1177 38.0014C38.5858 37.9585 39.1389 37.7866 39.5859 37.6578C40.3093 37.4643 40.9689 37.5074 41.7137 37.3141C42.054 37.2281 42.3945 37.1207 42.7349 37.0133V36.8201C42.3521 36.4335 42.0754 35.918 41.6711 35.5529C40.586 34.6076 39.3943 33.6842 38.1603 32.911C37.5006 32.4813 36.6494 32.2021 35.9473 31.837C35.6921 31.708 35.2664 31.6437 35.1176 31.4289C34.7344 30.9564 34.5216 30.3336 34.2451 29.7751C33.6282 28.5937 33.0323 27.2836 32.5002 26.0379C32.1175 25.2002 31.8834 24.3624 31.4152 23.5893C29.2236 19.938 26.8405 17.7257 23.1808 15.5562C22.3934 15.1052 21.4572 14.9119 20.4572 14.6757C19.9254 14.6541 19.3933 14.6113 18.8614 14.5897C18.5209 14.4393 18.1804 14.0313 17.8825 13.838C16.6699 13.0647 13.5419 11.3895 12.6482 13.6018C12.0737 14.9978 13.4994 16.3724 13.9886 17.0814C14.3506 17.5753 14.8185 18.1337 15.0739 18.6922C15.2229 19.0571 15.2653 19.444 15.4143 19.8305C15.7549 20.7753 16.0738 21.828 16.5208 22.7087C16.7549 23.1597 17.0102 23.6322 17.3081 24.0403C17.4783 24.2765 17.7761 24.384 17.8401 24.7705C17.5423 25.2002 17.5209 25.8446 17.3505 26.3815C16.5846 28.8086 16.8826 31.8156 17.9676 33.5982C18.308 34.135 19.1166 35.3167 20.2018 34.8655C21.1594 34.4789 20.9466 33.2547 21.223 32.1807C21.2871 31.9227 21.2445 31.7511 21.3721 31.5793V31.6224C21.67 32.2236 21.9678 32.8037 22.2445 33.405C22.9041 34.4573 24.053 35.5529 25.0105 36.2832C25.5213 36.6696 25.9255 37.3355 26.5639 37.5718V37.5073H26.5213C26.3936 37.3139 26.2021 37.2281 26.0319 37.0776C25.649 36.6912 25.2233 36.2187 24.9255 35.789C24.032 34.5861 23.2445 33.2545 22.5424 31.8799C22.202 31.2142 21.904 30.4839 21.6275 29.8181C21.4996 29.5601 21.4996 29.1736 21.287 29.0449C20.9678 29.5173 20.4997 29.9255 20.2656 30.5053C19.8616 31.4289 19.8189 32.5673 19.6699 33.7485C19.5848 33.7702 19.6272 33.7485 19.5847 33.7917C18.904 33.6196 18.6699 32.911 18.4144 32.3095C17.776 30.7846 17.6696 28.336 18.223 26.5748C18.372 26.1237 19.0104 24.7062 18.755 24.2766C18.6273 23.8685 18.2016 23.6322 17.9676 23.3101C17.6911 22.902 17.3931 22.3867 17.2017 21.9354C16.691 20.7326 16.4356 19.4009 15.8824 18.1981C15.6271 17.6396 15.1804 17.0599 14.8185 16.5443C14.4143 15.9645 13.9675 15.5562 13.6483 14.8689C13.542 14.6328 13.3929 14.2461 13.5631 13.9883C13.6057 13.8165 13.6907 13.7522 13.8611 13.7092C14.1377 13.4728 14.9251 13.7735 15.2015 13.9024C15.9888 14.2244 16.6484 14.5254 17.3081 14.9763C17.6059 15.1912 17.9251 15.5993 18.308 15.7067H18.7549C19.4358 15.8569 20.2017 15.7497 20.8401 15.9429C21.9679 16.3079 22.9891 16.8449 23.9042 17.4249C26.6916 19.2076 28.9894 21.7421 30.5428 24.7705C30.7982 25.2644 30.9045 25.7157 31.1386 26.231C31.5856 27.2836 32.1387 28.3575 32.5854 29.3885C33.0323 30.3978 33.4577 31.4289 34.0961 32.2667C34.4153 32.7175 35.6919 32.9539 36.2665 33.1902C36.6921 33.3834 37.3517 33.5554 37.7347 33.7916C38.4581 34.2424 39.1815 34.7582 39.8624 35.252C40.2029 35.5098 41.2667 36.0468 41.3306 36.4763Z"
                  fill="#00546B"
                />
                <path
                  d="M19.6271 17.8114C19.2655 17.8114 19.0102 17.8546 18.7549 17.9189V17.9619H18.7974C18.9678 18.3056 19.2655 18.5419 19.4782 18.8425C19.6485 19.1861 19.7974 19.5299 19.9677 19.8736C19.9889 19.852 20.0102 19.8306 20.0102 19.8306C20.3082 19.6157 20.457 19.2721 20.457 18.7566C20.3294 18.6063 20.3081 18.456 20.2017 18.3056C20.0741 18.0907 19.7974 17.9834 19.6271 17.8114Z"
                  fill="#00546B"
                />
              </svg>
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.6545 16.0065L37.0431 19.6952C37.2276 19.5 37.4392 19.3325 37.6715 19.1979C38.9964 18.4362 40.6864 18.8884 41.456 20.2134C42.2177 21.5384 41.7655 23.2283 40.4405 23.9979C40.2099 24.1307 39.9614 24.2297 39.7026 24.2917V31.6718C39.9586 31.7339 40.2044 31.8322 40.4326 31.9636C41.7655 32.7332 42.2177 34.4232 41.4481 35.7482C40.6864 37.0731 38.9886 37.5254 37.6636 36.7638C37.4069 36.6165 37.1756 36.4288 36.9788 36.2078L30.629 39.8738C30.722 40.1554 30.7693 40.45 30.7689 40.7465C30.7689 42.2699 29.5313 43.5156 28 43.5156C26.4687 43.5156 25.2311 42.2778 25.2311 40.7465C25.2311 40.4744 25.2702 40.2114 25.3431 39.9631L18.9562 36.2755C18.7738 36.4668 18.5651 36.6312 18.3364 36.7638C17.0035 37.5254 15.3136 37.0731 14.5518 35.7482C13.7902 34.4232 14.2425 32.7332 15.5674 31.9636C15.7956 31.8322 16.0414 31.7339 16.2973 31.6717V24.2917C16.0386 24.2297 15.7901 24.1307 15.5595 23.9979C14.2345 23.2363 13.7822 21.5384 14.544 20.2134C15.3057 18.8884 17.0034 18.4362 18.3284 19.1979C18.5595 19.3318 18.7701 19.4982 18.9538 19.692L25.3443 16.0024C25.2689 15.7467 25.2308 15.4815 25.2311 15.215C25.2311 13.6839 26.4687 12.446 28 12.446C29.5313 12.446 30.7689 13.6838 30.7689 15.215C30.7689 15.4902 30.729 15.7558 30.6545 16.0065ZM29.989 17.143L36.3928 20.8403C36.2908 21.1968 36.2616 21.5701 36.3068 21.9381C36.352 22.3061 36.4708 22.6612 36.656 22.9824C37.0458 23.6605 37.6808 24.11 38.3856 24.2852V31.6745C38.3497 31.6832 38.3139 31.6928 38.2784 31.703L29.9145 17.217C29.9398 17.1928 29.9647 17.1682 29.989 17.1431V17.143ZM26.0872 17.2186L17.7234 31.7044C17.6873 31.6939 17.6509 31.6842 17.6144 31.6752V24.2852C18.3191 24.11 18.9542 23.6605 19.344 22.9824C19.5296 22.6606 19.6485 22.3047 19.6935 21.936C19.7385 21.5673 19.7088 21.1932 19.6061 20.8362L26.0081 17.14C26.0339 17.1667 26.0603 17.1929 26.0872 17.2185V17.2186ZM28.7737 17.8748L37.1355 32.3573C36.9439 32.5401 36.7798 32.7495 36.648 32.9792C36.5166 33.2074 36.4183 33.4532 36.3562 33.7091H19.644C19.5818 33.4532 19.4835 33.2074 19.352 32.9792C19.2198 32.7511 19.0559 32.5429 18.8653 32.3609L27.2287 17.8755C27.4794 17.9477 27.7391 17.9842 28 17.9839C28.2686 17.9839 28.5282 17.9459 28.7737 17.8748ZM30.0477 38.8811L36.4099 35.2078C36.3909 35.1478 36.3738 35.0873 36.3589 35.0261H19.6405C19.6316 35.0621 19.622 35.0977 19.6117 35.1333L26.0051 38.8247C26.2633 38.5562 26.5731 38.3428 26.9159 38.1972C27.2588 38.0516 27.6275 37.9769 28 37.9776C28.3855 37.9769 28.7668 38.057 29.1195 38.2126C29.4722 38.3682 29.7884 38.596 30.0477 38.8811Z"
                  fill="#E535AB"
                />
              </svg>
              <svg
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.0585 12.5294L28.8934 14.0887C29.081 14.3765 29.2844 14.6312 29.5239 14.8684C30.2261 15.558 30.8806 16.294 31.483 17.0713C32.8975 18.9184 33.8517 20.9696 34.533 23.1881C34.9417 24.5432 35.1636 25.9334 35.1802 27.3391C35.2486 31.5418 33.7998 35.1504 30.8788 38.1495C30.4037 38.625 29.8904 39.0614 29.344 39.4541C29.0547 39.4541 28.9178 39.2334 28.7985 39.0302C28.5813 38.6535 28.4368 38.2397 28.3723 37.8102C28.2697 37.3017 28.2022 36.7933 28.2354 36.2683V36.0311C28.212 35.9806 27.9568 12.649 28.0585 12.5294Z"
                  fill="#599636"
                />
                <path
                  d="M28.0585 12.4779C28.0243 12.4099 27.9901 12.4614 27.9559 12.4944C27.9725 12.8347 27.8532 13.138 27.6665 13.4277C27.4612 13.7155 27.1894 13.9361 26.9167 14.1733C25.4014 15.478 24.2088 17.0538 23.2537 18.8163C21.9828 21.1884 21.3279 23.7305 21.1421 26.4069C21.0571 27.3722 21.4491 30.7786 21.7551 31.7615C22.5899 34.3707 24.0895 36.5571 26.032 38.4547C26.509 38.9116 27.0193 39.3355 27.5472 39.7428C27.7007 39.7428 27.7173 39.6067 27.7525 39.5056C27.8198 39.2893 27.8711 39.0683 27.906 38.8446L28.2482 36.3034L28.0585 12.4779Z"
                  fill="#6CAC48"
                />
                <path
                  d="M28.8934 40.4865C28.9276 40.0977 29.1153 39.7749 29.3196 39.4531C29.1143 39.3686 28.9618 39.2004 28.8425 39.0128C28.7397 38.8351 28.6546 38.6479 28.5884 38.4538C28.3498 37.7422 28.299 36.9956 28.2306 36.2684V35.828C28.1455 35.8961 28.1279 36.4716 28.1279 36.5571C28.0782 37.3257 27.9756 38.0899 27.821 38.8446C27.7701 39.1498 27.7359 39.4541 27.5472 39.7253C27.5472 39.7594 27.5472 39.7934 27.5639 39.8439C27.8708 40.7422 27.9549 41.657 28.0067 42.5893V42.9295C28.0067 43.3359 27.9901 43.2503 28.3293 43.3864C28.4662 43.437 28.6187 43.4545 28.7555 43.5556C28.8582 43.5556 28.8748 43.471 28.8748 43.403L28.824 42.844V41.2847C28.8073 41.0125 28.8582 40.7422 28.8924 40.4875L28.8934 40.4865Z"
                  fill="#C2BFBF"
                />
              </svg>
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.7262 12.7764C27.4976 12.3348 28.5024 12.3328 29.2731 12.7764C33.1507 14.9674 37.0295 17.155 40.9064 19.3473C41.6356 19.7581 42.1233 20.5696 42.1159 21.4098V34.5919C42.1213 35.4669 41.5854 36.2978 40.8161 36.6992C36.9512 38.8782 33.0884 41.0598 29.2243 43.2387C28.4369 43.6889 27.412 43.6543 26.6492 43.1672C25.4905 42.4955 24.3299 41.8271 23.1711 41.1561C22.9343 41.0149 22.6674 40.9026 22.5002 40.673C22.648 40.4738 22.9122 40.4489 23.127 40.362C23.6106 40.2082 24.0548 39.9613 24.4992 39.7217C24.6115 39.6448 24.7487 39.6743 24.8564 39.7431C25.8472 40.3112 26.8292 40.8958 27.8234 41.4585C28.0355 41.5809 28.2502 41.4184 28.4315 41.3173C32.224 39.1738 36.0213 37.0384 39.8132 34.8943C39.9537 34.8267 40.0314 34.6775 40.0199 34.5236C40.0226 30.1751 40.0206 25.8259 40.0213 21.4774C40.0373 21.3028 39.9363 21.1422 39.7784 21.0708C35.927 18.9018 32.0776 16.7295 28.2268 14.56C28.1601 14.5141 28.0811 14.4895 28.0001 14.4894C27.9191 14.4893 27.84 14.5136 27.7732 14.5593C23.9224 16.7295 20.0737 18.9038 16.2229 21.0727C16.0656 21.1442 15.96 21.3021 15.9787 21.4774C15.9794 25.8259 15.9787 30.1751 15.9787 34.5243C15.972 34.5994 15.9885 34.6747 16.026 34.7402C16.0634 34.8056 16.12 34.858 16.1881 34.8903C17.2157 35.473 18.2447 36.0516 19.2729 36.6323C19.8522 36.9441 20.5634 37.1294 21.2017 36.8905C21.7649 36.6885 22.1597 36.1138 22.1489 35.5158C22.1542 31.1927 22.1463 26.8689 22.1529 22.5465C22.1388 22.3545 22.3209 22.196 22.5075 22.214C23.0012 22.2107 23.4956 22.2074 23.9894 22.2154C24.1955 22.2107 24.3373 22.4174 24.3118 22.6107C24.3098 26.9612 24.3171 31.3118 24.3085 35.6622C24.3098 36.8217 23.8335 38.0833 22.761 38.6506C21.4398 39.335 19.8068 39.1899 18.5015 38.5336C17.3715 37.9696 16.2932 37.304 15.1833 36.6998C14.412 36.3006 13.8787 35.4663 13.8841 34.592V21.4098C13.876 20.5522 14.3832 19.726 15.1351 19.3212C18.9992 17.1405 22.8627 14.9581 26.7262 12.7764Z"
                  fill="#8CC84B"
                />
                <path
                  d="M30.0973 21.9076C31.7826 21.7991 33.5868 21.8433 35.1034 22.6736C36.2775 23.3098 36.9285 24.6451 36.9492 25.9496C36.9164 26.1255 36.7325 26.2226 36.5645 26.2105C36.0755 26.2099 35.5865 26.2172 35.0975 26.2072C34.8901 26.2152 34.7695 26.0239 34.7435 25.8406C34.603 25.2164 34.2626 24.5982 33.6751 24.2972C32.7733 23.8457 31.7276 23.8684 30.7442 23.8778C30.0264 23.9159 29.2544 23.9781 28.6462 24.4002C28.1793 24.72 28.0374 25.3655 28.2041 25.8854C28.3612 26.2587 28.7921 26.3792 29.1447 26.4902C31.1757 27.0214 33.328 26.9685 35.3202 27.6676C36.145 27.9526 36.9519 28.5066 37.2342 29.3702C37.6035 30.5276 37.4416 31.9111 36.6182 32.8403C35.9503 33.605 34.9777 34.0212 34.0076 34.2472C32.7171 34.535 31.3778 34.5423 30.0672 34.4145C28.8349 34.274 27.5524 33.9502 26.6011 33.1106C25.7876 32.4042 25.3902 31.3036 25.4297 30.2413C25.4391 30.0619 25.6177 29.9368 25.7896 29.9516C26.282 29.9476 26.7744 29.9463 27.2668 29.9522C27.4635 29.9382 27.6093 30.1081 27.6194 30.2935C27.7102 30.8882 27.9337 31.5124 28.4523 31.8649C29.4531 32.5106 30.7088 32.4664 31.8547 32.4844C32.8041 32.4423 33.8698 32.4296 34.6445 31.8021C35.0533 31.4442 35.1744 30.8454 35.0639 30.3303C34.9442 29.8954 34.4893 29.6927 34.0986 29.5602C32.0936 28.926 29.9173 29.1561 27.9317 28.4389C27.1256 28.154 26.3461 27.6154 26.0364 26.7873C25.6043 25.6152 25.8023 24.1654 26.7121 23.2676C27.5992 22.3745 28.8798 22.0306 30.0973 21.9075V21.9076Z"
                  fill="#8CC84B"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
