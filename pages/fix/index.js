import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function Bug({}) {
  const [isWindowReady, setIsWindowReady] = React.useState(false);
  const [adSlots, setAdslots] = React.useState({});
  React.useEffect(() => {
    setAdslots({
      adSlot1: {
        site: "study",
        adSpace: "Neuron",
        size: "970x250",
        dealId: "deal_b9_Dominos_Client_796693_Neuron",
        noAd: "1",
      },
      adSlot2: {
        site: "study",
        adSpace: "Neuron",
        size: "300x250",
        dealId: "deal_b9_Dominos_Client_796693_Neuron",
        noAd: "1",
      },
    });
    setIsWindowReady(true);
  }, []);

  return (
    <>
      <Box
        id={"banner"}
        w="100%"
        sx={{ aspectRatio: 970 / 250 + "" }}
        bg="red.500"
      >
        {isWindowReady && <Iframetag id="banner" e9={adSlots.adSlot1} />}
      </Box>
      <Box w="100%" position="relative">
        <Image src="/bloomberg.webp" w="100%" draggable={false} />
        {/* <Box
          id={"banner"}
          w="300px"
          sx={{ aspectRatio: 300 / 250 + "" }}
          bg="red.500"
          position="absolute"
          top="10%"
          left="10%"
        >
          {isWindowReady && <Iframetag id="banner" e9={adSlots.adSlot1} />}
        </Box> */}
      </Box>
    </>
  );
}

function Iframetag(param) {
  (function () {
    const tf_url = "//tags.expo9.exponential.com/tags/Study/Neuron/tags.js";
    window.e9 = param.e9;
    const isIEOrOpera =
      navigator?.appVersion?.indexOf("MSIE") !== -1 ||
      navigator?.userAgent?.indexOf("Opera") !== -1;
    const iframeID = "expo_" + new Date().getTime();
    const width = e9.size.split("x")[0];
    const height = e9.size.split("x")[1];
    const frameTag = `<iframe src="about:blank" id=${iframeID} width=${width} height=${height} marginwidth=0 align="center" marginheight=0 hspace=0 vspace=0 frameBorder=0 scrolling=no allowTransparency=true > </iframe>`;
    document.getElementById(param.id).innerHTML = frameTag;
    const idoc = document.getElementById(iframeID).contentWindow;

    const content = `
           <!DOCTYPE html>
            <html>
              <head></head>
              <body style="margin-left:0;margin-top:0px;">
                  <script> var e9 = {...parent.window.e9}; var inSingleAsyncFrame = true; </script>
                  <script type="text/javascript" src=${tf_url}>  </script>
              </body>
            </html>
      `;

    if (isIEOrOpera === true) {
      idoc.contents = content;
      idoc.location.replace('javascript:window["contents"]');
    } else {
      idoc.document.open();
      idoc.document.write(content);
      idoc.document.close();
    }
  })();
}
