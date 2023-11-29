import { createGlobalStyle, css } from "styled-components";
import "rc-checkbox/assets/index.css";

import "react-toastify/dist/ReactToastify.css";
import "simplebar-react/dist/simplebar.min.css";

import "assets/css/style.css";
import "assets/css/colors.css";
import "assets/css/icons.css";
import "assets/css/sizes.css";
import "assets/css/tooltip.css";

export default createGlobalStyle(css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #fcfcfd inset;
    box-shadow: 0 0 0 30px #fcfcfd inset;
    border-radius: 10px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
    margin: 0;
    padding: 0;
  }

  body {
    font-weight: 400;
    font-size: 16px;
    color: #353945;
    background: #f7f7fa;
    line-height: 1.5;
    font-family: "Inter", sans-serif;
  }

  .w-0 {
    width: 0% !important;
  }
  .w-25 {
    width: 20% !important;
  }
  .w-50 {
    width: 50% !important;
  }
  .w-75 {
    width: 75% !important;
  }
  .w-100 {
    width: 100% !important;
  }
  .mh-100 {
    min-height: 100% !important;
  }

  /* height */
  .h-0 {
    height: 0% !important;
  }
  .h-25 {
    height: 20% !important;
  }
  .h-50 {
    height: 50% !important;
  }
  .h-75 {
    height: 75% !important;
  }
  .h-100 {
    height: 100% !important;
  }

  .overflow-auto {
    overflow: auto;
  }

  .text {
    &-center {
      text-align: center !important;
    }

    &-right {
      text-align: right !important;
    }

    &-left {
      text-align: left !important;
    }
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .d-none {
    display: none;
  }
  .d-inline-block {
    display: inline-block;
  }
  .d-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .align-center {
    display: flex;
    align-items: center;
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .mb-4 {
    margin-bottom: 4px !important;
  }
  .mb-8 {
    margin-bottom: 8px !important;
  }
  .ml-8 {
    margin-left: 8px !important;
  }
  .mb-10 {
    margin-bottom: 10px;
  }
  .mb-12 {
    margin-bottom: 12px;
  }
  .mb-14 {
    margin-bottom: 14px;
  }
  .mb-15 {
    margin-bottom: 15px;
  }
  .mb-20 {
    margin-bottom: 20px;
  }
  .mb-24 {
    margin-bottom: 24px;
  }
  .mb-30 {
    margin-bottom: 30px;
  }
  .mb-26 {
    margin-bottom: 26px;
  }
  .mb-36 {
    margin-bottom: 36px;
  }
  .mb-40 {
    margin-bottom: 40px;
  }
  .mb-100 {
    margin-bottom: 100px;
  }
  .ml-15 {
    margin-left: 15px;
  }
  .mr-5 {
    margin-right: 5px;
  }
  .mr-20 {
    margin-right: 20px;
  }
  .mt-30 {
    margin-top: 30px;
  }
  .mt-20 {
    margin-top: 20px;
  }
  .mt-24 {
    margin-top: 24px;
  }
  .mt-10 {
    margin-top: 10px;
  }
  .mr-8 {
    margin-right: 8px !important;
  }

  .semi-bold {
    font-weight: 600 !important;
  }
  .text-uppercase {
    text-transform: uppercase !important;
  }
  .o-none {
    opacity: 0;
  }
  /* iframe {
    display: none !important;
  } */
  .Toastify__progress-bar {
    opacity: 0 !important;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes hideAnim {
    0% {
      opacity: 0.8;
      transform: scale(0.8);
    }
    50% {
      opacity: 0.4;
      transform: scale(0.5);
    }
    100% {
      opacity: 0;
      transform: scale(0);
      display: none;
    }
  }
  @keyframes showAnim {
    0% {
      opacity: 0.4;
      display: block;
      transform: scale(0.4);
    }
    50% {
      opacity: 0.8;
      display: block;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      display: block;
      transform: scale(1);
    }
  }

  @keyframes hideAnim2 {
    0% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }
  @keyframes showAnim2 {
    0% {
      opacity: 0.4;
      display: block;
    }
    100% {
      opacity: 1;
      display: block;
    }
  }

  /* how does work? animation: hideAnim 0.2s forwards; */

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    //25% {transform: rotate(90deg);}
    //50% {transform: rotate(180deg);}
    //50% {transform: rotate(270deg);}
    100% {
      transform: rotate(360deg);
    }
  }

  .simplebar-horizontal-only {
    .simplebar-track {
      &.simplebar-vertical {
        display: none !important;
      }
    }
    .simplebar-content-wrapper {
      overflow-y: hidden !important;
    }

    .simplebar-scroll-content {
      padding-right: 0 !important;
      overflow-y: hidden;
    }

    .simplebar-content {
      margin-right: 0 !important;
    }
  }

  //  animation: rotate 1s infinite;

  .beauty__scrollbar__div {
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: transparent;
      transition: all 4s ease;
      border-radius: 8px;
    }

    &:hover {
      ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.4);
      }
    }
  }

  .Toastify__toast-container--bottom-left {
    left: 30px;
    position: absolute;
  }

  .select__header__content__placeholder {
    color: #b1b5c4;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeLeft {
    0% {
      opacity: 0;
      transform: translateX(-30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeRight {
    0% {
      opacity: 0;
      transform: translateX(30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* animation: fadeIn 500ms ease-in-out */

  /* &[data-title] {
          position: relative;
        }
        &[data-title]:hover::after {
          content: attr(data-title);
          position: absolute;
          width: 180px;
          min-height: 35px;
          font-size: 12px;
          bottom: -69%;
          right: 0;
          background-color: #222;
          color: #fff;
          border-radius: 5px;
          padding: 10px;
          z-index: 3;
        }
        &[data-title]:hover::before {
          content: "";
          border-top: 10px solid transparent;
          border-bottom: 10px solid #222;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          position: absolute;
          bottom: -11%;
          right: calc((180px / 2) - 10px);
          z-index: 1;
        } */
  /* [data-title]:hover::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: calc((200px / 2) - 5px);
      width: 15px;
      height: 15px;
      transform: rotate(45deg);
      background-color: #222;
      border-radius: 10%;
      z-index: 1;
    } */
`);
