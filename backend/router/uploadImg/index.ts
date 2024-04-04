import { Router, Request } from "express";
import { getPresignedUrl } from "../../CloudFlare";

export const Imagerouter = Router();

Imagerouter.get("/upload-image-into-r2", getPresignedUrl);
