import React from "react";
import "./icons.css";

const Share = ({ width, height, postTitle, postUrl, hashtags, via }) => {
  let whatsapp = `https://api.whatsapp.com/send?text=${postTitle} ${postUrl} `;
  let facebook = `  https://www.facebook.com/sharer.php?u=${postUrl}  `;
  let twitter = `https://twitter.com/intent/tweet?url=${postUrl}&text=${postTitle}&via=${via}&hashtags=${hashtags} `;

  // https://www.facebook.com/sharer.php?u=https%3A%2F%2Fcitinewsroom.com%2F2021%2F01%2Fsamsung-unveils-galaxy-s21-and-galaxy-s21%2F
  // https://twitter.com/intent/tweet?text=Samsung+unveils+Galaxy+S21+and+Galaxy+S21%2B+via+%40citi973&url=https%3A%2F%2Fcitinewsroom.com%2F2021%2F01%2Fsamsung-unveils-galaxy-s21-and-galaxy-s21%2F
  // https://api.whatsapp.com/send?text=Samsung+unveils+Galaxy+S21+and+Galaxy+S21%2B%0Ahttps%3A%2F%2Fcitinewsroom.com%2F2021%2F01%2Fsamsung-unveils-galaxy-s21-and-galaxy-s21%2F
  // https://twitter.com/share?text=Latest%20%27unrecognisable%27%20photo%20of%20PPP%20founder%20Dr%20Paa%20Kwesi%20Nduom%20causes%20stir%20online&url=https%3A%2F%2Fyen.com.gh%2F181155-latest-unrecognisable-photo-ppp-founder-dr-paa-kwesi-nduom-stir-online.html%3Futm_source%3Dtwitter%26utm_medium%3Dps

  // [post-url]	The url for your blog post
  // [post-img]	The image/thumbnail for your blog post
  // [post-title]	The blog post title of the url you want to share
  // [via]	optional Twitter username of content author (don’t include “@”)
  // [hashtags]	optional Hashtags appended onto the tweet (comma separated. don’t include “#”)

  return (
    <div className="social">
      <div className="whatsapp">
        <svg
          fill="currentColor"
          className="bi bi-facebook"
          viewBox="0 0 16 16"
          id="facebook"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          onClick={whatsapp}
        >
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />{" "}
        </svg>
      </div>
      <div className="facebook">
        <svg
          fill="currentColor"
          className="bi bi-facebook"
          viewBox="0 0 16 16"
          id="facebook"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          onClick={facebook}
        >
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />{" "}
        </svg>
      </div>
      <div className="twitter">
        <svg
          l
          fill="currentColor"
          className="bi bi-twitter"
          viewBox="0 0 16 16"
          id="twitter"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          onClick={twitter}
        >
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0016 3.542a6.658 6.658 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.087.793A3.286 3.286 0 007.875 6.03a9.325 9.325 0 01-6.767-3.429 3.289 3.289 0 001.018 4.382A3.323 3.323 0 01.64 6.575v.045a3.288 3.288 0 002.632 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.614-.057 3.283 3.283 0 003.067 2.277A6.588 6.588 0 01.78 13.58a6.32 6.32 0 01-.78-.045A9.344 9.344 0 005.026 15z" />{" "}
        </svg>
      </div>
    </div>
  );
};

export default Share;
