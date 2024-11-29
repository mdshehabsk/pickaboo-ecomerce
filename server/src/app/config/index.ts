import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  node_env: process.env.NODE_ENV as string ,
  port: process.env.PORT as string ,
  database_URL: process.env.DATABASE_URL as string ,
  base_url : process.env.BASE_URL  as string ,

  jwt_secret : process.env.JWT_SECRET as string ,
  jwt_expire: process.env.JWET_EXPIRE as string ,


  mail_user: process.env.MAIL_USER as string,
  mail_pass: process.env.MAIL_PASS as string
};
