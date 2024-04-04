import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 } from "uuid";
const S3 = new S3Client({
  endpoint:
    "https://6474aa54424663e3d151c4cc5e26c76b.r2.cloudflarestorage.com/babysit",
  credentials: {
    accessKeyId: "e8bf4aa080e09b41405bf98ea9de018e",
    secretAccessKey:
      "be6283f84d025b21fbbda1d51ad335afb9d5d83ef7e6ede9a052bf9bb5a54bdc",
  },
  region: "auto",
});

export async function GET(request: Request) {
  const id = v4();
  const url = await getSignedUrl(
    S3,
    new PutObjectCommand({
      Bucket: "babysit",
      Key: id,
    }),
    {
      expiresIn: 60 * 60,
    }
  );

  return Response.json({
    uploadUrl: url,
    accessUrls: "public-URL/" + id,
  });
}
