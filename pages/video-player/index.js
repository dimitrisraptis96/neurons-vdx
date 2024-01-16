import { Box, Image, Center } from "@chakra-ui/react";
import React from "react";

export default function Bug({}) {
  const [current, setCurrent] = React.useState(0);
  const [videos, setVideos] = React.useState([
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
    {
      ad: {
        id: "adSlot1",
        site: "study",
        adSpace: "Neuron",
        size: "970x250",
        dealId: "deal_b9_Dominos_Client_796693_Neuron",
        noAd: "1",
        width: 970,
        height: 250,
      },
      isAd: true,
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    },
  ]);

  const currentVideo = videos[current];

  function next() {
    setCurrent(current + 1);
  }

  return (
    <>
      {currentVideo && (
        <Center
          w="100%"
          sx={{
            aspectRatio: 970 / 250 + "",
          }}
          bg="gray.500"
        >
          {currentVideo?.isAd ? (
            <Box id={currentVideo?.ad.id}>
              <VdxRenderer
                id={currentVideo?.ad.id}
                width={currentVideo?.ad.width}
                height={currentVideo?.ad.height}
                e9={currentVideo?.ad}
                next={next}
              />
            </Box>
          ) : (
            <VideoPlayer src={currentVideo?.src} next={next} />
          )}
        </Center>
      )}

      <Box w="100%" position="relative">
        <Image src="/bloomberg.webp" w="100%" draggable={false} />

        <video />
      </Box>
    </>
  );
}

function VideoPlayer({ src, next }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const video = ref.current;

    if (video) {
      video.addEventListener("ended", next);
      video.play();
    }

    return () => {
      if (video) video.removeEventListener("ended", next);
    };
  }, [ref.current]);

  return <video controls muted autplay ref={ref} src={src} />;
}

function VdxRenderer({ e9, id, width, height, next }) {
  React.useLayoutEffect(() => {
    const tf_url = "//tags.expo9.exponential.com/tags/Study/Neuron/tags.js";
    window.e9 = e9;
    const isIEOrOpera =
      navigator?.appVersion?.indexOf("MSIE") !== -1 ||
      navigator?.userAgent?.indexOf("Opera") !== -1;
    const iframeID = "expo_" + new Date().getTime();

    const frameTag = `<iframe src="about:blank" id=${iframeID} width=${width} height=${height} marginwidth=0 align="center" marginheight=0 hspace=0 vspace=0 frameBorder=0 scrolling=no allowTransparency=true > </iframe>`;
    document.getElementById(id).innerHTML = frameTag;
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

    setTimeout(next, 4000);
  }, []);

  return null;
}
