import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle(
    ({ theme }) => css`

      @font-face {
        font-family: "DM Sans";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local("DMSans-Regular"), url("../../public/fonts/DMSans-Regular.ttf") format("truetype");
      }

      @font-face {
        font-family: "DM Sans";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local("DMSans-Bold"), url("../../public/fonts/DMSans-Bold.ttf") format("truetype");
      }

      html,
      body {
        font-family: 'Oxanium', cursive;
        background-color: transparent;
        height: 100%;
        margin: 0 auto;
        padding: 0 10px;
        max-width: 1280px;

        &::before {
          content: "";
          background-image: url("/images/logo/background.png");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .shadow-sm {
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }

        .shadow-md {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .shadow-lg {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .shadow-xl {
          box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.4), 0 0 10px -5px rgba(0, 0, 0, 0.3);
        }
        
        .text-shadow-xl {
          text-shadow: 0 0 20px rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.3);
        }
      }

      * {
        box-sizing: border-box;
        color: ${theme.color.textPrimary};

        //Animations
        @keyframes bounce {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes fade {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }


      }


    `
);