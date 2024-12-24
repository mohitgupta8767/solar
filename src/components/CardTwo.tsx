import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import analytical from "../Assets/analytical.png";
import { SidebarContext } from "./SidebarContext";
import { useContext } from 'react';
import { sidebarItems } from './Sidebar';
import chat1 from '../Assets/pvchatbot.png'
import ancillarybot from "../Assets/AI_PV1.jpg";
import predictiond from "../Assets/pred.png"

export default function CardTwo() {
    const { setIframeSrc } = useContext(SidebarContext);

    const cardData = [
        {
            id: 1,
            title: "Prediction Dashboard",
            image: predictiond,
            description: "Interactive dashboard to analyze historical component data, identify trends, and market fluctuations to aid informed strategic procurement decisions.",
            items: sidebarItems[4].href
        },
        {
            id: 2,
            title: "Analytical Dashboard",
            image: analytical,
            description: "This platform provides a price intelligence dashboard with 6 months price forecasting capabilities driven by multiple market, demand, and trend factors. It offers procurement recommendations by comparing the lowest predicted future price with the current spot price.",
            items: sidebarItems[1].href
        },
        {
            id: 3,
            title: "Ancillary Chat Bot",
            image: ancillarybot,
            description: "This specialized chatbot provides comprehensive insights into the Chinese and global solar industry through a user-friendly Q&A interface. Leveraging forecasts, reports, and real-time data, it delivers well-grounded information for decision-making.",
            items: sidebarItems[3].href
        },
        {
            id: 4,
            title: "PV Chat Bot",
            image: chat1,
            description: "This specialized chatbot provides comprehensive insights into the Chinese and global solar industry through a user-friendly Q&A interface. Leveraging forecasts, reports, and real-time data, it delivers well-grounded information for decision-making.",
            items: sidebarItems[2].href
        },
    ];


    const handleClick = (item: any) => {
        setIframeSrc(item.items);
    };

    return (
        <Grid container spacing={2}>
            {cardData.map((item) => (
                <Grid item xs={12} sm={6} key={item.id}>
                    <Card
                        sx={{
                            maxWidth: 500,
                            margin: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            cursor: 'pointer',
                            opacity: '0.9'
                        }}
                        onClick={() => handleClick(item)}
                    >
                        <div style={{ position: 'relative', width: '100%', height: '80px', overflow: 'hidden' }}>
                            <Image
                                src={item.image}
                                alt="image"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h6 className="text-[#0f7ba9] text-center" style={{ fontWeight: 600 }}>
                            {item.title}
                        </h6>
                        <CardContent sx={{ flexGrow: 1 }} style={{ paddingTop: "0", paddingBottom: "10px" }}>
                            <div style={{ fontWeight: 300, fontSize: "12px" }}>
                                {item.description}
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            ))
            }
        </Grid >
    );
}
