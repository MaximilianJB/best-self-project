import React from 'react';
import ComputerIcon from "@mui/icons-material/Computer";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import SavedSearchRoundedIcon from "@mui/icons-material/SavedSearchRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import NaturePeopleRoundedIcon from "@mui/icons-material/NaturePeopleRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";

const tileData = [
    {
      title: "Coding",
      Component: <ComputerIcon fontSize="large" />,
      color: "#A8D5E2",
      description:
        "Survey mentions Max's coding skills, like creating the Muv app.",
    },
    {
      title: "Leader",
      Component: <EmojiEventsRoundedIcon fontSize="large" />,
      color: "#D5A8D8",
      description:
        "People value Max's leadership, especially in group settings.",
    },
    {
      title: "Communicator",
      Component: <PhoneRoundedIcon fontSize="large" />,
      color: "#F2CF63",
      description:
        "Appreciated for being a good communicator, capable of deep conversations.",
    },
    {
      title: "Optimistic",
      Component: <WbSunnyRoundedIcon fontSize="large" />,
      color: "#F4CDAF",
      description: "Noted for optimism and willingness to face challenges.",
    },
    {
      title: "Confident",
      Component: <SecurityRoundedIcon fontSize="large" />,
      color: "#C3D8A8",
      description:
        "Survey responses highlight Max's confidence in various situations.",
    },
    {
      title: "Humble",
      Component: <NaturePeopleRoundedIcon fontSize="large" />,
      color: "#E7A8A8",
      description: "Acknowledged for being down-to-earth and approachable.",
    },
    {
      title: "Curious",
      Component: <SavedSearchRoundedIcon fontSize="large" />,
      color: "#A8B6D5",
      description:
        "Praised for a natural curiosity and interest in learning.",
    },
    {
      title: "Convener",
      Component: <HandshakeRoundedIcon fontSize="large" />,
      color: "#D5CBA8",
      description:
        "Known for the ability to facilitate group interactions and discussions.",
    },
  ];

export default tileData;
