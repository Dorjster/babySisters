// Imports -----
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Link } from "@mui/material";

// Mui Imports -----
import Rating, { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action,
  },
}));

// Custom Icons -----
const customIcons: {
  [index: string]: {
    href: string;
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    href: "www.facebook.com",
    icon: <FacebookRoundedIcon className="text-[#389ba7] w-[45px] h-[45px]" />,
    label: "facebook",
  },
  2: {
    href: "www.instagram.com",
    icon: <InstagramIcon className="text-[#389ba7] w-[45px] h-[45px]" />,
    label: "instagramm",
  },
  3: {
    href: "www.pinterest.com",
    icon: <PinterestIcon className="text-[#389ba7] w-[45px] h-[45px]" />,
    label: "pinteres",
  },
  4: {
    href: "www.linkedin.com",
    icon: <LinkedInIcon className="text-[#389ba7] w-[45px] h-[45px]" />,
    label: "linkedin",
  },
  5: {
    href: "www.youtube.com",
    icon: <YouTubeIcon className="text-[#389ba7] w-[45px] h-[45px]" />,
    label: "Youtube",
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export default function RadioGroupRating() {
  return (
    <StyledRating
      className="flex gap-4"
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
      getLabelText={(value: number) => customIcons[value].label}
    />
  );
}
