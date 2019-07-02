import multer from "multer";
import routes from "./routes";

const multerUpload = multer({ dest: "uploads/videos/" });

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

export const uploadSingle = multerUpload.single("videoFile");
