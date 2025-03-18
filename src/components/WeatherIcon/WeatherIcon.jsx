import styles from './WeatherIcon.module.css'

export default function WeatherIcon ({weather, width}) {
  const weatherIcons = {
    Clear: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g clipPath="url(#a)" fill="#f1c40f">
            <path className={styles.blueIcon} d="M12 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM0 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM21 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM13 21a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2ZM6.343 17.657a1 1 0 0 1 0 1.414L4.93 20.485a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0ZM20.485 3.515a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0ZM3.515 3.515a1 1 0 0 1 1.414 0l1.414 1.414A1 1 0 1 1 4.93 6.343L3.515 4.93a1 1 0 0 1 0-1.414ZM17.657 17.657a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414ZM5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"></path>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#ffffff" d="M0 0h24v24H0z"></path>
            </clipPath>
          </defs>
        </g>
      </svg>
    ),
    Clouds: (
      <svg
      version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path
              className={styles.blueIcon}
              d="M416.296,232.076c-0.042,0-0.079,0.009-0.121,0.009c0.056-1.594,0.121-3.187,0.121-4.79 c0-76.646-62.131-138.771-138.763-138.771c-71.785,0-130.854,54.521-138.03,124.419c-10.066-3.113-20.755-4.791-31.842-4.791 C48.207,208.152,0,256.354,0,315.814c0,59.46,48.207,107.662,107.662,107.662h308.634c52.852,0,95.704-42.842,95.704-95.695 C512,274.919,469.148,232.076,416.296,232.076z"
            ></path>
          </g>
        </g>
      </svg>
    ),
    ScatteredClouds: (
      <svg
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path
              className={styles.blueIcon}
              d="M212.969,278.609c15.938-44.594,56.344-76.75,103.688-82.141c-15.469-44.016-57.375-75.5-106.656-75.5 c-62.438,0-113.109,50.594-113.109,113.047c0,29.781,11.531,56.859,30.375,77.078c21.672-20.156,50.734-32.547,82.672-32.547 C210.938,278.547,211.906,278.609,212.969,278.609z"
            ></path>
            <rect
              x="193.516"
              y="24.047"
              className={styles.blueIcon}
              width="32.938"
              height="63.406"
            ></rect>
            <polygon
              className={styles.blueIcon}
              points="117.984,118.734 73.156,73.906 49.859,97.188 94.688,142.031 "
            ></polygon>
            <rect
              y="217.563"
              className={styles.blueIcon}
              width="63.406"
              height="32.938"
            ></rect>
            <path
              className={styles.blueIcon}
              d="M49.859,370.844l23.266,23.328l17.578-17.594c2.766-14.109,7.969-27.344,15.219-39.266l-11.266-11.266 L49.859,370.844z"
            ></path>
            <polygon
              className={styles.blueIcon}
              points="370.125,97.188 346.813,73.891 302,118.734 325.281,142.031 "
            ></polygon>
            <path
              className={styles.blueIcon}
              d="M422.578,304.344c-9.234-42.828-47.281-74.922-92.859-74.922c-46.063,0-84.438,32.75-93.156,76.25 c-5.156-0.891-10.438-1.453-15.844-1.453c-50.75,0-91.875,41.125-91.875,91.859c0,50.75,41.125,91.875,91.875,91.875 c43.359,0,156.75,0,199.406,0c50.75,0,91.875-41.125,91.875-91.875C512,346.156,472.188,305.641,422.578,304.344z"
            ></path>
          </g>
        </g>
      </svg>
    ),
    Rain: (
      <svg
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path
              className={styles.blueIcon}
              d="M416.297,174.659c-0.047,0-0.084,0-0.121,0c0.056-1.594,0.121-3.178,0.121-4.791 c0-76.635-62.134-138.759-138.759-138.759c-71.789,0-130.848,54.52-138.024,124.417c-10.065-3.113-20.764-4.791-31.846-4.791 C48.211,150.735,0,198.936,0,258.395c0,59.458,48.211,107.66,107.669,107.66h308.628c52.852,0,95.703-42.842,95.703-95.703 C512,217.501,469.149,174.659,416.297,174.659z"
            ></path>
            <path
              className={styles.blueIcon}
              d="M96.905,453.445c0,15.162,12.293,27.446,27.456,27.446c15.162,0,27.455-12.283,27.455-27.446 c0-15.163-27.455-53.896-27.455-53.896S96.905,438.282,96.905,453.445z"
            ></path>
            <path
              className={styles.blueIcon}
              d="M230.456,453.445c0,15.162,12.301,27.446,27.455,27.446c15.173,0,27.456-12.283,27.456-27.446 c0-15.163-27.456-53.896-27.456-53.896S230.456,438.282,230.456,453.445z"
            ></path>
            <path
              className={styles.blueIcon}
              d="M364.024,453.445c0,15.162,12.283,27.446,27.455,27.446c15.154,0,27.456-12.283,27.456-27.446 c0-15.163-27.456-53.896-27.456-53.896S364.024,438.282,364.024,453.445z"
            ></path>
          </g>
        </g>
      </svg>
    ),
    Snow: (
      <svg
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path
              className={styles.blueIcon}
              d="M402.308,131.026c-0.043,0-0.076,0-0.11,0c0.051-1.454,0.11-2.9,0.11-4.372 C402.308,56.705,345.603,0,275.655,0c-65.518,0-119.432,49.763-125.982,113.563c-9.187-2.841-18.953-4.373-29.068-4.373 c-54.262,0-98.267,43.996-98.267,98.268c0,54.271,44.005,98.267,98.267,98.267h281.702c48.241,0,87.354-39.105,87.354-87.353 C489.662,170.131,450.549,131.026,402.308,131.026z"
            ></path>
            <circle
              className={styles.blueIcon}
              cx="370.034"
              cy="362.889"
              r="16.715"
            ></circle>
            <circle
              className={styles.blueIcon}
              cx="258.914"
              cy="362.889"
              r="16.715"
            ></circle>
            <path
              className={styles.blueIcon}
              d="M147.801,379.604c9.221,0,16.707-7.486,16.707-16.716c0-9.23-7.486-16.715-16.707-16.715 c-9.23,0-16.715,7.485-16.715,16.715C131.086,372.119,138.571,379.604,147.801,379.604z"
            ></path>
            <circle
              className={styles.blueIcon}
              cx="320.646"
              cy="428.151"
              r="16.715"
            ></circle>
            <circle
              className={styles.blueIcon}
              cx="209.533"
              cy="428.151"
              r="16.715"
            ></circle>
            <path
              className={styles.blueIcon}
              d="M147.801,478.578c-9.23,0-16.715,7.485-16.715,16.706c0,9.23,7.485,16.716,16.715,16.716 c9.23,0,16.716-7.486,16.716-16.716C164.517,486.063,157.031,478.578,147.801,478.578z"
            ></path>
            <path
              className={styles.blueIcon}
              d="M258.922,478.578c-9.23,0-16.716,7.485-16.716,16.706c0,9.23,7.486,16.716,16.716,16.716 c9.229,0,16.715-7.486,16.715-16.716C275.637,486.063,268.151,478.578,258.922,478.578z"
            ></path>
            <path
              className={styles.blueIcon}
              d="M370.034,478.578c-9.221,0-16.707,7.485-16.707,16.706c0,9.23,7.486,16.716,16.707,16.716 c9.23,0,16.716-7.486,16.716-16.716C386.75,486.063,379.264,478.578,370.034,478.578z"
            ></path>
          </g>
        </g>
      </svg>
    ),
    Thunderstorm: (
      <svg
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-51.2 -51.2 614.40 614.40"
        xmlSpace="preserve"
        fill="#ffffff"
        stroke="#ffffff"
        strokeWidth="0.00512"
        transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="6.144"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <polygon
              className={styles.blueIcon}
              points="177.531,359.77 118.698,359.77 89.488,443.068 113.559,443.068 87.539,512 182.015,407.982 143.371,407.982 "
            ></polygon>
            <polygon
              className={styles.blueIcon}
              points="297.865,359.77 239.041,359.77 209.831,443.068 233.892,443.068 207.873,512 302.348,407.982 263.705,407.982 "
            ></polygon>
            <polygon
              className={styles.blueIcon}
              points="418.207,359.77 359.375,359.77 330.165,443.068 354.226,443.068 328.215,512 422.682,407.982 384.047,407.982 "
            ></polygon>
            <path
              className={styles.blueIcon}
              d="M410.535,138.393c-0.045,0-0.081,0-0.117,0c0.053-1.536,0.117-3.064,0.117-4.618 C410.535,59.892,350.641,0,276.759,0c-69.21,0-126.146,52.561-133.065,119.947c-9.704-3.001-20.018-4.618-30.701-4.618 c-57.323,0-103.792,46.47-103.792,103.793c0,57.322,46.469,103.792,103.792,103.792h297.542c50.952,0,92.265-41.303,92.265-92.265 C502.799,179.696,461.487,138.393,410.535,138.393z"
            ></path>
          </g>
        </g>
      </svg>
    ),
    Default: (
      <svg
      version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path
              className={styles.blueIcon}
              d="M416.296,232.076c-0.042,0-0.079,0.009-0.121,0.009c0.056-1.594,0.121-3.187,0.121-4.79 c0-76.646-62.131-138.771-138.763-138.771c-71.785,0-130.854,54.521-138.03,124.419c-10.066-3.113-20.755-4.791-31.842-4.791 C48.207,208.152,0,256.354,0,315.814c0,59.46,48.207,107.662,107.662,107.662h308.634c52.852,0,95.704-42.842,95.704-95.695 C512,274.919,469.148,232.076,416.296,232.076z"
            ></path>
          </g>
        </g>
      </svg>
    ),
  }

const icon = weatherIcons[weather] || weatherIcons.Default

  return (
    <div className={styles.svgContainer} style={{width: width, display: 'inline-block'}}>
      {icon}
    </div>
  )
}