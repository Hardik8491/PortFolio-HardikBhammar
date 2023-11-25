import { SocialIcon } from "react-social-icons";

export const social = [
  {
    socialIcon: (
      <SocialIcon
        network="facebook"
        fgColor="black"
        
        bgColor="#284be5"
        className="  fill-[#284be5]  cursor-pointer hover:fill-accent"
        style={{ height: '40px', width:'40px' }}
      />
      
    ),
    socialLink: "#",
    socialTitle: "Facebook",
  },

  {
    socialIcon: (
      <SocialIcon
        network="tumblr"
        fgColor="black"
        color="black"
        style={{ height: '40px', width:'40px' }}
        className="h-5 w-5 lg:h-10 lg:w-10  fill-green-900 cursor-pointer group-hover:fill-[#284be5]"
      />
    ),
    socialLink: "#",
    socialTitle: "Tumblr",
  },
  {
    socialIcon: (
      <SocialIcon
        network="twitter"
        fgColor="black"
        bgColor="#0ddae1"
        style={{ height: '40px', width:'40px',  }}
        className="h-5 w-5 lg:h-10 lg:w-10 file:bg-green-500   hover:fill-accent"
      />
    ),
    // style={{ backgroundImage: `url(${PatternImg2})` }}
    socialLink: "#",
    socialTitle: "Facebook",
  },
  //  {
  //   socialIcon:(
  //   <BsFacebook/>

  //   ),
  //   socialLink: "#",
  //    socialTitle: "Tumblr",
  // },
  // {
  //   socialIcon:(
  //   <BsFacebook/>

  //   ),
  //   socialLink: "#",
  //    socialTitle: "Twitter",
  // }
];

// {
//   socialIcon: (
//     <FacebookIcon className="h-5 w-5 lg:h-10 lg:w-10 fill-accent hover:fill-accent"></FacebookIcon>
//   ),
//   socialLink: "https://www.facebook.com/",
//   socialTitle: "Facebook",
// },
// {
//   socialIcon: (
//     <TumblrIcon className="h-5 w-5 lg:h-10 lg:w-10 fill-[#3d5a70] hover:fill-accent"></TumblrIcon>
//   ),
//   socialLink: "#",
//   socialTitle: "Tumblr",
// },
// {
//   socialIcon: (
//     <TwitterIcon className="h-5 w-5 lg:h-10 lg:w-10 fill-[#0ddae1] hover:fill-accent"></TwitterIcon>
//   ),
//   socialLink: "https://twitter.com/",
//   socialTitle: "Twitter",
// },
