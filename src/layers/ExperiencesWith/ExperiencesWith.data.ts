import { IconType } from "react-icons";
import { FaAndroid, FaApple, FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { colors } from "../../theme/variables";

interface Stack {
  color: string;
  icon: IconType;
  href: string;
  size: number;
  title: string;
}
const rnUrl = import.meta.env.VITE_RN_URL;
const iosUrl = import.meta.env.VITE_IOS_URL;
const androidUrl = import.meta.env.VITE_ANDROID_URL;
const reactUrl = import.meta.env.VITE_REACT_URL;
const nodeUrl = import.meta.env.VITE_NODE_URL;
const htmlUrl = import.meta.env.VITE_HTML_URL;

export function getStackList() {
  const stacks: Stack[] = [
    {
      color: colors.rnColor,
      icon: TbBrandReactNative,
      href: rnUrl,
      size: 48,
      title: "React Native",
    },
    {
      color: colors.reactColor,
      icon: FaReact,
      href: reactUrl,
      size: 48,
      title: "React JS",
    },
    {
      color: colors.colorPrimary,
      icon: FaApple,
      href: iosUrl,
      size: 48,
      title: "Swift",
    },
    {
      color: colors.androidColor,
      icon: FaAndroid,
      href: androidUrl,
      size: 48,
      title: "Android",
    },

    {
      color: colors.nodeColor,
      icon: FaNodeJs,
      href: nodeUrl,
      size: 48,
      title: "Node JS",
    },
    {
      color: colors.htmlColor,
      icon: FaHtml5,
      href: htmlUrl,
      size: 48,
      title: "HTML/CSS",
    },
  ];

  return stacks;
}
