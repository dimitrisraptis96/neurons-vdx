import { Box, Image } from "@chakra-ui/react";
import Script from "next/script";
import React from "react";

export default function Bug({}) {
  React.useEffect(() => {
    window.e9AdSlots = {
      adSlot1: {
        site: "study",
        adSpace: "Neuron",
        size: "970x250",
        dealId: "deal_b9_Dominos_Client_796693_Neuron",
        noAd: "1",
      },
    };

    setIsWindowReady(true);
  }, []);
  const [isWindowReady, setIsWindowReady] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);

  console.log({ isReady, isWindowReady });
  return (
    <>
      {isWindowReady && (
        <Script
          src="//tags.expo9.exponential.com/tags/Study/Neuron/tags.js"
          onLoad={() => setIsReady(true)}
        />
      )}

      <Box
        id={"banner"}
        w="100%"
        sx={{ aspectRatio: 970 / 250 + "" }}
        bg="red.500"
      >
        <VdxAdRenderer slotname={"adSlot1"} isReady={isReady} />
      </Box>

      <Box w="100%" position="relative">
        <Image src="/bloomberg.webp" w="100%" draggable={false} />
      </Box>
    </>
  );
}

function VdxAdRenderer({ slotname, isReady }) {
  return (
    <>
      <div id={`tfasyncid_${slotname}`}>
        {isReady && (
          <Script>{`e9Manager.displayAdSlot("${slotname}");`}</Script>
        )}
      </div>
    </>
  );
}
