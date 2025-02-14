import {
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Stack,
  useColorMode,
  Text,
  Image,
  HStack,
  VStack,
  Tooltip,
  Icon,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaAws, FaExternalLinkAlt, FaReact } from "react-icons/fa";
import { BiLogoGoogleCloud } from "react-icons/bi";
import {
  SiKubernetes,
  SiHeroku,
  SiDocker,
  SiSpring,
  SiDjango,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiJquery,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiRender,
  SiPostman,
  SiChakraui,
  SiAwslambda,
  SiNextdotjs,
  SiKotlin,
  SiAndroidstudio,
  SiGooglemaps,
  SiSqlite,
} from "react-icons/si";
import {
  FaAngular,
  FaBootstrap,
  FaC,
  FaCss3,
  FaFlask,
  FaJava,
  FaNode,
} from "react-icons/fa6";
import { PiAndroidLogo, PiAndroidLogoBold } from "react-icons/pi";

function Projects() {
  const { colorMode } = useColorMode();

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${
      colorMode === "light" ? "#2196F3, #FF5722" : "#FF5722, #2196F3"
    })`,
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
  };

  const projects = [
    // {
    //   name: "CineScope",
    //   link: "https://github.com/trivedidharmik/CineScope",
    //   description: "Created an IMDb-inspired website utilizing MERN Stack.",
    //   skills: [
    //     { name: "TypeScript", color: "blue.500", icon: SiTypescript },
    //     { name: "ReactJS", color: "blue.400", icon: FaReact },
    //     { name: "NodeJS", color: "green.500", icon: FaNode },
    //     { name: "ExpressJS", color: "indigo.500", icon: SiExpress },
    //     { name: "MongoDB", color: "green.600", icon: SiMongodb },
    //     { name: "Netlify", color: "blue.700", icon: SiNetlify },
    //     { name: "Render", color: "red.700", icon: SiRender },
    //   ],
    // },
    // {
    {
      name: "PortFolio Website",
      link: "https://github.com/trivedidharmik/portfolio",
      description:
        "A showcase of my projects and skills, demonstrating my expertise in app development, programming, and problem-solving.",
      skills: [
        { name: "TypeScript", color: "blue.500", icon: SiTypescript },
        { name: "ReactJS", color: "teal.500", icon: FaReact },
        { name: "ChakraUI", color: "teal.500", icon: SiChakraui },
        { name: "NextJS", color: "indigo.500", icon: SiNextdotjs },
        { name: "NodeJS", color: "green.500", icon: FaNode },
      ],
    },
    {
      name: "PINDER",
      link: "https://github.com/trivedidharmik/pinder",
      description:
        "Built Pinder, a location-based reminder app in Kotlin with geofencing and Google Maps integration for location-triggered notifications.",
      skills: [
        { name: "Kotlin", color: "#c600ff", icon: SiKotlin },
        { name: "Android SDK", color: "#0088ff", icon: SiAndroidstudio },
        { name: "Google Maps", color: "green.600", icon: SiGooglemaps },
        { name: "SQL Lite", color: "#00c7ff", icon: SiSqlite },
      ],
    },
    {
      name: "Food Delivery System",
      link: "",
      description:
        "Developed a cutting-edge, cloud-based, serverless food delivery system, optimizing scalability and performance for order processing and management.",
      skills: [
        { name: "Python", color: "blue.500", icon: SiPython },
        { name: "JavaScript", color: "yellow.500", icon: SiJavascript },
        { name: "ReactJS", color: "blue.400", icon: FaReact },
        { name: "NodeJS", color: "green.500", icon: FaNode },
        { name: "AWS", color: "orange.600", icon: FaAws },
        //{ name: "Google Cloud", color: "blue.600", icon: BiLogoGoogleCloud },
      ],
    },
    {
      name: "HomeFinder",
      link: "https://github.com/trivedidharmik/homefinder",
      description:
        "A web application built with Simplekit UI where various dynamic reusable widgets were implemented from scratch to filter home listings in real-time.",
      skills: [
        { name: "TypeScript", color: "blue.500", icon: SiTypescript },
        { name: "HTML5", color: "red.500", icon: SiHtml5 },
      ],
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [activeSkills, setActiveSkills] = useState<{
    [key: string]: string | null;
  }>(
    projects.reduce((acc: any, project: any) => {
      acc[project.name] = null;
      return acc;
    }, {})
  );

  const handleSkillHover = (projectName: string, skillName: string) => {
    setActiveSkills((prevState) => ({
      ...prevState,
      [projectName]: skillName,
    }));
    onOpen();
  };

  const handleSkillClick = (projectName: string, skillName: string) => {
    const currentActiveSkill = activeSkills[projectName];
    if (currentActiveSkill === skillName) {
      setActiveSkills((prevState) => ({
        ...prevState,
        [projectName]: null,
      }));
      onClose();
    } else {
      setActiveSkills((prevState) => ({
        ...prevState,
        [projectName]: skillName,
      }));
      onOpen();
    }
  };

  const handleSkillLeave = () => {
    for (const projectName in activeSkills) {
      setActiveSkills((prevState) => ({
        ...prevState,
        [projectName]: null,
      }));
    }
    onClose();
  };

  const fetchProject = (projectLink: string) => {
    if (projectLink !== "") {
      window.open(projectLink, "_blank");
    }
  };
  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      fontFamily="monospace"
      width="100%"
      marginTop="10"
      alignItems="center"
    >
      <Flex flexDirection="column" gap="20">
        <Flex justifyContent="center">
          <Heading style={gradientStyle}>PROJECTS</Heading>
        </Flex>
        <motion.div
          initial={{
            opacity: 0,
            z: -100,
          }}
          animate={{
            opacity: 1,
            z: 0,
          }}
          transition={{ duration: 4 }}
        >
          <Flex gap="5" flexWrap="wrap" justifyContent="center">
            {projects.map((project, index) => (
              <Card
                size="xs"
                width={["300px", "400px"]}
                padding="4"
                border={`1px solid ${
                  colorMode === "light" ? "black" : "white"
                }`}
                borderRadius="lg"
                boxShadow={
                  colorMode === "light"
                    ? "0 6px 8px rgba(0, 0, 0, 0.7)"
                    : "0 6px 8px rgba(255, 255, 255, 0.7)"
                }
                backgroundColor={colorMode === "light" ? "white" : "black"}
                _hover={{
                  cursor: "pointer",
                }}
                height="100%"
                onClick={() => fetchProject(project.link)}
                key={index}
              >
                <CardBody>
                  <VStack align="left">
                    <Text
                      fontWeight="bold"
                      fontFamily="monospace"
                      fontSize={["x-large", "xx-large"]}
                    >
                      {project.name}
                    </Text>
                    <Text
                      fontWeight="bold"
                      fontFamily="monospace"
                      fontSize={["sm", "md"]}
                    >
                      {project.description}
                    </Text>
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 0,
                        y: 0,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                      }}
                      transition={{ duration: 2 }}
                      key={index}
                    >
                      <Flex maxWidth="100%" gap="5" flexWrap="wrap">
                        {project.skills.map((skill, index) => (
                          <Tooltip
                            key={index}
                            label={skill.name}
                            placement="bottom"
                            isOpen={
                              isOpen &&
                              activeSkills[project.name] === skill.name
                            }
                            onClose={onClose}
                            closeOnClick={false}
                          >
                            <span
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSkillClick(project.name, skill.name);
                              }}
                              onMouseEnter={() =>
                                handleSkillHover(project.name, skill.name)
                              }
                              onMouseLeave={handleSkillLeave}
                            >
                              <Icon
                                as={skill.icon}
                                boxSize={[6, 8]}
                                key={index}
                                flexBasis="calc(20% - 20px)"
                                color={skill.color}
                                _hover={{ cursor: "pointer" }}
                              />
                            </span>
                          </Tooltip>
                        ))}
                      </Flex>
                    </motion.div>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </Flex>
        </motion.div>
      </Flex>
      <Button
        mt="10"
        colorScheme="blue"
        onClick={() => fetchProject("https://github.com/trivedidharmik")}
      >
        More Projects
      </Button>
    </Flex>
  );
}

export default Projects;
