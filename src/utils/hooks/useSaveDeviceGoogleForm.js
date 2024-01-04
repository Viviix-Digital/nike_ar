import { detect } from "detect-browser";
const browser = detect();
const OSKey = "{OS}";
const BrowserKey = "{BROWSER}";
const BrowserVersionKey = "{BROWSER_VERSION}";
const DateKey = "{DATE}";
const TimeKey = "TIME";
let formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSe9IcHwYqSM5pMQ4eof7K6bB32tSJVq8NtC0-iGUSqmfRL7yA/formResponse?submit=Submit&usp=pp_url&entry.1839595884=${OSKey}&entry.476893925=${BrowserKey}&entry.280506093=${BrowserVersionKey}&entry.744535424=${DateKey}&entry.554593021=${TimeKey}`;

const PLAY_TIMES_KEY = "play-times";

const useSaveDeviceGoogleForm = () => {
  const generateDateStr = () => {
    const today = new Date();
    const yyyy = today.getFullYear();

    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = yyyy + "-" + mm + "-" + dd;
    return formattedToday;
  };

  const generateTime = () => {
    const today = new Date();
    let hh = today.getHours();
    let mm = today.getMinutes();

    if (hh < 10) hh = "0" + hh;
    if (mm < 10) mm = "0" + mm;

    return `${hh}:${mm}`;
  };
  const saveDevice = async () => {
    let times = window.localStorage.getItem(PLAY_TIMES_KEY);

    if (!times) times = 0;
    if (times > 0) return;

    formUrl = formUrl.replace(OSKey, browser.os);
    formUrl = formUrl.replace(BrowserKey, browser.name);
    formUrl = formUrl.replace(BrowserVersionKey, browser.version);

    formUrl = formUrl.replace(DateKey, generateDateStr());
    formUrl = formUrl.replace(TimeKey, generateTime());

    await fetch(formUrl, { mode: "no-cors" });
    window.localStorage.setItem(PLAY_TIMES_KEY, 1);
  };

  return {
    saveDevice,
  };
};

export default useSaveDeviceGoogleForm;
