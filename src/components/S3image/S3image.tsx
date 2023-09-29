import React, { useEffect, useState } from "react";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

export default function S3image(props: {
  bucketName: string;
  objectKey: string;
  s3Client: S3Client;
  minWidth?: string;
  maxWidth?: string;
  x?:string;
  y?:string;
}) {
  const [imageURL, setImageURL] = useState("");

  const imageStyle = {
    minWidth: props.minWidth,
    maxWidth: props.maxWidth,
    flex: "1 1 auto",
    display:"flex",
    left: props.x??"0",
    top: props.y??"0"
  };

  useEffect(() => {
    const getObject = async () => {
      try {
        const params = {
          Bucket: props.bucketName,
          Key: props.objectKey,
        };
        const command = new GetObjectCommand(params);
        const url = await getSignedUrl(props.s3Client, command, {
          expiresIn: 3600,
        });

        setImageURL(url);
      } catch (error) {
        console.log(error);
      }
    };

    getObject();
  }, []);

  return <img src={imageURL} alt="from s3 ${objectKey}" style={imageStyle} />;
}
