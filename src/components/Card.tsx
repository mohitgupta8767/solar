import Image from "next/image";
import React from "react";
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import wafer from "../Assets/pvindustry.png";


function CardMui() {
  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        opacity: '0.9'
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '120px', overflow: 'hidden' }}>
        <Image
          src={wafer}
          alt="image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardContent sx={{ flexGrow: 1 }}>
        <div style={{ fontWeight: 300 }}>
          China's solar PV industry maintains a dominant global position,
          controlling all key segments of the supply chain from polysilicon
          production to module assembly. This market leadership is driven by
          substantial investments in capacity expansion, technological
          advancements, and stringent government-backed efficiency and
          environmental standards. Key players like LONGi, TCL Zhonghuan, JA
          Solar, Trina Solar, JinkoSolar, and Canadian Solar lead respective
          segments, consistently pushing cost reductions and performance
          improvements.
        </div>
      </CardContent>
    </Card>

  );
}

export default CardMui;
