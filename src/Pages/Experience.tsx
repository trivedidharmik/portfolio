import React, { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Image,
  Wrap,
  WrapItem,
  Icon,
  Tooltip,
  useColorMode,
  useDisclosure,
  Box,
  VStack,
  Circle,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import { BsCaretRightFill } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Experience() {
  const imageVestcor = "/vestcor.jpg";
  const imageFCS = "/FcsUnb.png";

  const sections = [
    // {
    //   company: {
    //     name: "Gabon Construction Inc.",
    //     image: imageGabon,
    //   },
    //   position: {
    //     name: "Software Developer",
    //     year: "September 2024 - Present",
    //   },
    //   achievements: [
    //     "Spearheaded the development of customized features, integrating an advanced order management system to refine procurement, enable end-to-end product tracking, and provide real-time project updates on milestones, timelines, and changes.",
    //     "Executed regular updates to mirror the latest industry trends, company news, and project portfolios, leading to increased user engagement and enhanced customer satisfaction.",
    //   ],
    //   x_before: 100,
    //   x_after: 0,
    //   y_before: 0,
    //   y_after: 0,
    // },
    {
      company: {
        name: "Vestcor",
        image: imageVestcor,
      },
      position: {
        name: "Programmer Analyst",
        year: "January 2024 - August 2024",
      },
      achievements: [
        "Fixed database design flaws, improving data integrity and reducing dependency-related errors.",
        "Developed and deployed custom automation solutions using C# and .NET Core, improving process efficiency across departments.",
        "Optimized LINQ queries, resulting in a 94% reduction in execution time for data operations.",
        "Ensured robust testing and deployment.",
      ],
      x_before: -100,
      x_after: 0,
      y_before: 0,
      y_after: 0,
    },
    {
      company: {
        name: "Vestcor",
        image: imageVestcor,
      },
      position: {
        name: "Programmer Analyst",
        year: "September 2022 - April 2023",
      },
      achievements: [
        "Designed and implemented a user-friendly WPF application from the ground up using MVVM architecture and .NET Core, integrating API connectivity with SQL Server for efficient data handling.",
        "Utilized SSRS to meet reporting requirements and standards, ensuring efficient data visualization and analysis.",
        "Provided recommendations after researching the feasibility, benefits, and challenges of developing a PowerApp for internal use.",
      ],
      x_before: 100,
      x_after: 0,
      y_before: 0,
      y_after: 0,
    },
    {
      name: "TA",
      company: {
        name: "Faculty Of Computer Science, UNB",
        image: imageFCS,
      },
      position: {
        name: "Undergraduate Teaching Assistant",
        year: "September 2023 -  Present",
      },
      achievements: [
        "Assist instructors with course delivery for CS1103: Introduction to Databases (Winter 2025 & Fall 2023) and CS2383: Data Structures and Algorithms (Fall 2024).",
        "Responsibilities include marking assignments and quizzes, conducting tutorials, and providing lab assistance and student consultations.",
        "Support students by clarifying key concepts, addressing queries, and fostering a collaborative learning environment.",
        "Collaborate with instructors to align on expectations and deliver high-quality teaching support.",
      ],
      x_before: -100,
      x_after: 0,
      y_before: 0,
      y_after: 0,
    },
  ];

  const { colorMode } = useColorMode();
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${
      colorMode === "light" ? "#2196F3, #FF5722" : "#FF5722, #2196F3"
    })`,
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
  };

  const invertStyle = colorMode === "dark" ? { filter: "invert(100%)" } : {};
  const [isBigSize] = useMediaQuery("(min-width: 760px)");

  const fetchTranscript = (transcript: string) => {
    window.open(transcript, "_blank");
  };

  const [visibleAchievements, setVisibleAchievements] = useState<number[]>([]);

  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      fontFamily="monospace"
      width="100%"
    >
      <Flex justifyContent="center" margin={10}>
        <Heading style={gradientStyle}>EXPERIENCE</Heading>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        gap="9"
        flexDirection="column"
        padding={["0", "50"]}
      >
        {sections.map((section, index) => (
          <motion.div
            initial={{
              opacity: 0,
              x: section.x_before,
              y: section.y_before,
              width: "70%",
            }}
            animate={{
              opacity: 1,
              x: section.x_after,
              y: section.y_after,
              width: "70%",
            }}
            transition={{ duration: 2 }}
            key={`${section.name}_${index}`}
            onClick={() => {
              setVisibleAchievements((prev) => {
                if (prev.includes(index)) {
                  return prev.filter((i) => i !== index);
                } else {
                  return [...prev, index];
                }
              });
            }}
          >
            <Flex
              border={`1px solid ${colorMode === "light" ? "black" : "white"}`}
              borderRadius="lg"
              boxShadow={
                colorMode === "light"
                  ? "0 6px 8px rgba(0, 0, 0, 0.7)"
                  : "0 6px 8px rgba(255, 255, 255, 0.7)"
              }
              padding={["3", "5"]}
              gap={5}
              flexDirection={["column", "row"]}
              cursor="pointer"
              alignItems="center"
            >
              <Image
                src={section.company.image}
                width="75px"
                height="75px"
                alt={section.name}
                backgroundColor="white"
              ></Image>

              <Flex flexDirection="column" width="100%" gap={1}>
                <Flex
                  justifyContent={["space-between"]}
                  fontSize={["xs", "lg"]}
                  fontWeight="bold"
                >
                  <Text>{section.company.name}</Text>
                  <Text>{section.position.year}</Text>
                </Flex>
                <Flex
                  justifyContent="space-between"
                  fontSize={["2xs", "lg"]}
                  fontStyle="oblique"
                >
                  <Text>{section.position.name}</Text>
                </Flex>
                <Flex mt="5" flexDirection="column">
                  {section.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0, opacity: 0, translateY: "100%" }}
                      animate={
                        visibleAchievements.includes(index)
                          ? { height: "auto", opacity: 1, translateY: 0 }
                          : { height: 0, opacity: 0, translateY: "100%" }
                      }
                      exit={{ height: 0, opacity: 0, translateY: "100%" }}
                      transition={{ duration: 1 }}
                    >
                      <Flex alignItems="center">
                        <Text fontSize={["xs", "lg"]}>
                          <Icon
                            mr="2"
                            as={BsCaretRightFill}
                            boxSize={4}
                            color="peru"
                          />
                          {achievement}
                        </Text>
                      </Flex>
                    </motion.div>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </motion.div>
        ))}
      </Flex>

      {/* {isBigSize && (
        <div
          style={{
            content: "''",
            backgroundImage: "url('./Experience.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay",
            position: "absolute",
            top: 70,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
            opacity: colorMode === "light" ? 0.03 : 0.1,
            zIndex: 0,
            pointerEvents: "none",
            ...invertStyle,
          }}
        />
      )} */}
    </Flex>
  );
}
