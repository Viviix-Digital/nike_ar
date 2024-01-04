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
  const saveDevice = async () => {
    let times = window.localStorage.getItem(PLAY_TIMES_KEY);
    if (!times) times = 0;
    if (times > 0) return;

    formUrl = formUrl.replace(OSKey, browser.os);
    formUrl = formUrl.replace(BrowserKey, browser.name);
    formUrl = formUrl.replace(BrowserVersionKey, browser.version);

    const date = new Date();
    formUrl = formUrl.replace(
      DateKey,
      `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
    );
    formUrl = formUrl.replace(
      TimeKey,
      `${date.getHours()}:${date.getMinutes()}`
    );
    console.log(formUrl);
    const response = await fetch(formUrl);
    if (response.status == 200) {
      window.localStorage.setItem(PLAY_TIMES_KEY, 1);
    }
  };

  return {
    saveDevice,
  };
};

export default useSaveDeviceGoogleForm;
