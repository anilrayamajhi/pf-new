$(document).ready(function () {
  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    //viewBoxSize: => use @default
    innerRadius: 600 / 3,
    //outerRadius: => use @default
    radiusMin: 50,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: [
        {text: "Calculator", count: "1", ref:"https://anilrayamajhi.github.io/calculator/", msg: "calculator clone"},
        {text: "Flip N' Match", count: "2", ref:"https://anilrayamajhi.github.io/Project_1/", msg: "Turn by turn two player game, flip and match logic."},
        {text: "Pong", count: "3", ref:"https://anilrayamajhi.github.io/PONG_phaser/", msg:"phaser practice with PONG"},
        {text: "GIvents", count: "4", ref:"http://arcane-bayou-90843.herokuapp.com/", msg: "Events posting and sharing site"},
        {text: "nUpath", count: "5", ref:"https://nupathapp.herokuapp.com/", msg: "Social Media for Students and schools"},
        {text: "Weather", count: "6", ref: "https://anilrayamajhi.github.io/angularServices_practice/", msg: "Angular Services implimentation"},
        {text: "protoSite", count: "7", ref: "https://protosite-node.herokuapp.com/", msg: "Build a simple business site just with cmd: Ctrl+V"},
        {text: "GILog", count: "8", ref: "https://gilog.herokuapp.com/", msg: "MERN App with simple blog post feature"},
        {text: "About Me", count: "9", ref: "https://www.figma.com/proto/WcL3Sx24uoo24SszOPmTb0qJ/Thing?node-id=0%3A1&scaling=scale-down&redirected=1", msg: "Full Stack Developer. Please feel free to click around."},
      ],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
      {
        name: "central-click",
        options: {
          text: "",
          style: {
            "font-size": "12px",
            "font-style": "italic",
            "font-family": "Source Sans Pro, sans-serif",
            //"font-weight": "700",
            "text-anchor": "middle",
            "fill": "white"
          },
          attr: {dy: "65px"},
          centralClick: function() {
            alert("Here is more details!!");
          }
        }
      },
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "count",
              classed: {count: true},
              style: {
                "font-size": "12px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {// Line #1
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "14px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "20px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },

            {// Line #2
              textField: "msg",
              // classed: {msg: true},
              style: {
                "font-size": "0px",
                "font-style": "italic",
                "font-family": "Source Sans Pro, sans-serif",
                "font-weight": "700",
                "text-anchor": "middle",
                "fill": "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }

          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "0px"},
              attr: {}
            },
            {// Line #1
              style: {"font-size": "30px"},
              attr: {dy: "-37px"}
            },
            {// Line #2
              style: {"font-size": "14px"},
              attr: {dy: "37px"}
            }
          ]
        }
      }]
  });
});
