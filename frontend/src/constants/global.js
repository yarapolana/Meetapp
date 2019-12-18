import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root{
    height: 100%;
  }

  body{
    background-image: ${theme.color.gradient};
    background-size: 100%;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea, button{
    font-size: ${theme.size.body}px;
    letter-spacing: 0.4px;
    color: ${theme.color.white};
    font-family: Helvetica, sans-serif;
  }

  h1,h2,h3,h4,h5{
    letter-spacing: 0.1px;
  }

  hr{
    width: 100%;
    opacity: 0.1;
    border-color: ${theme.color.white};
    margin: 20px 0;
  }

  p{
    opacity: 0.8;
  }

  a {
    text-decoration: none;
    color: ${theme.color.white};
    transition: color 0.2s;

    &:hover {
        color: ${theme.color.white};
        opacity: 0.8;
      }
  }

  ul{
    list-style: none;
  }

  button{
    border: 0;
    cursor: pointer;
  }

  .react-datepicker__input-container {
    display: block !important;
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
    background-color: #9a68ed !important;
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
    background-color: #9a68ed !important;
  }
  .react-datepicker__month--selected, .react-datepicker__month--in-selecting-range, .react-datepicker__month--in-range {
    background-color: #9a68ed !important;
  }
  .react-datepicker__month--selected:hover, .react-datepicker__month--in-selecting-range:hover, .react-datepicker__month--in-range:hover {
    background-color: #8a57de !important;
  }
  .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range {
    background-color: #9a68ed !important;
  }
  .react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover,
  .react-datepicker__month-text--selected:hover,
  .react-datepicker__month-text--in-selecting-range:hover,
  .react-datepicker__month-text--in-range:hover {
    background-color: #8a57de !important;
  }
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected {
    background-color: #ad80f6 !important;
  }
  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__month-text--keyboard-selected:hover {
    background-color: #8a57de !important;
  }
  .react-datepicker__month-text.react-datepicker__month--selected:hover, .react-datepicker__month-text.react-datepicker__month--in-range:hover {
    background-color: #9a68ed !important;
  }
  .react-datepicker__close-icon::after {
    background-color: #9a68ed !important;
  }
  .react-datepicker-wrapper{
    width: 100%;
  }
  .react-datepicker__navigation--previous, .react-datepicker__navigation--next{
    width: 10px !important;
    height: 10px !important;
    margin: 0 !important;
  }
`;
