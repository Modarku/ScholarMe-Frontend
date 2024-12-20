import onboarding1 from "@/assets/images/onboarding1.png";
import onboarding2 from "@/assets/images/onboarding2.png";
import onboarding3 from "@/assets/images/onboarding3.png";

import navhome from "@/assets/images/nav-home.png";
import navflashcard from "@/assets/images/nav-flashcard.png";
import navprofile from "@/assets/images/nav-profile.png";

import icondefault from "@/assets/images/default-user-icon.png"

import cardplus from "@/assets/images/cardplus.png"
import edit from "@/assets/images/editicon.png"
import trash from "@/assets/images/trashicon.png"

import { router } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";
import CustomButton from "@/components/CustomButton";

export const icons = {
  navhome,
  navflashcard,
  navprofile,
  cardplus,
  icondefault,
  edit,
  trash,
};

const onboarding = [
  {
    id: 1,
    title: "Numerous free trial \ncourses",
    subtitle: "Free courses for you to \ndiscover!",
    image: onboarding1,
    button: null,
  },
  {
    id: 2,
    title: "Quick and easy learning",
    subtitle:
      "Accessible services provided \nin various ways, to accompany \nall your learning styles!",
    image: onboarding2,
    button: null,
  },
  {
    id: 3,
    title: "Create your own \nstudy plan",
    subtitle:
      "Study at your own pace! \nMaking yourself consistent \nand motivated",
    image: onboarding3,
    button: (
      <SafeAreaView className="w-full justify-center justify between">
        <CustomButton
          className="px-20 mx-1 mt-10"
          title="Sign in"
          onPress={() => {
            router.replace("/(auth)/signin");
          }}
        />
        <CustomButton
          className="px-20 mx-1 mt-10"
          title="Sign up"
          onPress={() => {
            router.replace("/(auth)/signup");
          }}
        />
      </SafeAreaView>
    ),
  },
];

export default onboarding;
