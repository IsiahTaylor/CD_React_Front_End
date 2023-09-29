import React, { ReactNode } from "react";
import { S3Client } from "@aws-sdk/client-s3";
import S3image from "./components/S3image/S3image";
import "./styles/style.css";
import Title from "./components/Title/Title";
import {
  Grid,
  GridItem,
  useBreakpointValue,
  extendTheme,
  Box,
  SimpleGrid,
  Center,
  Card,
  Text,
  CardBody,
  CardHeader,
  Image,
  Divider,
} from "@chakra-ui/react";
import MainGrid from "./components/MainGrid/MainGrid";

const awsImg = require("./images/icons8-amazon-web-services.png");
const reactImg = require("./images/icons8-react.png");
const githubImg = require("./images/icons8-github.png");
const dockerImg = require("./images/icons8-docker.png");
const icons8 = require("./images/icons8.com.png");

const aki = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
const sak = process.env.REACT_APP_SECRET_ACCESS_KEY;

//If the access keys are not undefined use them as credentials
const s3 =
  aki && sak
    ? new S3Client({
      region: "us-east-2",
      credentials: {
        accessKeyId: aki,
        secretAccessKey: sak,
      },
    })
    : new S3Client({
      region: "us-east-2",
    });


export default function App() {
  const stickyNoteText =
    "This site was a personal test to see if I (Isiah Taylor) could implement continuous integration. Below is a quick synopsis of what it took. More features are on the way! ";

  return (
    <div className="background">
      <MainGrid>
        {/* Title */}
        <GridItem
          colStart={{ base: 1 }}
          colEnd={{ base: 5, md: 9, xl: 13 }}
          rowStart={{ base: 1 }}
          rowEnd={{ base: 2 }}
        >
          <Title text="Welcome! This was made by Isiah Taylor" />
        </GridItem>

        {/* "What is this site?" note */}
        <Card
          gridColumnStart={{ base: 1, md: 1, xl: 1 }}
          gridColumnEnd={{ base: 5, md: 5, xl: 6 }}
          gridRowStart={{ base: 2, md: 2, xl: 2 }}
          gridRowEnd={{ base: 5, md: 3, xl: 5 }}
          borderRadius={"1px"}
        >
          <CardHeader fontSize={"20px"}>What is this site?</CardHeader>
          <Divider />
          <CardBody>{stickyNoteText}</CardBody>
        </Card>

        {/* s3Image */}
        <Card
          gridColumnStart={{ base: 1, md: 5, xl: 6 }}
          gridColumnEnd={{ base: 5, md: 9, xl: 13 }}
          gridRowStart={{ base: 5, md: 2, xl: 2 }}
          gridRowEnd={{ base: 8, md: 3, xl: 5 }}
        >
          <Box
            overflow={"hidden"}
            height={{ base: "200px", xl: "225px" }}
            marginBottom={"auto"}
          >
            <S3image
              bucketName={"images-0922304"}
              objectKey={"food.jpg"}
              s3Client={s3} />;
          </Box>
          <Text alignSelf={"center"}>I am a image from AWS!</Text>
        </Card>

        {/* Web Pages */}
        <Card
          gridColumnStart={{ base: 1, md: 1, xl: 1 }}
          gridColumnEnd={{ base: 5, md: 5, xl: 4 }}
          gridRowStart={{ base: 8, md: 3, xl: 5 }}
          gridRowEnd={{ base: 10, md: 6, xl: 8 }}
          bg="#D1FDFF"
          id={"box1"}
          border={"2px solid black"}
        >
          <Image
            src={reactImg}
            width={{ base: "90px", md: "125px" }}
            objectFit="cover"
            margin={"auto"}
          />
          <Text margin={"auto"} textAlign={"center"}>
            This application was built using React and Chakra UI.
          </Text>
        </Card>

        <Card
          gridColumnStart={{ base: 1, md: 5, xl: 4 }}
          gridColumnEnd={{ base: 5, md: 9, xl: 7 }}
          gridRowStart={{ base: 10, md: 3, xl: 8 }}
          gridRowEnd={{ base: 12, md: 6, xl: 11 }}
          bg="#D1FDFF"
          id={"box2"}
          border={"2px solid black"}
        >
          <Image
            src={dockerImg}
            width={{ base: "90px", md: "150px" }}
            objectFit="cover"
            margin={"auto"}
          />
          <Text margin={"auto"} textAlign={"center"}>
            Iterations are locally tested and run in a docker container before
            being pushed to Github.
          </Text>
        </Card>
        <Card
          gridColumnStart={{ base: 1, md: 1, xl: 7 }}
          gridColumnEnd={{ base: 5, md: 5, xl: 10 }}
          gridRowStart={{ base: 12, md: 6, xl: 5 }}
          gridRowEnd={{ base: 14, md: 9, xl: 8 }}
          bg="#D1FDFF"
          id={"box3"}
          border={"2px solid black"}
        >
          <Image
            src={githubImg}
            width={{ base: "80px", md: "125px" }}
            objectFit="cover"
            margin={"auto"}
          />
          <Text margin={"auto"} textAlign={"center"}>
            Github actions deploy code to the cloud for hosting.
          </Text>
        </Card>
        <Card
          gridColumnStart={{ base: 1, md: 5, xl: 10 }}
          gridColumnEnd={{ base: 5, md: 9, xl: 13 }}
          gridRowStart={{ base: 14, md: 6, xl: 8 }}
          gridRowEnd={{ base: 16, md: 9, xl: 11 }}
          bg="#D1FDFF"
          id={"box4"}
          border={"2px solid black"}
        >
          <Image
            src={awsImg}
            width={{ base: "75px", md: "150px" }}
            objectFit="cover"
            margin={"auto"}
          />
          <Text margin={"auto"} textAlign={"center"}>
            The application is hosted in AWS, enabling it to utilize the
            extensive library of resources available.
          </Text>
        </Card>

        <Box
          gridColumnStart={{ base: 1, md: 1, xl: 1 }}
          gridColumnEnd={{ base: 5, md: 9, xl: 13 }}
          gridRowStart={{ base: 16, md: 9, xl: 11 }}
          gridRowEnd={{ base: 17, md: 10, xl: 12 }}
        >
          <Divider />
          <Text>Thanks for coming!</Text>
          <Image src={icons8} />
        </Box>
      </MainGrid>
    </div>
  );
}
