import React from "react";
import Script from "next/script";
import { Box, Image, VStack } from "@chakra-ui/react";
import Head from "next/head";

const IN_PAGE_BANNER_ID = "in-page-banner";
const TOP_BANNER_ID = "top-banner";

export default function Bloomberg({}) {
  return (
    <>
      <Head>
        <script src="/AdSlots.js" />
        <script src="//tags.expo9.exponential.com/tags/Study/Neuron/tags.js"></script>
      </Head>

      <VStack w="100%" spacing="0">
        <Box
          id={TOP_BANNER_ID}
          w="100%"
          sx={{ aspectRatio: 970 / 250 + "" }}
          bg="red.500"
        >
          <VdxAdRenderer slotname={"adSlot1"} />
        </Box>

        <Box w="100%" position="relative">
          <Image src="/bloomberg.webp" w="100%" draggable={false} />
          {/* <Box
            data-re-aoi-name={IN_PAGE_BANNER_ID}
            position="absolute"
            width="20%"
            top="13%"
            left="71.5%"
            sx={{ aspectRatio: 970 / 250 + "" }}
            bg="blue.500"
            zIndex={99}
          >
            <VdxAdRenderer slotname={"adSlot1"} />
          </Box> */}
        </Box>
      </VStack>
    </>
  );
}

function VdxAdRenderer({ slotname }) {
  return (
    <>
      <div id={`tfasyncid_${slotname}`}>
        <Script>{`e9Manager.displayAdSlot("${slotname}");`}</Script>
      </div>
    </>
  );
}
