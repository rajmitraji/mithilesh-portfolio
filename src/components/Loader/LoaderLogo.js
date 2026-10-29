import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="raw_logo"
        width="60%"
        height="50%"
        viewBox="0 0 440 315"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Hexagon */}
        <path
          className="myHexagon"
          d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476L153.455 86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234L297.545 160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
          stroke={theme.body}
          strokeWidth="3.5"
        />

        {/* Inner Hexagon */}
        <path
          className="myHexagon"
          d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
          stroke={theme.body}
          strokeWidth="3.5"
        />

        {/* Monogram Letters MK in Times New Roman / Roman Serif */}
        <text
          className="monogram"
          x="193"
          y="136"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Times New Roman', Times, serif"
          fontSize="50"
          fontWeight="bold"
          fill="none"
          stroke={theme.body}
          strokeWidth="2.5"
        >
          M
        </text>
        <text
          className="monogram"
          x="247"
          y="136"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Times New Roman', Times, serif"
          fontSize="50"
          fontWeight="bold"
          fill="none"
          stroke={theme.body}
          strokeWidth="2.5"
        >
          K
        </text>

        {/* Full Name in Times New Roman / Roman Serif */}
        <text
          className="author-name"
          x="220"
          y="256"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Times New Roman', Times, serif"
          fontSize="34"
          fontWeight="700"
          letterSpacing="3"
          fill="none"
          stroke={theme.body}
          strokeWidth="1.2"
        >
          Mithilesh Kumar
        </text>

        {/* Elegant Accent Line */}
        <line
          className="accent-line"
          x1="120"
          y1="276"
          x2="320"
          y2="276"
          stroke={theme.body}
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.6"
        />

        {/* Subtitle */}
        <text
          className="author-subtitle"
          x="220"
          y="292"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Times New Roman', Times, serif"
          fontSize="10"
          letterSpacing="4"
          fill={theme.body}
          opacity="0.85"
        >
          FOUNDER • SYSTEMS ARCHITECT
        </text>

        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            .myHexagon {
              stroke-dasharray: 800;
              stroke-dashoffset: 800;
              -webkit-animation: dash 3.5s linear forwards 0.3s;
              animation: dash 3.5s linear forwards 0.3s;
            }

            @-webkit-keyframes dash {
              from { stroke-dashoffset: 800; }
              to { stroke-dashoffset: 0; }
            }
            @keyframes dash {
              from { stroke-dashoffset: 800; }
              to { stroke-dashoffset: 0; }
            }

            .monogram {
              stroke-dasharray: 320;
              stroke-dashoffset: 320;
              -webkit-animation: monogramDash 2.5s ease forwards 0.8s, monogramFill 1.2s ease forwards 2.4s;
              animation: monogramDash 2.5s ease forwards 0.8s, monogramFill 1.2s ease forwards 2.4s;
            }

            @keyframes monogramDash {
              0% { stroke-dashoffset: 320; fill: transparent; }
              100% { stroke-dashoffset: 0; fill: transparent; }
            }

            @keyframes monogramFill {
              0% { fill: transparent; }
              100% { fill: rgba(237, 249, 254, 0.18); }
            }

            .author-name {
              stroke-dasharray: 600;
              stroke-dashoffset: 600;
              -webkit-animation: nameDash 2.8s ease forwards 1s, nameFill 1.2s ease forwards 2.8s;
              animation: nameDash 2.8s ease forwards 1s, nameFill 1.2s ease forwards 2.8s;
            }

            @keyframes nameDash {
              0% { stroke-dashoffset: 600; fill: transparent; opacity: 0; }
              25% { opacity: 1; }
              100% { stroke-dashoffset: 0; fill: transparent; opacity: 1; }
            }

            @keyframes nameFill {
              0% { fill: transparent; }
              100% { fill: ${theme.body}; }
            }

            .accent-line {
              stroke-dasharray: 200;
              stroke-dashoffset: 200;
              -webkit-animation: lineDash 2s ease forwards 2s;
              animation: lineDash 2s ease forwards 2s;
            }

            @keyframes lineDash {
              from { stroke-dashoffset: 200; }
              to { stroke-dashoffset: 0; }
            }

            .author-subtitle {
              opacity: 0;
              -webkit-animation: fadein 1.5s ease forwards 2.8s;
              animation: fadein 1.5s ease forwards 2.8s;
            }

            @keyframes fadein {
              from { opacity: 0; }
              to { opacity: 0.85; }
            }
          `,
            }}
          />
        </defs>
      </svg>
    );
  }
}

export default LogoLoader;
